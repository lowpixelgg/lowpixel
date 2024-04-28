local imports = {
    widgets = exports.pixel_widgets, 
    assets = exports.pixel_assets,
    notify = exports.pixel_notify,
}

local soundCache = {}

local heartbeat;
local fueling;
local buyui;
local qtd;
local value;
local mainRT = dxCreateRenderTarget(512, 512, false);

bomberInUse = nil;


function attachCarToBomb (_, _, vehicle, x, y, z)   
    local px, py, pz = getElementPosition(localPlayer);
    local distance = getDistanceBetweenPoints3D(px, py, pz, x,y,z);

    if (math.floor(distance) > 0.2) then return false end 
    
    imports.widgets:destroyWidget("anexar");

    imports.widgets:createProgress("gas_station", {
        title = "Abastecendo",
        description = "Aguarde enquanto seu veiculo está sendo abastecido.",
        esplasedTime = getItemIndex(qtd.percent, 31) * 1000,
        anchor = {"center", "bottom", 0, 100}, 
        network = "pixel_gas:onProgressEnd",
        remote = true,
    });

    imports.widgets:startProgress("gas_station");

    network:emit("pixel_gas:onClientGasClientStart", true, false, localPlayer, x, y, z, vehicle);

    heartbeat:destroyInstance();



    unbindKey("e", "up", attachCarToBomb);
end


function onClientOpenWidget (bomber) 
    if (fueling) then 
        return
    end


    if (not buyui) then 
        buyui = buy(13.0);
        addEventHandler("onClientRender", root, render);
        addEventHandler("onClientClick", root, onClick);
        addEventHandler("onClientKey", root, onKey);
        
        bomberInUse = bomber.id;
        buyui:setIsRendering(true);
        buyui.mid_buttons[1].selected = true;
        qtd =  buyui.mid_buttons[1];
        buyui:updateSelectedValue(getItemIndex(25, 31));
    end
end


function destroyBuyUI () 
    buyui:setIsRendering(false);

    setTimer(function () 
        buyui = nil;
        
        removeEventHandler("onClientRender", root, render);
        removeEventHandler("onClientKey", root, onKey);
        removeEventHandler("onClientClick", root, onClick);
    end, 600, 1);
end

function createClientGasService (rope) 
    local vehicle = getMyNearestVehicle(localPlayer, 20);
    
    if (not vehicle) then
        destroyBuyUI();
       
        return imports.notify:showInfobox("info", "Gas Station", "Não foi encontrado nenhum carro perto");
    end

    local x,y,z = getVehicleComponentPosition(vehicle, "petrocap_comp", "world");

    imports.widgets:createWidget("anexar", {
        name = "anexar",
        text = 'E Para anexar a bomba',
        autoRendering = true,
        remote = true,
        maxDistance = 5,
        position = Vector3(x,y,z)
    });

    if (buyui) then 
        destroyBuyUI (); 
    end


    heartbeat = thread:createHeartbeat(function () 
        local x,y,z = getElementPosition(localPlayer);
        local cx, cy, cz = getElementPosition(bombers[bomberInUse].bomber);
        local distance = getDistanceBetweenPoints3D(x,y,z, cx, cy, cz);

        if (math.floor(distance) > 10) then 
            network:emit("pixel_gas:onProgressEnd", true, false, localPlayer);
            imports.widgets:destroyWidget("anexar");
            
            heartbeat:destroyInstance();
        end

        return true;
    end, function () end, 250);


    bindKey("e", "up", attachCarToBomb, vehicle, x,y,z);
end

function onProgressEnd () 
    if (buyui) then 
        destroyBuyUI ();
    end

    fueling = nil;

    if (bomberInUse) then 
        local bomber = bombers[bomberInUse].shader

        if (isElement(bomber)) then 
            destroyElement(bomber);
        end

        bomberInUse = nil;
    end
end


function render () 
    if (buyui) then 
        buyui:render();
    end
end


function onKey (k) 
    if (k == "backspace") then 
        if (buyui) then 
            destroyBuyUI (); 
        end    
    end
end


function onServerUpdate (bomberId, liters, price) 
    dxSetRenderTarget(mainRT, true)
        dxDrawText(string.format("$%s", price), 50, 50, 100, 100, tocolor(255, 255, 255, 255), 1.0, fonts.DigitalRegular, "left", "top")
        dxDrawText(string.format("%06dL", liters), 50,  65, 100, 200, tocolor(255, 255, 255, 255), 1.0, fonts.DigitalRegular, "left", "top")
    dxSetRenderTarget();
end


function setBomberTarget (id) 
    local bomber = bombers[id];
    if (not bomber) then return false end

    bomber.shader = imports.assets:useCreateShader("tex_simple_replace", 0, 0, false, 'object');

    engineApplyShaderToWorldTexture(bomber.shader, "panel", bomber.bomber);
    dxSetShaderValue (bomber.shader, "gTexture", mainRT);
end


function onServerCrateSoundEffect (player, x, y, z) 
    soundCache[player] = imports.assets:playSoundFX3D("gas_station", x,y,z, true, 1);
end


function onServerDestroySoundEffect (player) 
    if (isElement(soundCache[player])) then 
        destroyElement(soundCache[player])
    end
end


function onClick (b, s, abx, aby) 
    if (b == "left" and s == "up") then 
        if (buyui.hoverCheckout) then 
            local vehicle = getMyNearestVehicle(localPlayer, 10);
    
            if (not vehicle) then
                destroyBuyUI();
                return imports.notify:showInfobox("info", "Gas Station", "Não foi encontrado nenhum carro perto");
            end
            
            setBomberTarget(bomberInUse);
            fueling = true;
            network:emit("pixel_gas:onClientCheckout", true, false, localPlayer, bombers[bomberInUse], getItemIndex(qtd.percent, 31));
        end

        local _qtd = buyui:getButtonByPosition(abx, aby);
        
        if (_qtd) then 
            qtd = _qtd
        end

        if (_qtd) then 
            for k,v in ipairs(buyui.mid_buttons) do 
                v.selected = false;
            end
    
            _qtd.selected = true;

            buyui:setTotalLiters(getItemIndex(_qtd.percent, 31));
            buyui:updateSelectedValue(getItemIndex(_qtd.percent, 31));
        end
    end
end
