local imports = {
    ui = exports.pixel_ui,
    widgets = exports.pixel_widgets
}

buy = newclass "buyui";

local scw, sch = guiGetScreenSize();

function buy:init (priceForLiter) 
    self.rectangleWidth = respo(398);
    self.rectangleHeight = respo(500);
    self.priceForLiter = priceForLiter or 13

    self.top_buttons = {
        { id = "top_1", title = "Álcool" },
        { id = "top_2", title = "Gasolina"},
    }


    self.mid_buttons = {
        { id = "mid_1", percent = 25 },
        { id = "mid_2", percent = 50 },
        { id = "mid_3", percent = 75 },
        { id = "mid_4", percent = 100 }
    }



    self.liters = 0;
    self.selected = getItemIndex(0, 31);
    self.pricesInfo = SVG:createRectangle ("infos", respo(189), respo(87), respo(3), 0.20, 0.50);
    -- self.buyButton = SVG:createRectangle ("buy_gas", respo(400), respo(40), respo(3), 1, 1);

    self.keys = {
        {key = "mouse", msg = "MOUSE 1 para interagir"},
        {key = "backspace", msg =  "BACKSPACE para voltar"},
    };

       self.helplist = imports.widgets:createHelplist("gas_helplist", {
        list = self.keys
    });

    for _, button in ipairs(self.top_buttons) do 
        SVG:createRectangle (button.id, respo(192), respo(38), respo(3), 0.20, 0.50)
    end


    for _, button in ipairs(self.mid_buttons) do 
        SVG:createRectangle (button.id, respo(87), respo(88), respo(5), 0, 0.40)
    end

    for i=1, 100 do 
        SVG:createLine ("line:"..i, respo(6.3), respo(42)) 
    end


    self.isRendering = 0;
    self.fade = 0;
    self.checkoutHover = 50;
end


function buy:render ()
    if self.isRendering then 
        self.fade = math.min(self.fade + 6, 255);
    else
        self.fade = math.max(self.fade - 6, 0);
    end

    dxDrawRectangle(0, 0, scw, sch, tocolor(0, 0, 0, self.fade/1.15));
    dxDrawImage(0, 0, scw, sch, "assets/vignette.png", 0, 0, 0, tocolor(255, 255, 255, self.fade));

    local startX, startY = imports.ui:createLayoutBox("gas_station", self.rectangleWidth, self.rectangleHeight, 0, 0, "center", "center", false);


    for i, button in ipairs(self.top_buttons) do
        local buttonX = startX + (i - 1) * (respo(192) + respo(15));

        self.top_buttons[i].x = buttonX;
        self.top_buttons[i].y = startY;
        self:top_button(button.id, button.title, buttonX, startY, respo(192), respo(38), i == 2 and true or false);
    end


    dxDrawText("Quantidade:", startX, startY + (respo(38) + respo(25)), respo(54), respo(13), tocolor(255,255,255, self.fade), 1.0, fonts.LuxoraBook11, "left", "top")


    for i, button in ipairs(self.mid_buttons) do
        local buttonX = startX + (i - 1) * (respo(87) + respo(16));
        local buttonY = startY + (respo(38) + respo(50))
        
        self.mid_buttons[i].x = buttonX;
        self.mid_buttons[i].y = buttonY;

        self:mid_button(button.id, button.percent, buttonX, buttonY, respo(87), respo(88), button.selected);
    end


    dxDrawText("Litros disponiveis:", startX, startY + (respo(200) + respo(25)), respo(54), respo(13), tocolor(255,255,255, self.fade), 1.0, fonts.LuxoraBook11, "left", "top");

    local lineX;
    for i=1, 31 do 
        lineX = startX + (i - 1) * (respo(6.3) + respo(6));
        imports.ui:renderSvg("line:"..i, lineX, startY + respo(250), i <= self.selected and tocolor(255, 0, 78,  self.fade) or tocolor(255, 255, 255, self.fade/10), 0, false, false, 10, 0, 0);
    end


    dxDrawText(getItemIndex(self.selected, 31).."#3F3F40/100", startX, startY + (respo(200) + 25), lineX + respo(10), respo(13), tocolor(255,255,255, self.fade), 1.0, fonts.LuxoraBook11, "right", "top", false, false, false, true);


    for i=1, 2 do 
        local infoX = startX + (i - 1) * respo(207);
        local largeText = i == 1 and string.format("$%s.00", self.priceForLiter) or self.liters;
        local samllText = i == 1 and  "Preço por litro" or "No Tanque"
        self:info_button(infoX, (startY + self.rectangleHeight) - (respo(170)), respo(189), respo(87), largeText, samllText);
    end


    dxDrawText("Total hoje:", startX, (startY + self.rectangleHeight) - respo(50), startX + respo(54), ((startY + self.rectangleHeight) - respo(50)) + respo(13), tocolor(255,255,255, self.fade/5), 1.0, fonts.LuxoraBook11, "left", "center");
    dxDrawText(string.format("$%s.00", calculateFuelCost(self.selected, self.priceForLiter)), startX, (startY + self.rectangleHeight) - (respo(50)), lineX + respo(10), respo(13), tocolor(255,255,255, self.fade), 1.0, fonts.LuxoraMedium20, "right", "top");



    local checkoutY = (startY + self.rectangleHeight) - (respo(10))
    

    self.hoverCheckout = imports.ui:isMouseInPosition(startX, checkoutY, respo(400), respo(38))
    if (self.hoverCheckout) then 
        self.checkoutHover = math.min(self.checkoutHover + 20, self.fade);
    else
        self.checkoutHover = math.max(self.checkoutHover - 20, self.fade/5);
    end

    dxDrawText("Conveniência", startX, startY-respo(130), startX+self.rectangleWidth, startY, tocolor(255,255,255, self.fade), 1.0, fonts.GilroyBold, "center", "center");
    dxDrawText("Los Santos", startX, startY-respo(70), startX+self.rectangleWidth, startY, tocolor(255,255,255, self.fade), 1.0, fonts.LuxuraGrotesk, "center", "center");


    -- imports.ui:renderSvg("buy_gas", startX, checkoutY, tocolor(255, 0, 78, self.checkoutHover));
    dxDrawImage(startX-respo(65), checkoutY - respo(30), respo(534), respo(100), "assets/glow.png", 0,0,0, tocolor(255,255,255, self.checkoutHover));
    dxDrawText("Checkout", startX, checkoutY, startX+respo(400), checkoutY + respo(38), tocolor(255,255,255, self.checkoutHover), 1.0, fonts.LuxoraRegular15, "center", "center");

    imports.widgets:renderHelplist(self.helplist, self.fade)
