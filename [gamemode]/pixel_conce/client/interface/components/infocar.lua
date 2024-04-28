InfoCarComponent = newclass "InfoCarComponent";


function InfoCarComponent:init () 
    self.rectangleWidth = 322;
    self.rectangleHeight = 417;
    self.buttons = {
        {id = "buy", title = imports.locales:getString("pixel_conce:infocar_buttons_buy")},
        {id = "cutscene", title = imports.locales:getString("pixel_conce:infocar_buttons_cutscene")},
    };
    
    self.offSetX = 50;
    self.offSetY = -50;

    self.vehicle = nil
    self.endButtons = 0
    self.grading = {}
    self.isRendering = true
    self.fade = 0
    self.selected = "buy"
    
    createRect("categorie", respo(55), respo(25)) 
    createRect("button_buy", respo(321), respo(42), 3) 
    createRect("button_cutscene", respo(321), respo(42))
    
    for i=1, 18 do 
        self.grading[i] = {
            x = 0,
            y = 0,
            color = { math.random(0,255), math.random(0,255), math.random(0,255) }
        }
    end

    self.selectedColor = nil;
end



function InfoCarComponent:button (title, x, y, selected) 
    local button_color = selected and tocolor(202, 62, 62, self.fade) or tocolor(29, 29, 30, self.fade/2)
        
    imports.ui:renderSvg("button_buy", x, y, button_color)
    dxDrawText(title, x, y,  x + respo(321), y + respo(42), tocolor(255, 255, 255, selected and self.fade or self.fade/4), 1.0, fonts.ExoRegular10, "center", "center")
end


function InfoCarComponent:colors (x,y) 
    dxDrawImage(x, y, respo(17), respo(17), "assets/images/icons/colors.png", 0,0,0, tocolor(255,255,255, self.fade))
        
    local sstring_configs = imports.locales:getString("pixel_conce:infocar_carcolors");
    local sstring_configs_size = dxGetTextWidth(sstring_configs)
    local padding = respo(30)
    local lineWidth = (sstring_configs_size + padding) + 10
    
    
    dxDrawText(sstring_configs, x + 20, y, respo(self.rectangleWidth), y + respo(17), tocolor(255, 255, 255, self.fade), 1.0, fonts.Outfit94, "left", "center")
    dxDrawRectangle(x + lineWidth, y + 9.2, respo(self.rectangleWidth) - lineWidth, respo(1), tocolor(255,255,255,self.fade/3))
    
    local drawColumn = 0
    local drawRow = 0
    
    
    for k,v in ipairs(self.grading) do 
        local _x = (respo(36)) * drawColumn + x 
        local _y = (respo(36) ) * drawRow + y + 25
        
        v.x = _x
        v.y = _y
        
        drawColumn = drawColumn + 1      
        
        dxDrawRectangle(_x,_y, respo(34), respo(34), tocolor(v.color[1], v.color[2], v.color[3], self.fade))
        
        if drawColumn == 9 then
            drawColumn = 0
            drawRow = drawRow + 1
        end
    end
end


function InfoCarComponent:getColorsByPosition (x,y) 
    for _, color in ipairs(self.grading) do
        local isInside = (x >= color.x and x <= color.x + respo(34) and y >= color.y and y <= color.y + respo(34))

        if (isInside) then
            return color
        end
    end
    
    return nil
end


function InfoCarComponent:render () 
    if not self.vehicle then return false end
        
    if self.isRendering then 
        self.fade = math.min(self.fade + 5, 255)
    else
        self.fade = math.max(self.fade - 5, 0)
    end

    local startX, startY = imports.ui:createLayoutBox("showroom_info", self.rectangleWidth, self.rectangleHeight,  respo(self.offSetX), respo(self.offSetY), "left", "center", false)
    
    imports.ui:renderSvg("categorie", startX, startY, tocolor(36, 36, 36, self.fade))
    dxDrawText(self.vehicle.category, startX, startY,  startX + respo(55), startY + respo(25), tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitBold8, "center", "center")
    
    dxDrawRectangle(startX + respo(60), startY, respo(1), respo(25), tocolor(124, 176, 83, self.fade))
    dxDrawText(getFormatedNumber(self.vehicle.price), startX + respo(70), startY,  respo(55), startY + respo(25), tocolor(124, 176, 83, self.fade), 1.0, fonts.RobotoRegular92, "left", "center")
    
    local bussinesName_size = respo(dxGetTextWidth(self.vehicle.business.title, respo(5)))

    dxDrawText(string.upper(self.vehicle.business.title), startX, startY + 25, bussinesName_size, 0, tocolor(255, 255, 255, self.fade), 1.0, fonts.AbcBold30, "left", "top")
    dxDrawText(self.vehicle.model, startX + 2, startY + 170,  respo(50), startY + respo(20), tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitRegular13, "left", "center")
    dxDrawText(self.vehicle.description, startX + 2, startY + 120,  self.rectangleWidth, startY, tocolor(255, 255, 255, self.fade/3), 1.0, fonts.RobotoRegular10, "left", "top", false, true, false, false, false)
    dxDrawImage(startX + bussinesName_size, startY + 10, respo(85), respo(85), 'assets/images/logos/'..self.vehicle.business.logo..'.png', 0, 0, 0,tocolor(255, 255, 255, self.fade))

    
    for i,v in ipairs(self.buttons) do 
        local buttonY = (startY + 200) + (i - 1) * ((respo(47)))
        self:button(v.title, startX, buttonY, v.id == self.selected and true or false)
    end
    
    self:colors(startX, startY + 320)
end



function InfoCarComponent:switch (button) 
    if button == "arrow_u" and self.selected ~= "buy" then
        self.selected = "buy"
    elseif button == "arrow_d" and self.selected ~= "cutscene" then
        self.selected = "cutscene"
    end
    
    imports.assets:playSoundFX("ui_change", false, 1)
end


function InfoCarComponent:setVehicle (vehicle) 
    self.vehicle = vehicle
end


function InfoCarComponent:setOffSets (ofx, ofy) 
    if ofx then 
        self.offSetX =  ofx
    end
    
    if ofy then 
        self.offSetY = ofy
    end
end


function InfoCarComponent:getOffsets () 
    return self.offSetX, self.offSetY
end

function InfoCarComponent:setIsRendering (state) 
    if state then 
        self.isRendering = true
    else
        self.isRendering = false
    end
end