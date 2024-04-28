local imports = {
    core = exports.pixel_core,
    inventory = exports.pixel_inv
}


Phones = {};
Phones.cache = {};

function Phones:usePhoneItem (player, data)
    local character = getElementData(player, "id");
        
    if (character) then
        local instance = phone:create(player, character, data);
        
        if (instance) then 
            Phones.cache[player] = instance;
            network:emit("pixel_phone:onClientOpen", true, false, player, true); 
        end
    end
    
    network:emit("pixel_phone:onPlayerOpenPhone", true, false, player, data);
end

function Phones:unequipPhoneItem (player, data) 
    local isItemInHotBar = table.find(data.items, function (v) return v.name == "phone" end);
    
    if (isItemInHotBar == nil) then
        return network:emit("pixel_phone:onPlayerClosePhone", true, false, player);
    end
    
    if (data.itemActive and data.itemActive.name ~= "phone") then
        return network:emit("pixel_phone:onPlayerClosePhone", true, false, player);
    end
end



function Phones:getPhoneData (player, item)
    local instance = Phones.cache[player];
    if (not instance) then return false end

    async(function (this)
        network:emit("pixel_phone:onClientOpen", true, false, player, instance.id and { id = instance.id } or false);
        this:destroyInstance();
    end):resume()
end


function Phones:createPhone (player)
    local instance = Phones.cache[player];
    if (not instance) then return false end

    async(function (this) 
        local result = instance:createPhone();

        if (result) then 
            network:emit("pixel_phone:onClientCreate", true, false, player);
        end
        this:destroyInstance();
    end):resume()
end