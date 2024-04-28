local imports = {
    rope = exports.pixel_rope;
    assets = exports.pixel_assets;
    inventory = exports.pixel_inv;
    widgets = exports.pixel_widgets;
    ui = exports.pixel_ui;
    webui = exports.webui;
    locales = exports.pixel_lang;
    hud = exports.pixel_hud,
}

Fishers = {
    ui = {
        help = imports.widgets:createHelplist("fishing_help", {
            list = {
                { key = imports.locales:getString("pixel_fisher:factory_helplist_k_keyname"), msg = imports.locales:getString("pixel_fisher:factory_helplist_k_msg")},
                { key = imports.locales:getString("pixel_fisher:factory_helplist_backspace_keyname"), msg = imports.locales:getString("pixel_fisher:factory_helplist_backspace_msg")}
            }
        }),
        waterAlert = WaterAlert();
    }
};

function Fishers:makeClientFishingStart () 
    local x,y,z = getElementPosition(localPlayer);
    local nearest = findNearestVertex(x,y,z);
    
    if (not nearest) then return false end
    
    Fishers.ui.FindZone = FindZone();
    imports.ui:toggleCursor(true);
    imports.inventory:hideByComplete(true);
    imports.hud:hideByComplete(true);

    
    
    addEventHandler("onClientClick", root, Fishers.onClick);
end


function Fishers.onClick (button, state)
    if (button == "left" and state == "up") then 
        local self = Fishers.ui;

        if (Fishers.ui.FindZone.water) then 
            local x,y,z = getElementPosition(self.FindZone.flotor);
                        
            Fishers:destroySearch ();
            network:emit("pixel_fisher:onClientReady", true, false, localPlayer, x,y,z);
        end
    end
end


function Fishers.onKey (button, state) 
    local self = Fishers;

    if (self.ui.GameUI) then 
        self.ui.GameUI:onKey(button, state);
    end

    if (button == "backspace") then 
        if (self.ui.GameUI) then 
        end

        network:emit("pixel_fisher:onPlayerStopFishing", true, false, localPlayer);
    end
end


function Fishers:destroySearch () 
    if (self.ui.FindZone) then 
        self.ui.FindZone:destroy();
        self.ui.FindZone = nil;
        imports.inventory:hideByComplete(false);
        imports.hud:hideByComplete(false);

        removeEventHandler("onClientClick", root, Fishers.onClick);
    end
end


function Fishers:destroyClientFishing () 
    Fishers:destroySearch ();

    if (self.ui.GameUI) then 
        self.ui.GameUI = nil; 
        removeEventHandler("onClientRender", root, timer);
        removeEventHandler("onClientKey", root, Fishers.onKey);
    end


    if (self.ui.FloaterWidget) then 
        self.ui.FloaterWidget = nil;
    end
end


function Fishers:startFisher (fisher) 
    self.ui.FloaterWidget = FloaterWidget();
    imports.inventory:hideByComplete(false);
    imports.hud:hideByComplete(false);

    Fishers.data = fisher;
    addEventHandler("onClientKey", root, Fishers.onKey);
end


function Fishers:render ()
    local self = Fishers;
    
    local x,y,z = getElementPosition(localPlayer);
    local nearest = findNearestVertex(x,y,z);
    
    if (not nearest) then 
        Fishers:destroySearch ();
    end
    
    if (self.ui.FindZone and not isCursorShowing()) then 
        Fishers:destroySearch ();
    end
    
    
    if (nearest and self.ui.FindZone) then 
        self.ui.FindZone:render();
    end
    
    if (nearest and not Fishers.data) then
        self.ui.waterAlert:render();
    end
    
    
    if (nearest and self.ui.GameUI) then
        local bx, by, bz = getElementPosition(self.data.flotor);
        self.ui.GameUI:render(bx, by, bz);
    end


    if (self.data and self.ui.FloaterWidget) then
        local bx, by, bz = getElementPosition(self.data.flotor);
        local fx, fy, fz = getElementPosition(self.data.fishergrod);

        self.ui.FloaterWidget:render(bx, by, bz, fx, fy, fz);

        imports.widgets:renderHelplist("fishing_help", 255)
    end
end


function Fishers:onPlayerEndCatch (continue)
    if (not self.data) then return false end

    if (self.ui.FindZone) then 
        Fishers:destroySearch () 
    end

    if (self.data.sound) then 
        stopSound(self.data.sound)
    end
    
    if (not continue) then
        Fishers:destroyClientFishing();
        imports.inventory:hideByComplete(false);
        imports.hud:hideByComplete(false);

        Fishers.data = nil;
    end
end

function Fishers:onCatchFish (serverFisher, fish)     
    if (serverFisher.player == localPlayer) then 
        self.ui.GameUI = GameUI();
        
        self.ui.GameUI.timeLeft = fish.fishingTime;
        self.ui.GameUI.difficult = fish.fishingDiffcult;
        self.ui.GameUI.dispute = true;
        self.ui.GameUI:setGameRendering(true);
        
        imports.inventory:hideByComplete(true);
        imports.hud:hideByComplete(true);
        
        local startTime = getTickCount()
        local endTime = startTime + self.ui.GameUI.timeLeft;
        
        function timer () 
            if (not self.ui.GameUI) then 
                removeEventHandler("onClientRender", root, timer);
                return;
            end

            local currentTime = getTickCount();
            
            if (currentTime < endTime) then
                self.ui.GameUI.progress = math.floor(((endTime - currentTime) / (endTime - startTime)) * 100);
            else
                self.ui.GameUI.progress = 0;
                self.ui.GameUI:setGameRendering(false);
                self.data.cutAmount = self.ui.GameUI.cutAmount;
                
                network:emit("pixel_fisher:onClientEndCatch", true, false, localPlayer, self.data);
                
                self.ui.GameUI = nil;
                removeEventHandler("onClientRender", root, timer);
            end
            

            if (self.ui.GameUI) then             
                local minutes = math.floor((endTime - currentTime) / 60000);
                local seconds = math.floor(((endTime - currentTime) % 60000) / 1000);
                
                self.ui.GameUI.timer = string.format("%s", seconds);
            end
        end
    
        addEventHandler("onClientRender", root, timer, true, "low-99999");
    end
end