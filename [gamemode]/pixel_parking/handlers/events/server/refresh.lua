

network:fetch("pixel_parking:onClientRemoveVehicle", true):on(function (id, player, data) 
  Parkings:exitVehicle (id, player, data);
end)


network:fetch("pixel_parkings:onColShapeHit", true):on(function (source, type)
  local id = Parkings:getParkingIdByElement(source);
  
  if (isElement(type) and getElementType(type) == "vehicle") then 
    Parkings:enterVehicle (id, type);
  elseif (isElement(type) and getElementType(type) == "player" and not isPedInVehicle(type)) then
    Parkings:getParking (id, type)
  end
end);