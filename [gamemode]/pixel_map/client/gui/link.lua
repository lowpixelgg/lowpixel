local imports = {
    assets = exports.pixel_assets
}



Link = newclass "Link";

local screenW, screenH = guiGetScreenSize()
local customFont = imports.assets:useCreateFont("poppins.Light", respo(14));
local margin = respo(5);
local paddingY = respo(5);
local paddingX = respo(10);
local mainColor = { r = 0, g = 0, b = 0, a = 150 };
local hoverColor = { r = 25, g = 25, b = 25, a = 150 };
local textColor = { r = 255, g = 255, b = 255, a = 255 };



function Link:init (index, name, icon, qty, size) 
    self.index = index;
    self.name = name;
    self.icon = icon;
    self.qty = qty;
    self.size = size;
    self.hovered = false;
    self.active = false;
    self.mouseState = false;
    self.clickCallback = nil;
    self.r = mainColor.r;
    self.g = mainColor.g;
    self.b = mainColor.b;
    self.animationHover = {
      enabled = false,
      tick = nil,
      start = {},
      target = {}
    }
end


function Link:render (index, diffX, diffY, blipX, blipY, alpha, canInteract)
    local text = self.name.." ("..self.qty..")"
    local textWidth = dxGetTextSize(text, 0, 1, customFont);
    local textHeight = dxGetFontHeight(1, customFont);
    local width = textWidth + paddingX * 2 + self.size;
    local height = textHeight + paddingY * 2;
    local x, y = screenW - width - diffX, diffY + self.index * (height + margin);
    
    dxDrawRectangle(x, y, width, height, tocolor(self.r, self.g, self.b, math.clamp(alpha, 0, mainColor.a)));
    drawCenteredText(text, x + paddingX, y + height/2 - textHeight/2, textWidth, textHeight, tocolor(textColor.r, textColor.g, textColor.b, math.clamp(alpha, 0, textColor.a)), 1, customFont)
    dxDrawImage(x + textWidth + paddingX, y + height/2 - self.size/2, self.size, self.size, "assets/blips/"..self.icon..".png", 0, 0, 0, tocolor(255, 255, 255, alpha));

    if ( getKeyState("mouse1") ) then
      if (self.mouseState == false) then
        self.mouseState = true;
        if ( self.hovered ) then
          self.active = true;
        end
      end
    else
      if (self.mouseState == true) then
        self.mouseState = false;
        if ( self.active ) then
          self.active = false;
          if ( self.clickCallback ) then
            self.clickCallback();
          end
        end
      end
    end
    if ( isCursorInPosition(x, y, width, height) ) then
      if ( self.hovered == false ) then
        self.hovered = true;
        self.animationHover.enabled = true;
        self.animationHover.tick = getTickCount();
        self.animationHover.start.r = self.r;
        self.animationHover.start.g = self.g;
        self.animationHover.start.b = self.b;
        self.animationHover.target.r = hoverColor.r;
        self.animationHover.target.g = hoverColor.g;
        self.animationHover.target.b = hoverColor.b;
      end
    elseif ( self.hovered == true ) then
      self.hovered = false;
      self.animationHover.enabled = true;
      self.animationHover.tick = getTickCount();
      self.animationHover.start.r = self.r;
      self.animationHover.start.g = self.g;
      self.animationHover.start.b = self.b;
      self.animationHover.target.r = mainColor.r;
      self.animationHover.target.g = mainColor.g;
      self.animationHover.target.b = mainColor.b;
    end

    if ( self.animationHover.enabled ) then
      local progress = math.clamp((getTickCount() - self.animationHover.tick)/250, 0, 1);
      local multipler = getEasingValue(progress, "OutQuad");
      self.r, self.g, self.b = interpolateBetween(self.animationHover.start.r, self.animationHover.start.g, self.animationHover.start.b, self.animationHover.target.r, self.animationHover.target.g, self.animationHover.target.b, progress, "OutQuad");
      if ( progress >= 1 ) then
        self.animationHover.enabled = false;
      end
    end
end

function Link:setQty (qty) 
    self.qty = qty;
end

function Link:onClick (fn) 
    self.clickCallback = fn;
end