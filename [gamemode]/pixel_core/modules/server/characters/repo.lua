local _table = "characters";

function Characters.repo:setup() 
  database:table("characters"):create({
    { name = "id", type = "varchar", size = 255 },
    { name = "firstname", type = "varchar", size = 255 },
    { name = "lastname", type = "varchar", size = 255 },
    { name = "address", type = "varchar", size = 255 },
    { name = "playTime", type="int", size= 20 },
    { name = "hunger", type="int", size= 100 },
    { name = "thirst", type="int", size= 100 },
    { name = "clothes", type="MEDIUMTEXT" },
    { name = "model", type="int", size = 100 },
    { name = "gender", type="varchar", size = 100 },
    { name = "tattoos", type="MEDIUMTEXT" },
    { name = "refId", type = "varchar", size = 100 }
  });


  return print("Characters Repo has been propagated");
end




function Characters.repo:create(data)
  database:table(_table):insert({
    id = data.id,
    firstname = data.firstname,
    lastname = data.lastname,
    address = data.address,
    hunger = data.hunger,
    thirst = data.thirst,
    clothes = data.clothes,
    model = data.model,
    tattoos = data.tattos,
    playTime = data.playTime,
    gender = data.gender,
    refId = data.refId,
  })

  return true
end


function Characters.repo:getOne (id, fields, callback)
  if (type(id) ~= "string" or type(fields) ~= "table") then
    return false;
  end

  return database:table(_table):select(fields, { id = id }, callback)[1];
end

function Characters.repo:getByRef (refId, fields, callback)
  if (type(refId) ~= "string" or type(fields) ~= "table") then
    return false;
  end

  return database:table(_table):select (fields, { refId = refId }, callback);
end


function  Characters.repo:save (character)
  local store = {}

  for k,v in pairs(character) do
    store[k] = v;
  end

  return database:table(_table):update(store, { id = character.id });
end