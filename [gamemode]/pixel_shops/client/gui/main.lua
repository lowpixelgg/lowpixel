local imports = {
    ui = exports.pixel_ui,
    blur = exports.pixel_blur,
    widgets = exports.pixel_widgets,
};

ShopsUI = newclass "ShopsUI";

local scw, sch = guiGetScreenSize();
local isScrollActive, scrollCache, scrollColor = _, 0, 0

function ShopsUI:init (items)
    self.items = items or {}

    
    -- self.buyButton = SVG:createBuy ("buy_shop", respo(400), respo(40), respo(3), 1, 1);
    self.checkOut = {};

    self.rectangleWidth = respo(400);
    self.rectangleHeight = respo(590);

    for _, item in ipairs(self.items) do 
        self.items[_].component = ItemComponent(item);
    end

    self.scrollCache = 0;
    self.checkoutHover = 50;


    self.scroll = {
        width = respo(400),
        height = respo(500),
        h_height= respo(70),
        r_height = respo(5),
        s_width = respo(7)
    }

    self.rt = dxCreateRenderTarget(self.scroll.width, self.scroll.height, true);
    self.scroll.posX = ( scw - self.scroll.width - 20 ) / 2;
    self.scroll.c_height = #self.items or 0;

    self.startX, self.startY = imports.ui:createLayoutBox("shop", self.rectangleWidth, self.rectangleHeight, 0, 0, "center", "center", false);

    self.blurBox = imports.blur:createBlurBox(self.startX - 10, self.startY - 10, respo(380), respo(480), 255, 255, 255, 0);

    self.keys = {
        {key = "mouse", msg = "MOUSE 1 para interagir"},
        {key = "backspace", msg =  "BACKSPACE para voltar"},
    };

    self.helplist = imports.widgets:createHelplist("gas_helplist", {
        list = self.keys
    });

    self.isRendering = false;
    self.fade = 0;
