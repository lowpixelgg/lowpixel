local imports = {
  vehicles = exports.pixel_vehicles,
  setElementData = setElementData,
  core = exports.pixel_core
}

local parking = class:create("parking");


function parking.public:create(...)
  local instance = self:createInstance()
  
  if instance and not instance:load(...) then
    instance:destroyInstance()
    return false
  end
  
  return instance
end


function parking.public:load (id, name, max_cars, position)
  local park = imports.core:findParkingByID(id);
  
  if (park) then 
    self.id = park.parking_id;
    self.name = park.name;
    self.max_cars = park.max_cars;
    self.position = Vector3(fromJSON(park.position));
  else
    local create = imports.core:createParking(id, name, max_cars, {position.x, position.y, position.z});
    
    if (create) then 
      self.id = id;
      self.name = name;
      self.max_cars = max_cars;
      self.position = position;
    else
      return false;
    end
  end
  
  
  self.marker = exports.custom_markers:createRectangleMarker ({ position.x, position.y, position.z }, {244, 155, 43}, {194, 255, 160}, "img/garage_text.png", "{{str_join_parking}}", "pixel_parkings:onColShapeHit", "e")
  setElementData(self.marker, "_id", self.id);

  return self;
end



function parking.public:fetchVehiclesByCharacter (character)
  local vehicles = imports.core:findVehiclesByCharAndParking(character, self.id);
  
  if (vehicles) then 
    return vehicles;
  else
    return {};
  end
  
  return false;
end


function parking.public:enterVehicle (vehId, vehicle)
  local setParking = imports.setElementData(vehicle, "parking_id", self.id);
  local changeEntry = imports.setElementData(vehicle, "parking_entry", os.time(os.date("*t")));
  
  if (changeEntry) then 
    local save = imports.vehicles:destroyVehicle(vehId);
    
    if (save) then 
      return true;
    end
  end
  
  return false;
end

function parking.public:exitVehicle (player, vehicle) 
  local x,y,z = getElementPosition(player);
  local spawned = imports.vehicles:spawnVehicle(player, vehicle.id, Vector3(x + 10, y, z), Vector3(0,0,0));

  if (spawned) then 
    local changeParking = imports.setElementData(spawned.element, "parking_id", self.id);
    -- warpPedIntoVehicle(player, spawned.element);
    
    return true;
  end
  
  return false;
end

function parking.public:destroy()
  if not parking.public:isInstance(self) then return false end 
  self:destroyInstance()
  return true
end