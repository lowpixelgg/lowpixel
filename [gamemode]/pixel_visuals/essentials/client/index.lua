local imports = {
    assets = exports.pixel_assets,
    blur = exports.pixel_blur,
    ui = exports.pixel_ui
}

local visuals = class:create("visuals");
visuals.private.render = nil;
visuals.private.onClick = nil;

function visuals.public:create(...) 
    local instance = self:createInstance();
    
    if instance and not instance:load(...) then
        instance:destroyInstance();
        return false
    end
    
    return instance
end


function visuals.public:load(texture, title, description, network)
    self.title = title;
    self.description = description; 
    self.visualizer = new "Components:Visualizer" (texture);
    self.blur = imports.blur:createBlurBox( 0, 0, scw, sch, 255, 255, 255, 255, false);
    self.fade = 0;
    self.isRendering = true;
    self.network = network or "pixel_visuals:onClose"
    imports.ui:toggleCursor(true);
    
    visuals.private.render = function () 
        self:render();
    end
    
    visuals.private.onClick = function (...) 
        self:onClick(...);
    end

    
    imports.assets:playSoundFX('open', false, 0.2);
    addEventHandler("onClientRender", root, visuals.private.render);
    addEventHandler("onClientClick", root, visuals.private.onClick);    
    return self
end



function visuals.public:render()
    if self.isRendering then 
        self.fade = math.min(self.fade + 10, 255);
    else
        self.fade = math.max(self.fade - 10, 0);
    end
    
    if self.blur then 
        imports.blur:render( self.blur );
        imports.blur:setBlurBoxColor(self.blur, 255,255,255, self.fade)
    end
    
    dxDrawRectangle(0,0, respo(1920), respo(1080), tocolor(18, 18, 18, self.fade/1.1));
    dxDrawText(self.title or "?", respo(30), respo(30), respo(100), respo(100), tocolor(255,255,255, self.fade), 1.0, fonts.Akira30);
    dxDrawText(self.description or "Não se sabe muito sobre este item.", respo(30), respo(60), respo(500), respo(100), tocolor(255, 255, 255, self.fade/2), 1.0, fonts.OutfitRegular10, "left", "top", false, true);
    
    self.visualizer:render(self.fade);
end


function visuals.public:onClick(b, s, abx, aby, _, _, _) 
    if (b == "left" and s == "up") then 
        local button = self.visualizer:getButton(abx, aby);
        
        if (button) then 
            self:destroy();
            imports.assets:playSoundFX("ui_back", false, 1);
        end
    end
end


function visuals.public:unload()
    self.isRendering = false;
    
    setTimer(function () 
        imports.blur:destroyBlurBox( self.blur );
        imports.ui:toggleCursor(false);
        
        removeEventHandler("onClientRender", root, visuals.private.render);
        self:destroyInstance();

        network:emit(self.network, false)
    end, 500, 1)
    
    return true
end


function visuals.public:destroy(...)
    return self:unload(...);
end