local scx, scy = guiGetScreenSize()
ScreenComponent = newclass "ScreenComponent";


function ScreenComponent:init (categories) 
    self.categories = categories or "" 
    self.isRendering = 0
    self.fade = 0
    self.letteringCount = 0
    self.graphRT = dxCreateRenderTarget(respo(500), respo(50), true);

    
   self.keys = {
    {key = imports.locales:getString("pixel_conce:screen_key_mouse_keyname"), msg = imports.locales:getString("pixel_conce:screen_key_mouse_msg")},
    {key = imports.locales:getString("pixel_conce:screen_key_arrows_keyname"), msg = imports.locales:getString("pixel_conce:screen_key_arrows_msg")},
    {key = imports.locales:getString("pixel_conce:screen_key_enter_keyname"), msg = imports.locales:getString("pixel_conce:screen_key_enter_msg")},
    {key = imports.locales:getString("pixel_conce:screen_key_mouse1_keyname"), msg = imports.locales:getString("pixel_conce:screen_key_mouse1_msg")}
   };

   self.helplist = imports.widgets:createHelplist("conce_helplist", {
        list = self.keys
    });
    
    createRect("categories", scx, 50) 
end


function ScreenComponent:graph () 
    dxSetRenderTarget(self.graphRT, true)
        dxSetBlendMode("modulate_add")

        self.letteringCount = self.letteringCount + 1
        
        local lettering = self.categories
        local letteringSize = dxGetTextWidth(lettering)
        local bgLetteringSize = respo(600)
        local inital = 1 - bgLetteringSize - letteringSize - 10
        local posX = inital + self.letteringCount
        
        if (posX > (bgLetteringSize + letteringSize + 10)) then 
            inital = posX
            self.letteringCount = 0 
        end

        dxDrawRectangle(0,0, respo(500), respo(50), tocolor(202, 62, 62,255))
        dxDrawText(lettering, posX, 0, scx, respo(50),tocolor(255,255,255,255), 1.0,fonts.HansomBold20, "left", "center")

        dxSetBlendMode("blend")
    dxSetRenderTarget()
end


function ScreenComponent:render() 
    local startX, startY = imports.ui:createLayoutBox("showroom_screen", scx, 50, 0, 0, "left", "top", false);
    self:graph();
    
    if self.isRendering then 
        self.fade = math.min(self.fade + 5, 255);
    else
        self.fade = math.max(self.fade - 5, 0);
    end

    dxDrawImage(0, 0, scw, sch, "assets/images/vignette.png", 0,0,0, tocolor(255,255,255, self.fade));
    dxDrawImage(startX - respo(50), startY, respo(500), respo(50), self.graphRT, -30, 0, 0, tocolor(255,255,255,self.fade));


    imports.widgets:renderHelplist(self.helplist, self.fade)
end


function ScreenComponent:setIsRendering (state) 
    if state then 
        self.isRendering = true
    else
        self.isRendering = false
    end
end

function ScreenComponent:destroy () 
    if (self.graphRT) then 
        destroyElement(self.graphRT)
    end
end