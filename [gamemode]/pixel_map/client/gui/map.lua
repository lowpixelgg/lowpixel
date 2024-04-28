local imports = {
    blur = exports.pixel_blur,
    blips = exports.pixel_blips,
}

Map = newclass "Map";
local screenW, screenH = guiGetScreenSize()
local textureSize = 1600;

local factorScale = 0;
local initZoom = 2;
local mapTexture = dxCreateTexture("assets/map.png", "argb", true, "clamp");
local arrowTexture = dxCreateTexture("assets/arrow.png", "argb", true, "clamp");
local blipSize = 30;
local linkSize = 20;
local linkX = 40;
local linkY = 40;
local blurBox = imports.blur:createBlurBox(0, 0, screenW, screenH, 255, 255, 255, 0);
local blurBoxColor = { 
    r = 43,
    g = 48,
    b = 38
};
local blipColor = 0xFF4F4FCE;
local lineColor = {
    r = 253,
    g = 1,
    b = 80
};
local path = {
    updateTime = 500,
    updateDistance = 20,
}

factorScale = 6000/textureSize;



imports.blur:setBlurBoxEnabled(blurBox, false);

function Map:init ()
    self.x = 0;
    self.y = 0;
    self.visible = false;
    self.zoom = { current = initZoom,  target = initZoom };
    self.cursor = {
        state = false,
        tick = nil,
        count = 0,
        last = { x = 0, y = 0 },
        diff = { x = 0, y = 0 },
        clamping = false
    };
    self.blipCache = {};
    self.linkCache = {};
    self.openAnimation = {
        enabled = false,
        tick = nil,
        blurIntensity = 0,
        backgroundAlpha = 0,
        mapAlpha = 0,
        contentAlpha = 0,
        step = 0,
    };
    self.path = {
        enabled = false,
        nodes = nil,
        lastUpdate = nil,
        blip = nil,
    };
end


