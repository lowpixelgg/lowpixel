--screenX, screenY = guiGetScreenSize()
local screenX, screenY = guiGetScreenSize ()
local px, py = screenX/1920, screenY/1080

function reMap(x, in_min, in_max, out_min, out_max)
	return (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
end

responsiveMultipler = reMap(screenX, 1024, 1920, 0.75, 1)

function resp(num)
	return num * responsiveMultipler
end

function respc(num)
	return math.ceil(num * responsiveMultipler)
end

function getResponsiveMultipler()
	return responsiveMultipler
end

local fonts = {

	[1] = dxCreateFont("assets/Montserrat-SemiBold.ttf", 13);
    [2] = dxCreateFont("assets/Montserrat-Regular.ttf", 10);
    [3] = dxCreateFont("assets/Montserrat-SemiBold.ttf", 14);
    [4] = dxCreateFont("assets/Montserrat-Regular.ttf", 11);
    [5] = dxCreateFont("assets/Montserrat-SemiBold.ttf", 11);

}

alertTypes = {
	info = {"Informação", "files/images/shadow.png", {255, 255, 255}, "files/sounds/bulle.wav"},
	warn = {"Aviso", "files/images/shadow.png", {255, 255, 255}, "files/sounds/bulle.wav"},
}

local infobox = {}
local iconSize = respc(35)

function showInfobox(type, msg, msg2, imgPath, color)
	if not (type and msg) then
		return
	end

	if msg2 and utf8.len(msg2) <= 0 then
		msg2 = nil
	end
	
	if imgPath then
		infobox.icon = imgPath
	else
		infobox.icon = alertTypes[type][2]
	end

	if color then
		infobox.color = color
	else
		infobox.color = alertTypes[type][3]
	end
	
	local messageWidth = math.max(dxGetTextWidth(msg, 1, fonts[1]), dxGetTextWidth(msg2 or "", 1, fonts[5])) + 20
	local tileWidth = iconSize + messageWidth
	
	infobox.tileWidth = tileWidth
	infobox.tileHeight = math.max(dxGetFontHeight(1, fonts[5]) * (msg2 and 2 or 1) + 10, respc(40))
	infobox.tilePosX = (screenX - tileWidth) / 2
	
	infobox.moveDownTick = getTickCount()
	infobox.moveUpTick = infobox.moveDownTick + 1000 + ((msg and utfLen(msg) or 0) + (msg2 and utfLen(msg2) or 0)) * 125
	
	infobox.state = true
	infobox.message = {msg, msg2}
	
	if alertTypes[type][4] then
		playSound(alertTypes[type][4])
	end

	if msg2 then
	--	outputConsole("[" .. alertTypes[type][1] .. "]: " .. msg .. ", " .. msg2)
	else
	--	outputConsole("[" .. alertTypes[type][1] .. "]: " .. msg)
	end
end
addEvent("showInfobox", true)
addEventHandler("showInfobox", getRootElement(), showInfobox)

addEventHandler("onClientRender", getRootElement(),
	function ()
		if not infobox or not infobox.state then
			return
		end
		
		local tickCount = getTickCount()
		local x = infobox.tilePosX
		local y = -infobox.tileHeight
		local alpha = 0
		
		if tickCount >= infobox.moveDownTick and tickCount <= infobox.moveUpTick then
			alpha, y = interpolateBetween(0, -infobox.tileHeight, 0, 1, 50, 0, (tickCount - infobox.moveDownTick) / 500, "OutQuad")
		elseif tickCount >= infobox.moveUpTick then
			local progress = (tickCount - infobox.moveUpTick) / 500
			alpha, y = interpolateBetween(1, 50, 0, 0, -infobox.tileHeight, 0, progress, "OutQuad")
		
			if progress > 1 then
				infobox.state = false
			end
		end
		dxDrawImage(0, 0, screenX, screenY, "files/images/shadow.png", 0, 0, 0, tocolor(255, 255, 255, 255*alpha), false)

		local progress = (tickCount - infobox.moveDownTick) / (infobox.moveUpTick - infobox.moveDownTick)

		if progress <= 1 then
			dxDrawRectangle(screenX/2-(200/2)*px, screenY/2+(990/2)*py, 200*px, 1*py, tocolor(255, 255, 255, alpha * 67))
			dxDrawRectangle(screenX/2-(200/2)*px, screenY/2+(990/2)*py, 200*px*(1 - progress), 1*py, tocolor(255, 255, 255, alpha * 255))
		end

		local iconSizeEx = iconSize * 0.75

		--dxDrawImage(math.floor(x + (infobox.tileHeight - iconSizeEx) / 2), math.floor(y + (infobox.tileHeight - iconSizeEx) / 2), iconSizeEx, iconSizeEx, infobox.icon, 0, 0, 0, tocolor(infobox.color[1], infobox.color[2], infobox.color[3], alpha * 255))
		
		if infobox.message[2] then
			dxDrawText(infobox.message[1], x, screenY/2+(2630/2)*py, x + infobox.tileWidth, y + infobox.tileHeight, tocolor(255, 255, 255, alpha * 255), 1, fonts[1], "center", "center", true, false, false, true)
			dxDrawText(infobox.message[2], x, screenY/2+(2750/2)*py, x + infobox.tileWidth, y + infobox.tileHeight, tocolor(255, 255, 255, alpha * 255), 1, fonts[4], "center", "center", true, false, false, true)
		else
			--dxDrawText(infobox.message[1], x + infobox.tileHeight, y, x, y + infobox.tileHeight, tocolor(255, 255, 255, alpha * 255), 0.85, Roboto14, "center", "center", true, false, false, true)
		end
	end, true, "low-999999999"
)