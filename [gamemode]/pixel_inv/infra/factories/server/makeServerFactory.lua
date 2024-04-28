local imports = {
  core = exports.pixel_core,
  notify = exports.pixel_notify
}

Inventories = {
  cache = {},
  trades = {},
  chests = {}
}


local itemsMeta = imports.core:getItemsMeta();

function Inventories:register(player, toClient)
  if (toClient == nil) then toClient = true end
  
  local character = getElementData(player, "id");
  
  if (character) then
    async(function (this) 
      local exists = fetchAssoc("findInvByCharacter", character);
      
      if (exists) then 
        local items = fetchAssoc("getAllItems", exists._id);
        Inventories.cache[player] = manager:create(player, character, exists._id, items, exists.weight, exists.maxWeight, exists.level);
      else
        local id = imports.core:createInventory(character);
        Inventories.cache[player] = manager:create(player, character, id, {}, 0, 31000, 1);
        
        network:emit("pixel_lobby:onInventoryRegister", false, false, player);
      end
      
      
      if (toClient) then 
        network:emit("pixel_inv:onClientRefreshInventory", true, true, player, Inventories.cache[player], true);
      end
      
      this:destroyInstance();
    end):resume();
  end
  
  return true;
end



function Inventories:hasInventory (player) 
  if (Inventories.cache[player]) then 
    return true;
  end
  
  return false;
end


function Inventories:unregister (player) 
  local inventory = Inventories.cache[player];
  
  if (inventory) then 
    inventory:destroy();
    Inventories.cache[player] = nil;
  end
end


function Inventories:givePlayerItem(player, item, amount, state, forceTimestamp, forceSlot, implementData, forceContainer, toClient) 
  local data = itemsMeta[item];
  local inventory = Inventories.cache[player];
  

  if (not inventory) then 
    return error("Player does not inventory registered");
  end

  -- Check if have space;
  if (inventory:getWeight() + data.weight * amount > inventory:getMaxWeight ()) then 
    return error("Inventory is busy")
  end

  
  if (not data.useFlexAmount) then 
    if (amount > 1) then 
      for i=1, amount do 
        local give = inventory:giveItem(item, 1, state, forceTimestamp, forceSlot, implementData or data.data, forceContainer);
        if (give) then
          
          if (toClient) then 
            network:emit("pixel_inv:onClientGivePlayerItem", true, true, player, give);
          end          
        else
          return false;
        end
      end
    else
      local give = inventory:giveItem(item, 1, state, forceTimestamp, forceSlot, implementData or data.data, forceContainer);
      
      if (give) then      
        if (toClient) then 
          network:emit("pixel_inv:onClientGivePlayerItem", true, true, player, give);
        end
        
        return true;
      else
        return false;
      end
    end
  else

    local give = inventory:giveItem(item, amount, state, forceTimestamp, forceSlot, implementData, forceContainer);
    
    if (give) then      
      if (toClient) then 
        network:emit("pixel_inv:onClientGivePlayerItem", true, true, player, give);
      end
      
      return true;
    else
      return false;
    end
  end
end


function Inventories:setInventoryLevel (player, level)
  local inventory = Inventories.cache[player];
  
  if (inventory) then
    if (level == 1) then 
      for _, item in ipairs(inventory.items) do 
        if (item.slot > 15) then 
          imports.notify:showInfobox(player, "info", "Inventário", "Você não pode remover a mochila por que tem itens nela.");
          
          return false;
        end
      end
    end
    
    inventory:setCurrentLevel(level);

    network:emit("pixel_inv:onServerSetContainerLevel", true, false, player, level);

    return true;
  else
    return false;
  end
end


function Inventories:setInventoryWeight (player, weight)
  local inventory = Inventories.cache[player];

  if (inventory) then 
    inventory:setCurrentWeight(weight);

    return true;
  end

  return false;
end


function Inventories:hasPlayerItem(player, item) 
  if (not item) then return error('Specify a item ID', 2) end
  local inventory = Inventories.cache[player];
  
  if (inventory) then
    local has = inventory:hasItem(item);
    
    return (has and has or false);
  end
  
  return false;
end


function Inventories:findItemByData(player, itemName, data) 
  if (not itemName) then return error('Specify a item name', 2) end
  local inventory = Inventories.cache[player];
  
  if (inventory) then 
    local find = inventory:findItemByData(itemName, data);
    return (find and find or false);
  end
  
  return false;
end


