ActionsComponent = newclass "ActionsComponent"
local items = imports.core:getItemsMeta()



function ActionsComponent:init (xOffset, yOffset, slot) 
  if (not slot) then return false end
  
  self.x = xOffset;
  self.y = yOffset;
  self.isRendering = false;
  self.fade = 0;
  self.divWidth = respo(360);
  
  self.buttons = {
    {title = imports.locales:getString("pixel_inv:infos_button_send"), color = "#4F4FCE", opacity = 1, action = "send"}, 
    {title = imports.locales:getString("pixel_inv:infos_button_separate"), color = "#FFFFFF", opacity = 0.12, action = "separate"}, 
  };
  
  local item = slot.data.items[#slot.data.items];
  self.meta = items[item.name];
  
  local spacing = respo(1);
  self.totalWidth = 0;
  
  
  if (self.meta.subItens) then 
    self.slotsUI = {};
    
    for k,v in pairs(item.container:getSlots()) do 
      local slot = SubItem (k, {x = 0, y = 0}, false, v, respo(35));
      table.insert(self.slotsUI, slot);
    end
  end
  
  self.divHeight = respo(140);
  
  
  
  for i, button in ipairs(self.buttons) do
    self.buttons[i] = ButtonToken (0,0, respo(90), respo(25), button.title, button.color, button.opacity, button.action);
  end
    
  self:setItemInfoData(slot);
end


function ActionsComponent:render () 
  if (self.isRendering) then 
    self.fade = math.min(self.fade + 10, 255);
  else
    self.fade = math.max(self.fade - 60, 0);
  end
  
  if (not self.slot) then return false end  
  
  
  local item = self.slot.data.items[#self.slot.data.items];
  if (not item) then return false end
  
  local startX, startY = imports.ui:createLayoutBox("inventory_info", self.divWidth, self.divHeight, respo(self.x), respo(self.y),  "center", "center", false);
    
  
  local undX = startX + self.divWidth - respo(50);
  local undY = startY;
  
  dxDrawImage(undX, undY, respo(50), respo(50), "assets/images/slot_bg.png", 0,0,0, tocolor(255, 255, 255, self.fade));
  dxDrawText(getFormatedNumber(self.slot.data:getAmount()), undX, undY, undX + respo(50), undY + respo(40), tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitRegular12, "center", "center");
  dxDrawText(item.name == "money" and "$" or "UND", undX, undY, undX + respo(50), undY + respo(75), tocolor(255, 255, 255, self.fade/2), 1.0, fonts.OutfitLight7, "center", "center");
  
  
  if (item.data.name) then 
    dxDrawText(item.data.name, startX, startY + respo(15), self.divWidth, self.divHeight, tocolor(255,255,255, self.fade), 1.0, fonts.OutfitRegular12);
  else
    dxDrawText(item.title, startX, startY + respo(15), self.divWidth, self.divHeight, tocolor(255,255,255, self.fade), 1.0, fonts.OutfitRegular12);
  end
  
  local weight_text = item.weight / 1000;
  
  dxDrawText("#D4D4D4 "..weight_text .. "#868686 kg", startX, startY + respo(35), respo(self.divWidth), respo(self.divHeight), tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitRegular9, "left", "top", false, false, false, true);
  
  if (item.timestamp and item.timestamp > 0) then 
    local roaming = roaming(item.timestamp);
    local validity = not roaming and "#868686 "..imports.locales:getString("pixel_inv:infos_item_damaged") or "#868686 "..imports.locales:getString("pixel_inv:infos_item_endsIn").." #D4D4D4" ..roaming;
    dxDrawText(validity, startX, startY + respo(55), respo(self.divWidth), respo(self.divHeight), tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitRegular95, "left", "top", false, false, false, true);
  else
    dxDrawText("#868686 "..imports.locales:getString("pixel_inv:infos_item_not_damaged"), startX, startY + respo(55), respo(self.divWidth), respo(self.divHeight), tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitRegular95, "left", "top", false, false, false, true);
  end
  
  
  local spacing = 3;
  local totalWidth = 0 ;
  
  
  if (self.meta.subItens) then 
    
    for i,v in ipairs(self.slotsUI) do
      local slotX = startX + (i - 1) * respo(((35) + 2));
      v:render({x = slotX, y = startY + (self.divHeight - respo(35))}, self.fade);
    end
    
    dxDrawText("#D4D4D4 Attachments:", startX, startY + (self.divHeight - respo(55)), respo(self.divWidth), respo(self.divHeight), tocolor(255, 255, 255, self.fade), 1.0, fonts.OutfitRegular9, "left", "top", false, false, false, true);
  end
  
  
  local buttonHeight = respo(30); 
  local spacing = 1;
    
    for k, v in ipairs(self.buttons) do     
        local totalButtonHeight = #self.buttons * buttonHeight; 
        local totalSpacing = (#self.buttons - 1) * spacing; 

        local adjustedSlotX = startY + self.divHeight - totalButtonHeight - totalSpacing + (k - 1) * (buttonHeight + spacing);
        
        v:render(startX + (self.divWidth - 90), adjustedSlotX, self.fade);
    end 
end


function ActionsComponent:setItemInfoData(slot) 
  if (slot ~= nil) then 
    if (not slot) then return false end
    
    self.slot = slot;
  else
    self.slot = nil;
  end
end


function ActionsComponent:setIsRendering (state) 
  self.isRendering = state;
end


function ActionsComponent:getButtonByPosition (x,y) 
  if (not self.slot) then return false end
  
  for _, button in ipairs(self.buttons) do 
    if (x >= button.x and x <= button.x + button.w and y >= button.y and y <= button.y + button.h) then 
      return button;
    end
  end
  
  return false;
end

function ActionsComponent:onClick (b,s,abx,aby, container, trade, callback) 
  if (b == "left" and s == "up") then 
    local button = self:getButtonByPosition(abx, aby);
    
    if (button) then 
      executeCallback(callback, button.action, self.slot)
      
      if (s == "up") then 
        imports.assets:playSoundFX("ui_select2", faxlse, 1);
      end
    end
  end
end



function ActionsComponent:destroy () 
end

function ActionsComponent:getSlotByPosition (x,y) 
  if (not self.slotsUI) then return false end
  for _, slot in ipairs(self.slotsUI) do
    if (slot:isInside(x, y)) then
      return slot;
    end
  end
  
  return nil;
end