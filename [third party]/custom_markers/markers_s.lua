--[[
	@author: TheTroll
	@resource: custom_markers
	@copyright 2017 TheTroll
--]]

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
        text = text or false,
		network = network,
		key = key,
	});

	return marker
end