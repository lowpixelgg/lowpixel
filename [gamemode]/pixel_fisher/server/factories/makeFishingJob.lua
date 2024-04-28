local imports = {
    inventory = exports.pixel_inv;
    notify = exports.pixel_notify;
    assets = exports.pixel_assets;
};

Waters = {};
Waters.fishers = {};


function Waters:startFishing (player, x,y,z)
    local instance = Waters.fishers[player];
    if (not instance) then  return false end
    
    instance:start(x,y,z);
    self:updateFishingChoice (player)

    imports.assets:playCustomAnimation(player, "fishing", "fishing_idle", -1, true, true);

    network:emit("pixel_fisher:onPlayerStartFishing", true, false, player, Waters.fishers[player]);
    network:emit("pixel_fisher:onServerCreateDropSoundEffect", true, false, root, x,y,z);
end


function Waters:onPlayerEquipRod (player, item) 
    if (Waters.fishers[player]) then return end
    
    if (item) then 
        Waters.fishers[player] = fisher:create(player, item);
        network:emit("pixel_fisher:onPlayerUseFishrod", true, false, player);
    end
end


function Waters:onPlayerUnquipRod (player, data) 
    local instance = Waters.fishers[player];
    if (not instance) then  return false end
    
    local isItemInHotBar = table.find(data.items, function (v) return v.name == "fish_grod_1" end);
    
    if (isItemInHotBar == nil) then 
        network:emit("pixel_fisher:onPlayerLostCatch", true, false, player, false);

        instance:setOffsets ("fishing_idle"); 
        self:updateFishingChoice (player);
        
        instance:destroy();
        Waters.fishers[player] = nil;
        
        
        return;
    end
    
    if (data.itemActive and data.itemActive.name ~= "fish_grod_1") then 
        network:emit("pixel_fisher:onPlayerLostCatch", true, false, player, false);

        
        instance:setOffsets ("fishing_idle"); 
        self:updateFishingChoice (player);
        
        instance:destroy();
        Waters.fishers[player] = nil;
        
        return;
    end
end

function Waters:endCatch (player, fisher) 
    local instance = Waters.fishers[player];
    if (not instance) then return false end
    
    
    if (fisher.cutAmount > 50) then 
        instance:setOffsets ("fishing_idle"); 
        self:updateFishingChoice (player);
        
        imports.assets:playCustomAnimation(player, "fishing", "fishing_idle", -1, true, true);
        network:emit("pixel_fisher:onPlayerLostCatch", true, false, player, true);
        return imports.notify:showInfobox(player, "info", "Pescaria", "O Peixe escapou, fique mais atento da proxima vez.");
    else
        local giveCatchFish = imports.inventory:givePlayerItem (player, instance.trytofish, 1, 1, false, false, {}, "bag", true);
        
        if (giveCatchFish) then 
            instance:setOffsets ("fishing_idle");
            instance:destroy();
            Waters.fishers[player] = nil;
                        
            network:emit("pixel_fisher:onServerDestroyCatchSound", true, false, root, player);
            network:emit("pixel_fisher:onPlayerLostCatch", true, false, player, false);
            
            imports.assets:stopCustomAnimation (player);
        else
            instance:setOffsets ("fishing_idle");
            instance:destroy();
            Waters.fishers[player] = nil;
            
            network:emit("pixel_fisher:onServerDestroyCatchSound", true, false, root, player);
            network:emit("pixel_fisher:onPlayerLostCatch", true, false, player, false);
            imports.assets:stopCustomAnimation (player);
            
            return imports.notify:showInfobox(player, "info", "Pescaria", "Você não tem espaço na sua mochila para carregar este peixe.");
        end
    end
end


function Waters:stopCatch (player) 
    local instance = Waters.fishers[player];

    if (instance) then 
        instance:setOffsets ("fishing_idle");
        instance:destroy();
        Waters.fishers[player] = nil;
        
        imports.assets:stopCustomAnimation (player);

        network:emit("pixel_fisher:onServerDestroyCatchSound", true, false, root, player);
        network:emit("pixel_fisher:onPlayerLostCatch", true, false, player, false);
    end
end


function Waters:destroyCatch(player) 
    local instance = Waters.fishers[player];

    if (not instance) then return false end
    
    instance:destroy();
    Waters.fishers[player] = nil;

    network:emit("pixel_fisher:onServerDestroyCatchSound", true, false, root, player);
    network:emit("pixel_fisher:onPlayerLostCatch", true, false, player, false); 
end

function Waters:updateFishingChoice (player)
    local instance = Waters.fishers[player];
    if (not instance) then return false end
    
    instance:fishChoice (function (fish) 
        instance:setOffsets ("fishing_catch_loop"); 
        instance.trytofish = fish.itemName;
        
        local x,y,z = getElementPosition(player);

        network:emit("pixel_fisher:onServerCreateCatchSoundEffect", true, false, root, player, x,y,z);

        imports.assets:playCustomAnimation(player, "fishing", "fishing_catch_loop", -1, true, true);

        network:emit("pixel_fisher:onServerCatch", true, false, root, instance, fish);   
    end);
end