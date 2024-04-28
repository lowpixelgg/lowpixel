local _, sy = guiGetScreenSize()
local scale = math.min(math.max(sy / 1080, 0.75), 2)

local ASSETS_PATH 	= "assets/"
local SHADERS_PATH 	= "shaders/"
local TEXTURES_PATH = "textures/"
local FONTS_PATH 	= "fonts/"
local SOUNDS_PATH   = "sound/"

local cache = {
    textures = {},
    shaders = {},
    fonts = {}
}

local function setupElementParent (element, resource)
    if not element or not resource then
        return false
    end

    setElementParent(element, getResourceDynamicElementRoot(resource))
    return true
end


function useCreateShader (name, ...)
	if not Shaders[name] then return false end

    local element = dxCreateShader(Shaders[name], ...)
    setupElementParent(element, sourceResource)

    return element
end



function useCreateTexture (name, ...)
	local element = dxCreateTexture(ASSETS_PATH .. TEXTURES_PATH .. tostring(name), ...)
	setupElementParent(element, sourceResource)
	return element
end

function useCreateFont (name, ...)
	if not Fonts[name] then return false end

    local element = dxCreateFont(Fonts[name], ...)
    setupElementParent(element, sourceResource)

    return element
end


function useShaderCached (name, ...)
	if not name then
		return false
	end

    if cache.shaders[name] then
	    return cache.shaders[name]
	end

    cache.shaders[name] = useCreateShader(name, ...)
    setupElementParent(cache.shaders[name], sourceResource)

    return cache.shaders[name]
end


function useTextureCached(name, ...)
	if not name then
		return false
	end
	if cache.textures[name] then
		return cache.textures[name]
	end
	cache.textures[name] = useCreateTexture(name, ...)
	setupElementParent(cache.textures[name], sourceResource)
	return cache.textures[name]
end

function useFontCached(name, ...)
	if not name then
		return false
	end
	if cache.fonts[name] then
		return cache.fonts[name]
	end
	cache.fonts[name] = useCreateFont(name, ...)
	setupElementParent(cache.fonts[name], sourceResource)
	return cache.fonts[name]
end


function playSoundFX(name, loop, vol)
	if not Sounds[name] then return false end
	
	local sound = playSound(Sounds[name], loop)
	setSoundVolume(sound, vol)

	return sound
end

function playSoundFX3D(name, x,y,z, loop, vol)
	if not Sounds[name] then return false end
	
	local sound = playSound3D(Sounds[name], x,y,z, loop)
	setSoundVolume(sound, vol);
	return sound
end