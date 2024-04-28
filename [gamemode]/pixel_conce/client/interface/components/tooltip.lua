local imports = {
    core = exports.pixel_core,
    ui = exports.pixel_ui,
    locales = exports.pixel_lang

}

TooltipComponent = newclass "TooltipComponent";
local vehicleMeta = imports.core:getVehiclesMeta();

function TooltipComponent:init (vehicle) 
    self.width = 0.9;
    self.height = 1.5;

    self.vehicle = vehicle
    self.vehicleRT = dxCreateRenderTarget(380, 300, true)
    self.tickCount = getTickCount()
    self.isRendering = true
    self.isLoaded = false
    self.progress = 'fadeIn'
    self.meta = vehicleMeta[getElementModel(self.vehicle)];

    self.data = {
        {name = imports.locales:getString("pixel_conce:tooltip_data_speed"), value = self.meta.settings.maxSpeed, max = 600},
        {name = imports.locales:getString("pixel_conce:tooltip_acceleration"), value = self.meta.settings.acceleration, max = 200},
        {name = imports.locales:getString("pixel_conce:tooltip_breakepower"), value = self.meta.settings.brakePower, max = 60},
        {name = imports.locales:getString("pixel_conce:tooltip_traction"),  value = self.meta.settings.traction, max = 200},
    }

    
    local categorySize = dxGetTextSize(self.meta.category)
    local padding = 10
    local centerX = 10 + padding + categorySize
    local centerY = 27
    
    self.progressRect = createRect("progressBar", 312, 4, 2)
    self.categoryRect = createRect("categoryTooltip", centerX, centerY, 0)
    self:update()
end



function TooltipComponent:progressBar (data, x,y) 
    local value = interpolateBetween((self.progress == 'fadeIn' and 0 or (data.value / data.max) * (290 - 4)), 0, 0,(self.progress == 'fadeIn' and (data.value / data.max) * (350 - 4) or 0), 0, 0, ((getTickCount() - self.tickCount)/1200), 'OutQuad') 
        
    dxDrawImage(x, y, 20, 17, "assets/images/icons/book.png", 0, 0, 0, tocolor(255, 255, 255, 255))
    dxDrawText(data.name, x+22, y-1, 56, 10, tocolor(255,255,255,230), 1, fonts.ExoBold10, 'left', 'top')
    
    
    local sstring_value = ""
    
    if data.name == imports.locales:getString("pixel_conce:tooltip_data_speed") or data.name == imports.locales:getString("pixel_conce:tooltip_acceleration") or data.name == imports.locales:getString("pixel_conce:tooltip_breakepower") then 
        sstring_value = data.value.."KM/h"
        
    elseif data.name == imports.locales:getString("pixel_conce:tooltip_traction") then
        if value == 1 then
            sstring_value = imports.locales:getString("pixel_conce:slider_traction_front")
        else
            sstring_value = imports.locales:getString("pixel_conce:slider_traction_back")
        end
    end
    
    dxDrawText(sstring_value, x, y, x + 290, 10, tocolor(255,255,255,240), 1, fonts.ExoBold10, 'right', 'top')
end


function TooltipComponent:update () 
    if (not isElement(self.vehicleRT)) then return false end

    dxSetRenderTarget(self.vehicleRT, false)
        dxDrawImage(0, 0, 380, 350,'assets/images/tooltip.png', 0, 0, 0, tocolor(255,255,255,250))
        
        for i ,v in ipairs(self.data) do 
            local y = (100- 30) + (42*i)
            self:progressBar(v, 20, y)
        end
        
        local meta = self.meta
        local cx, cy = 20,20
        local categorySize = dxGetTextSize(meta.category)
        local padding = 10
        local centerX = 10 + padding + categorySize
        
        imports.ui:renderSvg("categoryTooltip", cx, cy, tocolor(36,36,36,255))
        dxDrawText(meta.category, cx, cy, cx+centerX, cy+27,tocolor(255,255,255,255), 1.0, fonts.OutfitBold10, 'center','center')
        dxDrawRectangle(centerX + 27, cy + 4, 2, 20, 0xFF7CB053)  
        
        dxDrawText(getFormatedNumber(meta.price), cx + centerX + 15, cy, cx, cy + 30, 0xFF7CB053, 1.0, fonts.RobotoRegular, 'left','center')
        dxDrawText(meta.name, 20, 120, 121, 32,tocolor(255,255,255,255), 1, fonts.AbcBold20, 'left','center')
        
        dxDrawImage(250, 0, 114, 108, 'assets/images/logos/'..meta.business.logo..'.png', 0, 0, 0,tocolor(255, 255, 255, 255))
    dxSetRenderTarget()
end


function TooltipComponent:render () 
    if (not self.isRendering) then return false end
    local player = Vector3(getElementPosition(localPlayer))
    local vehicle = Vector3(getElementPosition(self.vehicle))
    local distance = math.sqrt((player.x - vehicle.x)^2 + (player.y - vehicle.y)^2 + (player.z - vehicle.z)^2)



    if (distance < 10) then 
        if (not self.isLoaded) then 
            self.progress = 'fadeIn'
            self.isLoaded = true
            self.tickCount = getTickCount()
        end
        
        if getTickCount() > self.tickCount + 1200 then 
        else
            self:update()
        end
    else
        if (self.isLoaded) then 
            self.progress = 'fadeOut'
            self.isLoaded = false
            
            self.tickCount = getTickCount() 
        end
        
        if getTickCount() > self.tickCount + 1200 then                
        else
            self:update()
        end
    end
    
    if self.isLoaded then 
        local px, py, pz = getElementPosition(localPlayer)
        local mx, my, mz = getElementPosition(self.vehicle)
        local x, y, z = mx, my, mz + 1.8
        local endX, endY, endZ = mx, my, mz
        
        local forwardX, forwardY, forwardZ = endX - x, endY - y, endZ - z
        local length = math.sqrt(forwardX^2 + forwardY^2 + forwardZ^2)
        local forwardNormX, forwardNormY, forwardNormZ = forwardX / length, forwardY / length, forwardZ / length
        
        endX = x + forwardNormX * self.width
        endY = y + forwardNormY * self.width
        endZ = z + forwardNormZ * self.width
        
        
        dxDrawMaterialLine3D(x, y, z, endX, endY, endZ, self.vehicleRT, self.height, tocolor(255, 255, 255, 255), px, py, pz)    
    end
end


function TooltipComponent:setIsRendering (state)
    self.isRendering = state
end


function TooltipComponent:destroy () 
    destroyElement(self.vehicleRT);
end