function setPalette(tTexture)
	if tTexture then
		if isElement(tTexture) then
			if getElementType(tTexture)=="texture" then
				triggerEvent( "switchPalette", resourceRoot, false )
				paletteTable.customPalette = tTexture
				triggerEvent( "switchPalette", resourceRoot, true )
		return true				
			else
				return false
			end
		else
			return false
		end
	else
		return false
	end
end

function resetPalette()
	if isElement( paletteTable.customPalette ) then
		triggerEvent( "switchPalette", resourceRoot, false )
		triggerEvent( "switchPalette", resourceRoot, true )
		return true
	else
		return true
	end
end

function setPaletteEnabled(isTrue)
	if (type(isTrue) ~= "boolean") then
		return false
	else
		paletteTable.paletteEnabled = isTrue
		setEffectVariables()
		return true
	end
end

function setChromaticEnabled(isTrue)
	if (type(isTrue) ~= "boolean") then
		return false
	else
		paletteTable.chromaticEnabled = isTrue
		setEffectVariables()
		return true
	end
end

function setOrderPriority(setValue)
	if (type(setValue) ~= "number") then
		return false
	else
		paletteTable.orderPriority = setValue
		return true
	end
end
