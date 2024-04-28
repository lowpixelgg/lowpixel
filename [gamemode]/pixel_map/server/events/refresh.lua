Pathfind = nil;

addEventHandler("onResourceStart", resourceRoot, function () 
    Pathfind = pathfind:create();
end);


network:fetch("pixel_map:onClientRequestRoute", true):on(function (player, sx, sy, sz, ex, ey, ez)
    async(function (this)
        local nodes = Pathfind:calculatePathByCoord(sx, sy, sz, ex, ey, ez);
        network:emit("pixel_map:onClientRequestRoute", true, false, player, nodes);
        
        this:destroyInstance();
    end):resume();
end);