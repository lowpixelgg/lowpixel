ClientInventory = {
  isRendering = false;
  minecraftUI = true;
};

local tickAnimation;
local progressAnimation;
local tickAnimationPage;
local progressAnimationPage;
local alphaEffectI, alphaEffectF;
local tickCooldown;
local tickMove;
local fade = 0;
local carry;
local timer;
local closeTime;


local tabs = {
  {icon = "trade", title = imports.locales:getString("pixel_inv:tab_title_trade")},
  {icon = "clothing", title = imports.locales:getString("pixel_inv:tab_title_clothing")},
  {icon = "bag", title = imports.locales:getString("pixel_inv:tab_title_bag")},
}

local help = {
  {msg = imports.locales:getString("pixel_inv:help_mouse1_actions"), key = "MOUSE"},
  {msg = imports.locales:getString("pixel_inv:help_mouse2_infomations"), key = "MOUSE 2"},
  {msg = imports.locales:getString("pixel_inv:help_esc_close_inventory"), key = "TAB"},
  {msg = imports.locales:getString("pixel_inv:help_hold_shift"), key = "SHIFT"}
}


function ClientInventory:start()
  imports.blur:setBlurIntensity(2);
  
  ClientInventory.containerContext = container:create("bag", {}, 6, 5, 60, 0, 410000);
  ClientInventory.tradeContext = trade:create({}, {}, 2, 4);
  ClientInventory.personContext = person:create({}, {
    { category = "plus" },
    { category = "chain" },
    { category = "hat" },
    { category = "ocle" },
    { category = "mask" },
    { category = "upper" },
    { category = "upper_proof" },
    { category = "bag" },
    { category = "clock" },
    { category = "ring" },
    { category = "lower" },
    { category = "foot" },
  });
  
  ClientInventory.infosUI = InfoComponent ();
  ClientInventory.containerUI = InventoryComponent (ClientInventory.containerContext:getSlots(6,30), ClientInventory.containerContext);
  ClientInventory.personUI = PersonComponent (ClientInventory.personContext:getSlots());
  ClientInventory.hotbarUI = HotBarComponent (tabs, ClientInventory.containerContext:getSlots(1,5));
  ClientInventory.tradeUI = TradeComponent (ClientInventory.tradeContext:getSlots("me"), ClientInventory.tradeContext:getSlots("trader"));
  ClientInventory.mineUI = MinecraftComponent (ClientInventory.containerContext:getSlots(1,5));
  
  ClientInventory.helplistUI = imports.widgets:createHelplist("inventory_helplist", {
    list = help,
  })
  
  
  ClientInventory.mineUI:setIsRendering(true);
  Animations:new ();
  
  
  bindKey("tab", "up", ClientInventory.bindInventoryAction);
  addEventHandler("onClientKey", root, ClientInventory.onKey);
end


function ClientInventory:bindInventoryAction () 
  if visual then return false end
  
  if (not ClientInventory.isRendering) then
    ClientInventory:toggle("show");
  else
    ClientInventory:toggle("hide");
  end
end

function ClientInventory:renderBar () 
  if (ClientInventory.mineUI) then 
    ClientInventory.mineUI:render();
    
    if (ClientInventory.receiveToken) then 
      ClientInventory.receiveToken:render();
    end
  end
end

