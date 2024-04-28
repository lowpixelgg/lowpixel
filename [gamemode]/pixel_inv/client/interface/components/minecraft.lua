MinecraftComponent = newclass "MinecraftComponent";

function MinecraftComponent:init (slots) 
  self.offSetX =  0;
  self.offSetY = 0;
  self.slotSize = respo(55);
  self.rectangleWidth = respo(239);
  self.rectangleHeight = respo(45);
  self.slots = slots or {};
  self.highlight = nil;
  self.highlightFade = 255;
  self.isRendering = false;
end

function MinecraftComponent:slot (slot, x,y) 
  if (not self.isRendering) then return false end

  dxDrawImage(x, y, self.slotSize, self.slotSize, "assets/images/slot_bg2.png", 0,0,0, tocolor(255, 255,255, 255));

  
  local numbX = (x + self.slotSize) - respo(23);
  local numbY = (y + self.slotSize) - respo(24);
      
  dxDrawImage(numbX, numbY, respo(23), respo(24), "assets/images/slot_numb.png", 0, 0, 0, tocolor(18,18,18,150));
  dxDrawText(slot.id,  numbX, numbY, respo(23) + numbX, respo(24) + numbY, tocolor(255, 255, 255, 255), 1.0, fonts.OutfitRegular85, "center", "center", false, false, false, false, false);

  local item =  slot:getItem();
  
  if (item) then 
    dxDrawImage(x,y, self.slotSize, self.slotSize, "assets/images/items/"..item.icon..".png", 0,0,0, tocolor(255, 255, 255, 255));
    
    if (#slot:getAllItems() > 1) then 
      dxDrawText(#slot:getAllItems()..'x', x + 5, y+ 2, respo(45), respo(45), tocolor(255, 255, 255, 190), 1.0, fonts.OutfitLight7, "left", "top");
    end
  end


  if (slot == self.highlight) then 
    self.highlightFade = math.max(self.highlightFade - 5, 0);
    dxDrawImage(x, y, self.slotSize, self.slotSize, "assets/images/slot_bg2_glow.png", 0,0,0, tocolor(255, 255,255, self.highlightFade));
  
    if (self.highlightFade <= 0) then 
      self.highlight = nil;
      self.highlightFade = 255;
    end
  end
end


function MinecraftComponent:setOffSets (ofx, ofy) 
  if (ofx) then 
    self.offSetX =  ofx;
  end

  if (ofy) then 
    self.offSetY = ofy;
  end
end



function MinecraftComponent:getOffsets ()
  return self.offSetX, self.offSetY;
end


function MinecraftComponent:setIsRendering (state) 
  self.isRendering = state;
end


function MinecraftComponent:setSlotHighligh (slot) 
  self.highlight = slot;
end


function MinecraftComponent:render () 
  local startX, startY = imports.ui:createLayoutBox("inventory_minecraft", self.rectangleWidth, self.rectangleHeight, -20, 20, "center", "bottom", false);

  for i,v in ipairs(self.slots) do
      local slotX = startX + (i - 1) * ((self.slotSize) + 2);
      self:slot(v, slotX, startY);
  end
end