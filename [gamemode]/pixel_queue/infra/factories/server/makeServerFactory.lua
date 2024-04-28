Queue = {};


function Queue:new () 
  thread:createHeartbeat(function ()
    if (table.size(queue.playing) <= queue.settings.maxAlivePlayers) then 
       local player = queue:getPrioritedPlayers (os.time()) or queue:getOlderPlayer (os.time());

        if (player) then 
          local remPlayerQueue = queue:removeQueuePlayer (player)

          if (remPlayerQueue) then 
            local addPlayingPlayer = queue:addPlayingPlayer(player)

            if (addPlayingPlayer) then
              exports.pixel_lobby:handshakeJoin(player);
              network:emit("pixel_queue:onServerCloseQueue", true, false, true);
            end
          end
      end
    end


    for k,v in pairs(queue.waiting) do 
      network:emit("pixel_queue:onServerUpdateQueue", true, true, k, queue);
    end
  return true; end, function () end, 1000);


  for k, v in pairs(getElementsByType("player")) do 
    queue:addQueuePlayer(v);
    network:emit("pixel_queue:onServerInitQueue", true, true, k, true);
  end
end