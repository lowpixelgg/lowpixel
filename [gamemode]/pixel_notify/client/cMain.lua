sw, sh = guiGetScreenSize()

zoom = 1
local baseX = 1920
local minZoom = 2
if sw < baseX then
  zoom = math.min(minZoom, baseX/sw)
end

sx,sy = guiGetScreenSize();
local px, py = sx/1920, sy/1080
screenW,screenH = (sx/px), (sy/py);

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

MediumBig = dxCreateFont("assets/Montserrat-Medium.ttf", 15*px)
Regular = dxCreateFont("assets/Montserrat-Regular.ttf", 12*px)

alertTypes = {
	info = {"Information", "assets/aw_ui_notify_shadow.png", {255, 255, 255}, "assets/sound.wav"},
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
		dxDrawImage(sx/2-(1920/2)*px, sy/2-(1080/2)*py, 1920*px,1080*py, "assets/aw_ui_notify_shadow.png", 0, 0, 0, tocolor(255, 255, 255, 255*alpha), false)

		dxDrawImage(sx/2-(470/2)*px, sy/2-(-878/2)*py, 49*px,49*py, "assets/aw_ui_notify_warning.png", 0, 0, 0, tocolor(255, 255, 255, 255*alpha), false)
		dxDrawImage(sx/2-(313/2)*px, sy/2-(-910/2)*py, 10*px,17*py, "assets/aw_ui_notify_arrow.png", 0, 0, 0, tocolor(255, 255, 255, 255*alpha), false)

		local progress = (tickCount - infobox.moveDownTick) / (infobox.moveUpTick - infobox.moveDownTick)

		if progress <= 1 then
			hou_circle(sx/2-(470/2)*px, sy/2-(-878/2)*py, 49*px,49*py, tocolor(255, 255, 255, 255*alpha), 0, progress/1*360, 2*px)
		end

		local iconSizeEx = iconSize * 0.75

		if infobox.message[2] then
			dxDrawText(infobox.message[1], sx/2-(230/2)*px, sy/2+(-0/2)*py,  sx/2-(-100/2)*px,sy/2+(1760/2)*py, tocolor(255, 255, 255, 255*alpha), 1, MediumBig, "left", "center", false, false, false, false, false)
			dxDrawText(infobox.message[2], sx/2-(230/2)*px, sy/2+(-0/2)*py,  sx/2-(-100/2)*px,sy/2+(1920/2)*py, tocolor(255, 255, 255, 255*alpha), 1, Regular, "left", "center", false, false, false, false, false)	
		else
			dxDrawText(infobox.message[1], sx/2-(230/2)*px, sy/2+(-0/2)*py,  sx/2-(-100/2)*px,sy/2+(1760/2)*py, tocolor(255, 255, 255, 255*alpha), 1, MediumBig, "left", "center", false, false, false, false, false)
		end
	end, true, "low-999999999"
)