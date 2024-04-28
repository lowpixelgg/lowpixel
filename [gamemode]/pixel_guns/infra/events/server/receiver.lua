network:fetch("pixel_guns:useItem", true):on(function (...) Guns:useItem (...); end);
network:fetch("pixel_inv:onServerUpdateHotbar", true):on(function (...) Guns:onHotbarUpdate (...) end);
network:fetch("pixel_guns:onClientReload", true):on(function (...) Guns:onPlayerReload (...) end);

addEventHandler("onPlayerWeaponFire", root, function (...) Guns:onWeaponFire (source, ...) end);