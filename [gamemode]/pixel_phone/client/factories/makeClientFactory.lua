local imports = {
    ui = exports.pixel_ui
}

PhoneItem = nil;

local states = {
    ["Good"] = tocolor(0,255,0),
    ["Medium"] = tocolor(255, 153, 51),
    ["Poor"] = tocolor(255,0,0)
}

function makeClientOpenPhone (item)
    PhoneItem = item;
    imports.ui:toggleCursor(true);

    if (PhoneUI:getVisible()) then 
        PhoneUI:stop ();
    else
        PhoneUI:start ();
    end
end


function makeClientClosePhone ()
    PhoneUI:stop ();
end


function  makeClientConfig () 
    makeHotsportThread();

    network:emit("pixel_phone:onClientOpen", true, false, localPlayer, PhoneItem);
    network:fetch("pixel_phone:onClientOpen", true):on(function (data)
        PhoneUI:sendPhoneEvent("execOnPhoneBoot", data, true);
    end);
end




function makeHotsportThread ()
    local networks = {};

    thread:createHeartbeat(function ()        
        if (#networks > 0) then 
            for _, signal in ipairs(networks) do
                local x,y,z = getElementPosition(localPlayer);
                local router = Vector3(unpack(signal.router));

                dxDrawLine3D(x,y,z, router.x, router.y, router.z, states[signal.state], 1);
            end

            PhoneUI:sendPhoneEvent("receiveNetworks", networks, true);
        end
        
        network:emit("pixel_phone:getNearestNetworks", true, true, localPlayer);
        network:fetch("pixel_phone:getNearestNetworks_cb", true):on(function (signals) networks = signals end);
    return true end, function () return true end, 100);
end


function makePhoneConnection (data) 
    network:emit("pixel_phone:onClientTryConnection", true, true, localPlayer, data.network, data.password);
    network:fetch("pixel_phone:onServerTryConnection", true):on(function (isConnected) 
        PhoneUI:sendPhoneEvent("execPhoneConnectionCB", isConnected, true)
    end);
end


function makePhoneCration ()
    network:emit("pixel_phone:onClientCreate", true, false, localPlayer, PhoneItem);
    network:fetch("pixel_phone:onClientCreate", true):on(function () 
        PhoneUI:setPhoneRoute("/");
    end)
end