function registryInventory (...) 
    return Inventories:register(...);
end

function hasInventory (...)
    return Inventories:hasInventory (...);
end

function givePlayerItem (...) 
    return Inventories:givePlayerItem(...);
end

function takePlayerItem (...) 
    return Inventories:takePlayerItem(...);
end

function hasPlayerItem (...) 
    return Inventories:hasPlayerItem(...);
end

function registerChest (...) 
    return Inventories:registerChest (...);
end

function hasAvailableSlot (...) 
    return Inventories:hasSlotAvailable (...);
end

function findItemByData (...)
    return Inventories:findItemByData(...);
end

function editItemdata (...) 
    return Inventories:editItemData (...); 
end


function getItemsByCategory (...) 
    return Inventories:getItemsByCategory (...); 
end


function setInventoryLevel (...) 
    return Inventories:setInventoryLevel(...);
end


function setInventoryWeight (...) 
    return Inventories:setInventoryWeight(...);
end


function getItemById (...) 
    return Inventories:getItemById(...);
end

function getSubItemsAt (...) 
    return Inventories:getSubItensAt(...);
end

function takePlayerItemById (...) 
    return Inventories:takePlayerItemById(...)
end