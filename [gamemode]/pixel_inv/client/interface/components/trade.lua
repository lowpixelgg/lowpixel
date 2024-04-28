TradeComponent = newclass "TradeComponent";
local TradeBox = newclass "TradeBox";


function TradeBox:init (slots, text) 
  self.slots = slots or {};
  self.text = text;
  self.state = false;
end

function TradeBox:render (x,y, maxWidth, alpha) 
  self:check(x, y, self.state, self.text, maxWidth, alpha);
    
  local drawColumn = 0;
  local drawRow = 0;

  for k, slot in ipairs(self.slots) do
    local spacing = respo(5);
    local _x = (respo(68 + spacing)) * drawColumn + x;
    local _y = (respo(68 + spacing)) * drawRow + y + respo(30);
    
    drawColumn = drawColumn + 1;
    slot:render({x = _x, y = _y}, alpha);
    
    if (drawColumn == 4) then
      drawColumn = 0;
      drawRow = drawRow + 1;
    end
  end
end


function TradeBox:check (x, y, state, text, maxWidth, alpha)
  local shortcuts_text = text;
  local shortcuts_size = respo(dxGetTextWidth(shortcuts_text));
  local shortcuts_height = respo(9.6);

  dxDrawText(shortcuts_text, x, y, x+shortcuts_size, y+shortcuts_height, tocolor(255,255,255, alpha), 1.0, fonts.OutfitRegular86, "center", "center");
  dxDrawImage(x + shortcuts_size + 5, y - 1, respo(11), respo(11), "assets/images/check_circle.png", 0,0,0, state and tocolor(139,191,72, alpha) or tocolor(255,255,255, alpha/10));
  
  
  dxDrawImage(x + shortcuts_size + 5, y - 1, respo(11), respo(11), "assets/images/check_check.png", 0,0,0, tocolor(255, 255, 255, alpha));

  local lineWidh = shortcuts_size + maxWidth;
  local padding = 30;

  dxDrawRectangle(x + shortcuts_size + padding, y + respo(3), lineWidh-shortcuts_size-padding-shortcuts_size, 1, state and tocolor(139,191,72, alpha) or tocolor(255,255,255, alpha/10));
end


function TradeComponent:init (meslots, trader) 
  self.divWidth = respo(290);
  self.divHeight = respo(390);
  self.offSetX = 0;
  self.offSetY = -40;

  self.meSlotsUI = {};
  self.traderSlotsUI = {};
  self.checkBoxX = nil;
  self.checkBoxState = false;
  self.trading = false;
  self.isTrading = false;
  self.isRendering = false;
  self.fade = 0;

  for k,v in pairs(meslots) do 
    local slot = SlotToken (k, {x = 0, y = 0}, false, v);
    table.insert(self.meSlotsUI, slot);
  end

  for k,v in pairs(trader) do 
    local slot = SlotToken (k, {x = 0, y = 0}, false, v);
    table.insert(self.traderSlotsUI, slot);
  end

  self.meBox = TradeBox (self.meSlotsUI, imports.locales:getString("pixel_inv:trade_title_your_items"));
  self.traderBox = TradeBox (self.traderSlotsUI, imports.locales:getString("pixel_inv:trade_title_your_items"));
end

function TradeComponent:render () 
  local startX, startY = imports.ui:createLayoutBox("inventory_trade", self.divWidth, self.divHeight, respo(self.offSetX), respo(self.offSetY), "center", "center", false);
   

  self.startX = startX;
  self.startY = startY;

  if (self.isRendering) then
    self.fade = math.min(self.fade + 3, 255);
  else
    self.fade = math.max(self.fade - 10, 0);
  end
  

  self.traderBox:render(startX, startY, self.divWidth, self.fade);

  local spacing = startY + self.divHeight;

  self.meBox:render(startX, spacing - respo(200), self.divWidth, self.fade);

  self.checkBoxX = startX + self.divWidth - respo(19);
  local textX = startY + self.divHeight;

  dxDrawText(imports.locales:getString("pixel_inv:trade_title_checkbox"), startX, startY + self.divHeight, startX + self.divWidth - 25, startY + self.divHeight - 3, tocolor(255, 255, 255, self.fade/5), 1.0, fonts.OutfitRegular86, "right", "bottom");
  self:checkbox(self.checkBoxX, spacing - respo(18));


  if (self.trading) then 
    self.fade = math.max(self.fade - 10,100);
    dxDrawText(imports.locales:getString("pixel_inv:trade_title_checkout"), startX, startY, startX + self.divWidth-15, startY+self.divHeight, tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitRegular9, "center", "center");
    dxDrawImage((startX+self.divWidth /2) - respo(22), startY+self.divHeight/2 - 50, respo(22), respo(22), "assets/images/eclipse.png", getTickCount(),0,0, tocolor(255,255,255, self.fade));
  end
end


function TradeComponent:checkbox (x,y) 
  dxDrawImage(x, y, respo(17), respo(17), "assets/images/check_check.png", 0,0,0, self.checkBoxState and tocolor(139,191,72, self.fade) or tocolor(139,191,72, 0));
  dxDrawImage(x, y, respo(17), respo(17), "assets/images/checkbox.png", 0,0,0, tocolor(255,255,255,self.fade));
end

function TradeComponent:setTradingState (state) 
  self.trading = state;
end

function TradeComponent:setReadyState (side, state) 
  if (side == "me") then 
    self.meBox.state = state;
  elseif (side == "trader") then
    self.traderBox.state = state;
  end
end


function TradeComponent:getSlotByPosition (x,y) 
  for _, slot in ipairs(self.meSlotsUI) do
    if (slot:isInside(x, y)) then
      return slot;
    end
  end
  
  return nil;
end


function TradeComponent:onClick (b, s, abx, aby, cb)
  local state = false;

  if (b == 'left' and s == 'up') then
    if (self.startX and self.startY) then 
      local spacing = self.startY + self.divHeight;

      if (imports.ui:isMouseInPosition(self.checkBoxX, spacing - respo(18), respo(17), respo(17))) then 
        return executeCallback(cb, self.checkBoxState);
      end
    end
  end
end

function TradeComponent:setOffSets (ofx, ofy) 
  if (ofx) then 
    self.offSetX =  respo(ofx);
  end

  if (ofy) then 
    self.offSetY = respo(ofy);
  end
end

function TradeComponent:getOffsets () 
  return self.offSetX,  self.offSetY;
end

function TradeComponent:setIsRendering (state) 
  self.isRendering = state;
end