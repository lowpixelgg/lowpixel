local imports = {
    locales = exports.pixel_lang
}

WaterAlert = newclass "WaterAlert";



function WaterAlert:init()
    self.isRendering = false;
    self.fade = 0;
end


function WaterAlert:render()
    local yOffset = math.sin(getTickCount() * 0.004) * 5
    
    dxDrawShadowText(
        imports.locales:getString("pixel_fisher:water_alert_string"), 
        0, 
        0, 
        scw, 
        sch - 100 + yOffset, 
        tocolor(255, 255, 255, 255), 
        1, 
        fonts.RobotoMedium, 
        "center", 
        "bottom",
        255
    );
end


function WaterAlert:setIsRendering (bool) 
    self.isRendering = bool;
end