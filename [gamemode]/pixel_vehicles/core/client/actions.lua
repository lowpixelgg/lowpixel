local imports = {
    widgets = exports.pixel_ui,
};

local actions = class:create("actions");


function actions.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end 


function actions.public:load(vehicle)
    self.vehicle = vehicle;
    self.vehicleId = getElementData(self.vehicle, "_id");
    self.buttons = {
        {
            component = "windscreen_dummy",
            widget = imports.widgets:createUI("tooltip", "click", "lock_"..self.vehicleId, "car_lock", 30, 30, "pixel_vehicles:onActionClick")
        },
        {
            component = "boot_dummy",
            widget = imports.widgets:createUI("tooltip", "click", "chest_"..self.vehicleId, "car_storage", 30, 30, "pixel_vehicles:onActionClick")
        }
    }
    
    
    return self;
end


function actions.public:update()
    for componentIndex, widget in ipairs(self.buttons) do
        if (not isPedInVehicle(localPlayer)) then
            
            local cx, cy, cz = getVehicleComponentPosition(self.vehicle, widget.component, "world");
            local x,y = getScreenFromWorldPosition(cx, cy, cz, 0, false);
            local px, py, pz = getElementPosition(localPlayer);
            local distance = getDistanceBetweenPoints3D(px, py, pz, cx, cy, cz);  
            
            
            if (x and y) then 
                if (math.floor(distance) <= 1) then
                    imports.widgets:setTransform(widget.widget, x, y);
                    
                    imports.widgets:setVisible(widget.widget, true);
                else
                    imports.widgets:setVisible(widget.widget, false);
                end 
            else
                imports.widgets:setVisible(widget.widget, false);
            end
        else
            imports.widgets:setVisible(widget.widget, false);
        end
    end
end

function actions.public:destroy() 
    self:destroyInstance();
end