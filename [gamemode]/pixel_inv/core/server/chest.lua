local imports = {
  ipairs = ipairs,
  core = exports.pixel_core
}

local chest = class:create("chest");
local itemsData = imports.core:getItemsMeta();
local items = imports.core:getItemsMeta();


function chest.public:create(...)
  local instance = self:createInstance();
  
  if (instance and not instance:load(...)) then
    instance:destroyInstance();
    return false;
  end
  
  return instance;
end


function chest.public:load(id, name, columns, destroyItemsByTimestamp) 
  self.id = id;
  self.name = name;
  self.items = {};
  self.columns = columns;
  self.maxSlots = 15;
  self.maxWeight  = 41000;
  self.weight = 0;
  self.destroyItemsByTimestamp = destroyItemsByTimestamp or false;
  
  return self;
end



function chest.public:destroy()
  if (not chest.public:isInstance(self)) then return false end
  self:destroyInstance();
  return true;
end


function chest.public:fetch(id, destroyItemsByTimestamp)
  local chest = imports.core:findChestByElementID(id);
  
  if (chest) then
    local items = imports.core:findItemsByChest(chest._id);
    
    self.id = chest.id;
    self._id = chest._id;
    self.name = chest.name;
    self.columns = chest.columns;
    self.items = items and self:checkPerecibility (items) or {};
    self.maxWeight  = 41000;
    self.maxSlots = 15;
    self.weight = 0;
    self.destroyItemsByTimestamp = destroyItemsByTimestamp or false;
    
    return self;
  end
  
  return false;
end


function chest.public:saveItem (item) 
  local itemIndex, itemInv  = table.find(self.items, function (v) 
    return v._id == item._id;
  end)
  
  if (not itemInv) then return false end

  self.items[itemIndex] = item;
  imports.core:saveItem(self.items[itemIndex]);

  return true;
end

function chest.public:deploy() 
  self._id = imports.core:createChest(self.id, self.name, self.columns, self.maxWeight);
end


function chest.public:updateChest(inventory, entries)
  for k,v in ipairs(entries) do 
    local item = imports.core:findItemByID(v._id);
    
    item.chest = (v.container == "chest" and self._id or "false");
    item.slot = v.slot;
    item.container = v.container;
    item.inventory = (v.container == "bag" and inventory._id or "false");
        
    if (v.container == "chest") then 
      local exists = self:hasItem(item._id);
      
      if (not exists) then 
        local take = inventory:takeItem(item, items[item.name].useFlexAmount and item.amount or 1, false);
        local subItens = table.filter(inventory.items, function (s) return s.subItemAt == item._id  end);


        for _, subItem in ipairs(subItens) do 
          local take = inventory:takeItem(subItem, items[subItem.name].useFlexAmount and subItem.amount or 1, false);

          if (take) then 
            self:setItem(subItem._id, subItem.slot, subItem.name, subItem.state, subItem.timestamp, subItem.container, subItem.amount, subItem.data, subItem.subItemAt);

            subItem.inventory = "false";
            subItem.chest = self._id;
            self:saveItem(subItem);
          end
        end

        if (take) then 
          self:setItem(item._id, v.slot, item.name, item.state, item.timestamp, item.container, item.amount, item.data);
        end
      end
      
      self:editItem(item._id, item.container, item.slot, item.state, item.data, item.amount, item.inventory, item.chest);
    else
      local exists = inventory:hasItem(item);
      
      if (not exists.items[1]) then 
        local take = self:takeItem(item, 1, false);
        local subItens = table.filter(self.items, function (s) return tonumber(s.subItemAt) == item._id  end);


        for _, subItem in ipairs(subItens) do 
          local take = self:takeItem(subItem, 1, false);

          if (take) then 
            inventory:setItem(subItem._id, subItem.slot, subItem.name, subItem.state, subItem.timestamp, subItem.container, subItem.amount, subItem.data);

            subItem.inventory = inventory._id;
            subItem.chest = "false";
            inventory:saveItem(subItem);
          end
        end

        if (take) then 
          inventory:setItem(item._id, item.slot, item.name, item.state, item.timestamp, item.container, item.amount, item.data);
        end

        inventory:editItem(item._id, item.container, item.slot, item.state, item.data, item.amount, item.inventory, item.chest);
      end
    end
  end
end



function chest.public:setCurrentWeight(weight)
  if (weight < 0) then
    weight = 0;
  end
  
  if (weight > self.maxWeight) then return false end
  
  self.weight = weight;
  return true;
  
end


function chest.public:takeItem(item, amount, fromDB) 
  if (not item or not amount) then return false end
  if (amount < 0) then return false end
  local setWeight = self:setCurrentWeight(self.weight - (items[item.name].weight * amount));
  
  if (not setWeight) then return false end
  
  self:removeItem(item._id);
  
  if (fromDB) then 
    imports.core:deleteItem(item._id);
  end
  
  imports.core:setCurrentWeight(self.character, self.weight);
  return true;
end


function chest.public:getWeight()
  return self.weightInv;
end


function chest.public:hasItem(id) 
  if (id) then 
    local i,v = table.find(self.items, function (v) 
      return v._id == id
    end);
    
    if (i and v) then 
      return v;
    end
    
    return false;
  end
end

function chest.public:setItem(id, slot, item, state, timestamp, container, amount, data, subItemAt)
  table.insert(self.items, {_id = id, slot = slot, name = item, container = container, state = state, timestamp = timestamp, amount = amount, data = data, subItemAt = subItemAt});
  return  { _id = id, slot = slot, name = item, amount = amount, state = state, timestamp = timestamp, container = container, data = data, subItemAt = subItemAt };
end



function chest.public:removeItem(id) 
  local itemIndex, item = table.find(self.items, function (i)
    return i._id == id;
  end)
  
  if (item) then 
    table.remove(self.items, itemIndex);
  else
    return false;
  end
  
  return true;
end

function chest.public:editItem(id, container, slot, state, data, amount, inventory, chest)
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


function chest.public:getFreeSlot(items, exclude)
  local excludedSlots = {};
  if exclude then
    for _, slotNumber in imports.ipairs(exclude) do
      excludedSlots[slotNumber] = true;
    end
  end
  
  for i = 1, self.maxSlots do 
    if (not excludedSlots[i]) then
      local slotIndex, slot = table.find(items, function(v) 
        return v.slot == i
      end);
      
      if (not slotIndex) then
        return i;
      end  
    end
  end
  
  return false;
end



function chest.public:checkPerecibility(items)
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
          
          for k,v in imports.ipairs(slotItems) do 
            if (v.state == 0) then
              if slot then 
                v.slot = slot;
                
                table.insert(tbl, v);
                imports.core:saveItem(v);
                table.insert(ignore, slot);
              else
                imports.core:deleteItem(v._id);
              end
            else
              table.insert(tbl, v);
            end
          end
        else
          for k,v in imports.ipairs(slotItems) do
            table.insert(tbl, v);
          end
        end  
      end
    end
  end
  
  return tbl;
end