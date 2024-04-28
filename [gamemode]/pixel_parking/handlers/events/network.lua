network:create("pixel_parking:onServerPlayerOpenParking", false);
network:create("pixel_parking:onClientRemoveVehicle", false);
network:create("pixel_parking:onServerForceCloseUI", false);
network:create("pixel_parkings:onColShapeHit", false);


addEvent("web_parking:toRemoveCar", true);
addEvent("web_parking:toClose", true);