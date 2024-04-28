local imports = {
    ui = exports.pixel_ui
}


SelectorComponent = newclass "SelectorComponent";


function SelectorComponent:init (npc) 
    self.bodyParts = {
        [1] = {
            startX = respo(30),
            startY = respo(-50),
            x = nil,
            y = nil,
            camera = "head",
            active = true,
            bone = 8,
        },
        [2] = {
            startX = respo(20),
            startY = respo(-50),
            x = nil,
            y = nil,
            camera = "torso",
            active = false,
            bone = 33
        },
        
        [3] = {
            startX = respo(50),
            startY = 0,
            x = nil,
            y = nil,
            camera = "legs",
            active = false,
            bone = 41,
        },
        
        [4] = {
            startX = respo(20),
            startY = respo(-40),
            x = nil,
            y = nil,
            camera = "shoes",
            active = false,
            bone = 43
        }
    };
    
    
    self.npc = npc or nil;
    self.activeIndex = 1;
    self.isRendering = false;
    self.fade = 0;
end


function SelectorComponent:render () 
    if (not self.npc) then return false end
    
    if (self.isRendering) then 
        self.fade = math.min(self.fade + 1, 255);
    else
        self.fade = math.max(self.fade - 5, 0);
    end
    
    
    for k,v in pairs(self.bodyParts) do 
        local x,y,z = getPedBonePosition(self.npc, v.bone);
        local sx, sy = getScreenFromWorldPosition(x,y,z);
        
        
        if (sx and sy) then             
            self.bodyParts[k].x, self.bodyParts[k].y = v.startX + sx, v.startY + sy
            
            if (not v.x and not v.y) then return false end
            
            if (not self.isDuringAnim and self.frameX and self.frameY) then                 
                if (k == self.activeIndex) then
                    self.frameX, self.frameY = v.x, v.y
                end
            end
            
            
            dxDrawImage(self.bodyParts[k].x, self.bodyParts[k].y, respo(50), respo(50), "assets/icons/dot.png", 0, 0, 0, v.active and tocolor(255, 66, 72, self.fade) or tocolor(242, 242, 250, self.fade));
            
            
            if (not v.active) then 
                local oscillationSpeed = 2;
                local maxCircleSize = respo(50) * 0.3;
                
                local circleSize = respo(50) + maxCircleSize * math.abs(math.sin(getTickCount() / 1000 * oscillationSpeed));
                
                local circleX = v.x + (respo(50) - circleSize) / 2;
                local circleY = v.y + (respo(50) - circleSize) / 2;
                
                dxDrawImage(circleX, circleY, circleSize, circleSize, "assets/icons/circle.png", 0, 0, 0, tocolor(255, 255, 255, self.fade));
            end
            
            
            if (self.activeIndex == k) then 
                self.bodyParts[k].active = true;
            else
                self.bodyParts[k].active = false;
            end
        end
    end
    
    if (self.frameX and self.frameY) then
        dxDrawImage(self.frameX, self.frameY, respo(50), respo(50), "assets/icons/frame.png", getTickCount()/3, 0, 0, tocolor(255, 255, 255, self.fade));
    end
    
    if (not self.frameX and not self.frameY) then 
        self.frameX, self.frameY = self.bodyParts[self.activeIndex].x, self.bodyParts[self.activeIndex].y
    end
end



function SelectorComponent:animateFrame (switch) 
    local animationStartTime = getTickCount()
    local animationDuration = 400
    
    self.isDuringAnim = true;
    
    local function render ()
        local now = getTickCount()
        local progress = (now - animationStartTime) / animationDuration
        
        if progress < 1 then
            self.frameX, self.frameY = interpolateBetween(self.bodyParts[switch].x, self.bodyParts[switch].y, 0, self.bodyParts[self.activeIndex].x, self.bodyParts[self.activeIndex].y, 0, progress, "OutQuad")
        else
            self.isDuringAnim = false;
            removeEventHandler("onClientPreRender", root, render, false, "low-99999");
        end
    end
    
    
    addEventHandler("onClientPreRender", root, render, false, "low-99999");
end


function SelectorComponent:setIsRendering (state) 
    self.isRendering = state;
end

function SelectorComponent:onClientKey (button, press)
    if (self.isDuringAnim) then return false end
    
    if (button == "arrow_d" and press) then
        self:animateFrame (self.activeIndex)
        self.activeIndex = (self.activeIndex % #self.bodyParts) + 1
    elseif (button == "arrow_u" and press) then
        self:animateFrame (self.activeIndex)
        self.activeIndex = ((self.activeIndex - 2 + #self.bodyParts) % #self.bodyParts) + 1
    end
end