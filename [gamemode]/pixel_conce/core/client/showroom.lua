local imports = {
    addEventHandler = addEventHandler,
    inventory =  exports.pixel_inv,
}

local showroom = class:create("showroom");


function showroom.public:create(props)
    self.id = props.id
    self.name = props.name or ""
    self.categories = props.categories or ""
    self.vehicles = {}

    for carIndex, car in ipairs(props.vehicles) do 
        self.vehicles[carIndex] = vehicle:create(car)
    end
    return self
end


function showroom.public:getVehicles() 
    return self.vehicles;
end

function showroom.public:enter() 
    fadeCamera(false, 1);

    setTimer(function () 
        self.ui = ConceUI (self);

        fadeCamera(true, 1)
        
        imports.inventory:hideByComplete(true)
    
        self.render = function () 
            self.ui:render();
        end;

        self.onKey = function (...) 
            self.ui:onKey(...);
        end

        self.onClick = function (...) 
            self.ui:onClick(...);
        end

        self.onCursorMove = function (...) 
            self.ui.onCursorMove(...);
        end

        addEventHandler("onClientRender", root, self.render, true, "low");
        addEventHandler("onClientCursorMove", root, self.onCursorMove, true, "low");
        addEventHandler("onClientKey", root, self.onKey, true, "low")
        addEventHandler("onClientClick", root, self.onClick, true, "low");

        self.ui.infocar:setVehicle(self.vehicles[1])
    end, 1000, 1)
end




function showroom.public:exit()
    fadeCamera(false, 1.0);
    self.ui:exit();

    setTimer(function () 
        fadeCamera(true, 1.0);
        setCameraTarget(localPlayer);
        imports.inventory:hideByComplete(false);

        removeEventHandler("onClientRender", root, self.render);
    end, 2000, 1);

    removeEventHandler("onClientCursorMove", root, self.onCursorMove);
    removeEventHandler("onClientKey", root, self.onKey)
    removeEventHandler("onClientClick", root, self.onClick);
end