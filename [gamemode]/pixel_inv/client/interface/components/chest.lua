ChestComponent = newclass ("ChestComponent");

function ChestComponent:init (slots, container) 
  self.rectangleWidth = respo(360);
  self.rectangleHeight = respo(300);
  self.offSetX = 400;
  self.offSetY = -120;
  
  self.name = "{{ sstr_chest_name }}";
  self.slotsUI = {};
  self.slots = slots;
  self.info = info;
  self.container = container;
  self.isMoving = false;
  self.fadeSlots = 0;
  self.isRendering = false;
  
  for k,v in pairs(self.slots) do 
    local slot = SlotToken (k, {x = 0, y = 0}, false, v);
    table.insert(self.slotsUI, slot);
  end


  self.rectangleHeight = (respo(68 + 5)) * container.columns + 40;
end


function ChestComponent:render (alpha) 
  local startX, startY = imports.ui:createLayoutBox("inventory_chest", self.rectangleWidth, self.rectangleHeight, respo(self.offSetX), respo(self.offSetY), "center", "center", false);
  local drawColumn = 0;
  local drawRow = 0;

  if (self.isRendering) then 
    self.fadeSlots = math.min(self.fadeSlots + 1, 255);
  else
    self.fadeSlots = math.max(self.fadeSlots - 5, 0);
  end
  
  local shortcuts_text = string.upper(self.name);
  local shortcuts_size = respo(dxGetTextSize(shortcuts_text, respo(9)));
  
  local max_formated = self.container.maxWeight / 1000;
  local used_formated = self.container:getCurrentWeight() / 1000;
  
  local sstring_weight_text = "#FFFFFF" .. used_formated .. "#5C5C5C/" .. max_formated .. " "..imports.locales:getString("pixel_inv:chest_used_kg");

  dxDrawText(shortcuts_text, startX, startY, self.rectangleWidth, self.rectangleHeight, tocolor(255, 255, 255, self.fadeSlots), 1.0, fonts.OutfitRegular9);
  
  for k, slot in ipairs(self.slotsUI) do 
    local spacing = respo(5);
    local x = respo(68 + spacing) * drawColumn + startX;
    local y = respo(68 + spacing) * drawRow + startY + 20;

    drawColumn = drawColumn + 1;

    slot:render({x = x, y = y}, self.fadeSlots);
    if (drawColumn == 5) then
      drawColumn = 0;
      drawRow = drawRow + 1;
    end
  end

  dxDrawText(sstring_weight_text, startX, startY + self.rectangleHeight, startX + self.rectangleWidth, startY + self.rectangleHeight, tocolor(255, 255, 255, self.fadeSlots), 1.0, fonts.OutfitRegular9, "right", "bottom", false, false, false, true);
end


function ChestComponent:getSlotByPosition (x,y) 
  for _, slot in ipairs(self.slotsUI) do
    if (slot:isInside(x, y)) then
      return slot;
    end
  end
  
  return nil;
end


function ChestComponent:setIsRendering (state) 
  self.isRendering = state;
end


function ChestComponent:setOffsets (ofx, ofy) 
  if (ofx) then 
    self.offSetX =  ofx;
  end

  if (ofy) then 
    self.offSetY = ofy;
  end
end

function ChestComponent:getOffsets () 
  return self.offSetX, self.offSetY;
end