local imports = {
    inventory = exports.pixel_inv,
    hud = exports.pixel_hud,
    ui = exports.pixel_ui,
    blips = exports.pixel_blips
}

ClientMap = {
    gui = nil;
};


local lastTick = getTickCount();
local isVisible = false;

function ClientMap:create ()
    toggleControl("radar", false);

    bindKey("F11", "up", function () 
        isVisible = not isVisible;
        ClientMap:toggle (isVisible);
    end);

    ClientMap.gui = Map ();
end

function ClientMap:toggle (state)
    if (state) then 
        imports.inventory:hideByComplete(true);
        imports.hud:hideByComplete(true);
        imports.ui:toggleCursor(true);
        

        
        addEventHandler("onClientKey", root, ClientMap.onClientKey)
        addEventHandler("onClientRender", root, ClientMap.render, false, "low-5");
        ClientMap.gui:show();
    else
        imports.inventory:hideByComplete(false);
        imports.hud:hideByComplete(false);
        imports.ui:toggleCursor(false);
        
        ClientMap.gui:hide();

        removeEventHandler("onClientKey", root, ClientMap.onClientKey)
        removeEventHandler("onClientRender", root, ClientMap.render, false, "low-5");
    end
end

function ClientMap:render () 
    local currentTick = getTickCount();
    local timeSlice = currentTick-lastTick;
    lastTick = currentTick;
    local deltaTime = timeSlice/250;
    
    
    ClientMap.gui:render(deltaTime);
end

function ClientMap.onClientKey (button, press) 
    if ( button == "mouse_wheel_down" ) then
        ClientMap.gui:decreaseZoom(.1);
    elseif ( button == "mouse_wheel_up" ) then
        ClientMap.gui:increaseZoom(.1);
    end
end

imports.blips:createBlip(631.68, 1716.58, 6.30, "Combustível", "gas", 0xFF7CAB40);
imports.blips:createBlip(1881.52, 924.14, 10.23, "Loja", "gas", 0xFFE1B200);
imports.blips:createBlip(2083.76, 1445.89, 10.23, "Vestuário", "gas", 0xFFE1B200);
imports.blips:createBlip(2285.76, 2421.68, 10.23, "Posto Policial", "gas", 0xFF0080FF);
imports.blips:createBlip(2205.76, 2421.68, 10.23, "Posto Policial", "gas", 0xFF0080FF);


ClientMap:create ();