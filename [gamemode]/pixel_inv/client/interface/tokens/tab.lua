TabToken = newclass "TabToken"


function TabToken:init (icon, text, w,h, active) 
  self.tabs = {
    ["bag"] = {35, 35},
    ["clothing"] = {35, 35},
    ["trade"] = {35, 35}
  };

  self.x = 0;
  self.y = 0;
  self.w = w;
  self.h = h;
  self.icon = icon;
  self.active = active or false;
  self.text = text or "{{ tab_text }}";
end

function TabToken:render (x, y, alpha) 
  self.x = x;
  self.y = y;

  if (not self.tabs[self.icon]) then return false end
  local isw, ish = self.tabs[self.icon][1], self.tabs[self.icon][2];
  local size = dxGetTextWidth(self.text);
  local bgw, bgh = size + 20, 25;
  local textX = (size + 20) - size/2;
  local tabX, tabY = self.x - bgw/2 + isw/2 + 10 - isw/2, self.y - 35 - 5;
  local isMouseIN = imports.ui:isMouseInPosition(self.x, self.y, isw, ish);
  local color = (isMouseIN and {79,79,206,alpha}) or (self.active and {79,79,206,alpha} or {255, 255, 255, alpha/30});
  

  if (isMouseIN) then 
    imports.ui:renderSvg('svg_'..self.text, tabX, tabY, tocolor(255,255,255,alpha), 0, false, true);
    dxDrawText(self.text, tabX, tabY, bgw + tabX, bgh + tabY, tocolor(0, 0, 0, alpha), 1.0, fonts.OutfitRegular95, "center", "center");    
  end

  dxDrawImage(self.x, self.y, isw, ish, "assets/images/bg_menu.png", 0,0,0, tocolor(unpack(color)));
  dxDrawImage(self.x, self.y, isw, ish, "assets/images/bg_"..self.icon..".png", 0,0,0, tocolor(255, 255, 255, (isMouseIN and alpha) or (self.active and alpha or alpha/5)));
end


function TabToken:setTabActive (state)
  self.active = state;
  return true;
end