local imports = {
    core = exports.pixel_core,
};


local components = class:create("components");
local start = getTickCount();
local isForward = true;
local isAnimationActive = false;
local startWinds = getTickCount();
local vehicleData =  imports.core:getVehiclesMeta();



function components.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end


function components.public:load(vehicle) 
    self.vehicle = vehicle;

    return self
end


function components.public:update() 
    local data = vehicleData[getElementModel(self.vehicle)]
    if (data) then 
        if (data.components) then 
            for componentName, component in pairs(data.components) do
                self[componentName](self, component)
            end
        end
    end
end


function components.public:wheel (component)
    local now = getTickCount()
    local endTime = start + 5000
    local elapsedTime = now - start
    local duration = endTime - start
    local progress = elapsedTime / duration

    local wx, wy, wz = getVehicleComponentRotation(self.vehicle, component.wheel_attach);
    local sx, sy, sz = getVehicleComponentRotation(self.vehicle, component.component);

    local wheel = interpolateBetween ( 0, 0, 0, -wz*5, 0, 0, progress, "Linear");

    setVehicleComponentRotation(self.vehicle, component.component, 0, wheel, 0);
end


function components.public:speedometer(component)
    local vx, vy, vz = getElementVelocity(self.vehicle)
    local velocity = math.floor(math.sqrt(vx^2 + vy^2 + vz^2) * component.maxAngle)

    setVehicleComponentRotation(self.vehicle, component.component, 0, velocity, 0)
end


function components.public:windshield(component)
    if (getWeather() == 8) then
        if not isAnimationActive then
            isAnimationActive = true;
            startWinds = getTickCount();
        end
        
        local now = getTickCount();
        local elapsedTime = now - startWinds;
        local duration = 900;
        local progress = elapsedTime / duration;
        
        local x, y, z = interpolateBetween(0, 0, 0, 0, component.angleMaxY, component.angleMaxZ, (isForward and progress or 1 - progress), "InOutQuad");
        setVehicleComponentRotation(self.vehicle, component.left, 0, y, z);
        setVehicleComponentRotation(self.vehicle, component.right, 0, y, z);
        
        if elapsedTime >= duration then
            isForward = not isForward;
            startWinds = now;
        end
    else
        if isAnimationActive then
            isAnimationActive = false;
            setVehicleComponentRotation(self.vehicle, component.left, 0, 0, 0);
            setVehicleComponentRotation(self.vehicle, component.right, 0, 0, 0);
        end
    end
end


function components.public:fuel(component)
    local fuel = getElementData(self.vehicle, "fuel") or 0;
    setVehicleComponentRotation(self.vehicle, component.component, 0, (fuel <= component.maxAngle and fuel or component.maxAngle), 0);
end


function components.public:temperature() 
    local temperature = getElementData(self.vehicle, "temperature") or 0;
    setVehicleComponentRotation(self.vehicle, "temperature", 0, 80, 0);
end




function components.public:destroy() 
    self:destroyInstance();
end