end
function ShopsUI:render ()


    if self.isRendering then 
        self.fade = math.min(self.fade + 6, 255);
    else
        self.fade = math.max(self.fade - 6, 0);
    end

    dxDrawRectangle(0, 0, scw, sch, tocolor(0,0,0,self.fade/1.1))
    dxDrawImage(0, 0, scw, sch, "assets/vignette.png", 0, 0, 0, tocolor(255, 255, 255, self.fade));
    
    local c_height = #self.items * (respo(80));
    local posY = (sch - (math.min(c_height, self.scroll.height) + self.scroll.h_height)) / 2;

    local offsetY = 0;
    local _width = self.scroll.width;

    if (c_height > self.scroll.height) then
        _width = self.scroll.width - self.scroll.s_width;
    end


    dxSetRenderTarget(self.rt, true) 
        for i, item in ipairs(self.items) do
            local posY = offsetY - scrollCache;

            local itemY = posY + offsetY - scrollCache + (i - 1) * respo(80);
            item.component:render(0, itemY);

            offsetY = offsetY + self.scroll.r_height;
        end

        local vRatio = self.scroll.height / c_height;
        local s_height = self.scroll.height * vRatio;
        local scrollY = ( vRatio * scrollCache ) + 5;
        local isHover = imports.ui:isMouseInPosition( self.scroll.posX + _width, posY + scrollY + self.scroll.h_height, self.scroll.s_width, s_height - 10 );
        scrollColor = math.min( math.max( isScrollActive and scrollColor + 0.1 or scrollColor - 0.1, 0 ), 1 );

        dxDrawRectangle( _width, 0, self.scroll.s_width, self.scroll.height, tocolor( 255, 255, 255, 100 ));
        dxDrawRectangle( _width, scrollY, self.scroll.s_width, s_height, tocolor( 255, 0, 78, 200 ));
        
        if ( isHover and getKeyState( "mouse1" ) ) then isScrollActive = not isScrollActive and cursorY( ) - scrollY + 5 or isScrollActive elseif ( not getKeyState( "mouse1" ) ) then isScrollActive = nil end
        
        if ( isScrollActive ) then
            scrollCache = math.min( math.max( ( cursorY( ) - isScrollActive ) / vRatio, 0 ), c_height - self.scroll.height );
        end
    dxSetRenderTarget()

    dxDrawText("Conveniência", self.startX, self.startY-130, self.startX+self.rectangleWidth, self.startY, tocolor(255,255,255, self.fade), 1.0, fonts.GilroyBold, "center", "center");
    dxDrawText("Los Santos", self.startX, self.startY-70, self.startX+self.rectangleWidth, self.startY, tocolor(255,255,255, self.fade), 1.0, fonts.LuxuraGrotesk, "center", "center");


    imports.blur:setBlurBoxColor(self.blurBox, 255,255,255, self.fade);
    imports.blur:render( self.blurBox );
    dxDrawImage(self.startX, self.startY, self.rectangleWidth, respo(500), "assets/rectangle.png", 0, 0, 0, tocolor(255,255,255,self.fade));
    dxDrawImage(self.startX + 10, self.startY + 10, respo(380), respo(480), self.rt, 0, 0, 0, tocolor(255, 255, 255, self.fade));

    local checkoutY = (self.startY + self.rectangleHeight) - (respo(10));
    self.hoverCheckout = imports.ui:isMouseInPosition(self.startX, checkoutY, respo(400), respo(38));
    
    if (self:getTotal () > 0 and self.hoverCheckout) then 
        self.checkoutHover = math.min(self.checkoutHover + 20, self.fade);
    else
        self.checkoutHover = math.max(self.checkoutHover - 20, self.fade/5);
    end

    dxDrawText("Total hoje:", self.startX, (self.startY + self.rectangleHeight), self.startX, self.startX+respo(13), tocolor(255,255,255, self.fade/5), 1.0, fonts.LuxoraBook11, "left", "center");
    dxDrawText(string.format("$%s.00", self:getTotal ()), self.startX, (self.startY + self.rectangleHeight), self.startX + self.rectangleWidth, self.startX+respo(13), tocolor(255,255,255, self.fade), 1.0, fonts.LuxoraMedium20, "right", "center");

    dxDrawImage(self.startX - 65, checkoutY-30, respo(534), respo(100), "assets/glow.png", 0, 0, 0, tocolor(255,255,255, self.checkoutHover))
    dxDrawText("Checkout", self.startX, checkoutY, self.startX+respo(400), checkoutY + respo(38), tocolor(255,255,255, self.checkoutHover), 1.0, fonts.LuxoraRegular15, "center", "center");

    imports.widgets:renderHelplist(self.helplist, self.fade)
end


function ShopsUI:getButtonsByPosition(x, y)
    for _, item in ipairs(self.items) do
        for _, button in ipairs(item.component.buttons) do
            if (x >= (self.startX - 10) + button.pos.x and x <= ((self.startX - 10) + button.pos.x) + respo(25) and y >= (self.startY) + button.pos.y and y <= ((self.startY) + button.pos.y) + respo(25)) then
                return item.component, button;
            end
        end
    end

    return nil, nil
end



function ShopsUI:addItem (item) 
    if (not self.checkOut[item.name]) then
        self.checkOut[item.name] = {
            price = item.price,
            name = item.name,
            amount = 1,
        };
    else
        self.checkOut[item.name].amount = self.checkOut[item.name].amount + 1;
    end
end


function ShopsUI:remItem (item) 
    if (not self.checkOut[item.name]) then return false end

    if (self.checkOut[item.name] == 1) then 
        self.checkOut[item.name] = nil;
    else
        self.checkOut[item.name].amount =  self.checkOut[item.name].amount - 1;
    end
end


function ShopsUI:getTotal () 
    local total = 0;

    for k,v in pairs(self.checkOut) do 
        total = total + v.price * v.amount
    end

    return total;
end



function ShopsUI:setIsRendering (state) 
    self.isRendering = state;
end


function ShopsUI:destroyInstance (fn) 
    if (isElement(self.rt)) then
        destroyElement(self.rt);
    end

    imports.blur:destroyBlurBox(self.blurBox);
end