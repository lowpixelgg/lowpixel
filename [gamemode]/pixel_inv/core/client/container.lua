local imports = {
  core = exports.pixel_core
}

local container = class:create("container");
local items = imports.core:getItemsMeta();


function container.public:create(...)
  local instance = self:createInstance();
  
  if (instance and not instance:load(...)) then
    instance:destroyInstance();
    return false;
  end
  
  return instance;
end


function container.public:load(name, slots, columns, rows, slotSize, currentWeight, maxWeight, id)
  self.slots = slots or {};
  self.name = name or "bag";
  self.id = id or nil;
  self.columns = columns;
  self.rows = rows;
  self.slotSize = slotSize;
  self.maxWeight = maxWeight;
  self.activeItem = nil;
  
  for i = 1, (self.rows * self.columns) do
    local slot = slot:create(i, false, (i > 15), "everyone", self);
    table.insert(self.slots, slot);
  end
  
  return self;
end


function container.public:destroy()
  if (not container.public:isInstance(self)) then return false end
  self:destroyInstance();
  return true;
end


function container.public:setCurrentWeight(weight)
  if (self.currentWeight ~= weight) then
    self.currentWeight = ((weight <= 0) and 0 or weight);
    return true;
  end
  
  return false;
end


function container.public:getCurrentWeight()
  local weight = 0;
  
  for k,v in ipairs(self.slots) do 
    for k,item in ipairs(v.items) do 
      if (items[item.name].useFlexAmount == false) then
        weight = weight + (items[item.name].weight * (item.amount and item.amount or 1));
      end
    end
  end
  
  return weight;
end

function container.public:setMaxWeight(weight)
  self.maxWeight = weight;
  return true;
end


function container.public:setItemSlot(slot, id, name, state, timestamp, amount, data)
  if (not self.slots[slot] and self.slots[slot].blocked) then 
    return false
  end
  
  local working = items[name];
  local item = item:create(id, name, working.title, working.icon, amount, working.price, working.weight, state, working.category, timestamp, data);
  
  self.slots[slot]:setItem(item);

  return { slot = slot, id = id, name = name, state = state, timestamp = timestamp, amount = amount, data = data };
end


function container.public:setExistingItemSlot(slot, item) 
  if (self.slots[slot] and self.slots[slot].blocked) then 
    return false;
  end
  
  if (item) then 
      self.slots[slot]:setItem(item);
    return true;
  end
  
  return false;
end


function container.public:setItemSlotIgnoreWeight(slot, id, state, timestamp, data)
  if (self.slots[slot] and self.slots[slot].blocked) then 
    return false;
  end
  
  local working = items[id];
  local item = item:create(id, working.name, working.icon, 1, working.price, working.weight, state, working.category, timestamp, data);
  
  if (not item) then return false end
  self.slots[slot]:setItem(item);

  return true;
end


function container.public:setItemState(id, state, timestamp) 
  if (self.slots[slot] and self.slots[slot].blocked) then
    return false;
  end
  
  local item = self.slots[slot]:getItem()
  if (item and item._id == id) then 
    item.state = state;
    return true;
  end
  
  return false;
end


function container.public:removeItem(id, amount) 
  local item = self:getItem(id);
  
  if (item) then
      local slot = self.slots[item[2]];
      slot:removeItem();
    return true;
  end
  
  return false;
end


function container.public:removeItemFromSlot(slot) 
  if (self.slots[slot]) then 
    local data = self.slots[slot];
    local item = data:getItem();
    
    if (data and item) then 
      
        if (data:getItem()) then 
          data:removeItem();
          
          return true;
      end
    end
  end
  
  return true
end


function container.public:getFreeSlot()
  for i = 1, #self.slots do
    if (not (#self.slots[i].items ~= 0) and not self.slots[i].blocked) then
      return i;
    end
  end
  return -1;
end


function container.public:getSlot(id) 
  return self.slots[id];
end


function container.public:getSlots(startIndex, endIndex) 
  local allSlots = self.slots;
  local numSlots = #allSlots;
  if (numSlots > 0) then
    startIndex = startIndex or 1;
    endIndex = endIndex or numSlots;
    
    if (startIndex < 1 or endIndex > numSlots or startIndex > endIndex) then
      return false;
    end
    
    local selectedSlots = {};
    for i = startIndex, endIndex do
      table.insert(selectedSlots, allSlots[i]);
    end
    
    return selectedSlots;
  else
    
    return false;
  end
end


function container.public:getAllSlots ()
  return self.slots;
end

function container.public:getSlotByItemID (id) 
  if (id) then
    for i = 1, #self.slots do
      if (self.slots[i].items[1] and self.slots[i].items[1]._id == id) then
        return i;
      end
    end
  end
  return false;
end



function container.public:getItemsFormated () 
  local items = {};
  
  for slotIndex, data in ipairs(self.slots) do 
    if (#data.items > 0) then 
      for i, v in ipairs(data.items) do 
        table.insert(items, {
          name = v.name,
          _id = v._id,
          slot = slotIndex,
          container = self.name,
          amount = v.amount,
          state = v.state,
          timestamp = v.timestamp
        })
      end
    end
  end
  
  return items;
end


function container.public:getItem (id) 
  if (id) then
    for slot, atb in ipairs(self.slots) do
      if (#atb.items > 0) then
        for _, item in ipairs(atb.items) do
          if (item._id == id) then
            return {item, slot};
          end
        end
      end
    end
  end
  return false;
end


function container.public:setContainerLevel (level, state) 
  if (level == 1) then 
    for i = 1, #self.slots do 
      if (i > 15) then 
        self.slots[i]:setBlocked(true);
      else
        self.slots[i]:setBlocked(false);
      end
    end
  end

  if (level == 2) then 
    for i=1, #self.slots do 
      if (i > 15 and i <= 20) then 
        self.slots[i]:setBlocked(false);
      elseif (i > 20) then
        self.slots[i]:setBlocked(true);
      end
    end
  end

  if (level == 3) then 
    for i=1, #self.slots do 
      if (i > 15) then 
        self.slots[i]:setBlocked(false);
      end
    end
  end

  return false;
end


function container.public:clearItems ()  
  for slot, slot in ipairs(self.slots) do 
    slot:clearItems();
  end 
end