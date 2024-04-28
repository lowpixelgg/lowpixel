InfoComponent = newclass "InfoComponent";



function InfoComponent:init ()
    self.x = 0;
    self.y = 0;
    self.fade = 0;
    self.isRendering = false;
    self.slot = false;
    self.divWidth = respo(222);
    self.divHeight = respo(76);
    self.blur = imports.blur:createBlurBox( 0, 0, self.divWidth, self.divHeight, 255, 255, 255, 255, false);
    
    createRectangle('bg_info', self.divWidth, self.divHeight, false, 0.05);
end


function InfoComponent:render() 
    if (self.isRendering) then 
        self.fade = math.min(self.fade + 10, 255);
    else
        self.fade = math.max(self.fade - 60, 0);
    end
    
    if (not self.slot) then return false end
    
    local item = self.slot.data.items[#self.slot.data.items];
    if (not item) then return false end
    
    local startX, startY = imports.ui:createLayoutBox("inventory_info", self.divWidth, self.divHeight, self.x,  self.y,  "left", "top", false);
    
    if (self.blur) then
        imports.blur:render( self.blur );
        imports.blur:setBlurBoxPosition( self.blur, startX, startY );
        imports.blur:setBlurBoxColor(self.blur, 255,255,255,self.fade);
    end    
    
    imports.ui:renderSvg('bg_info', startX, startY, tocolor(255,255,255,self.fade), 0, false, true);
    
    
    local undX = startX + self.divWidth - respo(60);
    local undY = startY + respo(10);
    
    
    dxDrawImage(undX, undY, respo(50), respo(50), "assets/images/slot_bg.png", 0,0,0, tocolor(255, 255, 255, self.fade));
    dxDrawText(getFormatedNumber(self.slot.data:getAmount()), undX, undY, undX + respo(50), undY + respo(40), tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitRegular12, "center", "center");
    dxDrawText(item.name == "money" and "$" or "UND", undX, undY, undX + respo(50), undY + respo(75), tocolor(255, 255, 255, self.fade/2), 1.0, fonts.OutfitLight7, "center", "center");
    
    if (item.data.name) then 
        dxDrawText(item.data.name, startX +  respo(11), startY + respo(15), self.divWidth, self.divHeight, tocolor(255,255,255, self.fade), 1.0, fonts.OutfitRegular12);
    else
        dxDrawText(item.title, startX +  respo(11), startY + respo(15), self.divWidth, self.divHeight, tocolor(255,255,255, self.fade), 1.0, fonts.OutfitRegular12);
    end
    
    local weight_text = item.weight / 1000;
    
    dxDrawText("#D4D4D4 "..weight_text .. "#868686 kg", startX + respo(10), startY + respo(35), respo(self.divWidth), respo(self.divHeight), tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitRegular9, "left", "top", false, false, false, true);
    
    if (item.timestamp and item.timestamp > 0) then 
        local roaming = roaming(item.timestamp);
        local validity = not roaming and "#868686 Estragado" or "#868686 "..imports.locales:getString("pixel_inv:infos_item_endsIn").." #D4D4D4" ..roaming;
        dxDrawText(validity, startX + respo(10), startY + respo(55), respo(self.divWidth), respo(self.divHeight), tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitRegular95, "left", "top", false, false, false, true);
    else
        dxDrawText("#868686 "..imports.locales:getString("pixel_inv:infos_item_not_damaged"), startX + respo(10), startY + respo(55), respo(self.divWidth), respo(self.divHeight), tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitRegular95, "left", "top", false, false, false, true);
    end
end


function InfoComponent:setItemInfoData(slot) 
    if (slot ~= nil) then 
        if (not slot) then return false end
        
        self.slot = slot;
        
        local cx, cy = getCursorPosition();
        cx, cy = cx * screenW, cy * screenH;
        
        self.x =  cx;
        self.y =  cy;
    else
        self.slot = nil;
        self.show = false;
    end
end

function InfoComponent:setIsRendering (state) 
    self.isRendering = state;
end