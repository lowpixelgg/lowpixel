local imports = {
    ui = exports.pixel_ui
};

ItemComponent = newclass "ItemComponent";

local scw, sch = guiGetScreenSize();


function ItemComponent:init (item)
    self.item = item;
    self.qtd = 0;
    
    self.buttons = {
        { id = "plus", pos = { x = 0,  y = 0 }},
        { id = "sub", pos = { x = 0,  y = 0 }},
    }
    
    self.price = string.format("$%s.00", self.item.price);
    local size = dxGetTextSize(self.price);
    local padding = 2;
    local centerX = size + padding;
    local centerY = 20; 
    
    self.svg = SVG:createRectangle("shop:"..self.item.title, centerX, centerY);
    
    return self;
end


function ItemComponent:render (startX, startY)
    dxSetBlendMode("add")
        dxDrawImage(startX, startY, respo(60), respo(60), "assets/slot.png",  0, 0, 0, tocolor( 255, 255, 255 ), false);
    dxSetBlendMode()
    
    local textX = startX + respo(60) - respo(self.svg.width);
    local textY = startY;
    
    imports.ui:renderSvg("shop:"..self.item.title, textX, textY, tocolor(255,255,255,255), 0, false, true);
    dxDrawText(self.price, textX, textY, textX + self.svg.width, textY + self.svg.height, tocolor(255,255,255), 1.0, fonts.OutfitMedium, "center", "center");
    
    -- item_icon:
    dxDrawImage(startX, startY, respo(60), respo(60), ":pixel_inv/assets/images/items/"..self.item.icon..".png", 0, 0,0, tocolor(255,255,255,255));
    
    dxSetBlendMode("overwrite")
        dxDrawText(string.upper(self.item.title), startX + respo(80), startY, startX + respo(395), startY + respo(60), tocolor(255,255,255), 1.0, fonts.OutfitRegular11, "left", "center");
    dxSetBlendMode()
    
    -- stroke_bottom:
    dxDrawRectangle(startX, startY + respo(70), respo(370), respo(1), tocolor(255,255,255, 150));
    
    -- plus
    self.buttons[1].pos = { x = startX + respo(370) - respo(25), y = startY + respo(60) / 3 };
    dxDrawImage(self.buttons[1].pos.x, self.buttons[1].pos.y, respo(25), respo(25), "assets/add.png");
    
    -- numb
    dxSetBlendMode("overwrite")
        local numbX = self.buttons[1].pos.x - respo(25) - 15;
        local numbY = self.buttons[1].pos.y - 5;
        dxDrawImage(numbX, numbY, respo(32), respo(32), "assets/numb.png", 0, 0, 0, tocolor(255,255,255,10));
        dxDrawText(self.qtd, numbX, numbY, numbX + respo(32), numbY + respo(32), tocolor(255,255,255), 1.0, fonts.OutfitMedium10, "center", "center");
    dxSetBlendMode()

    -- sub
    self.buttons[2].pos = { x = startX + respo(270), y = startY + respo(60) / 3 };
    dxDrawImage(self.buttons[2].pos.x, self.buttons[2].pos.y, respo(25), respo(25), "assets/sub.png");
end



function ItemComponent:setQtd (qtd) 
    self.qtd = qtd or 0;
end

function ItemComponent:getItem () 
    return self.item;
end

function ItemComponent:getQtd () 
    return self.qtd
end