checkKey = {}

function activeAllBinds( player )
    bindKey( player, "space", "down", keyCheck )
    bindKey( player, "space", "up", keyCheck )
    bindKey( player, "w", "down", bearingAction )
    bindKey( player, "s", "down", bearingAction )
    bindKey( player, "a", "down", bearingAction )
    bindKey( player, "d", "down", bearingAction )
end

function keyCheck( player, key, keyState )
    if keyState == "down" then
        checkKey[player] = true
    elseif keyState == "up" then
        if checkKey[player] == true then
            checkKey[player] = false
        end
    end
end

local lastTick = getTickCount()

function bearingAction( player, key, keyState )
    local direction = "none"
    if checkKey[player] and not getPedOccupiedVehicle( player ) and ( getTickCount()-lastTick ) >= 1200 then
        lastTick = getTickCount()
        if key == "a" and keyState == "down" then
            direction = "Left"
            triggerClientEvent( root, "bearing_setAnimation", root, player, direction )
        elseif key == "d" and keyState == "down" then
            direction = "Right"
            triggerClientEvent( root, "bearing_setAnimation", root, player, direction )
        elseif key == "w" and keyState == "down" then
            direction = "Front"
            triggerClientEvent( root, "bearing_setAnimation", root, player, direction )
        elseif key == "s" and keyState == "down" then
            direction = "Back"
            triggerClientEvent( root, "bearing_setAnimation", root, player, direction )
        end
    else
        return
    end
end

function start()
    activeAllBinds( source )
end
addEventHandler( "onPlayerLogin", root, start )
