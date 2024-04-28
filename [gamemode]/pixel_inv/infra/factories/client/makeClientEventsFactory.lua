visual = nil;
local meta = imports.core:getItemsMeta();

function refreshClientInventory(data, clear)
  if (not data) then return end
  
  if (clear) then 
    ClientInventory.containerContext:clearItems();
  end
  
  ClientInventory.containerContext:setMaxWeight(data.maxWeight);
  
  if (data.level) then 
    ClientInventory.containerContext:setContainerLevel(data.level);
  end

  for _, item in ipairs(data.items) do 
    if (item.container == "bag") then  
      ClientInventory.containerContext:setItemSlot(item.slot, item._id, item.name, item.state, item.timestamp, item.amount, item.data);
    elseif (item.container == "person") then
      ClientInventory.personContext:setItemSlot(item.slot, item._id, item.name, item.state, item.timestamp, item.data);
    end
  end
  
  for _, item in ipairs(data.items) do 
    if (item.container == "subItem") then
      local hasMainItem = ClientInventory.containerContext:getItem(item.subItemAt)
      
      if (hasMainItem) then 
        local mainItem, slot = unpack(hasMainItem);
        mainItem.container:setItemSlot(item.slot, item._id, item.name, item.state, item.timestamp, item.amount, item.data);
      end
    end
  end
end


