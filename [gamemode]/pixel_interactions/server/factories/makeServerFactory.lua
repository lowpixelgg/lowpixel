Interactions = {};
Interactions.cache = {}


function Interactions:create (...)
    local id = #Interactions.cache + 1;
    Interactions.cache[id] = interac:create(...);

    if (Interactions.cache[id]) then
        return id;
    end
end

function Interactions:fetch (player)
    network:emit("pixel_interac:onServerCache", true, true, player, Interactions.cache);
end