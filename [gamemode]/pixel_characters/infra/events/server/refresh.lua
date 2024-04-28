local imports = {
    interactions = exports.pixel_interactions,
}

network:fetch("pixel_characters:onInventoryRefresh"):on(makeInventoryUseClothe);
network:fetch("pixel_characters:onPlayerFall", true):on(onPlayerFall);


network:fetch('pixel_characters:soundEffect',true):on(function(player,path)
    for i ,v in ipairs(getElementsByType('player')) do 
        network:emit('pixel_characters:createSoundEffect', true, false, v, player, path)
    end;
end)

local animCache = {}

network:fetch('pixel_characters:createAnimEffect',true):on(function(player,task,value)
        if animCache[player] then    
            if value > 20 then 
                setPedAnimation(player)
                toggleControl(player, 'sprint', true)
                animCache[player] = nil
                setElementData(player, 'stats: blocksprint', nil)
            end
        return
    end
    if task == 'block' then 
        toggleControl(player,'sprint',false)
        setPedAnimation(player , 'FAT','idle_tired', 3000 , false , false, false, false)
        
        animCache[player] = true
        setElementData(player,'stats: blocksprint',true)
    end
end)


network:fetch("pixel_characters:onInventoryUseItem", true):on(function (...) onInventoryRequestUse(...) end);
network:fetch("pixel_characters:onCircleTimerEnd", true):on(function (...) onPlayerEatItem(...) end);
network:fetch("pixel_inv:onServerUpdateHotbar", true):on(function (...) onInventoryUnequipItem (...)  end);

addEventHandler("onResourceStart", resourceRoot, function () 
    imports.interactions:createInteraction("character_interaction", {
        { title = "Trocar", network = "pixel_characters:initPlayerTrade" }
    });
end);



addEventHandler("onPlayerWasted", root, function () 
    local id = getElementData(source, "id");

    if (id) then 
        spawn(source, id) ;
    end
end);


addEventHandler("onPlayerQuit", root, function () 
    clearPlayerEat (source);
end);