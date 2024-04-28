local imports = {
    attach = exports.pAttach,
    notify = exports.pixel_notify,
    inventory = exports.pixel_inv,
}

Gallons = {};
Gallons.cache = {};

function Gallons:RequestUse (player, item)
    if (player and item) then
        if (Gallons.cache[player]) then return end

        local vehicle = getMyNearestVehicle(player, 4);

        if (not vehicle) then       
            imports.notify:showInfobox(player, "info", "Gas Station", "Não foi encontrado nenhum carro perto");
            return true;
        end

        local gallon = createObject(1575, 0, 0, 0)
        
        imports.attach:attach(gallon, player, 34, 0.2, 0, -0.11, 200, 210, 291.6)

        Gallons.cache[player] = {
            object = gallon,
            item = item,
        };

        network:emit("pixel_gas:onServerUseItem", true, false, player, item, vehicle);
    end
end


function Gallons:onProgressEnd (player, widget) 
    local instance = Gallons.cache[player];
    if (not instance) then  return false end

    imports.inventory:takePlayerItem(player, "gas_gallon", 1);

    local vehicle = getMyNearestVehicle(player, 100);

    if (vehicle) then 
        setElementData(vehicle, "fuel", instance.item['data'].amount);
    end

    Gallons:destroyGallon (player);

    return false;
end

function Gallons:onPlayerUnquipGallon (player, data) 
    local instance = Gallons.cache[player];
    if (not instance) then  return false end
    
    local isItemInHotBar = table.find(data.items, function (v) return v.name == "gas_gallon" end);
    
    if (isItemInHotBar == nil) then         
        return Gallons:destroyGallon (player);
    end
    
    if (data.itemActive and data.itemActive.name ~= "gas_gallon") then
        return Gallons:destroyGallon (player);
    end
end



function Gallons:destroyGallon (player)
    local instance = Gallons.cache[player];
    if (not instance) then  return false end
    
    if (isElement(instance.object)) then 
        destroyElement(instance.object);
    end

    Gallons.cache[player] = nil;
    network:emit("pixel_gas:onServerCancel", true, false, player);
end