local imports = {
  core = exports.pixel_core
}

local manager = class:create("manager");
local items = imports.core:getItemsMeta();


function manager.public:create(...)
  local instance = self:createInstance();
  
  if (instance and not instance:load(...)) then
    instance:destroyInstance();
    return false;
  end
  
  return instance;
end


function manager.public:load(player, character, id, items, weight, maxWeight, level) 
  self._id = id;
  self.player = player;
  self.character = character;
  self.level = level;
  self.maxSlots = self:getMaxSlots ();
  self.items = items and self:checkPerceivability (items) or {};
  self.weight = weight;
  self.maxWeight = maxWeight;

  return self;
end


function manager.public:destroy()
  if (not manager.public:isInstance(self)) then return false end
  self:destroyInstance();
  return true;
end




function manager.public:giveItem(name, amount, state, forceTimestamp, forceSlot, implementData, forceContainer) 
  local data = items[name];
  data.data = implementData or {};

  local slot = forceSlot and forceSlot or self:getFreeSlot(self.items, { name = name, state = state }, false);
  
  if (not slot) then print('No slots available') return false end
  
  local weight = self:setCurrentWeight(self.weight + (data.weight * amount));
  if (not weight) then return false end
  
  local perishability = data.perishability.enabled and data.perishability or false;
  local timestamp;
  
  if (perishability) then 
    timestamp = forceTimestamp and forceTimestamp or manager.private:getTimeStamp(perishability.days, perishability.minutes, perishability.seconds);
  else
    timestamp = false;
  end 
  
  local itemID = imports.core:createItem(name, state, timestamp, forceContainer and forceContainer or 'bag', slot, 'false', data.data, amount, self._id);
  imports.core:setCurrentWeight(self.character, self.weight);
  
  local createdItem = self:setItem(itemID, slot, name, state, timestamp, forceContainer and forceContainer or'bag', amount, data.data);
  
  if (timestamp) then
    schedule:create(timestamp, Inventories.reschedulePendingItems, { source = self.player, _id = itemID });
  end
  
  return createdItem;
end



function manager.private:getTimeStamp(days, minutes, seconds)
  local now = os.time();
  local offset = (days or 0) * 24 * 60 * 60 + (minutes or 0) * 60 + (seconds or 0);
  return now + offset;
end


function manager.public:setItem(id, slot, item, state, timestamp, container, amount, data)
  table.insert(self.items, {_id = id, slot = slot, name = item, container = container, state = state, timestamp = timestamp, amount = amount, data = data});
  return  { _id = id, slot = slot, name = item, amount = amount, state = state, timestamp = timestamp, container = container, data = data };
end

function manager.public:editItem(id, container, slot, state, data, amount, inventory, chest)
  local itemIndex, itemInv  = table.find(self.items, function (v) 
    return v._id == id;
  end)
  
  if (not itemInv) then return false end

  self.items[itemIndex].inventory = inventory or itemInv.inventory;
  self.items[itemIndex].container = container or itemInv.container;
  self.items[itemIndex].slot = slot or itemInv.slot;
  self.items[itemIndex].state = state or itemInv.state;
  self.items[itemIndex].amount = amount or itemInv.amount;
  self.items[itemIndex].chest = chest or itemInv.chest;
  
  imports.core:saveItem(self.items[itemIndex]);
  
  return self.items[itemIndex];
end


function manager.public:saveItem (item) 
  local itemIndex, itemInv  = table.find(self.items, function (v) 
    return v._id == item._id;
  end)
  
  if (not itemInv) then return false end

  self.items[itemIndex] = item;
  imports.core:saveItem(self.items[itemIndex]);

  return true;
end

function manager.public:takeLogic (id, amount, fromDB) 
  if (not id or not amount) then return false end
  if (amount < 0) then return false end
  
  local item = self:getItemById(id);
  local meta = items[item.name];
  local setWeight = self:setCurrentWeight(self.weight - (items[item.name].weight * amount));
  

  if (meta.useFlexAmount) then 
    if (amount ~= item.amount) then 
      item.amount = item.amount - amount;
      
      if (fromDB) then 
        imports.core:saveItem(item);
      end

    elseif (amount == item.amount) then      
      item.amount = item.amount - amount;

      if (fromDB) then 
        imports.core:deleteItem(item._id);
      end
      
      self:removeItem(item._id);
    end
  else
    if (not setWeight) then return false end
    self:removeItem(item._id);
    
    if (fromDB) then 
      imports.core:deleteItem(item._id);
    end
  end
  
  imports.core:setCurrentWeight(self.character, self.weight);

  return item;
end

function manager.public:takeItem(item, amount, fromDB) 
  if (not item or not amount) then return false end
  if (amount < 0) then return false end
  
  local itemIndex, item = table.find(self.items, function (i) return i.name == item.name end) 
  if (not item) then return false end

  return self:takeLogic(item._id, amount, fromDB);
end


function manager.public:takeItemById (id, fromDB) 
  return self:takeLogic(id, 1, fromDB);
end

function manager.public:removeItem(id) 
  if (not id) then return false end
  local itemIndex, item = table.find(self.items, function (i)
    return i._id == id
  end);
  
  if (item) then 
    table.remove(self.items, itemIndex);
  end
  
  return true;
end

function manager.public:setCurrentWeight(weight, fromDB)
  if (weight < 0) then
    weight = 0;
  end
  
  if (weight > self.maxWeight) then return false end
  self.weight = weight;
  
  if (fromDB) then 
    imports.core:setCurrentWeight(self.character, weight);
  end

  return true;
end


function manager.public:setCurrentLevel (level)
  if (level < 0) then 
    self.level = 1;
  end

  self.level = level;
  imports.core:setCurrentLevel(self.character, level);
