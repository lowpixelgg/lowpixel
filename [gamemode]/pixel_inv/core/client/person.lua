local imports = {
  ipairs = ipairs,
  core = exports.pixel_core
}

local person = class:create("person");
local items = imports.core:getItemsMeta();
person.public.name = "person";

function person.public:create(slots, parts)
  self.slots = slots or {};
  
  for i, part in imports.ipairs(parts) do 
    local slot = slot:create(i, false, false, part.category, self);
    table.insert(self.slots, slot);
  end
  
  return self;
end


function person.public:setItemSlot(slot, id, name, state, timestamp, data)
  if (self.slots[slot] and self.slots[slot].blocked) then 
    return false;
  end
  
  local working = items[name];
  local item = item:create(id, name, working.title, working.icon, 1, working.price, working.weight, state, working.category, timestamp, data);
  
  if (item) then 
    self.slots[slot]:setItem(item);
  end
  
  return false;
end


function person.public:setExistingItemSlot(slot, item) 
  if (self.slots[slot] and self.slots[slot].blocked) then 
    return false;
  end
  
  if item then 
    self.slots[slot]:setItem(item);
    return true;
  end

  return false;
end


function person.public:removeItemFromSlot(slot) 
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
  
  return true;
end

function person.public:getSlots()
  return self.slots;
end

function person.public:getItemsFormated () 
  local items = {};
  
  for slotIndex, data in imports.ipairs(self.slots) do 
    if (#data.items > 0) then 
      for i, v in imports.ipairs(data.items) do 
        table.insert(items, {
          slot = slotIndex,
          item = v._id,
          container = self.name,
          state = v.state,
          timestamp = v.timestamp
        });
      end
    end
  end
  
  return items;
end