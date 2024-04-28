

addEventHandler("onResourceStart", resourceRoot, function () Queue:new() end);
addEventHandler("onPlayerQuit", root, function () 
    queue:removeQueuePlayer(source);
    queue:removePlayingPlayer(source);
end)

network:fetch("pixel_queue:onCorePlayerJoin", true):on(function (player)
    queue:addQueuePlayer(player);

    network:emit("pixel_queue:onServerInitQueue", true, false, player, true);
end);