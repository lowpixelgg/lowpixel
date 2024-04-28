function fallPlayer (player) 
    setElementData(player, "fall", true);
    setPedAnimation(player, "CRACK", "crckdeth2", -1, true);

    network:emit("pixel_hospital:onPlayerFall", true, false, player);
end



function onPlayerFallEnd(player) 
    setElementData(player, "fall", false);
    killPed(player);
    network:emit("pixel_hospital:onPlayerWasted", true, false, player);
end