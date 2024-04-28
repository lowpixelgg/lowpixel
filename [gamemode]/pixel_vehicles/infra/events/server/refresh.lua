local imports = {
   notify = exports.pixel_notify,
};


network:fetch("pixel_vehicles:onClientUseAction", true):on(function (action, player, vehicle) 
    if (action == "lock") then 
        VehFactory:setVehicleLocked(player, vehicle);
    end
end);


network:fetch("pixel_vehicles:onInventoryUseItem", true):on(function (source, item) 
    if (not isPedInVehicle(source)) then
        imports.notify:showInfobox(source, "info", "Veiculos:", "Você precisa estar em um veiculo para usar este item.")
        return;
    end

    local vehicle = getPedOccupiedVehicle(source);

    if (vehicle) then 
        VehFactory:setVehicleEngineByItem(source, item, vehicle)
    end
end);


network:fetch("pixel_vehicles:onClientOpenChest", true):on(function (element, player) 
    VehFactory:getVehicleChest(player, element);
end)



addEventHandler("onElementDestroy", root, function () 
    if (getElementType(source) == "vehicle") then 
        VehFactory:destroy(getElementData(source, "_id"));
    end
end);


network:fetch("pixel_core:onWorldRequestClearing", true):on(function () 
    VehFactory:clear();
end);


setTimer(function () 
    VehFactory:clearVehicles ()
end, 1800000, 0)