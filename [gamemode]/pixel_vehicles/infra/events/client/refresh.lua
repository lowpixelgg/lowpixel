local imports = {
  assets = exports.pixel_assets,
};

local live_vehicles = {};

network:fetch("pixel_vehicles:onServerUnlockVehicle", true):on(function (vehicle, state) 
    local cx, cy, cz = getElementPosition(vehicle);
    local px, py, pz = getElementPosition(localPlayer);
    local distance = getDistanceBetweenPoints3D(px, py, pz, cx, cy, cz); 
    
  
    if (math.floor(distance) <= 10) then 
        if (state == "lock") then 
            imports.assets:playSoundFX3D("car_lock", cx, cy, cz, false, 1);
        elseif (state == "unlock") then
            imports.assets:playSoundFX3D("car_unlock", cx, cy, cz, false, 1);
        end
    end
end);


addEventHandler("onClientResourceStart", resourceRoot, function () 
	for i, vehicle in ipairs(getElementsByType("vehicle")) do
		local id = getElementData(source, "_id")
		
		if (id) then 
			if (not live_vehicles[source]) then 
				live_vehicles[source] = vehicle:create(source);
			end
		end
	end
end);


addEventHandler("onClientRestore", root, function () 
	for i, vehicle in ipairs(getElementsByType("vehicle")) do
		local id = getElementData(source, "_id")
		
		if (id) then
			if (not live_vehicles[source]) then 
				live_vehicles[source] = vehicle:create(source);
			end
		end
	end
end);


addEventHandler("onClientElementStreamIn", root, function () 
	if (getElementType(source) == "vehicle") then
		local id = getElementData(source, "_id")
		
		if (id) then 
			live_vehicles[source] = vehicle:create(source);
		end
	end
end);


addEventHandler("onClientElementStreamOut", root, function () 
	if (getElementType(source) == "vehicle") then
		local id = getElementData(source, "_id");
		
		if (id) then 
			local veh = live_vehicles[source]
			if (not veh) then return false end
			
			veh:destroy();
			live_vehicles[source] = nil;
		end
	end
end);


addEventHandler("onClientElementDestroy", root, function () 
	if (getElementType(source) == "vehicle") then
		local id = getElementData(source, "_id");
		
		if (id) then 
			local veh = live_vehicles[source]
			if (not veh) then return false end
			
			veh:destroy();
			live_vehicles[source] = nil;
		end
	end
end)


addEventHandler("onClientElementDataChange", root, function (dataName, oldValue) 
	if (getElementType(source) ~= "vehicle") then
		return false;
	end
	
	local id = getElementData(source, "_id");
	
	if (id) then 
		local veh = live_vehicles[source]

		if (veh) then
			if (dataName == "_radio.url") then
				veh.radio:play()
			end
		end
	end
end);


addEventHandler("onClientPreRender", root, function () 
	for vehIndex, veh in pairs(live_vehicles) do 
		veh:update();
	end
end, false, "low-99999");


addEventHandler("onClientKey", root, function (key, down) 
	if (not down) then
		return;
	end
	
	if (key ~= "v") then
		return;
	end
	
	if (not isPedInVehicle(localPlayer)) then 
		return;
	end
	
	
	if (camera.isActive) then
		setCameraTarget(localPlayer);
		setCameraMatrix(0, 0, 0);
		setCameraTarget(localPlayer);
		
		camera:stop();
	else
		camera:start();
	end
end);


network:fetch("pixel_vehicles:onWidgetReady", true):on(function (widget)
	local _, vehicle = table.find(live_vehicles, function (v) return v.vehicleId == widget.name end)


	if (vehicle) then 
		if (widget.id == vehicle.vehicleId.."_lock_widget") then 
			network:emit("pixel_vehicles:onClientUseAction", true, false, "lock", localPlayer, vehicle.vehicle);
		end
	end
end)