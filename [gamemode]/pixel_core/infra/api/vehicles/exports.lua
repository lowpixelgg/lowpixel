function findVehicleByCharacter (...) 
  return Vehicles.vehRepo:findVehicleByCharacter(...) 
end

function findVehicleByID(...)
  return Vehicles.vehRepo:findVehicleByID(...) 
end

function findVehicleByNumberPlate(...)
  return Vehicles.vehRepo:findVehicleByNumberPlate(...)
end

function findVehiclesByCharAndParking( ... ) 
  return Vehicles.vehRepo:findVehiclesByCharAndParking(...)
end


function createVehicle(...) 
  return Vehicles.vehRepo:create(...)
end


function saveVehicle(...) 
  return Vehicles.vehRepo:save(...) 
end


function deleteVehicle(...)
  return Vehicles.vehRepo:delete(...) 
end


function findParkingByID (...)
  return Vehicles.parkRepo:findByID (...)
end

function createParking (...)
  return Vehicles.parkRepo:create(...) 
end


function saveParking (...)
  return Vehicles.parkRepo:save(...) 
end


function deleteParking (...) 
  return Vehicles.parkRepo:delete (...)
end