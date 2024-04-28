HotBarComponent = newclass("HotBarComponent");

function HotBarComponent:init (tabs, slots, active) 
  self.rectangleWidth = respo(360);
  self.rectangleHeight = respo(68);

  self.offSetX = 0;
  self.offSetY = -180;
  self.slotsUI = {};
  self.tabsUI = {};
  self.tabs = tabs;
  self.currentTab = 'bag';
  self.slots = slots;
  self.isRendering = false;
  self.fade = 0;

  for i, slot  in ipairs(slots) do  
    local slot = SlotToken (k, {x = 0, y = 0}, true, slot, respo(68));
    table.insert(self.slotsUI, slot);
  end
  
  for i, menu in ipairs(tabs) do 
    local txt_inventory = menu.title;
    local txt_inventorySize = dxGetTextSize(txt_inventory);
    local padding = 20;
    local centerX = txt_inventorySize + padding;
    local centerY = 25;
    
    local tab = TabToken (menu.icon, menu.title, respo(35), respo(35));
    table.insert(self.tabsUI, tab);
    
    useCreateMenuBg("svg_"..txt_inventory,  centerX, centerY, "#fff", 3, 1);   
  end
end


function HotBarComponent:render (opacity) 
  local startX, startY = imports.ui:createLayoutBox("inventory_hotbar", self.rectangleWidth, self.rectangleHeight,  respo(self.offSetX), respo(self.offSetY), "center", "center", false);
  local slotSize = respo(68);
  local slotSpacing = respo(5);
  local tabSize = respo(35);
  local tabSpacing = respo(10);
  local shortcuts_text = "HOTBAR";
  local shortcuts_size = respo(dxGetTextSize(shortcuts_text, respo(10.9)));
  local shortcuts_padding = shortcuts_size  / 4 + 10;
  

  local lineWidth = self.rectangleWidth - shortcuts_size - shortcuts_padding * 2;
  lineWidth = math.min(lineWidth, self.rectangleWidth - shortcuts_size - respo(180) - (shortcuts_size/9));

  if (self.isRendering) then 
    self.fade = math.min(self.fade + 10, 255);
  else
    self.fade = math.max(self.fade - 10, 0);
  end

  dxDrawText(shortcuts_text, startX, startY - tabSize - respo(10), self.rectangleWidth - shortcuts_size - shortcuts_padding , (respo(35) + startY) - tabSize - respo(10),  tocolor(255,255,255, self.fade), 1.0, fonts.OutfitRegular85, "left", "center");
  dxDrawRectangle(startX + shortcuts_size + shortcuts_padding, startY - tabSize + 5, lineWidth * 1.2, 1, tocolor(255,255,255, self.fade/6));
  

  for k, tab in ipairs(self.tabsUI) do
    local tabX = startX - (k - 1) * (tabSize + tabSpacing);
    tab:render(tabX + self.rectangleWidth -  (tabSize), startY - tabSize - 13, self.fade);
  end
  
  for k, slot in ipairs(self.slotsUI) do
    local slotX = startX + (k - 1) * (slotSize + slotSpacing);
    slot:render({x = slotX, y = startY + self.rectangleHeight - slotSize}, self.fade);
  end
end


function HotBarComponent:setTabActive (tabName) 
  if (tabName) then 
    local i, tab = table.find(self.tabsUI, function (t) return t.icon == tabName end);
 
    if (i and tab) then 
      tab:setTabActive(true);
      
      if (tab.icon ~= self.currentTab) then 
        local ci, current = table.find(self.tabsUI, function (tab) return tab.icon == self.currentTab end);
      
        if (current) then
          current:setTabActive(false);
        end
        
        self.currentTab = tab.icon;
        return  self.currentTab, current.icon;
      end


      return  self.currentTab, nil;
    end
  end
end


function HotBarComponent:setOffSets (ofx, ofy) 
  if (ofx) then 
    self.offSetX =  ofx;
  end

  if (ofy) then 
    self.offSetY = ofy;
  end
end


function HotBarComponent:setIsRendering (state) 
  self.isRendering = state;
end


function HotBarComponent:getOffsets () 
  return self.offSetX,  self.offSetY;
end


function HotBarComponent:getTabByPosition (x,y) 
  for _, tab in ipairs(self.tabsUI) do 
    if (x >= tab.x and x <= tab.x + tab.w and y >= tab.y and y <= tab.y + tab.h) then 
      return tab;
    end
  end
  
  return false;
end


function HotBarComponent:getSlotByPosition (x,y) 
  for _, slot in ipairs(self.slotsUI) do
    if (slot:isInside(x, y)) then
      return slot;
    end
  end
  
  return nil;
end

function HotBarComponent:onClick (b, s, abx, aby, tradeUI, callback) 
  if (b == 'left' and s == 'down') then 
    local tab  = self:getTabByPosition(abx, aby)
    if (tab and tab.icon ~= self.currentTab) then 
      if (tab.icon == "trade" and not tradeUI.isTrading) then
        return imports.notify:showInfobox("info", imports.locales:getString("pixel_inv:toast_trade_title"), imports.locales:getString("pixel_inv:toast_trade_msg"));
      end

      local current, diff = self:setTabActive(tab.icon);
      
      return executeCallback(callback, current, diff);
    end
  end
end