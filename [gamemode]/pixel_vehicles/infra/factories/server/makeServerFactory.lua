local imports = {
    core = exports.pixel_core,
    inventory = exports.pixel_inv,
    notify = exports.pixel_notify
};

VehFactory = {
    cache = {}
};


function VehFactory:registerVeh (player, vehicle)
    local characterId = getElementData(player, "id");

    if (characterId) then 
        local createVeh = imports.core:createVehicle(characterId, chest_id, math.random(1000, 2000), 100, 999, toJSON({}), vehicle.model, vehicle.parking, toJSON(vehicle.color))
        
        if (createVeh) then 
            return createVeh;
        else
            return false
        end
    end 

    return false;
end

function VehFactory:spawn(player, vehicleId, position, rotation)
    local characterId = getElementData(player, "id");

    if (not VehFactory.cache[characterId]) then 
        VehFactory.cache[characterId] = {
            attachedTo = player;
        }
    end

    if (VehFactory.cache[characterId][vehicleId]) then 
        return print("This car already spawned.")
    end

    local vehicle = vehicles:create(vehicleId);

    if (not vehicle) then return false end

    local data = vehicle:fetch();
    
    if (data) then 
        vehicle:spawn(position, rotation);        
        VehFactory.cache[characterId][vehicleId] = data;

        return vehicle
    end

    return false;
end


function VehFactory:findByVehicleId (vehicleId) 
    for k,v in pairs(VehFactory.cache) do 
        for vehicleIndex, vehicle in pairs(v) do 
            if (vehicleIndex == vehicleId) then 
                return k, VehFactory.cache[k][vehicleId]
            end
        end
    end
    
    return false;
end


function VehFactory:setVehicleLocked(player, vehicle)
    local _id = getElementData(vehicle, "_id");
    local charId, vehicle = VehFactory:findByVehicleId(_id);

    if (not vehicle) then return false end

    local hasKeyItem = imports.inventory:findItemByData(player, "car_key", {
        id = vehicle._id,
    });


    if (hasKeyItem) then 
        local isLocked = not vehicle:getVehicleLockState();
        vehicle:setVehicleLocked(isLocked);
        network:emit("pixel_vehicles:onServerUnlockVehicle", true, false, root, vehicle.element, (isLocked and "lock" or "unlock"));
    else
        imports.notify:showInfobox(player, "info", "Veiculos:", "Você não tem a chave deste veiculo");
    end
end


function VehFactory:setVehicleDamage(vehicleId, damage) 
    local charId, vehicle = VehFactory:findByVehicleId (vehicleId);

    if (vehicle) then 
        vehicle:setDamage(damage);
        return true;
    end

    return false;
end 


function VehFactory:setVehicleFuel(vehicleId, fuel) 
    local charId, vehicle = VehFactory:findByVehicleId (vehicleId);

    if (vehicle) then 
        vehicle:setFuel(fuel);
        return true;
    end

    return false; 
end

function VehFactory:setVehicleEngineByItem(player, item, vehicle) 
    local _id = getElementData(vehicle, "_id");
    local charId, vehicle = VehFactory:findByVehicleId(_id);

    if (not vehicle) then return false end
    
    if (item.data.id == _id) then
        local isEngineOn = not vehicle:getEngineState();
        
        if (vehicle:getFuel() > 0) then 
            vehicle:setEngineState(isEngineOn);
        end
    end
end


function VehFactory:getVehicleChest(player, element)
    local _id = getElementData(element, "_id");
    local charId, vehicle = VehFactory:findByVehicleId(_id);

    if (not vehicle) then return false end

    local hasKeyItem = imports.inventory:findItemByData(player, "car_key", {
        id = vehicle._id
    });

    if (hasKeyItem) then
        network:emit("pixel_inventory:onClientOpenChest", false, element, player) 
    end
end


function VehFactory:isVehicleSpawned (vehicleId)
    local charId, vehicle = VehFactory:findByVehicleId(vehicleId);

    if (vehicle) then 
        return true;
    end

    return false;
end


function VehFactory:destroy(vehicleId)
    local charId, vehicle = VehFactory:findByVehicleId (vehicleId);
    
    if (vehicle) then 
        local destroy = vehicle:saveAndDestroy();
        if (destroy) then 
            VehFactory.cache[charId][vehicleId] = nil;
            return true;
        end
        
        return false;
    end
    
    return false;
end


function VehFactory:clearVehicles ()
    for character, playerCars in pairs(VehFactory.cache) do
        local isOwnerInServer = isElement(playerCars.attachedTo);

        if (isOwnerInServer) then 
            for vehicleId, vehicle in pairs(playerCars) do 
                if (vehicle.element) then 
                    local count = 0;
                    for _, occupants in pairs(getVehicleOccupants(vehicle.element)) do 
                        count = count + 1;
                    end
    
                    if (count < 1) then 
                        local destroy = vehicle:saveAndDestroy();

                        if (destroy) then 
                            VehFactory.cache[character][vehicleId] = nil;
                            return true;
                        end
                    end
                end
            end
        end
    end
end