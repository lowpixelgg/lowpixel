if (triggerClientEvent) then 
    function findClosestPlayer(x0, y0, z0)
        local closestPlayer = nil
        local closestDistance = 50 -- Inicializa com uma distância muito grande
    
        for _, player in ipairs(getElementsByType("player")) do
            local x, y, z = getElementPosition(player)
            local distance = getDistanceBetweenPoints3D(x0, y0, z0, x, y, z)

            if distance < closestDistance then
                closestDistance = distance
                closestPlayer = player
            end
        end
    
        if closestPlayer and closestDistance then
            local proximityPercent = (1 - closestDistance / 100) * 100
            return closestPlayer, math.floor(math.max(0, math.min(proximityPercent, 100)))
        else
            return nil, 0
        end
    end
    
end