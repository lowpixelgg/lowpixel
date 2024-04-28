local _MODEL = "vehicles"
local _SELECT = {'character', 'color', 'chest_id', 'numberplate', 'fuel', 'damage', 'stickers', 'model', 'parking_id', 'parking_entry', '_id'}


function Vehicles.vehRepo:setup()
  database:table("vehicles"):create({
    { name = "character", type = "varchar", size = 100 },
    { name = "chest_id", type = "int", size = 255 },
    { name = "numberplate", type = "varchar", size = 100 },
    { name = "fuel", type = "int", size = 100 },
    { name = "color", type = "varchar", size = 100 },
    { name = "damage", type = "int", size = 100 },
    { name = "stickers", type = "varchar", size = 777 },
    { name = "model", type = "varchar", size = 255},
    { name = "parking_id", type = "varchar", size = 255 },
    { name = "parking_entry", type = "varchar", size = 255 },
  });

  return print("Vehicles main repository has been propagated");
end


function Vehicles.vehRepo:findVehicleByCharacter(character, callback) 
  local data = database:table(_MODEL):select(_SELECT, { character = character });

  if (#data > 0) then 
      return data;
  end

  return false;
end


function Vehicles.vehRepo:findVehiclesByCharAndParking (char, parking_id, callback) 
  local data = database:table(_MODEL):select(_SELECT, { character = char, parking_id = parking_id });

  if (#data > 0) then 
      return data;
  end

  return false;
end


function Vehicles.vehRepo:findVehicleByID(id, callback) 
  local data = database:table(_MODEL):select(_SELECT, { _id = id });

  if (data[1]) then 
      return data[1];
  end

  return false;
end


function Vehicles.vehRepo:findVehicleByNumberPlate(numberplate, callback)
  local data = database:table(_MODEL):select(_SELECT, { numberplate = numberplate });

  if (data[1]) then 
      return data[1];
  end

  return false;
end


function Vehicles.vehRepo:create(character, chest_id, numberplate, fuel, damage, stickers, model, parking_id, color)
  local _, _, id = database:table(_MODEL):insert({ 
      character = character, 
      chest_id = chest_id, 
      parking_id = parking_id,
      parking_entry = os.time(),
      numberplate = numberplate, 
      fuel = fuel, 
      damage = damage, 
      color = color or toJSON({255,255,255}),
      stickers = stickers or toJSON({}), 
      model = model 
  });

  return id;
end



function Vehicles.vehRepo:save(vehicle, callback) 
  local store = {};

  for k,v in pairs(vehicle) do
      if (k ~= "id" and k ~= "_id") then
          store[k] = v;
      end
  end

  local save = database:table(_MODEL):update(store, {_id = vehicle._id});

  if (save) then 
      return true;
  end

  return false;
end



function Vehicles.vehRepo:delete(vehID, callback) 
  database:table(_MODEL):delete({_id = vehID});
end