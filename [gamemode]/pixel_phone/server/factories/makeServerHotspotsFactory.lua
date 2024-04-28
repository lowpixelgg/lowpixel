HotSpots = {};
HotSpots.networks = {};


function HotSpots:createNetwork(id, name, password, router, mghz)
    local instance = HotSpots.networks[id];
    
    if (not instance) then 
       HotSpots.networks[id] = hotspot:create(id, name, password, router, mghz)
    else
        return instance;
    end

    return false;
end


HotSpots:createNetwork("airport_1", "Aeroport #1", "abc", {-1033.27783, -2729.24292, 29.46859}, 500)
HotSpots:createNetwork("balgeco_1", "Balgeco Shipping", "z3z2z1", {-915.46832, -2520.12866, 46.47061}, 200)
HotSpots:createNetwork("xerogas", "Xero Gaz Wifi", "123", {-916.66461, -2043.95654, 18.73486}, 100)
HotSpots:createNetwork("devlevel", "Develevel", "dev", {767.97314, -860.81396, 1437.03906}, 100)


function HotSpots:getAllNetworks ()
end


function HotSpots:tryConnection (player, networkId, password)
    local instance = HotSpots.networks[networkId];
    if (not instance) then return end


    if (instance.password == password) then 
        network:emit("pixel_phone:onServerTryConnection", true, false, player, true);
    else
        network:emit("pixel_phone:onServerTryConnection", true, false, player, false);
    end
end


function HotSpots:getBestSignals (player)
    local networks = {}

    for k,v in pairs(HotSpots.networks) do
        local state = v:getSignalState(player)
        
        if (state) then
            v.state = state;
            networks[#networks + 1] = v;
        end
    end
    
    if (#networks > 0) then 
        return network:emit("pixel_phone:getNearestNetworks_cb", true, true, player, networks);
    end


    return false;
end