function Map:render (deltaTime) 
    if ( self.openAnimation.enabled ) then
        local progress = math.clamp((getTickCount() - self.openAnimation.tick)/200, 0, 1);
        local multipler = getEasingValue(progress, "OutQuad");
        
        if (self.openAnimation.step == 0) then
            self.openAnimation.blurIntensity = multipler * 3;
            self.openAnimation.backgroundAlpha = multipler * 255;
            imports.blur:setBlurIntensity(self.openAnimation.blurIntensity);
            imports.blur:setBlurBoxColor(blurBox, blurBoxColor.r, blurBoxColor.g, blurBoxColor.b, self.openAnimation.backgroundAlpha);


            if ( progress >= 1 ) then
                self.openAnimation.step = 1;
                self.openAnimation.tick = getTickCount();
            end
        elseif (self.openAnimation.step == 1) then
            self.openAnimation.mapAlpha = multipler * 255;
            if ( progress >= 1 ) then
                self.openAnimation.step = 2;
                self.openAnimation.tick = getTickCount();
            end
        elseif (self.openAnimation.step == 2) then
            self.openAnimation.contentAlpha = multipler * 240;
            if ( progress >= 1 ) then
                self.openAnimation.enabled = false;
            end
        end
    end
    
    imports.blur:render( blurBox );    
    dxDrawImage(0, 0, screenW, screenH, "assets/vignette.png", 0, 0, 0, tocolor(255, 255, 255, self.openAnimation.backgroundAlpha));
    
    self.zoom.current = math.lerp(self.zoom.current, self.zoom.target, deltaTime);
    local mapScale = (screenH * self.zoom.current)/textureSize;
    local playerX, playerY = convert(localPlayer.position.x, localPlayer.position.y, factorScale);
    local playerRot = localPlayer.rotation.z;
    self.x = math.lerp(self.x, playerX + self.cursor.diff.x, deltaTime);
    self.y = math.lerp(self.y, playerY + self.cursor.diff.y, deltaTime);
    local centerX, centerY = screenW/2, screenH/2;
    local mapX, mapY, mapSize = centerX - self.x * mapScale, centerY - self.y * mapScale, screenH * self.zoom.current;
   
    dxDrawImage(mapX, mapY, mapSize, mapSize, mapTexture, 0, 0, 0, tocolor(255, 255, 255, self.openAnimation.mapAlpha));
   

    if ( self.path.enabled ) then
     local needUpdate = false;
     for i = 1, #self.path.nodes, 1 do
       local current = self.path.nodes[i];
       if ( i == 1 and getTickCount()-self.path.lastUpdate > path.updateTime and getDist2D(current[1], current[2], localPlayer.position.x, localPlayer.position.y) > path.updateDistance ) then
         needUpdate = true;
       end
       local next = self.path.nodes[i + 1];
       if ( next ) then
         local startX, startY = convertToMapPosition(mapX, mapY, mapScale, current[1], current[2], 5, factorScale);
         local endX, endY = convertToMapPosition(mapX, mapY, mapScale, next[1], next[2], 5, factorScale);
         dxDrawLine(startX, startY, endX, endY, tocolor(lineColor.r, lineColor.g, lineColor.b, self.openAnimation.contentAlpha), 5);
       end
     end
     if ( needUpdate ) then
       calculatePathByCoord(localPlayer.position.x, localPlayer.position.y, localPlayer.position.z, self.path.nodes[#self.path.nodes][1], self.path.nodes[#self.path.nodes][2], 0, function (nodes) 
        if ( nodes ) then
            self.path.nodes = nodes;
          end
       end);   

       self.path.lastUpdate = getTickCount();
     end
    end



    local blipQty = {};
    local indexCount = 0;
    local linksDrawed = {};
    for i, blip in ipairs(getAllElements("blip", root, true)) do
     if ( imports.blips:isBlip(blip) ) then
       local name = imports.blips:getBlipName(blip);
       local blipInstance = self.blipCache[blip];
       local linkInstance = self.linkCache[name];
       if ( not blipInstance ) then
         local icon = imports.blips:getBlipIcon(blip);
         local qty = blipQty[name] or 1;
         blipQty[name] = qty + 1;
         self.blipCache[blip] = Blips(name, icon, imports.blips:getBlipColor(blip), blipSize);

         blipInstance = self.blipCache[blip];
         local blipX, blipY = convert(blip.position.x, blip.position.y, factorScale);
         blipInstance:onClick(function()
           self.cursor.diff.x, self.cursor.diff.y = blipX - playerX, blipY - playerY;
         end);
         if ( not linkInstance ) then
           self.linkCache[name] = Link(indexCount, name, icon, qty, respo(20));
           indexCount = indexCount + 1;
           linkInstance = self.linkCache[name];
           linkInstance:onClick(function()
             self.cursor.diff.x, self.cursor.diff.y = blipX - playerX, blipY - playerY;
           end);
         else
           linkInstance:setQty(qty);
         end
       end
       local canInteract = self.openAnimation.enabled == false;
       local blipX, blipY = convertToMapPosition(mapX, mapY, mapScale, blip.position.x, blip.position.y, blipSize, factorScale);
       if ( isBoxInPosition(blipX, blipY, blipSize, blipSize, 0, 0, screenW, screenH, blipSize) ) then
         blipInstance:render(i, blipX, blipY, self.openAnimation.contentAlpha, canInteract);
       end
       if ( not linksDrawed[name] ) then
         linksDrawed[name] = true;
         linkInstance:render(i, linkX, linkY, blipX, blipY, self.openAnimation.contentAlpha, canInteract);
       end
     end
    end
    
    local arrowX, arrowY = toMapPosition(mapX, mapY, mapScale, playerX, playerY, blipSize, factorScale);
    dxDrawImage(arrowX, arrowY, blipSize, blipSize, arrowTexture, -playerRot);
    
    if ( getKeyState("mouse1") ) then
        local cx, cy = getCursorAbsolutePosition();
        if (self.cursor.state == false) then
            self.cursor.state = true;
            self.cursor.last.x, self.cursor.last.y = cx, cy;
        else
            self.cursor.diff.x, self.cursor.diff.y = self.cursor.diff.x + self.cursor.last.x - cx, self.cursor.diff.y + self.cursor.last.y - cy;
            self.cursor.last.x, self.cursor.last.y = cx, cy;
        end
    elseif ( self.cursor.state == true ) then
        self.cursor.state = false;
        self.cursor.clamping = true;
        if ( self.cursor.tick and getTickCount()-self.cursor.tick < 250 ) then
            self.cursor.count = self.cursor.count+1;
        else
            self.cursor.count = 1;
        end
        if ( self.cursor.count == 2 ) then
            self.cursor.count = 0;
            self.cursor.tick = nil;
            if ( self.path.enabled == false ) then
                local cx, cy = getCursorAbsolutePosition();
                local wX, wY = convertToWorldPosition(cx, cy, mapX, mapY, mapSize);

                calculatePathByCoord(localPlayer.position.x, localPlayer.position.y, localPlayer.position.z,  wX, wY, 0, function (nodes) 
                    if ( nodes ) then
                        self.path.enabled = true;
                        self.path.nodes = nodes;
                        self.path.lastUpdate = getTickCount();
                        self.path.blip = imports.blips:createBlip(nodes[#nodes][1], nodes[#nodes][2], nodes[#nodes][3], "Destino", "pin", blipColor);
                    end
                end);
            else
                self.path.enabled = false;
                self.path.nodes = nil;
                self.path.lastUpdate = nil;
                imports.blips:destroyBlip(self.path.blip);
                self.path.blip = nil;
            end
        else
            self.cursor.tick = getTickCount();
        end
    end

    if ( self.cursor.clamping ) then
        self.cursor.clamping = false;
        local realMapX, realMapY, realMapSize = centerX - (playerX + self.cursor.diff.x) * mapScale, centerY - (playerY + self.cursor.diff.y) * mapScale, screenH * self.zoom.target;
        local mapCenterX, mapCenterY = realMapX + realMapSize/2, realMapY + realMapSize/2;
        if ( not isPointInPosition(mapCenterX, mapCenterY, 0, 0, screenW, screenH) ) then
          self.cursor.diff.x = math.clamp(self.cursor.diff.x, self.cursor.diff.x + ( (mapCenterX - 1920)/mapScale ), self.cursor.diff.x + (mapCenterX / mapScale));
          self.cursor.diff.y = math.clamp(self.cursor.diff.y, self.cursor.diff.y + ( (mapCenterY - 1080)/mapScale ), self.cursor.diff.y + (mapCenterY / mapScale));
        end
    end
end



function Map:isVisible ()
    return self.visible == true;
end

function Map:hide () 
    if ( self.visible  ==  true ) then    
        self.visible = false;
        self.blipCache = {};
        self.linkCache = {};
        imports.blur:setBlurBoxEnabled(blurBox, false);
        self.openAnimation.enabled = false;
    end
end


function Map:show () 
    if ( self.visible  ==  false ) then    
        self.x, self.y = convert(localPlayer.position.x, localPlayer.position.y, factorScale);
        self.cursor.diff.x, self.cursor.diff.y = 0, -100;
        self.cursor.last.x, self.cursor.last.y = 0, 0;
        self.cursor.clamping = true;
        self.current, self.target = initZoom, initZoom;
        self.openAnimation.tick = getTickCount();
        self.openAnimation.blurIntensity = 0;
        self.openAnimation.backgroundAlpha = 0;
        self.openAnimation.mapAlpha = 0;
        self.openAnimation.contentAlpha = 0;
        self.openAnimation.enabled = true;
        self.openAnimation.step = 0;
        self.cursor.state = false;
        self.cursor.tick = nil;
        self.cursor.count = 0;
        
        imports.blur:setBlurBoxEnabled(blurBox, true);
        self.visible = true;
    end
end

function Map:increaseZoom (increment)
    self.zoom.target = math.min(self.zoom.target + increment, 2);
end

function Map:decreaseZoom (decrement)
    self.zoom.target = math.max(self.zoom.target - decrement, 1);
end