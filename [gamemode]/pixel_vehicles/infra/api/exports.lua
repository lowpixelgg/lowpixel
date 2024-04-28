function setVehicleDamage(...) 
  return VehFactory:setVehicleDamage(...);
end


function destroyVehicle (...) 
  return VehFactory:destroy (...)
end

function createVehicle (...) 
  return VehFactory:registerVeh (...)
end

function spawnVehicle (...)
 return  VehFactory:spawn(...) 
end

function isVehicleSpawned (...)
  return VehFactory:isVehicleSpawned (...)
end


function setVehicleFuel (...) 
  return VehFactory:setVehicleFuel(...) 
end