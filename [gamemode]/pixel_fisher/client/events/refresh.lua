local imports = {
    assets = exports.pixel_assets;
};


addEventHandler("onClientPreRender", root, Fishers.render, false, "low-999999");

network:fetch("pixel_fisher:onPlayerStartFishing", true):on(function (...) Fishers:startFisher (...);  end);
network:fetch("pixel_fisher:onServerCatch", true):on(function (...) Fishers:onCatchFish (...); end);
network:fetch("pixel_fisher:onPlayerLostCatch", true):on(function (...) Fishers:onPlayerEndCatch (...) end);
network:fetch("pixel_fisher:onPlayerUseFishrod", true):on(function (...) Fishers:makeClientFishingStart ()  end);
network:fetch("pixel_fisher:onServerOpenSell", true):on(function (...) SellHandler:open (...) end);
network:fetch("pixel_fisher:onServerSellFish", true):on(function (...) SellHandler:makeSellUpdate (...)  end);


network:fetch("pixel_fisher:onServerCreateDropSoundEffect", true):on(function (x,y,z) 
    local sound = imports.assets:playSoundFX3D("drop", x,y,z, false, 1);

    setTimer(function () 
        destroyElement(sound);
    end, 2000, 1)
end);

local cacheSound = {};

network:fetch("pixel_fisher:onServerCreateCatchSoundEffect", true):on(function (player, x,y,z) 
    cacheSound[player] = imports.assets:playSoundFX3D("catch", x,y,z, true, 1);
end);

network:fetch("pixel_fisher:onServerDestroyCatchSound", true):on(function (player) 
    if (isElement(cacheSound[player])) then
        destroyElement(cacheSound[player])
    end
end)

addEventHandler("pixel_fisher:onSellFishing", root, function (...) SellHandler:sell (...) end);
addEventHandler("pixel_fisher:onCloseNUI", root, function (...) SellHandler:close (...) end);