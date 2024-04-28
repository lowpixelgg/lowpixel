local imports = {
  core = exports.pixel_core,
  notify = exports.pixel_notify,
  vehicles = exports.pixel_vehicles,
};

Parkings = {};
Parkings.cache = {};

local vehicleMeta = imports.core:getVehiclesMeta();

function Parkings:registerParking (id, name, max_cars, position) 
  local park = parking:create (id, name, max_cars, position)
  
  if (park) then 
    Parkings.cache[park.id] = park;
    
    return Parkings.cache[park.id];
  end
  
  return false
end

function Parkings:getParkingIdByElement (element)
  local _id = getElementData(element, "_id");
  
  if (_id) then
    return _id;
  end
  
  return false;
end

function Parkings:getNearestParking(player)
  local shortestDistance = math.huge
  local nearestParking = nil
  local x, y, z = getElementPosition(player)

  for _, park in pairs(Parkings.cache) do
      local dist = math.sqrt((park.position.x - x)^2 + (park.position.y - y)^2 + (park.position.z - z)^2)

      if dist < shortestDistance then
          shortestDistance = dist
          nearestParking = park
      end
  end

  return nearestParking
end



function Parkings:getParking (id, player)
  local parking = Parkings.cache[id];
  if (not parking) then return false end;
  
  local characterId = getElementData(player, "id");
  
  if (characterId) then 
    local vehicles = parking:fetchVehiclesByCharacter (characterId);
    
    if (vehicles) then 
      local parsedCars = {}
      
      
      
      for carIndex, car in ipairs(vehicles) do
        if (not imports.vehicles:isVehicleSpawned(car._id)) then 
          local meta = vehicleMeta[tonumber(car.model)];  
          
          table.insert(parsedCars, {
            id = car._id,
            carBrand = meta.business.title,
            carName = meta.name,
            gasoline = car.fuel or 0,
            plate =  car.numberplate,
            health =  car.damage,
            entryDate = tonumber(car.parking_entry),
          });
        end
      end
      
      if (#parsedCars == 0) then
        imports.notify:showInfobox(player, "info", "Estacionamentos:", "Você não tem carros neste estacionamento.")
      else
        network:emit("pixel_parking:onServerPlayerOpenParking", true, true, player, parking, parsedCars)
      end
    end
  end
  
  return false;
end


function Parkings:enterVehicle (id, vehicle)
  local parking = Parkings.cache[id];
  if (not parking) then return false end;
  
  local vehicleId = getElementData(vehicle, "_id");
  
  if (vehicleId) then
    local save = parking:enterVehicle(vehicleId, vehicle);
      
    if (save) then 
      return true;
    end
  end
  
  return false;
end


function Parkings:exitVehicle (id, player, data) 
  local parking = Parkings.cache[id];
  if (not parking) then return false end;
  
  local characterId = getElementData(player, "id");
  

  if (characterId) then 
   local vehicles = parking:fetchVehiclesByCharacter (characterId);
   local _, vehicle = table.find(vehicles, function (v) return v._id == data.id end);

   if (vehicle) then 
    local exit = parking:exitVehicle(player, data);
   
    if (exit) then 
      network:emit("pixel_parking:onServerForceCloseUI", true, false, player);
    end
   end
  end

  return false;
end


Parkings:registerParking ("parking_downtown2", "Estacionamento da Praça", 100, Vector3(214.81982, -798.64032, 30.83561));
Parkings:registerParking ("parking_santamonica1", "Estacionamento Colorido", 100, Vector3(-1219.09521, -654.86420, 25.90128));
Parkings:registerParking ("parking_santamonica2", "Estacionamento Praia", 100, Vector3(-1644.79578, -892.69946, 8.83236 + 0.1));
Parkings:registerParking ("parking_devlevel", "Estacionamento DevLevel", 100, Vector3(736.62537, -798.64026, 1434.57812));
Parkings:registerParking ("parking_indust1", "Industrial Parque de Pescária", 100, Vector3(1042.73669, -779.98444, 58.01865));
Parkings:registerParking ("parking_indust1", "Aeroporto", 100, Vector3(-1043.21362, -2660.06567, 13.83665));
