Camera = newclass "Camera";

local speed, strafespeed = 0,0;
local rotX, rotY = 0,0;
local mouseFrameDelay = 0;
local sw, sh = guiGetScreenSize ();

local options = {
    invertMouseLook = false,
    mouseSensitivity = 0.15
};


function Camera:init (style, width, height, x, y) 
    self.style = style or "selfie";
    self.width = width or 240;
    self.height = height or 240;
    self.x = x or 0;
    self.y = y or 0;
    self.source = dxCreateScreenSource ( sw, sh );

    if (self.style == "selfie") then 
        setPedAnimation(localPlayer, 'PED', 'gang_gunstand');
    end

    self.doRender = function () 
        self:render();
    end

    self.doMoveMouve = function (...) 
        self:onMouseMove(...);
    end

    addEventHandler ('onClientCursorMove', root, self.doMoveMouve);
    addEventHandler("onClientRender", root, self.doRender);
end

function Camera:render ()
    local PI = math.pi
    
    if (getKeyState ( 'num_4' )) then
        rotX = rotX - options.mouseSensitivity * 0.05745;
    elseif (getKeyState ( 'num_6' )) then
        rotX = rotX + options.mouseSensitivity * 0.05745;
    end
    
    if (getKeyState ( 'num_8' )) then
        rotY = rotY + options.mouseSensitivity * 0.05745;
        rotY = math.clamp ( rotY, -PI / 2.05, PI / 2.05 );
    elseif (getKeyState ( 'num_2' )) then
        rotY = rotY - options.mouseSensitivity * 0.05745;
        rotY = math.clamp ( rotY, -PI / 2.05, PI / 2.05 );
    end
    
    local cameraAngleX = rotX;
    local cameraAngleY = rotY;
    
    local freeModeAngleZ = math.sin(cameraAngleY);
    local freeModeAngleY = math.cos(cameraAngleY) * math.cos(cameraAngleX);
    local freeModeAngleX = math.cos(cameraAngleY) * math.sin(cameraAngleX);
    
    local camPosX, camPosY, camPosZ = getPedBonePosition ( localPlayer, 25 );
    camPosZ = camPosZ + 0.29;
    
    if (rotY < 0 and isPedInVehicle ( localPlayer ) ~= true) then
        local r = getPedRotation ( localPlayer );
        camPosX = camPosX - math.sin ( math.rad(r) ) * (-rotY/4.5);
        camPosY = camPosY + math.cos ( math.rad(r) ) * (-rotY/4.5);
    end
    
    local camTargetX = camPosX + freeModeAngleX * 100;
    local camTargetY = camPosY + freeModeAngleY * 100;
    local camTargetZ = camPosZ + freeModeAngleZ * 100;
    
    local camAngleX = camPosX - camTargetX;
    local camAngleY = camPosY - camTargetY;
    local camAngleZ = 0;
    
    local angleLength = math.sqrt(camAngleX*camAngleX+camAngleY*camAngleY+camAngleZ*camAngleZ);
    
    local camNormalizedAngleX = camAngleX / angleLength;
    local camNormalizedAngleY = camAngleY / angleLength;
    local camNormalizedAngleZ = 0;
    
    local normalAngleX = 0;
    local normalAngleY = 0;
    local normalAngleZ = 1;
    
    local normalX = (camNormalizedAngleY * normalAngleZ - camNormalizedAngleZ * normalAngleY);
    local normalY = (camNormalizedAngleZ * normalAngleX - camNormalizedAngleX * normalAngleZ);
    local normalZ = (camNormalizedAngleX * normalAngleY - camNormalizedAngleY * normalAngleX);
    
    
    camPosX = camPosX + freeModeAngleX * speed;
    camPosY = camPosY + freeModeAngleY * speed;
    camPosZ = camPosZ + freeModeAngleZ * speed;
    
    camPosX = camPosX + normalX * strafespeed;
    camPosY = camPosY + normalY * strafespeed;
    camPosZ = camPosZ + normalZ * strafespeed;
    
    camTargetX = camPosX + freeModeAngleX * 100;
    camTargetY = camPosY + freeModeAngleY * 100;
    camTargetZ = camPosZ + freeModeAngleZ * 100;
    
    if (isPedInVehicle ( localPlayer ) and getKeyState ( 'mouse1' ) ~= true) then
        if getControlState ( 'vehicle_look_behind' ) then
            camTargetX, camTargetY, camTargetZ = getElementOffset ( localPlayer, 0, -3, 0 );
        else
            camTargetX, camTargetY, camTargetZ = getElementOffset ( localPlayer, 0, 3, 0 );
        end
    end
    
    setPedAimTarget ( localPlayer, camTargetX, camTargetY, camTargetZ );
    setCameraMatrix ( camPosX, camPosY, camPosZ, camTargetX, camTargetY, camTargetZ );


    dxUpdateScreenSource( self.source );
    dxDrawImage( self.x, self.y, respo(self.width), respo(self.height), self.source ); 
end


function Camera:onMouseMove ( _, _, aX, aY) 
    if isCursorShowing ( ) or isMTAWindowActive ( ) then
        mouseFrameDelay = 5
        return
    elseif mouseFrameDelay > 0 then
        mouseFrameDelay = mouseFrameDelay - 1
        return
    end
    
    aX = aX - sw / 2 
    aY = aY - sh / 2
    
    if options.invertMouseLook then
        aY = -aY
    end
    
    rotX = rotX + aX * options.mouseSensitivity * 0.01745
    rotY = rotY - aY * options.mouseSensitivity * 0.01745
    
    local PI = math.pi
    if rotX > PI then
        rotX = rotX - 2 * PI
    elseif rotX < -PI then
        rotX = rotX + 2 * PI
    end
    
    if rotY > PI then
        rotY = rotY - 2 * PI
    elseif rotY < -PI then
        rotY = rotY + 2 * PI
    end
    
    rotY = math.clamp ( rotY, -PI / 2.05, PI / 2.05 )
end



function Camera:takePic (fn)
    if (not self.source) then return false end
    

    local rt = dxCreateRenderTarget(respo(self.width), respo(self.height));
    dxSetRenderTarget(rt)
        dxDrawImage(0, 0,  respo(self.width), respo(self.height), self.source ) 
    dxSetRenderTarget()

    local pixels = dxGetTexturePixels(rt);

    if (pixels) then 
        destroyElement(rt);
        pcall(fn, pixels);
        destroyElement(pixels);

        return true;
    end
end


function Camera:destroy () 
   if (self.source) then 
        destroyElement(self.source)
   end

   setPedAnimation(localPlayer, false);

   removeEventHandler ('onClientCursorMove', root, self.doMoveMouve);
   removeEventHandler ("onClientRender", root, self.doRender);

   setCameraTarget(localPlayer);
end

