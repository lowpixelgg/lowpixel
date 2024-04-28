BuyComponent = newclass "BuyComponent";

function BuyComponent:init (title) 
  self.divWidth = 0;
  self.divHeight = respo(160);
  self.buttons = {
    {title = imports.locales:getString("pixel_conce:buy_buttons_buy"), color = "#C23F3F", opacity = 1, action = "confirm"}, 
    {title = imports.locales:getString("pixel_conce:buy_buttons_cancel"), color = "#404040", opacity = 0.9, action = "cancel"}, 
  };
  
  self.blur = nil;
  self.buttons_cache = {}
  self.title = title or "{{ text_title }}";
  self.isRendering = false;
  self.fade = 0;
  
  local spacing = factor + 0.5;
  local totalWidth = 0 ;
  
  for _, value in ipairs(self.buttons) do 
    local button_size = respo(dxGetTextSize(value.title));
    local padding = respo(100);
    local centerX = button_size + padding;
    local centerY = respo(40);
    
    self.divWidth = self.divWidth + centerX + spacing;
    createRectangle(value.title, centerX, centerY, false, 1);
    
    table.insert(self.buttons_cache, ButtonToken (0,0, centerX, centerY, value.title, value.color, value.opacity, value.action));
  end
  self.blur = imports.blur:createBlurBox( 0, 0, scw, sch, 255, 255, 255, 255, false);
  createBuyBackground("bg_buy", self.divWidth, respo(120));
  
  self.wrap =  wordWrap(desc, self.divWidth - 50, 1, "default", false);
end


function BuyComponent:render () 
  if (self.isRendering) then 
    self.fade = math.min(self.fade + 20, 255);
  else
    self.fade = math.max(self.fade - 20, 0);
  end
  
  local startX, startY = imports.ui:createLayoutBox("inventory_input", respo(self.divWidth), self.divHeight, 0, 0, "center", "center", false);
  self.x = startX;
  self.y = startY;
  
  if (self.blur) then 
    imports.blur:render( self.blur );
    imports.blur:setBlurBoxColor(self.blur, 255,255,255, self.fade);
  end
  
  dxDrawImage( 0, 0, scw, sch, ":pixel_inv/assets/images/background.png", 0, 0, 0, tocolor(255,255,255, self.fade));
  
  imports.ui:renderSvg('bg_buy', startX, startY, tocolor(255,255,255,self.fade), 0, false, true);
  
  dxDrawText(self.title, startX + 20, startY + 20, self.divWidth, self.divHeight, tocolor(255,255,255, self.fade), 1.0, fonts.PoppinsRegular13);
  
  local spacing = 3;
  local totalWidth = 0 ;
  
  for k,v in ipairs(self.buttons_cache) do 
    local string_size_button = respo(dxGetTextSize(v.text)) + respo(100);
    local centerX = string_size_button;
    local tabX = startX + totalWidth;
    local buttonY = startY + self.divHeight - respo(35);
    
    v:render(tabX, buttonY, self.fade);
    totalWidth = totalWidth + centerX + spacing;
  end
  
  
  for i = 1, #self.wrap do
    dxDrawText(self.wrap[i], startX, startY + 50+((i-1)*dxGetFontHeight()), startX + self.divWidth, startY + respo(90)+((i-1)*dxGetFontHeight()),  tocolor(201, 198, 206,self.fade), 1.0, fonts.Roboto8, "center", "center");
  end
end


function BuyComponent:onClick (b, s, abx, aby, cb) 
  if (b == "left" and s == "up") then 
    local button = self:getButtonByPosition(abx, aby);
    
    if (button) then 
      return cb(button.action);
    end
  end
end

function BuyComponent:setIsRendering (state) 
  if state then 
    self.isRendering = true;
  else
    self.isRendering = false;
  end
end

function BuyComponent:setDescription (desc) 
  self.wrap =  wordWrap(desc or "{{ vehicle_placeholder }}", self.divWidth - 50, 1, "default", false);
end


function BuyComponent:getButtonByPosition (x,y) 
  for _, button in ipairs(self.buttons_cache) do 
    if (x >= button.x and x <= button.x + button.w and y >= button.y and y <= button.y + button.h) then 
      return button;
    end
  end    
  return false;
end