function calculateDifference(x1, y1, z1, x2, y2, z2)
    local distance = math.sqrt((x2 - x1)^2 + (y2 - y1)^2 + (z2 - z1)^2) 
    local meters = math.floor(distance)
    local centimeters = math.floor((distance - meters) * 100)
    
    
    if (centimeters >= 0) then 
        return string.format("%s.%sm", meters, centimeters);
    elseif (meters < 0) then
        return string.format("%sm", meters, centimeters);
    end
end

function dxDrawShadowText(text, x1, y1, x2, y2, color, scale, font, alignX, alignY,fade)
	dxDrawText(text, x1 - 1, y1, x2 - 1, y2, tocolor(0, 0, 0, fade/2), scale, font, alignX, alignY)
	dxDrawText(text, x1 + 1, y1, x2 + 1, y2, tocolor(0, 0, 0, fade/2), scale, font, alignX, alignY)
	dxDrawText(text, x1, y1 - 1, x2, y2 - 1, tocolor(0, 0, 0, fade/2), scale, font, alignX, alignY)
	dxDrawText(text, x1, y1 + 1, x2, y2 + 1, tocolor(0, 0, 0, fade/2), scale, font, alignX, alignY)
	dxDrawText(text, x1, y1, x2, y2, color, scale, font, alignX, alignY)
end