InventoryComponent = newclass "InventoryComponent";

function InventoryComponent:init (slots, container) 
  self.rectangleWidth = respo(360);

  self.offSetX =  0;
  self.offSetY = 100; 
  
  self.slotsUI = {};
  self.slots = slots;
  self.container = container;
  self.isMoving = false;
  self.fadeSlots = 0;
  self.isRendering = false;
  
  for k,v in pairs(self.slots) do 
    local slot = SlotToken (k, {x = 0, y = 0}, false, v, respo(68));
    table.insert(self.slotsUI, slot);
  end

  self.rectangleHeight = (respo(68  + 5)) * 5;
end

function InventoryComponent:weight (x,y,w,h,max, used, alpha) 
  local max_formated =  max / 1000;
  local used_formated = used / 1000;
  
  local sstring_weight_text = "/"..max_formated.." "..imports.locales:getString("pixel_inv:chest_used_kg");
  local sstring_weight_size = respo(dxGetTextSize(sstring_weight_text));
  
  dxDrawText(used_formated, x, y - respo(15.8), x+ w - sstring_weight_size, respo(h), tocolor(255, 255, 255, alpha/1), 1.0, fonts.OutfitRegular11, "right", "top");
  dxDrawText(sstring_weight_text, x,  y- respo(12), x + w, respo(h), tocolor(255, 255, 255, alpha/5), 1.0, fonts.OutfitRegular9, "right", "top");
  
  local shortcuts_text = imports.locales:getString("pixel_inv:inventory_title_name");
  local shortcuts_size = respo(dxGetTextSize(shortcuts_text, respo(9.6)));
  local shortcuts_padding = respo(shortcuts_size / 4 + 10);
  local lineWidth = w - shortcuts_size - shortcuts_padding * 2;
  lineWidth = math.min(lineWidth, respo(w - shortcuts_size - respo(200)) - (shortcuts_size/9));
  
  dxDrawText(shortcuts_text, x, y, w - shortcuts_size - shortcuts_padding, respo(9.6), tocolor(255,255,255,alpha), 1.0, fonts.OutfitRegular96);
  dxDrawRectangle(x + shortcuts_size + shortcuts_padding, y + respo(9), lineWidth * 1.2, respo(1), tocolor(255,255,255, alpha/10));
  
  local imageWidth, imageHeight = respo(35), respo(3);
  
  for i=1,4 do 
    local tabX = x - (i - 1) * (imageWidth + 5);
    
    if (i < self:getCalculedPerc(max, used)) then 
      dxDrawImage(tabX + w - imageWidth, y +  respo(7.6), imageWidth, imageHeight, "assets/images/bg_weight.png", 0, 0, 0, tocolor(255, 255, 255, alpha/10));
    else
      dxDrawImage(tabX + w - imageWidth, y +  respo(7.6), imageWidth, imageHeight, "assets/images/bg_weight.png", 0, 0, 0, tocolor(79, 79, 206, alpha));
    end
  end
end

function InventoryComponent:render (alpha)
  local startX, startY = imports.ui:createLayoutBox("inventory_container", self.rectangleWidth, self.rectangleHeight, respo(self.offSetX), respo(self.offSetY), "center", "center", false);
  
  self:weight(startX, startY - 30, self.rectangleWidth, self.rectangleHeight, self.container.maxWeight, self.container:getCurrentWeight(), alpha);
  
  local drawColumn = 0;
  local drawRow = 0;
  
  if (self.isRendering) then 
    self.fadeSlots = math.min(self.fadeSlots + 1, 255);
  else
    self.fadeSlots = math.max(self.fadeSlots - 5, 0);
  end
  
  if (self.isMoving and self.isRendering) then 
    self.fadeSlots = math.max(self.fadeSlots - 10, 100);
  elseif (not self.isMoving and self.isRendering) then
    self.fadeSlots = math.min(self.fadeSlots + 5, 255);
  end
  
  
  for k, slot in ipairs(self.slotsUI) do
    local spacing = respo(5);
    local x = (respo(68 + spacing)) * drawColumn + startX;
    local y = (respo(68 + spacing)) * drawRow + startY;
    
    
    drawColumn = drawColumn + 1;   
    
    slot:render({x = x, y = y}, self.fadeSlots);
    if (drawColumn == 5) then
      drawColumn = 0;
      drawRow = drawRow + 1;
    end
  end
end

function InventoryComponent:getSlotByPosition (x,y) 
  for _, slot in ipairs(self.slotsUI) do
    if (slot:isInside(x, y)) then
      return slot;
    end
  end
  
  return nil;
end

function InventoryComponent:setIsMoving (state)
  self.isMoving = state;
end

function InventoryComponent:setIsRendering (state) 
  self.isRendering = state;
end

function InventoryComponent:setOffSets (ofx, ofy) 
  if (ofx) then 
    self.offSetX = ofx;
  end
  
  if (ofy) then 
    self.offSetY = ofy;
  end
end


function InventoryComponent:getOffsets () 
  return self.offSetX, self.offSetY;
end

function InventoryComponent:getCalculedPerc (max, used)
  local percentage = used / max * 100;
  local value = math.ceil(percentage / 25);
  return 5 - value;
end