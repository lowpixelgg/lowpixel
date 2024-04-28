ParkingUI = nil;

network:fetch("pixel_parking:onServerPlayerOpenParking", true):on(function (parking, cars) 
  ParkingUI = parkingUI (parking, cars);
end);


network:fetch("pixel_parking:onServerForceCloseUI", true):on(function () 
  ParkingUI:stop();
end);

addEventHandler("web_parking:toClose", root, function () 
  ParkingUI:stop();
end);


addEventHandler("web_parking:toRemoveCar", root, function (car) 
  network:emit("pixel_parking:onClientRemoveVehicle", true, false, ParkingUI.id, localPlayer, fromJSON(car));
end);