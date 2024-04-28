local _MODEL = "inventories";
local SELECT = {'character', 'weight', 'maxWeight', 'level', '_id'};


function Inventory.invRepo:setup() 
  database:table("inventories"):create({
    { name = "character", type = "varchar", size = 100 },
    { name = "weight", type = "int", size = 255 },
    { name = "maxWeight", type = "int", size = 100 },
    { name = "level", type = "int", size = 100 },
  });
  
  return print("Inventory main repository has been propagated");
end

function Inventory.invRepo:findByCharacter(character, callback) 
  return database:table(_MODEL):select(SELECT, { character = character }, callback);
end


function Inventory.invRepo:create(character)
  local _,_,id = database:table(_MODEL):insert({character = character, weight = 0, level = 1, maxWeight = 41000 });
  return id;
end


function Inventory.invRepo:save(inventory) 
  local store = {};
  
  for k,v in pairs(inventory) do
    if k ~= "id" and k ~= "_id" then 
      store[k] = v;
    end
  end

  database:table(_MODEL):update(store, {_id = inventory._id});
  return true;
end


function Inventory.invRepo:delete(invID) 
  database:table(_MODEL):delete({_id = invID});
end