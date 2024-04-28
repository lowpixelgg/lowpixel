network:fetch("pixel_inv:onClientRefreshInventory", true):on(function (...) refreshClientInventory(...) end);
network:fetch("pixel_inv:onClientGivePlayerItem", true):on(function (...) giveInventoryItem(...) end);
network:fetch("pixel_inv:onClientTakePlayerItem", true):on(function (...) takeInventoryItem(...) end);
network:fetch("pixel_inv:onServerEditPlayerItem", true):on(function (...) editInventoryItem(...) end);
network:fetch("pixel_inv:onClientChangeItemState", true):on(function (...) changeInventoryItemState(...) end);
network:fetch("pixel_inv:onClientReceivedTrade", true):on(function (...) onClientReceiveTrade(...) end);
network:fetch("pixel_inv:onClientRefreshTradeItems", true):on(function (...) fastRefreshItemsTrade(...) end);
network:fetch("pixel_inv:onServerRefreshTradeState", true):on(function (...) refreshTradeState(...) end);
network:fetch("pixel_inv:onServerTradeState", true):on(function (...)  changeTradeState(...) end);
network:fetch("pixel_inv:onServerRecuseTrade", true):on(function (...) warnMessage(...) end);
network:fetch("pixel_inv:onServerCloseTrade", true):on(function () onServerCloseTrading () end);
network:fetch("pixel_inv:onServerOpenChest", true):on(function (...) onClientOpenChest(...) end);
network:fetch("pixel_inv:onServerRefreshChestItems", true):on(function (...) refreshChestItems(...) end);
network:fetch("pixel_inv:onServerRecuseUseNetwork", true):on(function () warnMessage("Você não pode equipar isso.") end);
network:fetch("pixel_inv:onServerRequestVisual", true):on(function (...) requestVisualItem(...) end);
network:fetch("pixel_inv:onVisualClose", true):on(function () visual = nil end);


network:fetch("pixel_inv:onCharacterSpawn", true):on(function () 
  if (ClientInventory.containerContext) then return false end
  
  ClientInventory:start();
  network:emit("pixel_inv:onClientRequestRegister", true, false, localPlayer);
end);


network:fetch("pixel_inv:onServerSetContainerLevel", true):on(function (level) 
  local container = ClientInventory.containerContext;

  if (container) then 
    container:setContainerLevel(level);
  end
end)

addEventHandler("onClientPreRender", root, function () 
  if (ClientInventory.minecraftUI and not ClientInventory.isRendering) then 
    ClientInventory:renderBar ();
  end
end, false, "low-999999");

addCommandHandler("reginv", function () 
  ClientInventory:start();
  network:emit("pixel_inv:onClientRequestRegister", true, false, localPlayer);
end)

