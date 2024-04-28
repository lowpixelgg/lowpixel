local imports = {
    markers = exports.custom_markers,
}

local manager = class:create("manager");


function manager.public:create(...)
    local instance = self:createInstance()
    
    if instance and not instance:load(...) then
        instance:destroyInstance()
        return false
    end
    
    return instance
end


function manager.public:load(id, props)
    self.id = id
    self.name = props.name or ""
    self.categories = props.categorieString or ""
    self.vehicles = {}
    self.leavepoint = props.leave;


    for k,v in ipairs(props.availableVehicles) do
        local pos = v.position;
        local rot = v.rotation;

        local veh = createVehicle(v.id, pos.x, pos.y, pos.z, rot.x, rot.y, rot.z)

        setElementFrozen(veh, true);
        setElementHealth(veh, 99999);
        setVehicleDamageProof(veh, true);
        setVehicleLocked(veh, true);
        setVehicleColor(veh, unpack({ math.random(1,255), math.random(1,255), math.random(1,255) }));
        setElementData(veh, "conce_vehicle", true);

        self.vehicles[k] = veh
    end
    
    
    self.color = props.color;
    self.entrypoint = imports.markers:createCustomMarker(props.join.x, props.join.y, props.join.z-1, "cylinder", 2, 169, 178, 222);
    setElementData(self.entrypoint, "id", self.id);
    

    return true
end

function manager.public:getEntryPoint() 
    return self.entrypoint
end

function manager.public:getVehicle(id) 
    return self.vehicles[id]
end