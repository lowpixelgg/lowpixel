local imports = {
    inventory = exports.pixel_inv,
    core = exports.pixel_core,
    notify = exports.pixel_notify,
}

Sell = {}
Sell.cache = {}

local meta = imports.core:getItemsMeta();

function Sell:createSellPed(name, id, x, y, z, rot, anim)
    local ped = createPed(id, x,y,z)

    if (ped) then
        setElementRotation(ped, 0, 0, rot)
        setElementData(ped, 'interaction', 'fishing_sell')
        setElementData(ped, 'id', name)
    end
end


function Sell:openSell(player)
    async(function (this) 
        if (not Sell.cache[player]) then 
            local id = getElementData(player, "id");
            
            if (id) then 
                Sell.cache[player] = sell:create(player, id);
            end
        end

        local fishes = imports.inventory:getItemsByCategory(player, 'fish')

        if (fishes) then
            local instance = Sell.cache[player];
            
            network:emit('pixel_fisher:onServerOpenSell', true, false, player, {
                tasks = instance.tasks:getCurrentTasks(),
                level = instance:getLevelState(),
                fishes = fishes,
            })
        end

        this:destroyInstance();
    end):resume()
end



function Sell:makeSell (player, sellFishes) 
    local instance = Sell.cache[player];

    if (not instance) then 
        return imports.notify:showInfobox(player, "info", "Peixaria", "Houve um problema ao efetuar a transação."); 
    end

    async(function (this) 
        local serverFishes = imports.inventory:getItemsByCategory(player, 'fish');

        -- This is not a useless check, but a side-by-side check
        for _, fish in ipairs(sellFishes) do
            local exists = table.find(serverFishes, function (f) return f._id == fish.id and f.amount == fish.amount end);

            if (not exists) then 
                break
            end
        end

        local currentTask, taskMeta = instance:getTasks():getCurrentTask();
        local availableSlot = imports.inventory:hasAvailableSlot(player);

        if (not availableSlot) then return imports.notify:showInfobox(player, "info", "Peixaria", "Você precisa liberar espaço no seu inventário.");  end

        local total = 0;

        for index, fish in ipairs(sellFishes) do
            total = total + (meta[fish.item.name].price * fish.amount);
            serverFishes[index] = nil;

            if (currentTask and lume.any(taskMeta.requiredFish, function(x) return x == fish.item.name end)) then 
                currentTask.totalCompleted = currentTask.totalCompleted + fish.amount;
                
                if (currentTask.totalCompleted >= currentTask.totalRequired) then
                    
                    imports.inventory:givePlayerItem (player, "money", currentTask.money, 1, false, false, {}, "bag", true);
                    
                    instance:incrementExp(currentTask.experience);
                    instance:getTasks():ereaseCurrentTask ();
                else
                    instance:getTasks():saveCurrentTask();
                end
            end

            imports.inventory:takePlayerItem(player, fish.item.name, fish.amount);
        end

        local giveMoney = imports.inventory:givePlayerItem (player, "money", total, 1, false, false, {}, "bag", true);

        if (not giveMoney) then 
            return imports.notify:showInfobox(player, "info", "Peixaria", "Houve um problema ao efetuar a transação."); 
        end


        network:emit("pixel_fisher:onServerSellFish", true, false, player, {
            tasks = instance.tasks:getCurrentTasks(),
            level = instance:getLevelState(),
            fishes = imports.inventory:getItemsByCategory(player, 'fish') or {},
        })
        
        this:destroyInstance();
    end):resume()
end

Sell:createSellPed('Lucios', 158, -1810.09656, -1209.30493, 14.31523, 60, 'idle');
Sell:createSellPed('Seu Carlos', 155, -3422.30493, 961.15411, 11.91898, 155, 'idle');
Sell:createSellPed('Veia Lucia', 77, -1590.99243, 5193.69971, 4.31977, 216, 'idle');