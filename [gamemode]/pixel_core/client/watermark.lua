local imports = {
    locales = exports.pixel_lang
}


local scw, sch = guiGetScreenSize()


local fps = 0
local nextTick = 0
local worldState = 0;

function getCurrentFPS()
    return math.floor(fps)
end


local modes = {
    [1] = {imports.locales:getString("pixel_core:voicemodes_normal"), "#67eb34"},
    [2] = {imports.locales:getString("pixel_core:voicemodes_whisper"), "#eb9c34"},
    [3] = {imports.locales:getString("pixel_core:voicemodes_shouting"), "#eb3434"}
}

local function updateFPS(msSinceLastFrame)
    local now = getTickCount()
    if (now >= nextTick) then
        fps = (1 / msSinceLastFrame) * 1000
        nextTick = now + 1000
    end
end
addEventHandler("onClientPreRender", root, updateFPS)

addEventHandler("onClientRender", root, function ()
    if (getElementData(localPlayer, "state") == "world") then 
        dxDrawImage(10, 10, 30, 30, "assets/logo_hd.png", 0, 0, 0, tocolor(255,255,255,100))
        
        local mode = getElementData(localPlayer, "voip:mode")

        if (not mode ) then return false end
        local voiceModes = imports.locales:getString("pixel_core:voicemode")..modes[mode][2]..""..modes[mode][1]
        local voice = (getElementData(localPlayer, "voip:talking") == 1) and (modes[mode][2]..imports.locales:getString("pixel_core:voicemodes_state")) or voiceModes

        dxDrawText(voice.." ⚈ #ffffff | FPS: "..getCurrentFPS().." | lowpixel.gg", 0,0, scw, sch, tocolor(255,255,255, 100), 1.0, "default", "right", "bottom", false, false, false, true)
    end
end)