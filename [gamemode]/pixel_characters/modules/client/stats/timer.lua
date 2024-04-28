local count_hunger = 0;
local count_thirst = 0;
local count_stamina = 0;

local fall = false;


thread:createHeartbeat(function()
    if (getElementData(localPlayer,'id') and not getElementData(localPlayer, "fall")) then
        local count_limit_hunger = stats.get['hunger']['counter_limit'];
        local count_limit_thirst = stats.get['thirst']['counter_limit'];
        local count_limit_stamina = stats.get['stamina']['counter_limit'];
        
        if (count_hunger == count_limit_hunger) then
            stats:setHunger(localPlayer, 'remove', stats.get['hunger']['amount_to_discount']);
            count_hunger = 0;
        end
        
        if (count_thirst == count_limit_thirst) then
            stats:setThirst(localPlayer, 'remove', stats.get['thirst']['amount_to_discount']);
            count_thirst = 0
        end

        local stamina_to_detect = stats.get['stamina']['stamina_to_detect'];
        local stamina_change = (stamina_to_detect[getPedMoveState(localPlayer)] and 'remove' or 'add');
        
        stats:setStamina(localPlayer, stamina_change, stats.get['stamina']['amount_to_discount']);
        
        count_hunger = count_hunger + 1;
        count_thirst = count_thirst + 1;

        if (getElementHealth(localPlayer) <= 10) then 
           network:emit("pixel_characters:onPlayerFall", true, false, localPlayer);
        end
    end
        return true
 end, function()
end, 1000)