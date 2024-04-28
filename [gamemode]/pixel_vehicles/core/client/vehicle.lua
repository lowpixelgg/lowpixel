local imports = {
    widgets = exports.pixel_widgets
};

local vehicle = class:create("vehicle");
local textures = {
    lockTexture = dxCreateTexture("assets/car_lock.png"),
    chestTexture = dxCreateTexture("assets/car_storage.png"),
}

function vehicle.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end



function vehicle.public:load(source) 
    self.vehicle = source;
    -- self.actions = actions:create(source);
    self.components = components:create(source);
    -- self.lights = lights:create(source);
    -- self.radio = radio:create(source);
    self.numberplate = numberplate:setupNumberPlate(source);
    self.vehicleId = getElementData(source, "_id");
    self.widgets = {
        ["lock_widget"] = imports.widgets:createWidget(self.vehicleId.."_lock_widget", {
            variant = "click",
            name = self.vehicleId,
            network = "pixel_vehicles:onWidgetReady",
            autoRendering = false,
            maxDistance = 5,
            icon = textures.lockTexture,
        }),
    };
    return self
end



function vehicle.public:update() 
    if (isPedInVehicle(localPlayer)) then 
        self.components:update();
    end

    local x,y,z = getElementPosition(self.vehicle)
    local px, py, pz = getElementPosition(localPlayer);
    local cx, cy = getScreenFromWorldPosition(x,y,z)

    if (not isPedInVehicle(localPlayer)) then 
        if (cx and cy) then 
            local px, py, pz = getElementPosition(localPlayer);
            local distance = getDistanceBetweenPoints3D( x,y,z, px, py, pz);
      
            if (math.floor(distance) > 1.5) then return false end
    
            for id, widget in pairs(self.widgets) do 
                imports.widgets:setWidgetPosition(self.vehicleId.."_"..id, Vector3(x, y, z));
                imports.widgets:renderWidget(self.vehicleId.."_"..id);
            end
        end
    end
end


function vehicle.public:onClick(...) 
    -- self.actions:onClick(...);
end


function vehicle.public:destroy() 
    -- self.components:destroy();
    -- self.actions:destroy();
    -- self.lights:destroy();
    -- self.radio:destroy();
    self:destroyInstance();
end