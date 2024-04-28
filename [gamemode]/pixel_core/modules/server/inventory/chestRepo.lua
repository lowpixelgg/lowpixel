local _MODEL = "chest"


function Inventory.chestRepo:setup() 
  database:table("chest"):create({
    { name = "elementID", type = "varchar", size = 100 },
    { name = "name", type = "varchar", size = 255 },
    { name = "weight", type = "int", size = 255 },
    { name = "columns", type = "int", size = 255},
    { name = "maxWeight", type = "int", size = 100 },
  });

  return print("Inventory chest repository has been propagated");
end

function Inventory.chestRepo:findByElementID(elementID, callback) 
  local data = database:table(_MODEL):select({'elementID', 'weight', 'maxWeight', 'name', 'columns', '_id'}, { elementID = elementID }, callback);

  if (#data > 0) then 
    return data[1];
  end

  return false;
end


function Inventory.chestRepo:findChestByID(chestID, callback)
  local data = database:table(_MODEL):select({'elementID', 'weight', 'maxWeight', 'name', 'columns', '_id'}, { _id = chestID }, callback);

  if (#data > 0) then 
    return data[1];
  end

  return false;
end


function Inventory.chestRepo:findItemsByChest (chestID, callback) 
  local data = database:table(_MODEL):select({'elementID', 'weight', 'maxWeight', 'name', 'columns', '_id'}, { _id = chestID }, callback);

  if (#data > 0) then 
    return data[1];
  end

  return false;
end


function Inventory.chestRepo:create(elementID, name, columns, maxWeight)
  local _,_,id = database:table(_MODEL):insert({elementID = elementID, weight = 0, name = name, columns = columns, maxWeight = maxWeight });
  
  return id;
end


function Inventory.chestRepo:save(chest) 
  local store = {};
  
  for k,v in imports.pairs(chest) do
    if k ~= "id" and k ~= "_id" then 
      store[k] = v;
    end
  end

  database:table(_MODEL):update(store, {_id = chest._id});
  return true;
end


function Inventory.chestRepo:delete(chestID) 
  database:table(_MODEL):delete({_id = chestID});
end