ConfigurationComponent = newclass "ConfigurationComponent"


function ConfigurationComponent:init () 
    self.data = {
        {id = "maxSpeed", title = imports.locales:getString("pixel_conce:configuration_data_maxSpeed"), svg = nil, value = 1, max = 600},
        {id = "acceleration", title = imports.locales:getString("pixel_conce:configuration_data_acceleration"), svg = nil, value = 1, max = 200},
        {id = "brakePower", title = imports.locales:getString("pixel_conce:configuration_data_brakePower"), svg = nil, value = 1, max = 60},
        {id = "gears", title = imports.locales:getString("pixel_conce:configuration_data_gears"), svg = nil, value = 1, max = 10},
        {id = "traction", title = imports.locales:getString("pixel_conce:configuration_data_traction"), svg = nil, value = 1, max = 100},
        {id = "fuel", title = imports.locales:getString("pixel_conce:configuration_data_fuel"), svg = nil, value = 1, max = 100},
        {id = "storage", title = imports.locales:getString("pixel_conce:configuration_data_storage"), svg = nil, value = 1, max = 400},
    };
    
    self.rectangleWidth = 300;
    self.rectangleHeight = 370;
    self.offSetX = 50;
    self.offSetY = 0;

    self.configsUI = {}
    self.anim = 'enter'
    self.tick = getTickCount()
    self.isRendering = true
    self.fade = 0

    createSlider("progressBackground", self.rectangleWidth, respo(5));
    createSlider("progressLine", respo(10), respo(5));
    
    for i,v in ipairs(self.data) do 
        self.data[i].svg = createSlider(v.id, self.rectangleWidth, respo(5));
    end
end


function ConfigurationComponent:slider (id, title, x, y, value, max, alpha) 
    imports.ui:renderSvg("progressBackground", x, y, tocolor(255, 255, 255, self.fade/10), 0, false, false);
        
    dxDrawText(title, x, y - 20, self.rectangleWidth, y - respo(20), tocolor(255, 255, 255, self.fade), 1.0, fonts.ExoMedium10, "left", "center");
    
    local sstring_value = "";
    
    if (id == "maxSpeed" or id == "acceleration" or id == "brakePower") then 
        sstring_value = value.."KM/h"
    elseif (id == "gears") then
        sstring_value = value;
    elseif (id == "traction") then
        if (value == 1) then
            sstring_value = imports.locales:getString("pixel_conce:slider_traction_front");
        else
            sstring_value = imports.locales:getString("pixel_conce:slider_traction_back");
        end
    elseif (id == "fuel" or id == "storage") then
        sstring_value = value.."L";
    end
    
    dxDrawText(sstring_value, x, y - 20, x + self.rectangleWidth, y - respo(20), tocolor(255, 255, 255, self.fade/2), 1.0, fonts.ExoMedium10, "right", "center");
    
    local width = imports.ui:getSvgRectWidth(id) - 4;
    
    
    local interpolate = interpolateBetween(0,0,0, (value / max) * (self.rectangleWidth - 4), 0,0, (getTickCount() - self.tick) / 1300, 'OutQuad');
    
    imports.ui:setSvgRectWidth (id, interpolate);   
    
    
    imports.ui:renderSvg(id, x, y, tocolor(178, 62, 62, self.fade), 0, false, true);
    imports.ui:renderSvg("progressLine", x + width, y, tocolor(255, 255, 255, self.fade), 90, false, true);
end



function ConfigurationComponent:render () 
    if (self.isRendering) then 
        self.fade = math.min(self.fade + 5, 255);
    else
        self.fade = math.max(self.fade - 5, 0);
    end
    
    local startX, startY = imports.ui:createLayoutBox("showroom_config", self.rectangleWidth, self.rectangleHeight, respo(self.offSetX), respo(self.offSetY), "right", "center", false)

    dxDrawImage(startX, startY, respo(13), respo(13), "assets/images/icons/config.png", getTickCount()/20,0,0, tocolor(255,255,255, self.fade))
    
    local sstring_configs = imports.locales:getString("pixel_conce:slider_configs");
    local sstring_configs_size = respo(dxGetTextWidth(sstring_configs))
    local padding = respo(30)
    local lineWidth = (sstring_configs_size + padding) + respo(10)
    
    
    dxDrawText(sstring_configs, startX + 20, startY, respo(self.rectangleWidth), startY + respo(13), tocolor(255, 255, 255, self.fade), 1.0, fonts.Outfit94, "left", "center")
    dxDrawRectangle(startX + lineWidth, startY + 9, self.rectangleWidth - lineWidth , respo(1), tocolor(255,255,255, self.fade/5))
    
    
    for configIndex, config in ipairs(self.data) do
        local sliderY = (startY + respo(60)) + (configIndex - 1) * ((respo(50)))
        self:slider(config.id, config.title, startX, sliderY, config.value, config.max, self.fade)
    end
end


function ConfigurationComponent:setVehicle (vehicle) 
    self.tick = getTickCount()
        
    for configIndex, configValue in pairs(vehicle:getSettings()) do         
        for k,v in ipairs(self.data) do 
            if v.id == configIndex then
                self.data[k].value = configValue
            end
        end
    end
end

function ConfigurationComponent:setOffSets (ofx, ofy) 
    if ofx then 
        self.offSetX =  ofx
    end
    
    if ofy then 
        self.offSetY = ofy
    end
end


function ConfigurationComponent:getOffsets () 
    return self.offSetX, self.offSetY
end

function ConfigurationComponent:setIsRendering (state) 
    if state then 
        self.isRendering = true
    else
        self.isRendering = false
    end
end