end


function buy:top_button (id, text, x, y, width, height, isSelected) 
    imports.ui:renderSvg(id, x, y, tocolor(255, 255, 255, isSelected and self.fade or self.fade/5));
    dxDrawText(text, x, y, x+width, y+height,  tocolor(255,255,255, isSelected and self.fade or self.fade/5), 1.0, fonts.LuxoraRegular10, "center", "center");

    if (isSelected) then 
        imports.ui:setSvgColor(id, "#FF004E", 0.50);
        imports.ui:setSvgStrokeColor(id, "#FF004E", 1);
    end
end


function buy:mid_button (id, text, x, y, width, height, isSelected) 
    imports.ui:renderSvg(id, x, y, tocolor(255, 255, 255, self.fade)); 

    dxDrawText(text.."%", x, y-respo(10), x+width, y+height, tocolor(255, 255, 255, isSelected and self.fade or self.fade/3), 1.0, fonts.OutfitRegular16, "center", "center");
    dxDrawText("Reabastecer", x, y+respo(40), x+width, y+height,  tocolor(255, 255, 255, isSelected and self.fade or self.fade/3), 1.0, fonts.OutfitRegular10, "center", "center");

    if (isSelected) then 
        imports.ui:setSvgColor(id, "#FF004E", 0.50);
        imports.ui:setSvgStrokeColor(id, "#FF004E", 1);
    else
        imports.ui:setSvgColor(id, "#FFFFFF", 0);
        imports.ui:setSvgStrokeColor(id, "#FFFFFF", 0.48);
    end
end


function buy:info_button (x, y, width, height, largeText, smallText) 
    imports.ui:renderSvg("infos", x, y, tocolor(255, 255, 255, self.fade));
    
    dxDrawText(largeText, x, y-respo(10), x+width, y+height, tocolor(255, 255, 255, isSelected and self.fade or self.fade/3), 1.0, fonts.OutfitRegular16, "center", "center");
    dxDrawText(smallText, x, y+respo(40), x+width, y+height, tocolor(255, 255, 255, isSelected and self.fade or self.fade/3), 1.0, fonts.OutfitRegular10, "center", "center");
end


function buy:getButtonByPosition (x,y) 
    
    for _, button in ipairs(self.mid_buttons) do 
      if (x >= button.x and x <= button.x + respo(87) and y >= button.y and y <= button.y + respo(88)) then 
        return button;
      end
    end
    
    return false;
  end

function buy:updateSelectedValue(targetValue)
    if self.animationTimer then
        if self.selected == targetValue then
            return
        end
    else
        self.selectedTarget = targetValue
        self.animationTimer = setTimer(function()
            if self.selected == self.selectedTarget then
                killTimer(self.animationTimer)
                self.animationTimer = nil
                return
            end

            local increment = self.selectedTarget > self.selected and 1 or -1
            self.selected = self.selected + increment
        end, 5, 0)
    end
end


function buy:setIsRendering (state) 
    self.isRendering = state;
end

function buy:setTotalLiters (num)
    self.liters = num
end