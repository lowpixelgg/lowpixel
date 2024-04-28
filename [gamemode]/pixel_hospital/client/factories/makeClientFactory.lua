local imports = {
    ui = exports.pixel_ui;
    inventory = exports.pixel_inv;
    hud = exports.pixel_hud
}

local gui = nil;
local esplasedTime = 10000
local progress = 0;

function onPlayerFall () 
    if (not gui) then 
        gui = deathUI();
        gui:setIsRendering(true);
        
        imports.ui:toggleCursor(true);
        imports.inventory:hideByComplete(true);
        imports.hud:hideByComplete(true);

        startCountdown ();


        addEventHandler("onClientPreRender", root, render, false, "low");
    end
end


function destroyFall () 
    if (gui) then 
        gui = nil;
        imports.ui:toggleCursor(false);
        imports.inventory:hideByComplete(false);
        imports.hud:hideByComplete(false);
    end
end

function startCountdown ()    
    local startTime = getTickCount()
    local endTime = startTime + esplasedTime
    
    local function countdown () 
        local currentTime = getTickCount();
        
        if (currentTime < endTime) then
            progress = math.floor((currentTime - startTime) / (endTime - startTime) * 100);
        else
            progress = 100;
            
            removeEventHandler("onClientRender", root, countdown);
            
            
            gui:setIsRendering(false);
            
            setTimer(function () 
                network:emit("pixel_hospital:onPlayerFallEnd", true, false, localPlayer);
                destroyFall();
                removeEventHandler("onClientPreRender", root, render, false, "low");
            end, 1000, 1)
        end
        
        local minutes = math.floor((endTime - currentTime) / 60000);
        local seconds = math.floor(((endTime - currentTime) % 60000) / 1000);
        local time = string.format("%02d:%02d", minutes, seconds);

        gui:setTime (time);
    end
    
    addEventHandler("onClientRender", root, countdown, true, "low-99999");
end

function render () 
    if (gui) then 
        gui:render (); 
    end
end