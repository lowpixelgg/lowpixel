addCommandHandler("pixel_cars", function (player, cmd, arg) 
    local x,y,z = getElementPosition(player)

    if (not cars[arg]) then return false end
    local veh = createVehicle(cars[arg], x,y,z);
    warpPedIntoVehicle(player, veh)
end)

function isVehicleOccupied(vehicle)
    assert(isElement(vehicle) and getElementType(vehicle) == "vehicle", "Bad argument @ isVehicleOccupied [expected vehicle, got " .. tostring(vehicle) .. "]")
    local _, occupant = next(getVehicleOccupants(vehicle))
    return occupant and true, occupant
end

