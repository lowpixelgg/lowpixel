function getFormatedSlot (slot) 
  if not slot then return false end
  local items = {};
  
  for i, v in ipairs(slot.items) do 
    table.insert(items, {
      name = v.name,
      _id = v._id,
      container = slot:getContainer().name,
      state = v.state,
      slot = slot.id,
      amount = v.amount,
      data = v.data,
      timestamp = v.timestamp
    });
  end

  
  return items;
end


function identifyMovement(to, from)
  local tbl = {};
  
  for k,v in ipairs(to:getAllItems()) do 
    table.insert(tbl, {
      name = v.name,
      _id = v._id,
      container = to:getContainer().name,
      state = v.state,
      slot = to.id,
      data = v.data,
      amount = v.amount,
      timestamp = v.timestamp
    });
  end
  
  for k,v in ipairs(from:getAllItems()) do
    table.insert(tbl, {
      name = v.name,
      _id = v._id,
      container = from:getContainer().name,
      state = v.state,
      slot = from.id,
      data = v.data,
      amount = v.amount,
      timestamp = v.timestamp
    });
  end
  
  return tbl;
end




function switch (from, to, separate) 
  if (separate and separate <= 0) then
    return false;
  end
  
  separate = tonumber(separate) or 1;
  
  from = from.data;
  to = to.data and to.data or to;
  
  local created;
  local fContainer = from:getContainer();
  local tContainer = to:getContainer();
  local toCategory = (to:getItem() and to:getItem().category or to.category);
  
  if (to.blocked) then return false end  
  
  if (to.id == to.id) then
    if (to:getItem() and to:getItem().name == from:getItem().name) then
      if (to:getItem().state ~= from:getItem().state) then return false end
      
      if (itemsMeta[from:getItem().name].useFlexAmount) then 
        to:getItem().amount = to:getItem().amount + from:getItem().amount;
        local temp = from:getItem();
        from:removeItem();
        
        return to, from, false, temp._id;
      else
        if (separate >= 1) then
          for i = 1, separate do
            to:setItem(from:getItem());
            from:removeItem();
          end
          
          return to, from;
        else
          to:setItem(from:getItem());
          from:removeItem();
        end
      end
      
      return to, from;
    elseif (to:getItem() and to:getItem().name ~= from:getItem().name) then
      local temp = from:getAllItems();
      from:setItems(to:getAllItems());
      to:setItems(temp);
      
      return to, from;
    elseif (not to:getItem()) then
      if (separate >= 1) then
        if (itemsMeta[from:getItem().name].useFlexAmount) then
          if separate == from:getAmount() then 
            to:setItem(from:getItem());
            from:removeItem();
          else
            local item = from:getItem();
            item.amount = item.amount - separate;
            local created = ClientInventory.containerContext:setItemSlot(to.id, item._id, item.name, item.state, item.timestamp, separate, item.data);              
              
            return to, from, created;
          end
          
          return to, from;
        end
        
        for i = 1, separate do
          if (fContainer ~= tContainer) then
            tContainer:setExistingItemSlot(to.id, from:getItem());
            fContainer:removeItemFromSlot(from.id);
          else
            to:setItem(from:getItem());
            from:removeItem();
          end
        end
        
        return to, from;
      else
        if (itemsMeta[from:getItem().name].useFlexAmount and (from:getItem().amount > 1)) then 
          local item = from:getItem();
          
          item.amount = item.amount - 1;
          
          if item.container == "bag" then 
            created = ClientInventory.containerContext:setItemSlot(to.id, item._id, item.name, item.state, item.timestamp, separate, item.data);
          elseif item.container == nil and to.container.name == "bag" then
            created = ClientInventory.containerContext:setItemSlot(to.id, item._id, item.name, item.state, item.timestamp, separate, item.data);
          else
            created = ClientInventory.chestContext:setItemSlot(to.id, item._id, item.name, item.state, item.timestamp, separate, item.data);
          end

          return to, from, created;
        else
          if fContainer ~= tContainer then 
            tContainer:setExistingItemSlot(to.id, from:getItem());
            fContainer:removeItemFromSlot(from.id);
          else
            to:setItem(from:getItem());
            from:removeItem();
          end
          
          return to, from
        end
      end
    else
      to:setItem(from:getItem());
      from:removeItem();
    end
    
    return to, from;
  end
end