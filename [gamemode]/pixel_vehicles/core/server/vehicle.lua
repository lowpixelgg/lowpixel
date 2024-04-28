local imports = {
    core = exports.pixel_core,
    createVehicle = createVehicle
};


local vehicles = class:create("vehicles");


function vehicles.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end



function vehicles.public:load (vehId, color, damage, fuel, stickers, model, numberplate) 
    self._id = vehId;
    self.color = {255, 255, 255};
    self.damage = damage or 0;
    self.fuel = fuel or 100;
    self.locked = false;
    self.model = model or nil;
    self.stickers = stickers or {};
    self.numberplate = numberplate or numberplate;
    
    return self;
end

function vehicles.public:deploy(character, model) 
    local create = imports.core:createVehicle(character, chest_id, numberplate, stickers, model);

    if create then 
        self._id = create;
    end

    return self;
end

function vehicles.public:fetch() 
    local data = imports.core:findVehicleByID(self._id);
    
    if (data) then 
        self.character = data.character;
        self.chest_id = data.chest_id;
        self.damage = data.damage;
        self.locked = true;
        self.fuel = data.fuel;
        self.model = data.model;
        self.numberplate = data.numberplate;
        self.color = fromJSON(data.color);
        self.stickers = data.stickers;
        self.parking_id = data.parking_id;
        self.engine = false;
    
        return self;
    end

    return false;
end

function vehicles.public:getEngineState() 
    if (not self.element) then return false end
    return self.engine;
end

function vehicles.public:setEngineState(state) 
    if (not self.element) then return false end
    self.engine = state;
    return setVehicleEngineState(self.element, state);
end


function vehicles.public:setFuel(fuel) 
    if (not self.element) then return false end
    self.fuel = fuel;
    return setElementData(self.element, "fuel", fuel);
end


function vehicles.public:setVehicleLocked(state) 
    if (not self.element) then return false end
    self.locked = state;
    return setVehicleLocked(self.element, state);
end

function vehicles.public:getVehicleLockState() 
    if (not self.element) then return false end
    return self.locked;
end


function vehicles.public:getFuel () 
    if (not self.element) then return false end
    return self.fuel;
end

function vehicles.public:getDamage () 
    if (not self.element) then return false end
    return self.damage;
end

function vehicles.public:setDamage (damage)
    if (not self.element) then return false end
    self.damage = damage;

    setElementHealth(self.element, damage);
    setElementData(self.element, "damage", damage)
end

function vehicles.public:getColor () 
    return self.color;
end

function vehicles.public:getDamage ()
    return self.damage;
end

function vehicles.public:getFuel () 
    return self.fuel;
end

function vehicles.public:getModel () 
    return self.model;
end


function vehicles.public:getStickers ()
    return self.stickers;
end


function vehicles.public:getElement () 
    return self.element or nil;
end


function vehicles.public:spawn(position, rotation) 
    local color = self:getColor();
    local damage = self:getDamage();
    local fuel = self:getFuel();
    local model = self:getModel();

    self.element = imports.createVehicle(tonumber(model), position.x, position.y, position.z, rotation.x, rotation.y, rotation.z);

    setElementHealth(self.element, damage);
    setVehicleColor(self.element, color[1], color[2], color[3]);
    self:setVehicleLocked(true);
    self.heartbeat = thread:createHeartbeat(function ()  
        if not self.engine then
            self:setEngineState(false)
        end
        local health = self:getDamage();
        if (health <= 500) then
            self:setDamage(250);
            self:setEngineState(false);
        else
            local velocity = getElementVelocity(self.element);
            local isRunning = velocity and velocity > 0.0;
            -- 
            if self.engine and self:getFuel() > 0 then
                local fuelConsumption = isRunning and 0.60 or 0.001;
                self:setFuel(self:getFuel() - fuelConsumption);
            else
                self:setEngineState(false);
            end
        end

        self:setDamage(getElementHealth(self.element));
        return true end, 
    function () end, 500)

    element:set(self.element, self);
    -- Setup Chest-Storage
    exports.pixel_inv:registerChest(self._id, "Veiculo", 3, false);
end



function vehicles.public:saveAndDestroy()
    if not vehicles.public:isInstance(self) then return false end
    
    local save = imports.core:saveVehicle(element:get(self.element));
    
    if (save) then 
        self.heartbeat:destroy();
        self:destroyInstance();
        destroyElement(self.element);

        return true;
    end

    return false;
end