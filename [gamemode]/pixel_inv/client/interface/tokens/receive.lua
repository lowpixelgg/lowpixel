ReceiveToken = newclass "ReceiveToken"
local meta = imports.core:getItemsMeta();


function ReceiveToken:init (item)
    self.item = item;
    self.meta = meta[item.name];
    self.itemTitle = string.upper(self.meta.title);
    self.rectangleWidth = respo(112)
    self.rectangleHeight = respo(120);
    self.fade = 0;
    self.isRendering = false;
end


function ReceiveToken:render ()
    if (self.isRendering) then 
        self.fade = math.min(self.fade + 10, 255);
    else
        self.fade = math.max(self.fade - 10, 0);
    end
    
    local startX, startY = imports.ui:createLayoutBox("receiveToken", self.rectangleWidth, self.rectangleHeight,  0, respo(100), "center", "bottom", false);
    dxDrawImage(startX, startY, self.rectangleWidth, self.rectangleHeight, "assets/images/receive.png", 0, 0, 0, tocolor(255,255,255,self.fade));
    dxDrawText(self.itemTitle, startX, startY, startX + self.rectangleWidth, startY + self.rectangleHeight + respo(90), tocolor(255,255,255, self.fade), 1.0, fonts.Roboto11, "center", "center")
    dxDrawText(self.item.name == "money" and getFormatedNumber(self.item.amount) or self.item.amount.."x", startX + 10, startY + 10, startX + self.rectangleWidth, startY + self.rectangleHeight, tocolor(255,255,255, self.fade), 1.0, fonts.Roboto11, "left", "top")
    
    local imageWidth = respo(70)
    local imageHeight = respo(70)
    
    local itemX = startX + (self.rectangleWidth - imageWidth) / 2
    local itemY = startY + (self.rectangleHeight - imageHeight) / 2
    
    dxDrawImage(itemX, itemY - respo(10), imageWidth, imageHeight, "assets/images/items/"..self.meta.icon..".png", 0, 0, 0, tocolor(255, 255, 255, self.fade))
end

function ReceiveToken:setIsRendering (state) 
    self.isRendering = state;
end
