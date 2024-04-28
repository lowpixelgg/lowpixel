local radio = class:create("radio");


function radio.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end


function radio.public:load(vehicle) 
    local isPlayingMusic = getElementData(source, "_radio.url");

    self.vehicle = vehicle;
    self.isPlayingURL = isPlayingMusic or nil
    self.camera = getCamera();

    if (self.isPlayingURL) then
        self.sound = playSound(self.isPlayingURL, false, true);
    end

    return self;
end


function radio.public:play()
    local isPlayingMusic = getElementData(self.vehicle, "_radio.url");

    self.isPlayingURL = isPlayingMusic or nil

    if (self.isPlayingURL) then
        if (isElement(self.sound)) then 
            stopSound(self.sound);
            self.sound = nil;
        end

        self.sound = playSound(self.isPlayingURL, false, true);
    end
end


function radio.public:stop() 
    if (isElement(self.sound)) then 
        stopSound(self.sound);
    end

    self.sound = nil;
    self.isPlayingURL = nil;
    setElementData(self.vehicle, "_radio.url", nil);

    return true;
end


function radio.public:isVehicleDoorsOpen() 
    for i=0, 5 do 
        if (getVehicleDoorOpenRatio( self.vehicle, i ) > 0) then
            return true;
        end
    end

    return false;
end


function radio.public:update()
    if (not isElement(self.sound) and self.isPlayingURL) then 
        self:stop();
        
        return;
    end

    if (not self.isPlayingURL) then return false end

    if (not isPedInVehicle(localPlayer)) then 
        local x, y, z = getElementPosition(self.vehicle);
        local px, py, pz = getElementPosition(localPlayer);
        local camera = self.camera;
        local cameraPosition = camera.matrix:getPosition();
        local screenWidth, _ = guiGetScreenSize();

        local diffX = x - (cameraPosition.x);
        local normalizedDiffX = (diffX / 1);
        local pan = normalizedDiffX * 1 - 1;
        
        setSoundPanningEnabled(self.sound, true);
        setSoundPan(self.sound, diffX);

        if (not isPedInVehicle(localPlayer) and self:isVehicleDoorsOpen()) then 
            setSoundEffectEnabled (self.sound, "i3dl2reverb", true);

            setSoundEffectParameter (self.sound, "i3dl2reverb", "room", -1000);
            setSoundEffectParameter (self.sound, "i3dl2reverb", "roomHF", -100);
            setSoundEffectParameter (self.sound, "i3dl2reverb", "roomRolloffFactor", 0);
            setSoundEffectParameter (self.sound, "i3dl2reverb", "HFReference", 5000);
            setSoundEffectParameter (self.sound, "i3dl2reverb", "reverb", 200);
        elseif (not isPedInVehicle(localPlayer) and not self:isVehicleDoorsOpen()) then
            setSoundEffectEnabled (self.sound, "i3dl2reverb", true);
            
            setSoundEffectEnabled (self.sound, "i3dl2reverb", true);
            setSoundEffectParameter (self.sound, "i3dl2reverb", "room", -1000);
            setSoundEffectParameter (self.sound, "i3dl2reverb", "roomHF", -1000);
            setSoundEffectParameter (self.sound, "i3dl2reverb", "roomRolloffFactor", 10);
            setSoundEffectParameter (self.sound, "i3dl2reverb", "HFReference", 500);
            setSoundEffectParameter (self.sound, "i3dl2reverb", "reverb", 400);
        end  

        local distance = getDistanceBetweenPoints3D(x, y, z, px, py, pz)
        distance = math.max(0, 1.1 - (distance / 80))
            
        setSoundVolume(self.sound, distance);
    else
        setSoundVolume(self.sound, 0.5);
        setSoundEffectEnabled (self.sound, "i3dl2reverb", false);
        setSoundPan(self.sound, 0.5);
    end
end


function radio.public:destroy() 
    if (isElement() and self.sound) then 
        stopSound(self.sound);
        destroyElement(self.sound);
    end
    self:destroyInstance();
end