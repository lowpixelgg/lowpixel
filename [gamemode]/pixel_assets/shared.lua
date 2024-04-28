local IFP_PATH 	= "anims/"
isServer = not localPlayer;


function syncFunction(fnName, rope, ...)
    if ( isServer ) then
        triggerClientEvent(fnName, rope, ...);
    end
end


function createClientEvent(event, fn)
    if ( not isServer ) then
        addEvent(event, true);
        addEventHandler(event, resourceRoot, fn);
    end
end

function playCustomAnimation (player, blockName, animation, time, loop, updatePosition)
    if (Anims[blockName]) then
        blockName =  "lowpixel."..blockName;
    end

    if (not isServer) then 
        return setPedAnimation(player, blockName, animation, time or -1, loop == nil and time == -1 or loop or false, updatePosition or false, true);
    end
    
    syncFunction ("playClientEvent", root, player, blockName, animation, time, loop, updatePosition);
end

createClientEvent("playClientEvent", playCustomAnimation);



function stopCustomAnimation (player) 
    if (not isServer) then 
        setPedAnimation ( player )
        return;
    end

    syncFunction ("stopCustomAnimation", root, player);
end

createClientEvent("stopCustomAnimation", stopCustomAnimation);