function Inventories:takePlayerItem(player, item, amount) 
  if (not item or not amount) then
    local output = (not item and 'Specify item ID') or (not amount and 'Define a amount')
    return error(output, 2)
  end
  
  local inventory = Inventories.cache[player]

  if (inventory) then 
    local exists = inventory:hasItem(item)
    
    if (exists) then
      local meta = itemsMeta[exists.items[1].name];
      
      if (meta.useFlexAmount) then 
        local totalAmount = 0
        for k, v in ipairs(exists.items) do
          totalAmount = totalAmount + v.amount
        end
        
        if totalAmount < amount then
          return
        end
        
        local amountToRemove = amount
        for k, v in ipairs(exists.items) do
          if (amountToRemove > 0) then 
            local takeAmount = math.min(v.amount, amountToRemove)
            amountToRemove = amountToRemove - takeAmount 
            local take = inventory:takeItem(v, takeAmount, true)
            
            if (take and take.amount > 0) then
              network:emit("pixel_inv:onServerEditPlayerItem", true, true, player, take)
            else
              network:emit("pixel_inv:onClientTakePlayerItem", true, true, player, take)
            end
          else
            break
          end
        end
      else
        if #exists.items < amount then
          return
        end

        for i=1, amount do 
          local take = inventory:takeItem(exists.items[i], 1, true);

          if (take) then 
            network:emit("pixel_inv:onClientTakePlayerItem", true, true, player, take)
          end
        end        
      end
    end
  end
end


function Inventories:takePlayerItemById (player, id)
  local inventory = Inventories.cache[player]
  if (not inventory) then return false end

  local item = inventory:getItemById(id);
  if (not item) then return false end

  local take = inventory:takeItemById(id, true);

  if (take) then 
    network:emit("pixel_inv:onClientTakePlayerItem", true, true, player, take)
  end
end


function Inventories:useItemNetwork (player, item, action) 
  local inventory = Inventories.cache[player];
  if (not inventory) then return false end
  
  local has = inventory:hasItem(item.name);
  
  if (not has) then return false end
  
  local networkName = itemsMeta[has.items[1].name].network;
  
  if (networkName == nil) then 
    return network:emit("pixel_inv:onServerRecuseUseNetwork", true, false, player);
  end
  
  network:emit(networkName, false, player, item, action);
end

function Inventories:useHotbar (player, item) 
  local inventory = Inventories.cache[player];
  if (not inventory) then return false end
  
  local has = inventory:hasItem(item.name);
  if (not has) then return false end
  
  local networkName = itemsMeta[has.items[1].name].network;
  
  if (networkName ~= nil) then 
    network:emit(networkName, false, player, item, action);
  end
  
  network:emit("pixel_inv:onServerUpdateHotbar", false, player, {
    items = #inventory:getHotBarItems();
    itemActive = item;
  });
end




