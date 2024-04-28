local imports = {
    assets = exports.pixel_assets
}

Blips = newclass "Blips";


local blip = {
    circle = SVG:createCircle ("blipCircle",  respo(30), respo(30), respo(7));
    stroke = SVG:createCircle ("blipStroke",  respo(30), respo(30), respo(7));
}


local tooltip = {
    customFont = imports.assets:useCreateFont("poppins.Light", respo(14)),
    margin = respo(10),
    paddingY = 0,
    paddingX = respo(15),
};

local iconSize = 20;
local mainColor = 0xFF4F4FCE;
local textColor = 0xFFFFFFFF;
local hovered = {
    index = 0,
    instance = nil,
};


function Blips:init (name, icon, color) 
    local tooltipWidth = dxGetTextSize(name, 0, 1, tooltip.customFont) + tooltip.paddingX;
    local tooltipHeight = dxGetFontHeight(1, tooltip.customFont) + tooltip.paddingY;
    local r, g, b = getRGBA(color);
    self.name = name;
    self.icon = icon;
    self.color = color;
    self.r = r;
    self.g = g;
    self.b = b;
    self.hovered = false;
    self.active = false;
    self.mouseState = false;
    self.strokeScale = 0;
    self.tooltipWidth = tooltipWidth;
    self.tooltipHeight = tooltipHeight;
    self.tooltipScale = 0;
    self.animation = {
        tick = nil,
        start = nil,
        target = nil,
        easing = nil,
        step = 0,
    };
    self.clickCallback = nil;
end


function Blips:render (index, x, y, alpha, canInteract)
    dxDrawImage(x - iconSize/2 + blip.circle.width/2, y - iconSize/2 + blip.circle.width/2, iconSize, iconSize, "assets/blips/"..self.icon..".png", 0, 0, 0, tocolor(255, 255, 255, alpha));

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
    if ( isCursorInCircle(x + blip.circle.width/2, y + blip.circle.width/2, blip.circle.width/2) ) then
      if ( self.hovered == false ) then
        self.hovered = true;
      end
    elseif ( self.hovered == true ) then
      self.hovered = false;
    end


    if ( canInteract ) then
      if ( self.hovered ) then
        if ( hovered.instance == nil or hovered.index < index ) then
          hovered.instance = self;
          hovered.index = index;
          self.animation.tick = getTickCount();
          self.animation.start = { x = self.tooltipScale, y = self.strokeScale, z = 0 };
          self.animation.target = { x = 1, y = 1, z = 0 };
          self.animation.easing = "OutQuad";
          self.animation.step = 1;
        elseif ( hovered.instance ~= self and self.animation.step == 1 ) then
          self.animation.tick = getTickCount();
          self.animation.start = { x = self.tooltipScale, y = self.strokeScale, z = 0 };
          self.animation.target = { x = 0, y = 0, z = 0 };
          self.animation.step = 0;
        end
      elseif ( self.animation.step == 1 ) then
        if ( hovered.instance == self ) then
          hovered.index = 0;
          hovered.instance = nil;
        end
        self.animation.tick = getTickCount();
        self.animation.start = { x = self.tooltipScale, y = self.strokeScale, z = 0 };
        self.animation.target = { x = 0, y = 0, z = 0 };
        self.animation.step = 0;
      end
    end

    if ( self.animation.tick ) then
      local progress = (getTickCount() - self.animation.tick)/250;
      self.tooltipScale, self.strokeScale = interpolateBetween(self.animation.start.x, self.animation.start.y, self.animation.start.z, self.animation.target.x, self.animation.target.y, self.animation.target.z, progress, self.animation.easing);
      if progress > 1 then
        self.animation.tick = nil;
        self.animation.start = nil;
        self.animation.target = nil;
      end
    end
    
    if ( self.tooltipScale > 0 ) then
      dxDrawRectangle(x - (self.tooltipWidth * self.tooltipScale)/2 + (blip.circle.width/2), y + blip.circle.width + tooltip.margin, self.tooltipWidth * self.tooltipScale, self.tooltipHeight * self.tooltipScale, mainColor, true);
      drawCenteredText(self.name, x - (self.tooltipWidth * self.tooltipScale)/2 + (blip.circle.width/2), y + blip.circle.width + tooltip.margin, self.tooltipWidth * self.tooltipScale, self.tooltipHeight * self.tooltipScale, textColor, 1 * self.tooltipScale, tooltip.customFont, true);
    end
end


function Blips:onClick (fn)
    self.clickCallback = fn;
end