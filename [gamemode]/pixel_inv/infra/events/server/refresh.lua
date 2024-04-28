
local imports = {
    core = exports.pixel_core,
    addEventHandler = addEventHandler
  }

network:fetch("pixel_inv:onClientRequestRegister", true):on(function (...) Inventories:register(...) end);
network:fetch("pixel_inv:onServerRefreshInventory", true):on(function (...) Inventories:refreshPlayerInventory(...) end);
network:fetch("pixel_inv:onPlayerStartTrading", true):on(function (...) Inventories:registerTrade(...) end);
network:fetch("pixel_inv:onClientRefreshTradeState", true):on(function (...) Inventories:refreshTradeState(...) end);
network:fetch("pixel_inv:onClientRefreshChestItems", true):on(function (...)  Inventories:refreshChest(...) end);
network:fetch("pixel_inv:onClientOpenChest", true):on(function (...) Inventories:getChest(...) end);
network:fetch("pixel_inv:onClientForceCloseTrade", true):on(function (...) Inventories:unregisterTrade(...) end);
network:fetch("pixel_inv:onClientRequestUseItem", true):on(function (...) Inventories:useItemNetwork (...) end);
network:fetch("pixel_inv:onServerRefreshTradeItems", true):on(function (...) Inventories:refreshTradePlayerItems(...) end);
network:fetch("pixel_inv:onClientUpdateHotbar", true):on(function (...) Inventories:useHotbar (...) end);

network:fetch("pixel_inv:onInventoryRequestUse", true):on(function (player, item)  end)



addEventHandler("onPlayerQuit", root, function () 
    Inventories:unregister(source);
end)


addEventHandler("onResourceStart", resourceRoot, function () 
    local data = imports.core:findItemsByState(1);
    
    if (data) then 
        thread:create(function (self) 
            for k,v in ipairs(data) do 
                if (v.timestamp > 0) then 
                    schedule:create(v.timestamp, Inventories.reschedulePendingItems, { source = nil, _id = v._id });
                end
            end
            
            self:destroy();
        end):resume({});
    end
end)



addCommandHandler("give", function (player, _, item, amount, state) 
    amount = tonumber(amount);
    Inventories:givePlayerItem(player, item, amount, 1, false, false, false, "bag", true);
end)


addCommandHandler("take", function (player, _, item, amount) 
    amount = tonumber(amount);
    Inventories:takePlayerItem(player, item, amount);
end)