function Inventories:refreshPlayerInventory(player, items, prevContainer, weight, isCreated, toRemove, subItemAt)   
  local inventory = Inventories.cache[player];
  if (not inventory) then return false end
  
  if (not isCreated and not toRemove) then 
    for k,item in ipairs(items) do
      if (item.container == "person" and prevContainer == "bag") then 
        Inventories:useItemNetwork (player, item, "equipItem");
      elseif (item.container == "bag" and prevContainer == "person") then
        Inventories:useItemNetwork(player, item, "unquipItem");
      end
      
      if (item.container == "subItem" and subItemAt) then
        local main = inventory:findItemById(subItemAt);
        if (not main) then return false end

        local minItems = itemsMeta[main.name].subItens.minItems;
        local maxItems = itemsMeta[main.name].subItens.maxItems;


        if (#inventory:getSubItemsAt(subItemAt) < maxItems or #inventory:getSubItemsAt(subItemAt) > minItems) then 
          item.subItemAt = subItemAt;
          inventory:saveItem(item);
        end

      elseif (prevContainer == "subItem") then 
        item.subItemAt = false;
        
        inventory:saveItem(item);
      end
      
      inventory:editItem(item._id, item.container, item.slot);  
    end    
  end
  
  local itemIndex, item = table.find(items, function (v) return itemsMeta[v.name].useFlexAmount == true and v.id ~= (isCreated and isCreated.id or toRemove) end);
  
  if (itemIndex) then
    if (isCreated and not toRemove) then
      local exists, existsItem = table.find(inventory.items, function (v) return v._id  == item._id end);
      
      if (not exists) then return false end
      if  (existsItem.amount > isCreated.amount) then 
        local give = inventory:giveItem(existsItem.name, isCreated.amount, existsItem.state, existsItem.timestamp, isCreated.slot);
        inventory:editItem(existsItem._id, existsItem.container, false, existsItem.state, existsItem.data, existsItem.amount - isCreated.amount);
        
        
        if (give) then
          network:emit("pixel_inv:onClientRefreshInventory", true, true, player, inventory, true);
        end
      end
    end
    
    if (not isCreated and toRemove) then
      local exists = table.find(inventory.items, function (v) return v._id  == toRemove end);
      if (not exists) then return false end
      
      local useFlexAmount = itemsMeta[item.name].useFlexAmount;
      local existsItem = inventory.items[exists]
      
      inventory:editItem(item._id, item.container, false, item.state, item.data, item.amount);
      local take = inventory:takeItem(existsItem, useFlexAmount and existsItem.amount or 1, true);
    end
  end
  
  network:emit("pixel_inv:onServerUpdateHotbar", false, player, {
    items = inventory:getHotBarItems();
    itemActive = nil;
  });
end


function Inventories:reschedulePendingItems(data) 
  local item = imports.core:findItemByID(data._id);
  
  if (not item) then return false end
  
  if (item.container == 'bag') then 
    local inventory = Inventories.cache[data.source];
    
    if (inventory) then
      local itemIndex, itemInv = table.find(inventory.items, function (itm) return itm._id == data._id end);
      
      if (itemInv) then
        itemInv.state = 0;
        imports.core:saveItem(itemInv);
        
        local newItems = inventory:checkPerceivability(inventory.items);
        
        inventory.items = {};
        inventory.items = newItems;
        
        network:emit("pixel_inv:onClientRefreshInventory", true, false, data.source, inventory, true);
      end
    else
      item.state = 0;
      imports.core:saveItem(item);
    end
  elseif (item.container == 'chest') then
    for _,chests in pairs(Inventories.chests) do 
      for itemIndex, itemChest in ipairs(chests.items) do 
        if (itemChest._id == item._id) then
          itemChest.state = 0;
          imports.core:saveItem(itemChest);
          
          
          local newItems = chests:checkPerecibility(chests.items);
          chests.items = {};
          chests.items = newItems;
          
          network:emit("pixel_inv:onServerRefreshChestItems", true, false, root, chests.items, chests.id);
          break
        end
      end
    end
  end
end


function Inventories:registerTrade(players)
  if (not Inventories.cache[players[1]]) or not (Inventories.cache[players[2]]) then return false end
  
  local i, trade = table.find(Inventories.trades, function (t) 
    return t.players[1].player == player or t.players[2].player == player
  end);
  
  if (trade) then return false end
  
  local id = #Inventories.trades + 1;
  Inventories.trades[id] = trading:create(players);
  
  
  network:emit("pixel_inv:onClientReceivedTrade", true, false, players, players);
end


function Inventories:unregisterTrade(player) 
  local i, trade = table.find(Inventories.trades, function (t) 
    return t.players[1].player == player or t.players[2].player == player
  end);
  
  if (not trade) then return false end
  
  network:emit("pixel_inv:onServerCloseTrade", true, false, { trade.players[1].player, trade.players[2].player });
  
  Inventories.trades[i]:destroy();
  Inventories.trades[i] = nil;
end



function Inventories:refreshTradePlayerItems(player, items, prevContainer, isCreated, toRemove)
  local i, trade = table.find(Inventories.trades, function (t) 
    return t.players[1].player == player or t.players[2].player == player
  end);
  
  if (trade) then 
    local inventory = Inventories.cache[player];
    local boxItems = trade:refreshPlayerItems(player, inventory, items);
    
    for index, box in ipairs(trade.players) do 
      if (box.player ~= player) then 
        network:emit("pixel_inv:onClientRefreshTradeItems", true, false, box.player, boxItems);
      end
    end
    
    
    if (trade.players[1].state or trade.players[2].state) then
      for k,v in ipairs(trade.players) do         
        trade:refreshPlayerState (v.player, false);
        network:emit("pixel_inv:onServerRefreshTradeState", true, false, {trade.players[1].player, trade.players[2].player}, false, v.player);
      end
    end
  end
end


function Inventories:refreshTradeState(player) 
  local i, trade = table.find(Inventories.trades, function (t) 
    return t.players[1].player == player or t.players[2].player == player
  end)
  
  if (trade) then 
    local state = trade:refreshPlayerState (player);
    
    if (trade.players[1].state and trade.players[2].state) then
      network:emit("pixel_inv:onServerTradeState", true, false, {trade.players[1].player, trade.players[2].player}, state);
      
      trade:doPulse(function (isReady)
        if (isReady) then 
          Inventories:execPlayerTrading (trade);
        else
          network:emit("pixel_inv:onServerTradeState", true, false, {trade.players[1].player, trade.players[2].player}, false);
        end 
      end) 
    end
    
    network:emit("pixel_inv:onServerRefreshTradeState", true, false, {trade.players[1].player, trade.players[2].player}, state, player);
  end
end


function Inventories:execPlayerTrading (trade)
  local tradeIndex, _ = table.find(Inventories.trades, function (t) 
    return t.players[1].player == trade.players[1].player
  end);
  
  async(function (this) 
    local request = trade:execInventoryTrade(trade.players[1].player, trade.players[2].player);
    
    if (request == true) then 
      for k,v in ipairs(trade.players) do 
        network:emit("pixel_inv:onServerCloseTrade", true, false, v.player, true);
        network:emit("pixel_inv:onServerTradeState", true, false, v.player, false);
        network:emit("pixel_inv:onClientRefreshInventory", true, false, v.player, Inventories.cache[v.player], true); 
      end
      
      
      trade:destroy();
      
      if tradeIndex then 
        Inventories.trades[tradeIndex] = nil;
      end
      
      this:destroyInstance();
    else
      for k,v in ipairs(trade.players) do 
        network:emit("pixel_inv:onServerTradeState", true, false, v.player, false);
      end 
      
      
      trade:destroy();
      
      if (tradeIndex) then 
        Inventories.trades[tradeIndex] = nil;
      end
      
      this:destroyInstance();
      network:emit("pixel_inv:onServerRecuseTrade", true, false, request.player, request.msg);
    end
  end):resume()
end


function Inventories:registerChest (id, name, columns, destroyItemsByTimestamp)
  if (id) then
    local chest = chest:create(id, name, columns, destroyItemsByTimestamp);
    
    if (not chest) then return false end
    
    local data = chest:fetch(id, destroyItemsByTimestamp);
    
    if (not Inventories.chests[id]) then 
      Inventories.chests[id] = {};
    end
    
    if (data) then
      
      Inventories.chests[id] = data;
    else
      
      Inventories.chests[id] = chest:deploy();
    end
  end
end



function Inventories:getChest(id, player) 
  local chest = Inventories.chests[id];
  
  if (chest) then
    network:emit("pixel_inv:onServerOpenChest", true, false, player, chest.name, chest.columns, chest.maxWeight, chest.weight, chest.items, id);
  end
end

function Inventories:getItemsByCategory (player, category) 
  local inventory = Inventories.cache[player];
  if (not inventory) then return false end 

  return inventory:getItemsByCategory(category)
end



function Inventories:refreshChest(player, items, side, id) 
  local inventory = Inventories.cache[player];
  local chest = Inventories.chests[id];
  
  if (inventory and chest) then
    chest:updateChest(inventory, items);

    
    network:emit("pixel_inv:onServerRefreshChestItems", true, false, root, chest.items, chest.id, false, player);
    network:emit("pixel_inv:onClientRefreshInventory", true, false, player, inventory, true);
  end
end



function Inventories:hasSlotAvailable (player, quantity) 
  local inventory = Inventories.cache[player];
  
  if (inventory) then
    return inventory:getFreeSlot(inventory.items, {}, quantity or 1) and true or false;
  end
  
  return false;
end


function Inventories:getSubItensAt (player, subItemAt) 
  local inventory = Inventories.cache[player];
  if (not inventory) then return false end

  return inventory:getSubItemsAt(subItemAt);
end


function Inventories:editItemData (player, id, data) 
  local inventory = Inventories.cache[player];
  
  if (inventory) then 
    local _, item = table.find(inventory.items, function (i) return i._id == id end);
    
    if (item) then 
      item.data = data;
      inventory:saveItem(item);
      
      return true;
    end
  end
  
  return false;
end


function Inventories:getItemById (player, id, includeSubItems)
  local inventory = Inventories.cache[player];
  if (not inventory) then return false end 

  local _, item = table.find(inventory.items, function (i) return i._id == id end);

  if (item) then 
    local subItems = {};

    if (includeSubItems) then 
      for k,v in ipairs(inventory.items) do
        if (v.subItemAt == id) then 
          table.insert(subItems, v);
        end
      end
    end

    return item, subItems;
  end

  return false;
end