local imports = {
    notify = exports.pixel_notify,
    inventory = exports.pixel_inv,
    vehicles = exports.pixel_vehicles,
    core = exports.pixel_core,
    parking = exports.pixel_parking,
}

SHOWROOMS = {}
SHOWROOMS.cache = {}

local meta = imports.core:getVehiclesMeta();


function SHOWROOMS:register(...)
    local _id = #SHOWROOMS.cache + 1
    local showroom = manager:create(_id, ...)
    SHOWROOMS.cache[_id] = showroom
end


function SHOWROOMS:enter (entry, player)
    local id = getElementData(entry, "id");
    
    if (id) then 
        local _, conce = table.find(SHOWROOMS.cache, function (v) return v.id == id end);
        
        if (conce) then 
            network:emit("pixel_conce:onServerPlayerEnter", true, false, player, conce);
        end
    end
end

function SHOWROOMS:buyVehicle (player, vehicle) 
    local showroom = SHOWROOMS.cache[vehicle.showroom];

    if (not showroom) then 
        return
    end


    local hasMoneyToBuy = imports.inventory:hasPlayerItem(player, "money");

    if (hasMoneyToBuy) then
        if (hasMoneyToBuy.totalCount >= vehicle.price) then 
            if (not imports.inventory:hasAvailableSlot(player)) then 
                return imports.notify:showInfobox(player, "info", "Concessionária", "Você precisa liberar espaço no seu inventário.");
            end
            
            local takePlayerMoney = imports.inventory:takePlayerItem (player, "money", vehicle.price);
            local nearestParking = imports.parking:getNearestParking (player);

            if (not nearestParking) then 
                return imports.notify:showInfobox(player, "info", "Concessionária", "Não foi encontrada um estacionamento mais proximo."); 
            end

            local id = imports.vehicles:createVehicle(player, {
                model = vehicle.model,
                color = vehicle.color,
                parking = nearestParking.id,
            });

        
            if (id) then 
                local vehMeta = meta[vehicle.model]
                local giveCarKey = imports.inventory:givePlayerItem (player, "car_key", 1, 1, false, false, {
                    id = id,
                    name = "Chave "..vehMeta.name or "de carro"
                }, "bag", true);

                if (giveCarKey) then 
                    network:emit("pixel_conce:onServerPlayerBuyVehicle", true, false, player, vehicle);

                    return imports.notify:showInfobox(player, "info", "Concessionária", "Seu veiculo foi entregue na garem mais proxima ("..nearestParking.name..").");
                else
                    imports.notify:showInfobox(player, "info", "Concessionária", "Problemas ao efetuar a compra.");
                end
            else
                imports.notify:showInfobox(player, "info", "Concessionária", "Problemas ao efetuar a compra.");
            end
        else
            return imports.notify:showInfobox(player, "info", "Concessionária", "Você não possui dinheiro suficiente para comprar este veiculo.");
        end
    else
        return imports.notify:showInfobox(player, "info", "Concessionária", "Você não possui dinheiro suficiente para comprar este veiculo.");
    end
end

function SHOWROOMS:getAll (sendTo) 
    for k, showroom in ipairs(SHOWROOMS.cache) do 
        network:emit("pixel_conce:onServerCreateShowroom", true, true, sendTo, showroom);
    end
end


function SHOWROOMS:registerByMeta (meta) 
    for k, props in pairs(meta) do
        SHOWROOMS:register(props)
    end
end