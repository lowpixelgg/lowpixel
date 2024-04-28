local _MODEL = "items"
local DEFAULT_SELECT = {
  'name', 'state', 'data', 'timestamp', 'container', 'amount', 'slot', 'chest', 'inventory', '_id', 'subItemAt'
}


function Inventory.itemsRepo:setup() 
  database:table("items"):create({
    { name = "name", type = "varchar", size = 255 },
    { name = "state", type = "int", size = 20},
    { name = "timestamp", type = "int", size = 255},
    { name = "container", type = "varchar", size = 255},
    { name = "slot", type = "int", size = 255},
    { name = "amount", type = "int", size = 255},
    { name = "inventory", type = "varchar", size = 255},
    { name = "data", type = "varchar", size = 255},
    { name = "subItemAt", type = "int", size = 255},
    { name = "chest", type = "varchar", size = 255},
  });

  return print("Inventory items repository has been propagated.");
end

function Inventory.itemsRepo:findByInventory(invID, callback) 
  return database:table(_MODEL):select(DEFAULT_SELECT, { inventory = invID }, callback);
end



function Inventory.itemsRepo:findByItemID (itemID, callback)
  local data = database:table(_MODEL):select(DEFAULT_SELECT, { _id  = itemID }, callback);
 
  if (#data > 0) then
    if data[1].data ~= false then 
      data[1].data = fromJSON(data[1].data);
    end
    return data[1];
  end

  return false;
end


function Inventory.itemsRepo:findItemsByState (state, callback) 
  local data = database:table(_MODEL):select(DEFAULT_SELECT, { state  = state }, callback);

  if (#data > 0) then
    for k,v in ipairs(data) do 
      if data[k].data ~= false then 
        data[k].data = fromJSON(data[k].data);
      end
    end


    return data;
  end

  return false;
end

function Inventory.itemsRepo:findItemsByChest (chestID, callback) 
  local data = database:table(_MODEL):select(DEFAULT_SELECT, { chest  = chestID }, callback);

  if (#data > 0) then
    for k,v in ipairs(data) do 
      if data[k].data ~= false then 
        data[k].data =  fromJSON(data[k].data);
      end
    end


    return data;
  end

  return false;
end


function Inventory.itemsRepo:create(name, state, timestamp, container, slot, chest, data, amount, inventory)
  local _,_, id = database:table(_MODEL):insert({name = name, state = state, data = data and toJSON(data) or nil, amount = amount or nil, timestamp = timestamp, container = container, slot = slot, inventory = inventory, chest = chest });
  return id;
end


function Inventory.itemsRepo:save(item, callback)
  local store = {};
  
  for k,v in pairs(item) do
    if k ~= "id" and k ~= "_id" then
      if k == "data" then 
        if v == false or v == nil then 
          v = nil
        else
          v = toJSON(v);
        end 
      end

      store[k] = v;
    end
  end

  database:table(_MODEL):update(store, {_id = item._id});
  return true
end


function Inventory.itemsRepo:delete(itemID, callback) 
  database:table(_MODEL):delete({_id = itemID});
end