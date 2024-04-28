local imports = {
    primitive = exports.primitive,
};


local lights = class:create("lights");
lights.public.backFade = 0;
lights.public.frontFade = 0;

function lights.public:create(...) 
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end

function lights.public:load(vehicle)
    self.vehicle  = vehicle or nil;
    
    local bx, by, bz = getVehicleComponentPosition(self.vehicle, "bonnet_dummy", "world");
    local rx, ry, rz = getVehicleComponentPosition(self.vehicle, "boot_dummy", "world");

    local matrix = self.vehicle.matrix;
    local forward = matrix:getForward();
    
    self.frontLights = imports.primitive:createSpotLight(Vector3(bx, by, bz), forward, 50, Vector4(255, 255, 255, 0));
    self.backLights = imports.primitive:createPointLight(Vector3(rx, ry-2, rz), 3, Vector4(255,0,0,0))
    
    return self
end



function lights.public:update() 
    local bx, by, bz = getVehicleComponentPosition(self.vehicle, "bonnet_dummy", "world");
    local rx, ry, rz = getVehicleComponentPosition(self.vehicle, "boot_dummy", "world");


    local matrix = self.vehicle.matrix;
    local forward = matrix:getForward();
    
    imports.primitive:setLightPosition(self.frontLights, bx, by, bz);
    imports.primitive:setLightDirection(self.frontLights, forward.x, forward.y, forward.z);

    imports.primitive:setLightPosition(self.backLights, rx, ry, rz);


    if (getPedControlState(localPlayer, "handbrake") or getPedControlState(localPlayer, "brake_reverse")) then 
        self.backFade = math.min(self.backFade + 5, 100);
    else
        self.backFade = math.max(self.backFade - 5, 0);
    end

    local h,m = getTime();


    if (h >= 0 and h < 6) then 
        self.frontFade = math.min(self.frontFade + 5, 50);
    else
        self.frontFade = math.max(self.frontFade - 5, 0);
    end

    imports.primitive:setLightColor(self.backLights, Vector4(255,0,0, self.backFade));
    imports.primitive:setLightColor(self.frontLights, Vector4(255, 255, 255, self.frontFade));
end



function lights.public:destroy()
    if (self.frontLights and self.backLights) then 
        imports.primitive:destroyShader(self.frontLights);
        imports.primitive:destroyShader(self.backLights);
    end

    self:destroyInstance();
end