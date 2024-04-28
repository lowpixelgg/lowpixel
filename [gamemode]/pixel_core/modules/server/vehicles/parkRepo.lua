local _MODEL = "parkings";
local _SELECT = {'name', 'max_cars', 'position', 'parking_id', '_id'};

function Vehicles.parkRepo:setup() 
  database:table("parkings"):create({
    { name = "name", type = "varchar", size = 255 },
    { name = "max_cars", type = "int", size = 255 },
    { name = "position", type = "varchar", size = 255 },
    { name = "parking_id", type = "varchar", size = 255 },
  });

  return print("Vehicles park repository has been propagated");
end


function Vehicles.parkRepo:findByID (id, callback) 
  local data = database:table(_MODEL):select(_SELECT, { parking_id = id });

  if (#data > 0) then 
      return data[1];
  end

  return false;
end


function Vehicles.parkRepo:create(id, name, max_cars, position) 
  local _, _, _id = database:table(_MODEL):insert({ 
    parking_id = id,
    name = name, 
    max_cars = max_cars,
    position = toJSON(position)
  });

  return id;
end


function Vehicles.parkRepo:save(parking, callback) 
  local store = {};

  for k,v in pairs(parking) do
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


function Vehicles.parkRepo:delete (id, callback) 
  database:table(_MODEL):delete({_id = id});
end