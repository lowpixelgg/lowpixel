local imports = {
    inventory = exports.pixel_inv;
    assets = exports.pixel_assets;
    core = exports.pixel_core;
    attach = exports.pAttach
}

local metas = imports.core:getItemsMeta();
local playerEat = {};

function makeInventoryUseClothe (player, item, action)     
    if (action == "equipItem") then
        if item['data'].is == "prop" then 
            --Props.setPlayerAttachment(player, item.name, false)
        elseif item['data'].is == "clothing" then
            if (item['data'].part == 'backpack') then
                local level = imports.inventory:setInventoryLevel (player, item['data'].level);
                local weight = imports.inventory:setInventoryWeight (player, item['data'].weight);

                if (level and weight) then 
                    return makeAddPlayerClothes(player, item.data.genre, item.data.part, item.data.index)
                end
            end

            makeAddPlayerClothes(player, item.data.genre, item.data.part, item.data.index)
        end
        
    elseif action == "unquipItem" then
        if item['data'].is == "prop" then
        elseif item['data'].is == "clothing" then
            if (item['data'].part == 'backpack') then
                local level = imports.inventory:setInventoryLevel (player, 1);
                local weight = imports.inventory:setInventoryWeight (player, 31000);

                if (level and weight) then 
                    return makeRemovePlayerClothes(player, item.data.genre, item.data.part)
                end
            end

            makeRemovePlayerClothes (player, item.data.genre, item.data.part) 
        end
    end 
end





function onInventoryRequestUse (player, item)
    local data = metas[item.name].props;

    if (item.category == "food") then
        if (playerEat[player]) then return false end
        
        local object;
        
        if (data.model and data.boneId) then 
            object = createObject(data.model, 0,0,0);
            setElementCollisionsEnabled(object, false);

            imports.attach:attach(object, player, data.boneId, 0, 0, 0, 0, 0, 0);
        end

        playerEat[player] = {
            item = item,
            object = object or false
        };

    
        imports.assets:playCustomAnimation (player, data.blockName, data.animation, -1, true, false);
        network:emit("pixel_characters:onServerRequestEat", true, false, player, item);
    end
end


function onInventoryUnequipItem (player, data) 
    if (not playerEat[player]) then return false end

    local item = playerEat[player].item
    if (not item) then return false end
    
    local isItemInHotBar = table.find(data.items, function (v) return v.name == item.name end);
    
    if (isItemInHotBar == nil) then
        return clearPlayerEat (player);
    end
    
    if (data.itemActive and data.itemActive.name ~= item.name) then
        return clearPlayerEat (player);
    end
end



function clearPlayerEat (player) 
    if (not playerEat[player]) then return false end

    local data = playerEat[player]
    if (not data) then return false end
    
    if (isElement(data.object)) then 
        destroyElement(data.object);
    end

    playerEat[player] = nil;
    imports.assets:stopCustomAnimation(player);
    network:emit("pixel_characters:onServerCancelTimer", true, false, player);

    return true;
end


function onPlayerEatItem (player)
    if (not playerEat[player]) then return false end
    
    local item = playerEat[player].item;
    if (not item) then return false end

    local data = metas[item.name];
    if (not data) then return false end

    for key, value in pairs(data.props.eatData) do 
        setElementData(player, key, getElementData(player, key) + value);
    end

    imports.inventory:takePlayerItem(player, item.name, 1);
    clearPlayerEat (player);
end


function onPlayerFall (player) 
    setElementData(player, "fall", true);
    exports.pixel_hospital:fallPlayer(player);
end


