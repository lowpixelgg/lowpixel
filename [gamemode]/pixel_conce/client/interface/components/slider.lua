SliderComponent = newclass "SliderComponent";


function SliderComponent:init (vehicles) 
    self.rectangleWidth = scw - respo(225);
    self.rectangleHeight = respo(170);
    self.offSetX = 50;
    self.offSetY = 50;
    self.rectangleBoxWidth = respo(250);
    self.rectangleBoxHeight = respo(140);

    self.tick = getTickCount()
    self.carsUI = {}
    self.isRendering = true
    self.fade = 0


    for i=1, #vehicles do 
        self.carsUI[i] = vehicles[i]
    end
    
    
    self.selectedIndex = 1
    self.maxIndexes = #self.carsUI
    self.sliderRT = dxCreateRenderTarget(self.rectangleWidth, self.rectangleBoxHeight, true)
end

function SliderComponent:box (x, y, business, model, price, icon, selected, alpha) 
    local color = selected and tocolor(202,62,62) or tocolor(255,255,255, alpha/3)
    local textColor = selected and  tocolor(101,14,14) or tocolor(255,255,255, alpha/2)
    local arrowColor = selected and tocolor(255,255,255) or tocolor(202,62,62, alpha/1)
    
    local startX, startY = imports.ui:createLayoutBox("showroom_slider", self.rectangleBoxWidth, self.rectangleBoxHeight,  x, y, "left", "top", false)
    
    dxDrawRectangle(startX, startY, self.rectangleBoxWidth, self.rectangleBoxHeight, color)
    dxDrawText(business, startX + 13, startY + 13, self.rectangleBoxWidth, respo(11), tocolor(255,255,255, alpha), 1.0, fonts.OutfitBold11)
    dxDrawText(model, startX + 13, startY + 37, self.rectangleBoxWidth, respo(11), textColor, 1.0, fonts.OutfitLight9)
    dxDrawImage(startX, startY, self.rectangleBoxWidth, self.rectangleBoxHeight, "assets/images/cars/"..icon..".png",0,0,0, tocolor(255,255,255, alpha))
    dxDrawText(getFormatedNumber(price), startX + 13, startY + self.rectangleBoxHeight - respo(30), self.rectangleBoxWidth, 11, tocolor(255, 255, 255, alpha), 1.0, fonts.OutfitBold9)
    dxDrawImage(startX + self.rectangleBoxWidth - respo(12), startY, respo(13), respo(12), "assets/images/box_arrow.png", 0,0,0, arrowColor)
end


function SliderComponent:slider () 
    if isElement(self.sliderRT) then 
        
        dxSetRenderTarget(self.sliderRT, true)
        dxSetBlendMode("modulate_add")
        local slideAmount = #self.carsUI
        local slideOffset = ((respo(250)) * (self.selectedIndex - 1) - slideAmount)
        
        
        local maxOpacity = 255
        local minOpacity = 100
        
        for i, v in ipairs(self.carsUI) do
            local slotX = (i - 1) * (respo(260)) - slideOffset
            local opacity = i == self.selectedIndex and maxOpacity or minOpacity
            if i ~= self.selectedIndex then
                local numBoxes = #self.carsUI - 1
                local opacityRange = maxOpacity - minOpacity
                local opacityStep = opacityRange / numBoxes
                opacity = maxOpacity - (math.abs(i - self.selectedIndex) - 1) * opacityStep
            end
            self:box(slotX, 0, v.business.title, v.model, v.price, v.icon, i == self.selectedIndex and true or false, opacity)
        end
        
        dxSetBlendMode("blend")
        dxSetRenderTarget()
    end
end


function SliderComponent:render () 
    if self.isRendering then 
        self.fade = math.min(self.fade + 5, 255)
    else
        self.fade = math.max(self.fade - 5, 0)
    end
    
    local startX, startY = imports.ui:createLayoutBox("showroom_slider2", self.rectangleWidth, self.rectangleHeight,  respo(self.offSetX),  respo(self.offSetY), "left", "bottom", false);        
    local sstring_configs = imports.locales:getString("pixel_conce:slider_available");
    local sstring_configs_size = respo(dxGetTextWidth(sstring_configs))
    local padding = respo(40)
    local lineWidth = (sstring_configs_size + padding)
    local sstring_total = string.format("%s/%s modelos.", self.selectedIndex, #self.carsUI)
    local sstring_total_size = respo(dxGetTextWidth(sstring_total))

    dxDrawImage(startX, startY, respo(20), respo(20), "assets/images/icons/car.png", 0,0,0, tocolor(255,255,255, self.fade))
    dxDrawText(sstring_configs, startX + respo(24), startY, respo(self.rectangleWidth), startY + respo(20), tocolor(255, 255, 255, self.fade), 1.0, fonts.Outfit94, "left", "center")
    dxDrawText(sstring_total, self.rectangleWidth, startY,  startX + self.rectangleWidth - 1, startY + 22, tocolor(255, 255, 255, self.fade), 1.0, fonts.HansomBold11, "right", "center")
    dxDrawRectangle((startX + lineWidth )+ 20, startY + respo(10),  (self.rectangleWidth - lineWidth) - (sstring_total_size + 30) - sstring_total_size, respo(1), tocolor(255,255,255,self.fade/4))
    dxDrawRectangle(startX,  startY + self.rectangleHeight - self.rectangleBoxHeight, respo(45), self.rectangleBoxHeight, tocolor(255,255,255,self.fade/4))
    dxDrawImage(startX,  startY + self.rectangleHeight - self.rectangleBoxHeight, respo(40), self.rectangleBoxHeight, "assets/images/box_left.png",0,0,0, tocolor(255,255,255,self.fade) )       
    
    dxDrawImage(startX + respo(48),  startY + self.rectangleHeight - self.rectangleBoxHeight, self.rectangleWidth, self.rectangleBoxHeight , self.sliderRT, 0,0,0, tocolor(255,255,255, self.fade))
end


function SliderComponent:switch (button, callback) 
    if button == "arrow_l" then
        if self.selectedIndex > 1 then 
            self.selectedIndex = self.selectedIndex - 1
            
            imports.assets:playSoundFX("ui_back", false, 1)
        else
            imports.assets:playSoundFX("error", false, 1)  
        end
        

        executeCallback(callback, self.selectedIndex)
    elseif button == "arrow_r" then
        if self.selectedIndex < #self.carsUI then 
            self.selectedIndex = self.selectedIndex + 1
            
            imports.assets:playSoundFX("ui_change", false, 1)
        else
            imports.assets:playSoundFX("error", false, 1)  
        end
        

        executeCallback(callback, self.selectedIndex)
    end

    self:slider()
end



function SliderComponent:setOffSets (ofx, ofy) 
    if ofx then 
        self.offSetX =  ofx
    end
    
    if ofy then 
        self.offSetY = ofy
    end
end


function SliderComponent:getOffsets  () 
    return self.offSetX, self.offSetY
end


function SliderComponent:setIsRendering (state)
    if state then 
        self.isRendering = true
    else
        self.isRendering = false
    end
end


function SliderComponent:destroy() 
    if (self.sliderRT) then 
        destroyElement(self.sliderRT)
    end
end