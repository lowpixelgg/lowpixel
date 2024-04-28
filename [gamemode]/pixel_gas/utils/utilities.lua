function calculateFuelCost(liters, pricePerLiter)
    local totalCost = liters * pricePerLiter
    return totalCost
end


function getMyNearestVehicle (player,distance)
    local lastMinDis = distance-0.0001
    local nearestVeh = false
    local px,py,pz = getElementPosition(player)
    local pint = getElementInterior(player)
    local pdim = getElementDimension(player)
    
    for _,v in pairs(getElementsByType("vehicle")) do
        local vint,vdim = getElementInterior(v),getElementDimension(v)
        if vint == pint and vdim == pdim then
            local vx,vy,vz = getElementPosition(v)
            local dis = getDistanceBetweenPoints3D(px,py,pz,vx,vy,vz)
            if dis < distance then
                if dis < lastMinDis then 
                    lastMinDis = dis
                    nearestVeh = v
                end
            end
        end
    end
    
    --if (nearestVeh and getElementData(nearestVeh, "owner") == getElementData(localPlayer, "id")) then 
        return nearestVeh;
    --end
    
    --return false;
end