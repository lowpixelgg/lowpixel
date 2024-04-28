addEventHandler("onResourceStart", resourceRoot, HunterZones.update);
addEventHandler("onPedWasted", root, HunterZones.onAnimalWasted);

network:fetch("pixel_hunter:onClickBone", true):on(function (...) HunterZones:onPlayerCollectS (...) end);
network:fetch("pixel_hunter:onClientCollectEnd", true):on(function (...) HunterZones:onPlayerCollectF (...) end);