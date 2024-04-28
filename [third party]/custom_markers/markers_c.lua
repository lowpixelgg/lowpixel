local keyTimer;
local activeMarker;
local hitElement;

function createCustomMarker(x, y, z, type, size, r, g, b)
	if x and y and z and type and size and r and g and b then
		local marker = createMarker(x, y, z, type, size, r, g, b, 0)
		setElementData(marker, "custom_marker", true)
	
		return marker
	end
end



function createRectangleMarker (pos, color, active, texture, text, network, key)
	local x,y,z = unpack(pos)
	local marker = createColSphere(x, y+2.5, z, 3.4)
	
	setElementData(marker, "custom_rectangle", {
		pos = pos, 
		idleColor = color or { 255,255,255 },
		activeColor = active or { 255,0,0 },
		active = false,
		colShape = marker,
        texture = texture or false,
		network = network,
		key = key,
        text = text or false,
	});

	return marker
end

function onKey (b,s) 
	local marker = getElementData(activeMarker, "custom_rectangle")

	if (b == marker.key and s == true) then 
		network:emit(marker.network, true, false,  activeMarker, hitElement);
		network:emit(marker.network, false, false,  activeMarker, hitElement);
		
		removeEventHandler("onClientKey", root, onKey)
	end
end

function onClientColShapeHit(element, c) 
	local marker = getElementData(source, "custom_rectangle")

	if (marker) then
		if (marker.key) then 
			if (isElementWithinColShape(localPlayer, source)) then 
				addEventHandler("onClientKey", root, onKey)
			end
		else
			network:emit(marker.network, true, false,  source, element);
			network:emit(marker.network, false, false,  source, element)
		end

			
		marker.active = true;

		if (not activeMarker and not hitElement) then 
			activeMarker = source;
			hitElement = element;
		end

		setElementData(source, "custom_rectangle", marker)
	end
end 



function onClientColShapeLeave() 
	local marker = getElementData(source, "custom_rectangle")

	if (marker) then 
		marker.active = false;
		activeMarker = nil;
		hitElement = nil;
        setElementData(source, "custom_rectangle", marker);
	end

	removeEventHandler("onClientKey", root, onKey)
end 

addEventHandler("onClientColShapeHit", root, onClientColShapeHit)
addEventHandler("onClientColShapeLeave", root, onClientColShapeLeave)

network:fetch("custom_markers:rectangleMarker", true):on(function (...) 
    createRectangleMarker(...);
end);