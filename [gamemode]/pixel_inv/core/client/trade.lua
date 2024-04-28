local imports = {
  ipairs = ipairs,
  core = exports.pixel_core
}

local trade = class:create("trade");
local items = imports.core:getItemsMeta();
trade.public.name = "trade"

function trade.public:create(meslots, traderslots, rows, columns) 
  self.me = meslots or {}
  self.trader = traderslots or {}
  self.rows = rows
  self.columns = columns
  
  
  for i = 1, (self.rows * self.columns) do
    local slot = slot:create(i, false, false, "everyone", self)
    table.insert(self.me, slot)
  end
  
  for i = 1, (self.rows * self.columns) do
    local slot = slot:create(i, false, false, "everyone", self)
    table.insert(self.trader, slot)
  end
  
  return self
end



function trade.public:fastRefreshTradeSlots(additems) 
    for k,v in imports.ipairs(self.trader) do 
      self.trader[k]:clearItems()
    end
    
    for k,v in imports.ipairs(additems) do 
      local working = items[v.name]

      if working then 
      
        self.trader[v.slot]:setItem(
          {    
            _id = v._id,
            name = v.name, 
            title = working.title, 
            icon = working.icon, 
            amount = 1, 
            price = working.price, 
            weight = working.weight, 
            state = v.state, 
            category = working.category, 
            timestamp = v.timestamp
          }
        ) 
      end
  end
end


function trade.public:setExistingItemSlot(slot, item) 
  if (not self.me[slot] or self.me[slot].blocked) then 
    return false
  end
  
  if item then 
    self.me[slot]:setItem(item)
    return true
  end
  
  return false
end


function trade.public:getSlots(side, startIndex, endIndex) 
  local allSlots = (side == "me" and self.me or self.trader)
  local numSlots = #allSlots
  if numSlots > 0 then
    startIndex = startIndex or 1
    endIndex = endIndex or numSlots
    
    if startIndex < 1 or endIndex > numSlots or startIndex > endIndex then
      return false
    end
    
    local selectedSlots = {}
    for i = startIndex, endIndex do
      table.insert(selectedSlots, allSlots[i])
    end
    
    return selectedSlots
  else
    
    return false
  end
end



function trade.public:removeItemFromSlot(slot) 
  if (self.me[slot]) then 
    local data = self.me[slot]
    local item = data:getItem()
    
    if (data and item) then 
      if (data:getItem()) then 
        data:removeItem()
        return true
      end
    end
  end
  
  return true
end


function trade.public:getItemsFormated () 
  local items = {}
  
  for slotIndex, data in imports.ipairs(self.me) do 
    if (#data.items > 0) then 
      for i, v in imports.ipairs(data.items) do 
        table.insert(items, {
          name = v.name,
          _id = v._id,
          container = v.container or "",
          slot = slotIndex,
          state = v.state,
          amount = v.amount,
          timestamp = v.timestamp
        })
      end
    end
  end
  
  return items
end


function trade.public:getFreeSlot()
  for i = 1, #self.me do
    if (not (#self.me[i].items ~= 0) and not self.me[i].blocked) then
      return i
    end
  end
  return -1
end

function trade.public:clearItems () 
  for _, slot in imports.ipairs(self.me) do 
    slot:clearItems()
  end
  
  for _, slot in imports.ipairs(self.trader) do 
    slot:clearItems()
  end
end