local imports = {
    inventory = exports.pixel_inv,
    core = exports.pixel_core,
    notify = exports.pixel_notify
}

Shops = {};
Shops.cache = {};

local meta = imports.core:getItemsMeta();


function Shops:createShop (id, pedName, skinId, pos, rot, items)
    if (not Shops.cache[id]) then 
        Shops.cache[id] = shop:create(id, ped, pedName, skinId, pos, rot, items);

        return true;
    end

    return false;
end


function Shops:getShopByPed (ped) 
    for k,v in pairs(Shops.cache) do 
        return v;
    end

    return false; 
end

function Shops:openShop (player, ped)
    local instance = Shops:getShopByPed (ped);
    if (not instance) then return false end

    network:emit("pixel_shops:onServerOpenShop", true, false, player, instance);
end


function Shops:onSell (player, id, items)
    local instance = Shops.cache[id]
    if (not instance) then return false end

    async(function (this)
        local totalCheckout = Shops:getCorrectValue (instance, items);

        if (not totalCheckout) then 
            imports.notify:showInfobox(player, "info", "Shops", "Parece que houve um problema ao finalizar a transação.");
            return this:destroyInstance();
        end

        local hasMoneyToBuy = imports.inventory:hasPlayerItem(player, "money");
        
        if (hasMoneyToBuy.totalCount >= totalCheckout) then 
           if (not imports.inventory:hasAvailableSlot(player, table.size(items))) then 
            imports.notify:showInfobox(player, "info", "Shops", "Você não tem espaço na mochila para efetuar a transação.");
            return this:destroyInstance();
           end

           imports.inventory:takePlayerItem (player, "money", totalCheckout);

            for k,v in pairs(items) do 
                imports.inventory:givePlayerItem (player, v.name, v.amount, 1, false, false, {}, "bag", true);
            end
        end

        this:destroyInstance();
    end):resume();
end


function Shops:getCorrectValue (instance, items)
    local total = 0;

    for k,v in pairs(items) do 
        if (lume.find(instance.availableItems, v.name) == nil) then 
            return false;
        end

        total = total + meta[v.name].price * v.amount
    end

    return total;
end



local stores = {
    "phone",
    "burger",
    "softdrink",
    "pizza",
    "sandwich",
    "apple",
};


local gas = {
    "basic_repair",
    "gas_gallon",
    "burger",
    "softdrink",
    "pizza",
    "sandwich",
    "apple",
};


local restaurant = {
    "burger",
    "softdrink",
    "pizza",
    "sandwich",
    "apple",
};


Shops:createShop ("shop_1", "Frank", 2, Vector3(1227.08179, -1425.82251, 13.42613), 267, stores);
Shops:createShop ("gas_1", "Tiffany", 2, Vector3(1154.72107, -1440.06970, 15.79688), 45, gas);
Shops:createShop ("gas_2", "Victor", 2, Vector3(1119.14893, -1370.19971, 13.98438), 87, gas);
Shops:createShop ("rest_1", "Alfonso", 2, Vector3(2244.78320, -1665.02002, 15.47656), 301, restaurant);
Shops:createShop ("rest_2", "Hattie", 2, Vector3(2105.32446, -1806.42664, 13.55469), 301, restaurant);
Shops:createShop ("rest_3", "Nelson", 2, Vector3(2071.95239, -1831.37598, 13.55453), 301, restaurant);
