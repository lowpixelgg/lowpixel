local zones = {
};

isServer = not localPlayer;

network:create("onPlayerEnterZone", false);


function syncFunction(fnName, zone, ...)
    if ( isServer ) then
        triggerClientEvent("pixel_zones:"..fnName, zone, ...);
    end
end

function createClientEvent(event, fn)
    if ( not isServer ) then
        addEvent(event, true);
        addEventHandler(event, resourceRoot, fn);
    end
end

function findAllZones (x, y, z)
    local allZones = {}
    
    for i = 1, #zones do
        local zone = zones[i]
        local nearestDistance = 10^10 
        local nearestPoint = nil
        
        for j = 1, #zone do
            local currentPoint = zone[j]
            local nextPointIndex = (j % #zone) + 1
            local nextPoint = zone[nextPointIndex]
            
            local x1, y1, z1 = currentPoint.x, currentPoint.y, currentPoint.z
            local x2, y2, z2 = nextPoint.x, nextPoint.y, nextPoint.z
            
            local nearestX, nearestY, nearestZ = findNearestPointOnLine(x, y, z, x1, y1, z1, x2, y2, z2)
            local distance = getDistanceBetweenPoints3D(x, y, z, nearestX, nearestY, nearestZ)
            
            if distance < nearestDistance then
                nearestDistance = distance
                nearestPoint = { x = nearestX, y = nearestY, z = nearestZ }
            end
        end
        
        table.insert(allZones, { name = zone[0], distance = nearestDistance, nearestPoint = nearestPoint })
    end
    
    return allZones
end


function findNearestPointOnLine(x, y, z, x1, y1, z1, x2, y2, z2)
    local dx, dy, dz = x2 - x1, y2 - y1, z2 - z1
    local t = ((x - x1) * dx + (y - y1) * dy + (z - z1) * dz) / (dx * dx + dy * dy + dz * dz)
    t = math.max(0, math.min(1, t))
    local nearestX, nearestY, nearestZ = x1 + t * dx, y1 + t * dy, z1 + t * dz
    return nearestX, nearestY, nearestZ
end


function getShapeInfo(zone)
    for i = 1, #zones do
        if (zones[i][0] == zone) then
            return zones[i]
        end
    end
    return nil
end

function getShapeAxisZ(zone)
    local shapeInfo = getShapeInfo(zone)
    if (shapeInfo) then
        return shapeInfo["ShapeAxisZ"]
    end
    return nil
end


function getAllShapeElements()
    local elements = {}
    for i = 1, #zones do
        if (zones[i][0]) then
            table.insert(elements, zones[i][0])
        end
    end
    return elements
end

function getShapeCenterAndRadius(element)
    for i = 1, #zones do
        if (zones[i][0] == element) then
            local shape = zones[i]
            local centerX, centerY, centerZ = 0, 0, 0
            local maxRadius = 0
            
            for j = 1, #shape do
                centerX = centerX + shape[j].x
                centerY = centerY + shape[j].y
                centerZ = centerZ + shape[j].z
            end
            
            centerX = centerX / #shape
            centerY = centerY / #shape
            centerZ = centerZ / #shape
            
            for j = 1, #shape do
                local distance = getDistanceBetweenPoints3D(centerX, centerY, centerZ, shape[j].x, shape[j].y, shape[j].z)
                if distance > maxRadius then
                    maxRadius = distance
                end
            end
            
            return centerX, centerY, centerZ, maxRadius
        end
    end
    
    return nil, nil, nil, nil;
end




function isPointInsidePolygon(x, y, z, polygon)
    local oddNodes = false
    local j = #polygon
    
    for i = 1, #polygon do
        local xi, yi, zi = polygon[i].x, polygon[i].y, polygon[i].z
        local xj, yj, zj = polygon[j].x, polygon[j].y, polygon[j].z
        
        if (yi < y and yj >= y or yj < y and yi >= y) and (xi <= x or xj <= x) then
            if (xi + (y - yi) / (yj - yi) * (xj - xi) < x) then
                oddNodes = not oddNodes
            end
        end
        
        j = i
    end
    
    return oddNodes
end



function createZone (zAxis, segments, network, text) 
    if (type(segments) ~= "table" or type(zAxis) ~= "number" and type(network) ~= "string") then return false end
    
    local id = #zones + 1;
    local element = createElement("pixel_zones");

    zones[id] = {
        [0] = element, ["ShapeAxisZ"] = 5,
    }

    for k,v in ipairs(segments) do 
        table.insert(zones[id], v)
    end

    zones[id].network = network or "onPlayerEnterZone";
    zones[id].text = text or false

    syncFunction("createZone", element, zAxis, segments);

    return element;
end
createClientEvent("pixel_zones:createZone", createZone);


thread:createHeartbeat(function () 
    for i = 1, #zones do 
        local shape = zones[i]

        if (shape) then 
            for k,v in ipairs(getElementsByType("player")) do 
                if (not playerInZone and isElementWithinZone (shape[0], v)) then 
                    if (not isServer) then 
                        network:emit(shape.network or "onPlayerEnterZone", true, false, root, v);
                    else
                        network:emit(shape.network or "onPlayerEnterZone", true, false, v);
                    end                    

                    
                    playerInZone = true;
                elseif (playerInZone and not isElementWithinZone (shape[0], v)) then
                    if (not isServer) then 
                    end 

                    playerInZone = false;
                end
            end

        end
    end
return true; end, function () return false end,  250)



function isElementWithinZone (zone, element) 
    for i = 1, #zones do
        local shape = zones[i]
        local shapeAxisZ = shape.ShapeAxisZ or 0;
        local x,y,z = getElementPosition(element);
        if (isPointInsidePolygon(x, y, z, shape) and z >= shape[1].z and z <= shape[1].z + shapeAxisZ) then
            return true
        end
    end

    return false;
end


local state = false;

addCommandHandler("debug_zones", function () 
    state = not state
end)


    function dxDrawDebug ()      
        if not state then return false end    
        local allAudioZones = findAllZones(getElementPosition(localPlayer))
        local playerX, playerY, playerZ = getElementPosition(localPlayer)
        local shapeNames = getAllShapeElements()
        local size = 5
        
        for i, name in ipairs(shapeNames) do
            local centerX, centerY, centerZ, maxRadius = getShapeCenterAndRadius(name)
            local currentShape = getShapeInfo(name)
            local ShapeAxisZ = getShapeAxisZ(name)
            if currentShape then
                for j = 1, #currentShape do
                    local currentPoint = currentShape[j]
                    local nextPointIndex = (j % #currentShape) + 1
                    local nextPoint = currentShape[nextPointIndex]
                    
                    local x1, y1, z1 = currentPoint.x, currentPoint.y, currentPoint.z
                    local x2, y2, z2 = nextPoint.x, nextPoint.y, nextPoint.z
                    
                    dxDrawLine3D(x1, y1, z1+ 0.03 , x1, y1 , z2 + ShapeAxisZ, tocolor(255, 0, 0, 230), size)
                    dxDrawLine3D(x1, y1, z1 + ShapeAxisZ, x2 , y2 , z2 + ShapeAxisZ, tocolor(255, 0, 0, 230), size)
                    dxDrawLine3D(x1, y1, z1 + 0.03, x2, y2, z2 + 0.03, tocolor(255, 0, 0, 255), size)
                end
            end
        end
    end
addEventHandler("onClientRender", root, dxDrawDebug);