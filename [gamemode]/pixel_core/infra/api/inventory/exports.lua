function findInvByCharacter(character, eventName)
  local callerRoot = sourceResourceRoot
 
  return Inventory.invRepo:findByCharacter(character, function (result) 
    triggerEvent(eventName, callerRoot, result[1] and result[1] or false);
  end);
end


function createInventory(...)
  return Inventory.invRepo:create(...) 
end


function saveInventory(...)
  return Inventory.invRepo:save(...) 
end

function setCurrentWeight(character, weight) 
  local inventory = Inventory.invRepo:findByCharacter(character)[1];

  if inventory then 
    inventory.weight = weight
    return Inventory.invRepo:save(inventory)
  end
  
  return false
end

function setCurrentLevel (character, level) 
  local inventory = Inventory.invRepo:findByCharacter(character)[1];

  if (inventory) then 
    inventory.level = level;
    return Inventory.invRepo:save(inventory);
  end
end

function deleteInventory(...) 
  return Inventory.invRepo:delete(...) 
end


-- ITEMS
function getAllItems (invID, eventName) 
  local callerRoot = sourceResourceRoot
 
  return Inventory.itemsRepo:findByInventory(invID, function (result) 
    
    if (#result > 0) then 
      for k,v in ipairs(result) do 
        if result[k].data ~= false then 
          result[k].data = fromJSON(result[k].data);
        end
      end
    end

    triggerEvent(eventName, callerRoot, result);
  end);
end


function findItemByID (...)
  return Inventory.itemsRepo:findByItemID (...)
end

function createItem (...)
  return Inventory.itemsRepo:create(...)
end

function findItemsByState(...)
  return Inventory.itemsRepo:findItemsByState(...)
end

function findItemsByChest (...)
  return Inventory.itemsRepo:findItemsByChest(...)
end

function saveItem (...)
  return Inventory.itemsRepo:save(...)
end


function deleteItem(...)
  return Inventory.itemsRepo:delete(...)
end


-- Chest
function findChestByID (...)
  return Inventory.chestRepo:findChestByID(...)
end

function findChestByElementID (...)
  return Inventory.chestRepo:findByElementID(...)
end


function createChest(...)
  return Inventory.chestRepo:create(...)
end


function saveChest(...)
  return Inventory.chestRepo:save(...)
end


function deleteChest(...)
  return Inventory.chestRepo:delete(...) 
end 


function setCurrentChestWeight(chestID, weight) 
  local chest = Inventory.chestRepo:findChestByID(chestID)

  if chest then 
    chest.weight = weight
    return Inventory.chestRepo:save(chest)
  end
  
  return false
end