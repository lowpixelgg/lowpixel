function differenceBetweenAngles(firstAngle, secondAngle)
	local difference = secondAngle - firstAngle
	while difference < -180 do
		difference = difference + 360
	end
	while difference > 180 do
		difference = difference - 360
	end
	return difference
end

function wrapAngle(value)
	if not value then
		return 0
	end
	value = math.mod(value, 360)
	if value < 0 then
		value = value + 360
	end
	return value
end

function getVectorAngle(vector)
	return math.atan2(vector.y, vector.x)
end


-- local showComponents = false
-- bindKey("k", "down", function() showComponents = not showComponents end)


-- addEventHandler("onClientRender", root,
--     function()

--         if (showComponents) then
--             for _, veh in pairs(getElementsByType("vehicle", root, true)) do
--                 for compname in pairs(veh:getComponents()) do
--                     local x, y = getScreenFromWorldPosition(veh:getComponentPosition(compname, "world"))

--                     if (x) then
--                         dxDrawText(compname, x, y, 0, 0, tocolor(255, 255, 255))
--                     end
--                 end 
--             end
--         end

--     end
-- )