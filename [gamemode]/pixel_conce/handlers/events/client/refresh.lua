network:fetch("pixel_conce:onServerPlayerEnter", true):on(function (showroom) 
    SHOWROOMS:enter(showroom);
end)

network:fetch("pixel_cutscene:onClientCutsceneFinished", true):on(function () 
    SHOWROOMS:enter();
end)


network:fetch("pixel_conce:onServerPlayerBuyVehicle", true):on(function () 
    SHOWROOMS:exit();
end);


addEventHandler("onClientResourceStart", resourceRoot, function () 
    SHOWROOMS:createTooltips();
end);


addEventHandler("onClientPreRender", root, function () 
    SHOWROOMS:renderTooltips ();
end, false, "low-9999");