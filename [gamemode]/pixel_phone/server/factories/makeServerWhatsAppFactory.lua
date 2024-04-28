local imports = {
    core = exports.pixel_core;
}

Whats = {};

local DEFAULT_SELECT_MESSAGES =  { "from", "to", "content", "createdAt", "_id" }
local DEFAULT_SELECT_CONTACTS = { "phone", "name", "number", "phoneId", "createdAt", "_id" }



function Whats:getWhatsApp(player, phoneId) 
    local instance = Phones.cache[player];
    if (not instance) then return false end

    async(function (this) 
        local result = instance:getWhatsApp():get();

        if (result) then
            network:emit("pixel_phone:onClientOpenWhatsApp", true, true, player, result);
        end

        this:destroyInstance()
    end):resume()
end


function Whats:addWhatsppMessage (player, data) 
    local instance = Phones.cache[player];
    if (not instance) then return false end

    async(function (this) 
        local result = instance:getWhatsApp():addMessage(data);

        if (result) then 
            network:emit("pixel_phone:onServerSendMessage", true, true, player, data);
        end
    end):resume()
end