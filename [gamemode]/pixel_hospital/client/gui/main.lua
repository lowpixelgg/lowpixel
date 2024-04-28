local imports = {
    ui = exports.pixel_ui
};

local scw, sch = guiGetScreenSize()

deathUI = newclass "deathUI";



function deathUI:init () 
    self.width = respo(513);
    self.height = respo(284);
    self.wordWrap =  wordWrap("Você está desacordado, sua comunicação foi cortada, e você tem apenas o tempo acima antes de perder totalmente a sua consciência.", self.width, 1.0, "default", false)

    self.alpha = 0;
    self.pulseMax = 100;
    self.pulseSpeed = 10000;
    self.lastPulseUpdate = getTickCount();

    self.heartbeatProgress = 0;

    self.buttonStr = "PARAMEDICOS";
    self.brnStrSize = dxGetTextSize(self.buttonStr);
    
    self.padding = respo(50);
    self.buttonWidth = respo(self.brnStrSize) +  self.padding;
    self.buttonHeight = respo(40)
    self.button = SVG:createButton ("call_btn", self.buttonWidth, self.buttonHeight);
    self.time = "170";
    self.isRendering = false;
    self.fade = 0;


    -- fx
    self.screenSource = dxCreateScreenSource(scw, sch);
    self.blackWhiteShader, self.blackWhiteTec = dxCreateShader("assets/fx/blackwhite.fx");
end


function deathUI:updateHeartbeat()
    local speed = 0.005;
    self.heartbeatProgress = (self.heartbeatProgress + speed) % 1;
end


function deathUI:render () 
    if (self.isRendering) then 
      self.fade = math.min(self.fade + 2, 255);
    else
      self.fade = math.max(self.fade - 2, 0);
    end

    if (self.blackWhiteShader) then 
        dxUpdateScreenSource(self.screenSource)     
        dxSetShaderValue(self.blackWhiteShader, "screenSource", self.screenSource);

        local alphaValue = self.fade / 255
        dxSetShaderValue(self.blackWhiteShader, "alphaValue", alphaValue)
        dxDrawImage(0, 0, scw, sch, self.blackWhiteShader);
    end

    local startX, startY = imports.ui:createLayoutBox ("pixel_hospital:dead_screen", self.width, self.height, 0, 0, "center", "center", false);
    

    dxDrawRectangle(0, 0, scw, sch, tocolor(0,0,0,self.fade/1.05))


    dxDrawImage(0, 0, scw, sch, "assets/bg.png", 0, 0, 0, tocolor(255, 255, 255, self.fade >= 100 and self.alpha or self.fade))

    dxDrawImage(startX, startY, self.width, self.height, "assets/stripes.png", 0, 0, 0, tocolor(255,255,255,self.fade));
    
    self:updateHeartbeat();

    local totalWidth = respo(307);
    local sectionWidth = totalWidth * self.heartbeatProgress;
    local _startX = (startX + 100) + totalWidth * (1 - self.heartbeatProgress);

    dxDrawImageSection(_startX, startY + 50, sectionWidth, respo(84), 0, 0, sectionWidth, respo(84), "assets/heartbeat.png", 0, 0, 0, tocolor(255, 255, 255, self.fade));

    if self.heartbeatProgress > 0 then
        dxDrawImageSection((startX + 100), startY + 50, totalWidth - sectionWidth, respo(84), sectionWidth, 0, totalWidth - sectionWidth, respo(84), "assets/heartbeat.png", 0, 0, 0, tocolor(255, 255, 255, self.fade));
    end

    dxDrawText(self.time, startX, self.width, startX+self.width, (startY + self.height), tocolor(221, 228, 255, self.fade), 1.0, fonts.OutfitBold40, "center", "center");
        
    for i = 1, #self.wordWrap do
        dxDrawText(self.wordWrap[i], startX, startY+((i-1)*dxGetFontHeight()), startX + self.width, startY + respo(500)+((i-1)*dxGetFontHeight()),  tocolor(226, 226, 226, self.fade), 1.0, fonts.InterRegular, "center", "center");
    end

    self:updatePulse()
end


function deathUI:updatePulse ()
    local now = getTickCount();
    local elapsedTime = now - self.lastPulseUpdate;
    local progress = (elapsedTime % self.pulseSpeed) / self.pulseSpeed;

    local newAlpha, _, _ = interpolateBetween(
        100, 0, 0,
        200, 0, 0,
        progress,
        "SineCurve",
        0, 0, 0
    )

    self.alpha = newAlpha;
end


function deathUI:setIsRendering (state) 
    self.isRendering = state;
end


function deathUI:setTime (time) 
    self.time = time;
end

-- local morto = deathUI();
-- morto:setIsRendering(true)

-- addEventHandler("onClientRender", root, function () 
--     morto:render()
-- end)