local imports = {
    interactions = exports.pixel_interactions
}


network:fetch("pixel_fisher:onClientReady", true):on(function (...) Waters:startFishing (...) end);
network:fetch("pixel_fisher:onClientEndCatch", true):on(function (...) Waters:endCatch (...) end);
network:fetch("pixel_fisher:onInventoryRequestUse", true):on(function (...) Waters:onPlayerEquipRod (...) end);
network:fetch("pixel_inv:onServerUpdateHotbar", true):on(function (...) Waters:onPlayerUnquipRod (...) end);
network:fetch("pixel_fisher:onPlayerStopFishing", true):on(function (...) Waters:stopCatch (...) end);
network:fetch("pixel_fisher:onPlayerInteraction", true):on(function (...) Sell:openSell (...)end);
network:fetch("pixel_fisher:onClientSellFish", true):on(function (...) Sell:makeSell (...) end);



addEventHandler("onResourceStart", resourceRoot, function () 
    imports.interactions:createInteraction("fishing_sell", {
        { title = "Vender Peixes", network = "pixel_fisher:onPlayerInteraction", isRemote = true }
    }, 10, 0, -70);
end);


addEventHandler("onPlayerQuit", root, function ()
    Waters:destroyCatch(source) 
end)