function giveInventoryItem (data) 
  if (not data) then return false end
  
  if (#data > 1) then 
    for index, item in ipairs(data) do
      if (item.container == "bag") then 
        ClientInventory.containerContext:setItemSlot(item.slot, item._id, item.name, item.state, item.timestamp, item.amount, item.data);
      elseif (item.container == "person") then 
        ClientInventory.personContext:setItemSlot(item.slot, item._id, item.name, item.state, item.timestamp, item.amount, item.data);
      end
    end
  else
    if (data.container == "bag") then 
      ClientInventory.containerContext:setItemSlot(data.slot, data._id, data.name, data.state, data.timestamp, data.amount, data.data);
    elseif (data.container == "person") then
      ClientInventory.personContext:setItemSlot(data.slot, data._id, data.name, data.state, data.timestamp, data.amount, data.data);
    end
  end
  
  if (#data > 1) then 
    ClientInventory.receiveToken = ReceiveToken(data[1]);
  else
    ClientInventory.receiveToken = ReceiveToken(data);
  end
  
  ClientInventory.receiveToken:setIsRendering(true);
  
  setTimer(function () 
    ClientInventory.receiveToken:setIsRendering(false);
  end, 5000, 1);
end



function takeInventoryItem (item) 
  if (not item) then return false end
  
  if (item.container == 'bag') then 
    ClientInventory.containerContext:removeItemFromSlot(item.slot);
  elseif (item.container == "person") then
    ClientInventory.person:removeItemFromSlot(item.slot);
  elseif (item.container == "subItem") then
    local hasMainItem = ClientInventory.containerContext:getItem(item.subItemAt)


    if (not hasMainItem) then 
      for k,v in ipairs(ClientInventory.containerContext:getAllSlots()) do 
        if (v:getItem() and v:getItem().container) then 
          local find = v:getItem().container:getItem(item.subItemAt)

          if (find) then 
            hasMainItem = find;
          end
        end
      end
    end

    
    if (hasMainItem) then
      local mainItem, slot = unpack(hasMainItem);
      mainItem.container:removeItemFromSlot(item.slot);
    end
  end
end


function editInventoryItem (item) 
  if (not item) then return false end
  
  if item.container == 'bag' then 
    ClientInventory.containerContext.slots[item.slot]:getItem().amount = item.amount;
  elseif (item.container == "person") then
    ClientInventory.personContext.slots[item.slot]:getItem().amount = item.amount;
  end
end


function changeInventoryItemState (item) 
  if (item.container == "bag") then 
    local change = ClientInventory.containerContext:getSlot(item.slot):getItemByID(item._id);
    
    if (change) then 
      change.state = item.state;
    end
    
  elseif item.container == "chest" then
    if (ClientInventory.chestContext) then 
      local change = ClientInventory.chestContext:getSlot(item.slot):getItemByID(item._id);
      
      if (change) then 
        change.state = item.state;
      end
    end
  elseif (item.container == "person") then 
    local change = ClientInventory.containerContext:getSlot(item.slot):getItemByID(item._id);
    
    if (change) then 
      change.state = item.state;
    end
  end
end



function onClientReceiveTrade (players) 
  if (not ClientInventory.isRendering) then
    Animations:HotbarInOut('enter');
    
    if (players[1] == localPlayer) then 
      ClientInventory:toggle("show");
    end
    
    if (ClientInventory.hotbarUI.currentTab == 'clothing') then
      Animations:TradeTabInOut('leave');
      ClientInventory.personUI:setIsRendering(false);
      ClientInventory.tradeUI:setIsRendering(true);
      
      Animations:PersonTabInOut('enter');
    elseif (ClientInventory.hotbarUI.currentTab == 'bag') then
      ClientInventory.tradeUI:setIsRendering(true);
      Animations:TradeTabInOut('enter');
    end
  else
    if (ClientInventory.chestContext and ClientInventory.chestUI) then       
      ClientInventory.chestContext = nil;
      ClientInventory.chestUI = nil;
    end
    
    if (ClientInventory.hotbarUI.currentTab == 'clothing') then 
      Animations:PersonTabInOut('leave');
      ClientInventory.personUI:setIsRendering(false);
      
      setTimer(function () 
        ClientInventory.tradeUI:setIsRendering(true);
        Animations:TradeTabInOut('enter');
      end, 700, 1);
    elseif (ClientInventory.hotbarUI.currentTab == 'bag') then
      ClientInventory.tradeUI:setIsRendering(true);
      Animations:TradeTabInOut('enter');
    end
  end
  
  ClientInventory.hotbarUI:setTabActive('trade');
  ClientInventory.tradeUI.isTrading = true;
  
  
  heartBeat = thread:createHeartbeat(function () 
    local px, py, pz = getElementPosition(players[1]);
    local p2x, p2y, p2z = getElementPosition(players[2]);
    
    local distance = getDistanceBetweenPoints3D ( px, py, pz, p2x, p2y, p2z );
    
    if (math.floor(distance) >= 5) then 
      network:emit("pixel_inv:onClientForceCloseTrade", true, false, localPlayer);
    end
    
    return true end, function () end, 250)
  end
  
  
  
  function fastRefreshItemsTrade (items) 
    ClientInventory.tradeContext:fastRefreshTradeSlots(items);
  end
  
  
  function refreshTradeState (state, player) 
    if (player == localPlayer) then 
      ClientInventory.tradeUI:setReadyState("me", state);
      ClientInventory.tradeUI.checkBoxState = state;
    else
      ClientInventory.tradeUI:setReadyState("trader", state);
    end
  end
  
  
  function changeTradeState (state) 
    if (ClientInventory.tradeUI) then
      ClientInventory.tradeUI:setTradingState(state);
    end
  end
  
  
  function warnMessage (msg) 
    imports.notify:showInfobox("info", "Inventário", msg);
  end
  
  
  function onServerCloseTrading () 
    -- bounceTradeTabInOut('leave')
    ClientInventory.tradeUI:setIsRendering(false);
    trade:clearItems();
    
    ClientInventory.tradeUI.checkBoxState = state;
    ClientInventory.tradeUI:setReadyState('me', false);
    ClientInventory.tradeUI:setReadyState('trader', false);
    ClientInventory.hotbarUI:setTabActive('bag');
  end
  
  
  function onClientOpenChest (name, columns, maxWeight, weight, items, id)
    ClientInventory.chestContext = container:create("chest", {}, columns, 5, 60, 0, maxWeight, id);
    ClientInventory.chestUI = ChestComponent (ClientInventory.chestContext:getSlots(), ClientInventory.chestContext);
    ClientInventory.chestUI.name = name;
    
    ClientInventory.chestUI:setIsRendering(true);
    ClientInventory:toggle('show');

    if (ClientInventory.hotbarUI.currentTab) then 
      Animations:PersonTabInOut('leave');
      ClientInventory.personUI:setIsRendering(false);
    end
    
    for k,v in ipairs(items) do
      if (v.container == "chest") then 
        ClientInventory.chestContext:setItemSlot(v.slot, v._id, v.name, v.state, v.timestamp, v.amount, v.data);
      end
    end
  end
  
  
  
  function refreshChestItems (items, id, block, player) 
    if (chestContext and chestUI) then
      ClientInventory.chestContext:clearItems();
      
      for k,v in imports.ipairs(items) do 
        ClientInventory.chestContext:setItemSlot(v.slot, v._id, v.name, v.state, v.timestamp, v.amount, v.data);
      end
    end
  end
  
  
  function requestVisualItem (item) 
    local texture = dxCreateTexture("assets/images/items/upscaled/"..item.icon.."_upscaled.png");
    visual = imports.visuals:create(texture, (item.amount > 1 and item.title..' x'..item.amount or item.title), nil, "pixel_inv:onVisualClose");
  end