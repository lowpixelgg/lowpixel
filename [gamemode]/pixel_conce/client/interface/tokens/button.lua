ButtonToken =  newclass "ButtonToken";


function ButtonToken:init ( x,y, w,h, text, color, opacity, action) 
  self.x = x or 0;
  self.y = y or 0;
  self.w = w or 0;
  self.h = h or 0;
  self.action = action;
  self.color = color;
  self.opacity = opacity;
  self.text = text or "{{ string }}";
end


function ButtonToken:render ( x, y, alpha )
  self.x = x;
  self.y = y;
  
  local bgw, bgh = self.w, self.h;
  
  local isMouseIN = imports.ui:isMouseInPosition(self.x, self.y, bgw, bgh);
  
  if (isMouseIN) then 
    imports.ui:setSvgColor(self.text, self.color, self.opacity);
  else
    imports.ui:setSvgColor(self.text, "#D9D9D9", 0.05);
  end
  
  imports.ui:renderSvg(self.text, self.x, self.y, tocolor(255,255,255, alpha), 0, false, true);
  dxDrawText(self.text, self.x, self.y, self.x + bgw, self.y + bgh, tocolor(255, 255, 255, alpha), 1.0, "default", "center", "center"); 
end
