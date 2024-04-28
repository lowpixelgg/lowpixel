local imports = {
    ui = exports.pixel_ui,
    locales = exports.pixel_lang
}

GameUI = newclass "GameUI";



function GameUI:init() 
    self.cutAmount = 4;
    self.timeLeft = 16000;
    self.dispute = false;
    self.gameRendering = false;
    self.fade = 0;
    self.timer = nil;
    self.difficult = -3
    self.rectangleWidth = respo(280);
    self.rectangleHeight = respo(50);


    self.tick = getTickCount();
    
    createSlider(self.tick, self.rectangleWidth - 55, respo(5));
end


function GameUI:render (fx,fy,fz)
    local wx, wy  = getScreenFromWorldPosition(fx,fy,fz);

    if (self.dispute) then 
        if (self.gameRendering) then 
            self.fade = math.min(self.fade + 2, 255);
        else
            self.fade = math.max(self.fade - 10, 0);
        end

        if (wx and wy) then 
            wx, wy = wx + 30, wy - 60
        
            setTimer(function () if (self.cutAmount <= 90) then self.cutAmount = self.cutAmount + 1  end end, 90, 1);
            dxDrawImageSection(wx, wy + respo(self.cutAmount), respo(14), respo(91) - respo(self.cutAmount), 0, 0, respo(14), respo(91) - respo(self.cutAmount), "assets/minigame/bar_color.png", 0, 0,0, tocolor(255,255,255, self.fade));
            dxDrawImage(wx, wy, respo(14), respo(91), "assets/minigame/bar.png", 0, 0, 0, tocolor(255, 255, 255, self.fade));
            dxDrawImage(wx + respo(14) + 5, wy, respo(2), respo(91), "assets/minigame/bar_color_rect.png", 0, 0, 0, tocolor(255, 255, 255, self.fade));                    

            local startX, startY = imports.ui:createLayoutBox("fish_line", self.rectangleWidth, self.rectangleHeight, 0, respo(90), "center", "bottom", false);
            local svgY = startY + (self.rectangleHeight - respo(5)) / 2;
            
            local targetWidth = respo(self.rectangleWidth - 55) / 100 * self.progress;
            local currentWidth = imports.ui:getSvgRectWidth(self.tick);
            
            local smoothness = 0.1;
            local smoothWidth = currentWidth + (targetWidth - currentWidth) * smoothness;
            
            imports.ui:setSvgRectWidth(self.tick, smoothWidth);
            
            local barraWidth = smoothWidth + 56;
            local barraX = startX + (self.rectangleWidth - barraWidth) / 2;
            
            dxDrawImage(0,0, scw, sch, "assets/minigame/vignette.png", 0, 0, 0, tocolor(255, 255, 255, self.fade))
            dxDrawImage(barraX, svgY - 10, 24, 24, "assets/icons/get_fish.png", 0, 0, 0, tocolor(255, 255, 255, self.fade));
            dxDrawImage(barraX + smoothWidth + 24 + 8, svgY - 10, 24, 24, "assets/icons/fish.png", 0, 0, 0, tocolor(255, 255, 255, self.fade));
            dxDrawText(string.format(imports.locales:getString("pixel_fisher:minigame_game_string"), self.timer) or "N/A", startX, startY, startX + self.rectangleWidth, startY + self.rectangleHeight, tocolor(255, 255, 255, self.fade), 1.0, fonts.InterLight, "center", "bottom");
            
            imports.ui:renderSvg(self.tick, barraX + 24, svgY, tocolor(150, 177, 197, self.fade));
        end
    end
end

function GameUI:setGameRendering (state) 
    self.gameRendering = state;
end

function GameUI:onKey(button, press)    
    if (button == "k" and press) then
        if (self.cutAmount > 4) then 
            self.cutAmount = self.cutAmount - 13;
        end
    end
end