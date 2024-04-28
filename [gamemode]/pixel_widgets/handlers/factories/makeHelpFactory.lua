Help = {};
Help.cache = {};


function Help:create (id, ...)
    if (Help.cache[id]) then return id end
    Help.cache[id] = help(...);
    
    return id;
end


function Help:render(id, ...) 
    local instance = Help.cache[id];

    if (not instance) then return false end
    
    return instance:render(...);
end