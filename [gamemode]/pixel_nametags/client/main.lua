local NAMETAG_OFFSET = 0.80
local NAMETAG_WIDTH = 100
local NAMETAG_HEIGHT = 1
local NAMETAG_MAX_DISTANCE = 5
local NAMETAG_SCALE = 3.5

local nametagFont = exports.pixel_assets:useCreateFont("opensans.Medium", 12)
local streamedPlayers = {}
local nametagsVisible = true
local crownTexture




local function dxDrawNametagText(text, x1, y1, x2, y2, color, scale)
	dxDrawText(text, x1 - 1, y1, x2 - 1, y2, tocolor(0, 0, 0, 100), scale, nametagFont, "center", "center")
	dxDrawText(text, x1 + 1, y1, x2 + 1, y2, tocolor(0, 0, 0, 100), scale, nametagFont, "center", "center")
	dxDrawText(text, x1, y1 - 1, x2, y2 - 1, tocolor(0, 0, 0, 100), scale, nametagFont, "center", "center")
	dxDrawText(text, x1, y1 + 1, x2, y2 + 1, tocolor(0, 0, 0, 100), scale, nametagFont, "center", "center")
	dxDrawText(text, x1, y1, x2, y2, color, scale, nametagFont, "center", "center")
	return dxGetTextWidth(text, scale, nametagFont)
end

local function showPlayer(player)
	if (not isElement(player)) then
		return false
	end

	if (player == localPlayer) then
		return
	end


	if (getElementType(player) == "player") then 
		setPlayerNametagShowing(player, false)
	end


	streamedPlayers[player] = {
		name = getElementData(player, "id"),
		voice = false,
	}
	return true
end

addEventHandler("onClientRender", root, function ()
	if (getElementData(localPlayer, "state") ~= "world") then return false end

	if not nametagsVisible then
		return
	end

	for player, info in pairs(streamedPlayers) do 
		if (isElement(player)) then 
			if (not info.name) then return false end
			
			local cx, cy, cz = getCameraMatrix()
			local px, py, pz = getElementPosition(player)		
			local x, y = getScreenFromWorldPosition(px, py, pz + NAMETAG_OFFSET)



			if (x and y) then 
				local distance = getDistanceBetweenPoints3D(cx, cy, cz, px, py, pz)
				if distance < NAMETAG_MAX_DISTANCE then
					local a = 255
					local name = info.name
					local scale = 1 / distance * NAMETAG_SCALE
					local width = NAMETAG_WIDTH * scale
					local height = NAMETAG_HEIGHT * scale
					local nx, ny = x - width / 2, y - height / 2
					local r, g, b = 253, 255, 255
					local str = info.voice and "FALANDO" or "("..name..")"
	
					dxDrawNametagText(str, nx, ny, nx + width, ny + height, tocolor(r, g, b, a), scale)
				end
			end
		end
	end
end)



addEventHandler("onClientElementStreamIn", root, function ()
	if getElementType(source) == "player" or getElementType(source) == "ped" then
		showPlayer(source);
	end
end)

addEventHandler("onClientElementStreamOut", root, function ()
	if getElementType(source) == "player" or getElementType(source) == "ped" then
		streamedPlayers[source] = nil
	end
end)

addEventHandler("onClientPlayerQuit", root, function ()
	streamedPlayers[source] = nil
end)

addEventHandler("onClientPlayerJoin", root, function ()
	if isElementStreamedIn(source) then
		showPlayer(source)
	end
end)

addEventHandler("onClientPlayerSpawn", root, function ()
	if isElementStreamedIn(source) then
		showPlayer(source)
	end
end)

addEventHandler("onClientResourceStart", resourceRoot, function ()
	for i, player in ipairs(getElementsByType("player")) do
		if isElementStreamedIn(player) then
			showPlayer(player)
		end
	end

	for i, ped in ipairs(getElementsByType("ped")) do
		if isElementStreamedIn(ped) then
			showPlayer(ped)
		end
	end
end)




addEventHandler("onClientElementDataChange", root, function (theKey, oldValue, newValue)
    if (getElementType(source) == "player") and (theKey == "speaking") then
		streamedPlayers[source].voice = newValue == 1 and true or false;
    end
end)


function setVisible(visible)
	nametagsVisible = not not visible
end