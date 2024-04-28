local imports = {
  core = exports.pixel_core
}

addEventHandler("onResourceStart", resourceRoot, function () 
  local showrooms = imports.core:getShowroomsMeta();

  if (showrooms) then 
    SHOWROOMS:registerByMeta (showrooms);
  end
end);

addEventHandler("onMarkerHit", root, function (player) 
  SHOWROOMS:enter (source, player);
end)


network:fetch("pixel_conce:onClientBuy", true):on(function (...) SHOWROOMS:buyVehicle(...) end);