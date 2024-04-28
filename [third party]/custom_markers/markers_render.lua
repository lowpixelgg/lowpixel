local screenSize = Vector2(guiGetScreenSize())
local light = dxCreateTexture("img/light.png", "argb")
local arrow = dxCreateTexture("img/arrow.png", "argb")
local ground = dxCreateTexture("img/ground.png", "argb")
local ground_light_a = dxCreateTexture("img/light_ground_a.png", "argb")
local ground_light_b = dxCreateTexture("img/light_ground_b.png", "argb")
local screenTextFont = exports.pixel_assets:useCreateFont("roboto.Medium", 10)

local anim_type = "foward"
local distance = 50
local animTime = 0
local textFade = {}
local textureFade = {}
local textureCache = {}

local function dxDrawShadowText(text, x1, y1, x2, y2, color, scale, font, alignX, alignY,fade)
	dxDrawText(text, x1 - 1, y1, x2 - 1, y2, tocolor(0, 0, 0, fade/2), scale, font, alignX, alignY)
	dxDrawText(text, x1 + 1, y1, x2 + 1, y2, tocolor(0, 0, 0, fade/2), scale, font, alignX, alignY)
	dxDrawText(text, x1, y1 - 1, x2, y2 - 1, tocolor(0, 0, 0, fade/2), scale, font, alignX, alignY)
	dxDrawText(text, x1, y1 + 1, x2, y2 + 1, tocolor(0, 0, 0, fade/2), scale, font, alignX, alignY)
	dxDrawText(text, x1, y1, x2, y2, color, scale, font, alignX, alignY)
end

local MARKER_ANIMATION_SPEED = 0.004

local MARKER_ICON_SIZE = 6
local MARKER_ANIMATION_SIZE = 0.3


local MARKER_TEXT_SIZE = 5
local MARKER_TEXT_ANIMATION_SIZE = 0.1
local MARKER_TEXT_OFFSET = Vector3(0, 0, 2)
local screenTextBottomOffset = 100

local function drawScreenText(text, fade)
	local yOffset = math.sin(getTickCount() * MARKER_ANIMATION_SPEED) * 5

	dxDrawShadowText(
		text, 
		0, 
		0, 
		screenSize.x, 
		screenSize.y - screenTextBottomOffset + yOffset, 
		tocolor(255, 255, 255, fade), 
		1, 
		screenTextFont, 
		"center", 
		"bottom",
		fade
	)	
end

addEventHandler("onClientPreRender", root, 
	function()
		for i, v in ipairs(getElementsByType("colshape", true)) do
			if getElementData(v, "custom_rectangle") then
				local mx, my, mz = getElementPosition(v)
				local x2, y2, z2 = getElementPosition(localPlayer)
				local distanceBetweenPoints = getDistanceBetweenPoints3D(mx, my, mz, x2, y2, z2)

				if (distanceBetweenPoints < distance) then
					local data = getElementData(v, "custom_rectangle")
					local x, y, z = unpack(data.pos)
					local t = getTickCount()
					local size = 5
					local size_light = 1
					local color = data.active and tocolor(unpack(data.activeColor)) or tocolor(unpack(data.idleColor))
					local px, py, pz = getElementPosition(localPlayer)
	
					
					dxDrawMaterialLine3D( x, y, z-0.950, x, y+ size, z-0.950, ground, size,color,  false, x, y, z)
					dxDrawMaterialLine3D(x, y+size, z, x, y+size,  z-0.950, ground_light_a, size, color,  x,y,z)
					dxDrawMaterialLine3D(x, y+0.001, z, x, y+0.001,  z-0.950, ground_light_a, size, color,  x,y,z)
					dxDrawMaterialLine3D(x+2.500, y+2.5, z, x+2.500, y+2.5, z-0.950, ground_light_a, size, color, false, x-12500,y,z)
					dxDrawMaterialLine3D(x-2.500, y+2.5, z, x-2.500, y+2.5, z-0.950, ground_light_a, size, color, false, x-12500,y,z)
					
					if (not textFade[data.colShape]) then textFade[data.colShape] =  0 end
	
					if (isElementWithinColShape(localPlayer, data.colShape)) then 
						textFade[data.colShape] = math.min(textFade[data.colShape] + 5, 255);
					else
						textFade[data.colShape] = math.max(textFade[data.colShape] - 5, 0);
					end
					
	
					if (data.text) then 
						drawScreenText(data.text, textFade[data.colShape] and textFade[data.colShape] or 0)
					end
	
					if (not isElement(data.texture) and not textureCache[data.texture]) then 
						textureCache[data.texture] = dxCreateTexture(data.texture, "dxt5")
					end
	
					if (isElement(textureCache[data.texture])) then 
						local textSize = MARKER_TEXT_SIZE
						local textAnimationOffset = math.sin(t * MARKER_ANIMATION_SPEED) * MARKER_TEXT_ANIMATION_SIZE
						
						if (not textureFade[data.colShape]) then textureFade[data.colShape] =  0 end
	
						if (not isElementWithinColShape(localPlayer, data.colShape)) then 
							textureFade[data.colShape] = math.min(textureFade[data.colShape] + 5, 255);
						  else
							textureFade[data.colShape] = math.max(textureFade[data.colShape] - 5, 0);
						end
	
						dxDrawMaterialLine3D(
							x, 
							y+2.5,
							z + textSize / 2 + MARKER_TEXT_OFFSET.z + textAnimationOffset,
							x,
							y+2.5,
							z - textSize / 2 + MARKER_TEXT_OFFSET.z + textAnimationOffset,
							textureCache[data.texture],
							textSize,
							tocolor(255,255,255, textureFade[data.colShape]), false
						)
					end
				end

			end
		end
		
		for i, v in ipairs(getElementsByType("marker", true)) do
			if getElementData(v, "custom_marker") then
				local x, y, z = getElementPosition(v)
				local x2, y2, z2 = getElementPosition(localPlayer)
				local distanceBetweenPoints = getDistanceBetweenPoints3D(x, y, z, x2, y2, z2)
				local r, g, b, a = getMarkerColor(v)
				if (distanceBetweenPoints < distance) then
					local size = getMarkerSize(v)
					if anim_type == "back" then
						local progress = (getTickCount() - animTime) / 1500
						position = math.floor(interpolateBetween(0, 0, 0, 200, 0, 0, progress, "InQuad"))
						if(progress > 1) then
							anim_type = "foward"
							animTime = getTickCount()
						end
					else
						local progress = (getTickCount() - animTime) / 1500
						position = math.floor(interpolateBetween(200, 0, 0, 0, 0, 0, progress, "OutQuad"))
						if(progress > 1) then
							anim_type = "back"
							animTime = getTickCount()
						end
					end
					
					dxDrawMaterialLine3D(x, y, z+1+1+(position/1000), x, y, z+1+(position/1000), arrow, 1, tocolor(r, g, b, 200))
				
					dxDrawMaterialLine3D(x+size, y+size, z+0.04, x-size, y-size, z+0.04, light, size*3, tocolor(r, g, b, 155), x, y, z)
				end
			end
		end
	end, false, "low-99999"
)