function ClientInventory:render ()
  if (ClientInventory.isRendering) then 
    fade = math.min(fade + 10, 255);
  else
    fade = math.max(fade - 5, 0);
  end
  
  dxDrawImage( 0, 0, 1920, 1080, "assets/images/background.png", 0, 0, 0, tocolor(255,255,255, fade));
  
  if (ClientInventory.chestUI) then 
    ClientInventory.chestUI:render(fade);
  end
  
  ClientInventory.containerUI:render(fade);
  ClientInventory.hotbarUI:render(fade);
  ClientInventory.personUI:render();


  if (ClientInventory.separateUI) then 
    ClientInventory.separateUI:render();
  end
  
  imports.widgets:renderHelplist(ClientInventory.helplistUI, fade);
  
  ClientInventory.tradeUI:render();
  ClientInventory.infosUI:render();
  
  
  if (isCursorShowing() and not ClientInventory.actionsUI) then 
    local cx, cy = getCursorPosition();
    cx, cy = math.floor(cx * scw), math.floor(cy * sch);
     
    local slot = ClientInventory.containerUI:getSlotByPosition(cx, cy) 
    or (ClientInventory.personUI.isRendering and ClientInventory.personUI:getSlotByPosition(cx, cy)) 
    or ClientInventory.hotbarUI:getSlotByPosition(cx, cy)
    or (ClientInventory.tradeUI.isTrading and ClientInventory.tradeUI:getSlotByPosition(cx, cy))
    or (ClientInventory.chestUI and ClientInventory.chestUI.isRendering and ClientInventory.chestUI:getSlotByPosition(cx, cy))
    
    if (slot and #slot.data.items > 0 and not carry) then 
      
      if (not timer) then
        timer = setTimer(function()
          ClientInventory.infosUI.slot = slot;
          ClientInventory.infosUI.isRendering = true;
          
          timer = nil;
        end, 1500, 1)
      end
      
      ClientInventory.infosUI.x = cx;
      ClientInventory.infosUI.y = cy;
    else
      if (timer) then
        killTimer(timer);
        timer = nil;
      end
      
      ClientInventory.infosUI.isRendering = false;
    end
  else
    if (timer) then
      killTimer(timer);
      timer = nil;
    end
    
    ClientInventory.infosUI.isRendering = false;
    ClientInventory.infosUI.slot = nil;
  end


  
  if (ClientInventory.actionsUI) then 
    ClientInventory.actionsUI:render();
  end
end


function ClientInventory.onCharacter (character)
  if (ClientInventory.separateUI) then 
    imports.editbox:charEditbox(ClientInventory.separateUI.editbox, character);
  end
end


function ClientInventory.onKey (button, press)
  if (ClientInventory.mineUI) then 
    if (press) then 
      if (button == "1" or button == "2" or button == "3" or button == "4" or button == "5") then
        local slot = ClientInventory.containerContext:getSlot(tonumber(button))
        
        if (#slot.items > 0) then 
          network:emit("pixel_inv:onClientUpdateHotbar", true, true, localPlayer, slot.items[1]);
        end
      end
    end
  end
  
  if (ClientInventory.separateUI) then 
    imports.editbox:keyEditbox(ClientInventory.separateUI.editbox, button, press);
  end
end

function ClientInventory.onClick (b, s, abx, aby, _, _, _, element)
  if (not ClientInventory.containerContext or not ClientInventory.containerUI) then
    return false;
  end
  
  if (ClientInventory.tradeUI.isTrading) then 
    ClientInventory.tradeUI:onClick(b, s, abx, aby, function () 
      network:emit("pixel_inv:onClientRefreshTradeState", true, false, localPlayer);
    end)
  end
  
  
  ClientInventory.hotbarUI:onClick(b, s, abx, aby, ClientInventory.tradeUI, function (tab, diff)
    if (ClientInventory.chestContext and ClientInventory.chestUI) then 
      ClientInventory.chestContext = nil;
      ClientInventory.chestUI = nil;
    end
    
    if (tab == "clothing" and diff == "bag") then
      Animations:PersonTabInOut('enter');
      ClientInventory.personUI:setIsRendering(true);
    elseif tab == "trade" and diff == "bag" then
      Animations:TradeTabInOut('enter');
      ClientInventory.tradeUI:setIsRendering(true);
    elseif tab == "trade" and diff == "clothing" then
      setTimer(function ()
        ClientInventory.tradeUI:setIsRendering(true);
        Animations:TradeTabInOut('enter');
      end, 600, 1)
      
      
      Animations:PersonTabInOut('leave');
      ClientInventory.personUI:setIsRendering(false);
    elseif tab == "bag" and diff == "clothing" then
      Animations:PersonTabInOut('leave');
      ClientInventory.personUI:setIsRendering(false);
      
    elseif tab == "bag" and diff == "trade" then
      Animations:TradeTabInOut('leave');
      ClientInventory.tradeUI:setIsRendering(false);
      
    elseif tab == "clothing" and diff == "trade" then
      Animations:TradeTabInOut('leave');
      ClientInventory.tradeUI:setIsRendering(false);
      
      setTimer(function () 
        ClientInventory.personUI:setIsRendering(true);
        Animations:PersonTabInOut('enter');
      end, 600, 1)
    end
    
    imports.assets:playSoundFX("ui_woosh_down", false, 1);
  end);
  
  if (ClientInventory.actionsUI) then
    ClientInventory.actionsUI:onClick(b, s, abx, aby, ClientInventory.containerContext, ClientInventory.tradeContext, function (button, slot)
      if (button == "use") then         
        network:emit("pixel_inv:onClientRequestUseItem", true, true, localPlayer, slot.data.items[1]);
      elseif (button == "separate") then
        ClientInventory.separateUI = SeparateComponent(slot, imports.locales:getString("pixel_inv:infos_input_quantity"), {
          {title = imports.locales:getString("pixel_inv:infos_separate_button_confirm"), color = "#4F4FCE", opacity = 1, action = "separate"}, 
          {title = imports.locales:getString("pixel_inv:infos_separate_button_cancel"), color = "#404040", opacity = 0.5, action = "cancel"}, 
        });
      end
    end)
  end


  if (ClientInventory.separateUI) then 
    imports.editbox:clickEditbox(ClientInventory.separateUI.editbox, b, s, abx, aby);
  end


  if (ClientInventory.separateUI) then 
    ClientInventory.separateUI:onClick(b, s, abx, aby, function (button, slot) 
      if (button == "separate") then
        local qtd = tonumber(imports.editbox:getTextEditbox(ClientInventory.separateUI.editbox));

        if (not qtd) then return false end

        if (qtd >= slot.data:getAmount()) then 
          imports.assets:playSoundFX("error", false, 1);
          return imports.notify:showInfobox("info", imports.locales:getString("pixel_inv:toast_trade_msg"), imports.locales:getString("pixel_inv:infos_toast_does_not_own"));
        end

        local getFreeSlot = ClientInventory.containerContext:getFreeSlot();
        
        if (getFreeSlot == -1 or getFreeSlot == 0) then
          imports.assets:playSoundFX("error", false, 1);

          return imports.notify:showInfobox("info", imports.locales:getString("pixel_inv:toast_trade_msg"), imports.locales:getString("pixel_inv:toast_donthave_items_onbag"));
        end


        local _slot1, _slot2, _isCreated = switch(slot, ClientInventory.containerContext:getSlots()[getFreeSlot], qtd);

        network:emit("pixel_inv:onServerRefreshInventory", true, true, localPlayer, getFormatedSlot(_slot1), "bag", ClientInventory.containerContext:getCurrentWeight(), _isCreated, false);
      elseif (button == "cancel") then
      end

      ClientInventory.separateUI:destroy();
      ClientInventory.separateUI = nil;
      
      imports.assets:playSoundFX("ui_select2", false, 1);
    end)
  end
  
  
  if (b == 'left' and s == 'down') then    
    local slot = ClientInventory.actionsUI and ClientInventory.actionsUI:getSlotByPosition(abx, aby)
    or ClientInventory.containerUI:getSlotByPosition(abx, aby)
    or ClientInventory.personUI.isRendering and ClientInventory.personUI:getSlotByPosition(abx, aby) 
    or ClientInventory.hotbarUI:getSlotByPosition(abx, aby)
    or ClientInventory.tradeUI.isTrading and ClientInventory.tradeUI:getSlotByPosition(abx, aby)
    or ClientInventory.chestUI and ClientInventory.chestUI.isRendering and ClientInventory.chestUI:getSlotByPosition(abx, aby)

    if (not (slot and slot.data and (#slot.data.items > 0))) then

      
    if (ClientInventory.actionsUI) then
      if (not ClientInventory.actionsUI:getButtonByPosition(abx, aby)) then 
        ClientInventory.actionsUI:destroy();
        ClientInventory.actionsUI = nil;
      end
    end

      return
    end


   if (slot.data:getContainer().name == 'person' and slot.data.items[1]['data'].part == 'backpack') then 
     for _, item in ipairs(ClientInventory.containerContext:getItemsFormated()) do 
        if (item.slot > 15) then 
          return imports.notify:showInfobox("info", imports.locales:getString("pixel_inv:toast_trade_msg"), "Você não pode remover a mochila por que tem itens nela.");
        end
     end
   end

    carry = slot;
    


    carry.data.click = {
      x = abx - slot.position.x,
      y = aby - slot.position.y
    }
    
    carry.data:setMoving(true);
    
    if (carry.data:getContainer().name == 'bag') then 
      ClientInventory.containerUI:setIsMoving(true);
    end
    
  elseif (b == 'left' and s == 'up') then  
    if (carry and carry.data) then 

      carry.data:setMoving(false);
      ClientInventory.containerUI:setIsMoving(false);
      
      local slot = ClientInventory.containerUI:getSlotByPosition(abx, aby)
      or ClientInventory.personUI.isRendering and ClientInventory.personUI:getSlotByPosition(abx, aby)
      or ClientInventory.hotbarUI:getSlotByPosition(abx, aby)
      or ClientInventory.tradeUI.isTrading and ClientInventory.tradeUI:getSlotByPosition(abx, aby)
      or ClientInventory.chestUI and ClientInventory.chestUI.isRendering and ClientInventory.chestUI:getSlotByPosition(abx, aby)
      or ClientInventory.actionsUI and ClientInventory.actionsUI:getSlotByPosition(abx, aby);
      
      if (not slot) then  
        carry = nil;
        return
      end

      if (slot.data.id > 15 and carry.data.items[1]['data'].part == 'backpack') then 
        return imports.notify:showInfobox("info", imports.locales:getString("pixel_inv:toast_trade_msg"), imports.locales:getString("pixel_inv:toast_dontremove_bag"));
      end


      if (slot == carry) then 
        carry = nil;
        return
      end


      if (carry.data:getItem().category ~= slot.data.category ) then
        if (slot.data.category ~= "everyone") then 
          carry = nil;

          return
        end
      end

      if (slot.data:getContainer().name == "subItem") then 
        local whitelist = itemsMeta[ClientInventory.actionsUI.slot.data:getItem().name].subItens.whitelist
        local maxSubItens  =itemsMeta[ClientInventory.actionsUI.slot.data:getItem().name].subItens.maxItems
        local minSubItems  =itemsMeta[ClientInventory.actionsUI.slot.data:getItem().name].subItens.maxItems

        local _, whitelisted = table.find(whitelist, function (v) return v == carry.data:getItem().name end)
   

        if (carry.data:getCountItems() > maxSubItens or carry.data:getCountItems() < minSubItems) then 
          carry = nil;
          imports.notify:showInfobox("info", "Inventário", string.format("Este slot só aceita no maximo %s e no minimo %s", maxSubItens, minSubItems))
          
          return;
        end

        if (not whitelisted) then
          carry = nil;
          return;
        end
      end
      
      if (slot and slot.data and carry) then 
        local qtd = carry.data:getAmount()
        
        local _slot1, _slot2, _isCreated, _removeId = switch(carry, slot, qtd);


        if (_slot1 and _slot2) then 
          if (_slot1:getContainer().name == "trade" or _slot2:getContainer().name == "trade") then
            network:emit("pixel_inv:onServerRefreshTradeItems", true, true, localPlayer, identifyMovement(_slot1, _slot2), carry.data:getContainer().name, _isCreated, _removeId);
          elseif (_slot1:getContainer().name == "chest" or _slot2:getContainer().name == "chest") then
            network:emit("pixel_inv:onClientRefreshChestItems", true, true, localPlayer, identifyMovement(_slot1, _slot2), carry.data:getContainer().name, ClientInventory.chestContext.id);
          elseif (_slot1:getContainer().name == "person" or _slot2:getContainer().name == "person") then
            network:emit("pixel_inv:onServerRefreshInventory", true, true, localPlayer, identifyMovement(_slot1, _slot2), carry.data:getContainer().name, 0, _isCreated, _removeId);
          elseif (_slot1:getContainer().name == "subItem" or _slot2:getContainer().name == "subItem") then
            local subItemAs = ClientInventory.actionsUI.slot.data.items[#ClientInventory.actionsUI.slot.data.items]._id
            
            if (subItemAs) then 
              network:emit("pixel_inv:onServerRefreshInventory", true, true, localPlayer, identifyMovement(_slot1, _slot2), carry.data:getContainer().name, 0, _isCreated or false, _removeId or false, subItemAs);
            end
          else
            network:emit("pixel_inv:onServerRefreshInventory", true, true, localPlayer, ClientInventory.containerContext:getItemsFormated(), carry.data:getContainer().name, ClientInventory.containerContext:getCurrentWeight(), _isCreated, _removeId);
          end
          
          carry = nil;
        end
      end
    end
  elseif (b == "right" and s == "down") then
    local slot = ClientInventory.containerUI:getSlotByPosition(abx, aby) or ClientInventory.hotbarUI:getSlotByPosition(abx, aby);
    if (not (slot and slot.data and (#slot.data.items > 0))) then return end
    
    
    local item = slot.data.items[#slot.data.items];
    
    if (item) then 
      local height = ClientInventory.containerUI.rectangleHeight
      local ofx, ofy = ClientInventory.containerUI.offSetX, ClientInventory.containerUI.offSetY

      ClientInventory.actionsUI = ActionsComponent (ofx, height, slot);
      ClientInventory.actionsUI.buttons[1].title = item.category == "utilities" and imports.locales:getString("pixel_inv:button_action_equip") or imports.locales:getString("pixel_inv:infos_button_use");
      ClientInventory.actionsUI:setIsRendering(true);
    end
  end
end

function ClientInventory:toggle(state) 
  if (state == "show") then
    if (isTimer(closeTime)) then 
      imports.notify:showInfobox("info", imports.locales:getString("pixel_inv:toast_trade_msg"), imports.locales:getString("pixel_inv:toast_open_sofast"));
      
      return;
    else
      closeTime = nil;
    end
    
    if (not ClientInventory.isRendering) then
      
      if (not isCursorShowing()) then 
        imports.ui:toggleCursor(true);
      end

      exports.pixel_hud:hideByComplete(true);
      
      ClientInventory.hotbarUI:setTabActive(ClientInventory.hotbarUI.currentTab);
      ClientInventory.hotbarUI:setIsRendering(true);
      ClientInventory.containerUI:setIsRendering(true);
      
      if (ClientInventory.hotbarUI.currentTab == 'clothing') then 
        ClientInventory.personUI:setIsRendering(true);
      elseif (ClientInventory.hotbarUI.currentTab == 'trade') then
        ClientInventory.tradeUI:setIsRendering(true);
      elseif (ClientInventory.hotbarUI.currentTab == 'bag') then
        Animations:HotbarInOut('enter');
      end
      
      imports.assets:playSoundFX("ui_woosh_up", false, 1);
      
      ClientInventory.isRendering = true;
      
      
      addEventHandler("onClientRender", root, ClientInventory.render);
      addEventHandler("onClientCharacter", root, ClientInventory.onCharacter);
      addEventHandler("onClientClick", root, ClientInventory.onClick);
    end
  elseif (state == "hide") then
    
    if (isCursorShowing()) then 
      imports.ui:toggleCursor(false);
    end
    
    if (isTimer(closeTime)) then 
      return;
    end
    
    closeTime = setTimer(function () 
      if (ClientInventory.actionsUI) then 
        if (ClientInventory.actionsUI.slot) then 
          ClientInventory.actionsUI = nil;
        end
        
        
        if (ClientInventory.separateUI) then 
          imports.blur:destroyBlurBox(ClientInventory.separateUI.blur);
          ClientInventory.separateUI = nil;
        end
      end

      removeEventHandler("onClientRender", root, ClientInventory.render);
      removeEventHandler("onClientCharacter", root, ClientInventory.onCharacter);
      removeEventHandler("onClientClick", root, ClientInventory.onClick);
      
      exports.pixel_hud:hideByComplete(false);

      if (isTimer(closeTime)) then 
        killTimer(closeTime);
        closeTime = nil;
      end
    end, 1000, 1);
    
    ClientInventory.hotbarUI:setIsRendering(false);
    ClientInventory.containerUI:setIsRendering(false);
  
    if (ClientInventory.actionsUI) then 
      ClientInventory.actionsUI:setIsRendering(false);
    end
    
    if (ClientInventory.hotbarUI.currentTab == 'clothing') then 
      ClientInventory.personUI:setIsRendering(false);
    elseif (ClientInventory.hotbarUI.currentTab == 'trade') then
      ClientInventory.tradeUI:setIsRendering(false);
    elseif (ClientInventory.hotbarUI.currentTab == 'bag') then
      Animations:HotbarInOut('leave')
    end
    
    if (carry and carry.data) then
      carry.data:setMoving(false);
      carry = nil;
    end
    

    if (ClientInventory.chestContext and ClientInventory.chestUI) then 
      ClientInventory.chestUI:setIsRendering(false);
      
      ClientInventory.chestUI = nil;
      ClientInventory.chestContext = nil;
    end
    
    imports.assets:playSoundFX("ui_woosh_up", false, 1)
    ClientInventory.mineUI:setIsRendering(true);
    ClientInventory.isRendering = false;
  end
end