addEventHandler("onClientResourceStart", resourceRoot, function () 
    for blockName, anim in pairs(Anims) do 
        local ifp = engineLoadIFP(anim, "lowpixel."..blockName)
    end
end)