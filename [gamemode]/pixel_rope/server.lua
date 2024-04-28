addEventHandler("onPlayerResourceStart", root, function(res)
    if res ~= resource then return end
    local cache = {};
    for k, v in pairs(currentRopes) do
        v.constraints = nestedVectorToTable(v.constraints);
        v.initNodes = vectorToTable(v.initNodes);
        cache[k] = v;
    end
    triggerClientEvent(source, "rocket_rope:receiveCache", resourceRoot, cache);
end);