end



function manager.public:getWeight()
  return self.weight;
end


function manager.public:hasItem(item)
  local meta = items[item];
  local result = { items = {}, totalCount = 0 }

  if (item) then
      for i, v in ipairs(self.items) do
          if (v.name == item or v._id == item) then
              table.insert(result.items, v);

              if (meta.useFlexAmount) then 
                result.totalCount = result.totalCount + v.amount
              else
                result.totalCount = result.totalCount + 1;
              end
          end
      end
  end

  return result
end

function manager.public:findItemByData(name, searchData)
  for _, item in ipairs(self.items) do
    if (item.name == name) then
      local match = true;
      for key, value in pairs(searchData) do
        if (item.data[key] ~= value) then
          match = false;
          break;
        end
      end
      if (match) then
        return item;
      end
    end
  end
  return nil;
end


function manager.public:findItemById (id) 
  for _id, item in ipairs(self.items) do 
    if (item._id == id) then 
      return item;
    end
  end

  return false;
end

function manager.public:updateItemData(itemId, newData)
  for _, item in ipairs(self.items) do
    if (item._id == itemId) then
      item.data = newData;
      imports.core:saveItem(item);
      return true;
    end
  end
  return false;
end


-- function manager.public:getFreeSlot(items, exclude, quantity)
--   local excludedSlots = {};
--   if (exclude) then
--     for _, slotNumber in ipairs(exclude) do
--       excludedSlots[slotNumber] = true;
--     end
--   end
  
--   for i = 1, self.maxSlots do 
--     if not excludedSlots[i] then
--       local slotIndex, slot = table.find(items, function(v) 
--         return v.slot == i;
--       end)
      
--       if (not slotIndex) then
--         return i;
--       end  
--     end
--   end
  
--   return false;
-- end


function manager.public:getFreeSlot(items, exclude, quantity)
  quantity = quantity or 1

  local excludedSlots = {}
  if exclude then
    for _, slotNumber in ipairs(exclude) do
      excludedSlots[slotNumber] = true
    end
  end
  
  for i = 1, self.maxSlots - quantity + 1 do 
    local hasSpace = true
    
    for j = i, i + quantity - 1 do
      if excludedSlots[j] or self:isSlotOccupied(items, j) then
        hasSpace = false
        break
      end
    end
    
    if hasSpace then
      return i, i + quantity - 1
    end
  end
  
  return false
end

function manager.public:isSlotOccupied(items, slot)
  for _, item in ipairs(items) do
    if item.slot == slot then
      return true
    end
  end
  return false
end


function manager.public:checkPerceivability(items)
  local tbl = {};
  local ignore = {};
  
  for i = 1, self.maxSlots do 
    if (ignore[i] == nil) then  
      local slotItems = table.filter(items, function(item) return item.slot == i end);
      
      
      if (#slotItems > 0) then 
        local badItems = table.filter(slotItems, function(v) return v.state == 0 end);
        local goodItems = table.filter(slotItems, function(v) return v.state == 1 end);
        
        if (#badItems > 0 and #goodItems > 0) then
          local slot = self:getFreeSlot(items);
          
          for k,v in ipairs(slotItems) do 
            if (v.state == 0) then
              if (slot) then 
                v.slot = slot;
                
                table.insert(tbl, v);
                imports.core:saveItem(v);
                table.insert(ignore, slot);
              else
                imports.core:deleteItem(v._id)
              end
            else
              table.insert(tbl, v);
            end
          end
        else
          for k,v in ipairs(slotItems) do
            table.insert(tbl, v) ;
          end
        end  
      end
    end
  end
  
  return tbl
end




function manager.public:separeItemsByPerecibility(separe)
  local newitems = {}
  
  for k,v in pairs(separe) do 
    local slot = self:getFreeSlot(self.items);
    local slot2;
    
    if (not slot) then return false end
    local badItems = table.filter(v, function (bad) return bad.state == 0 end);
    
    if (#badItems > 0 and #badItems ~= #v) then 
      slot2 = self:getFreeSlot(self.items);
      if (not slot2) then return false end
    end
    
    
    for k,v in ipairs(v) do 
      if (v.state == 1) then 
        v.slot = slot;
        table.insert(newitems, v);
      else
        v.slot = slot2;
        table.insert(newitems, v);
      end
    end
  end
  
  return newitems;
end



function manager.public:getHotBarItems()
  local hotBarItems = {}
  local addedItemTypes = {}

  for _, item in ipairs(self.items) do
    if item.slot >= 1 and item.slot <= 5 then
      if not addedItemTypes[item.name] then
        table.insert(hotBarItems, item)
        addedItemTypes[item.name] = true
      end
    end
  end
  
  return hotBarItems
end


function manager.public:getSubItemsAt(id)
  local items = {};
  for _, item in ipairs(self.items) do 
    if (item.subItemAt == id) then 
      table.insert(items, item);
    end
  end

  return items;
end


function manager.public:getItemsByCategory (category) 
  local cache = {}

  for _, item in ipairs(self.items) do 
    local data = items[item.name]

    if (data and data.category == category) then 
      table.insert(cache, item)
    end
  end

  return cache;
end


function manager.public:getItemById (id) 
  for _, item in ipairs(self.items) do 
    if (item._id == id) then 
      return item;
    end
  end

  return false;
end


function manager.public:getMaxWeight () 
  return self.maxWeight
end

function manager.public:getMaxSlots ()
  if (self.level == 1) then
    return 15;
  elseif (self.level == 2) then 
    return 20;
  elseif (self.level == 3) then
    return 30;
  end
end