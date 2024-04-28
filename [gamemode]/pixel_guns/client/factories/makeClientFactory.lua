ClientGun = {};


function ClientGun:onClientReload ()
    if (getPedWeaponSlot(localPlayer) == 0) then return end
    network:emit("pixel_guns:onClientReload", true, false, localPlayer, getPedWeapon(localPlayer));
end

addEventHandler("onClientResourceStart", resourceRoot, function  () 
    bindKey("r", "down", function () ClientGun:onClientReload () end);
end)