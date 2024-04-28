local imports = {
    widgets = exports.pixel_widgets
}

ClientAnimals = {};
ClientAnimals.cache = {};
ClientAnimals.widgets = {};
ClientAnimals.collectTimers = {};

local collecting;

local meta = {
    ["deer"] = {
        [6] = {
            id = "animal_leather",
            name = "Couro"
        },
        [22] = {
            id = "animal_bone",
            name = "Ossos"
        },
        [51] = {
            id = "animal_meat",
            name = "Carne",
        },
    }
}

function ClientAnimals:getAnimal (animalPed)
    if (not isElementStreamedIn(animalPed)) then return false end

    local id = getElementData(animalPed, "hunters:animal_id");
    if (not id) then return false end


    if (not ClientAnimals.cache[id]) then 
        local instance = animal:create(animalPed);
        ClientAnimals.cache[id] = instance;

        return instance;
    end

    return ClientAnimals.cache[id];
end


function ClientAnimals:setAnimalWalkTo (animalPed, isSprint, state, x, y, z)
    local instance = ClientAnimals:getAnimal (animalPed);

    if (instance) then 
        if (state == "eating") then 
            instance:getSense():resetPedControlState();
            return true;
        end
        
        if (instance:getState() ~= state) then 
            instance:getSense().t_Destination = nil;
        end
        
        
        if (instance:getSense().t_Destination == nil) then 
            instance:getSense():setWalk(isSprint);
            instance:getSense():setPedWalkTo(x,y,z);
            
            instance:setState(state);
        end
    end
end



function ClientAnimals:doPulse () 
    thread:createHeartbeat(function () 
        for k, instance in pairs(ClientAnimals.cache) do
            if (isElement(instance:getAnimal()) and isElementStreamedIn(instance:getAnimal())) then 
                instance:getSense():update();
            end
        end
    return true end, function () end, 5000);
end


function ClientAnimals:onPlayerKill (animalId)
    local instance = ClientAnimals.cache[animalId];
    if (not instance) then return false end


    for bone, widget in pairs(meta[instance:getType()]) do   
        local x,y,z = getPedBonePosition(instance:getAnimal(), bone)

        if (not ClientAnimals.widgets[animalId]) then 
            ClientAnimals.widgets[animalId] = {};
        end

        ClientAnimals.widgets[animalId][widget.id] = imports.widgets:createWidget(widget.id, {
            variant = "click",
            name = widget.id,
            text = widget.name,
            network = "pixel_hunter:onClickBone",
            autoRendering = true,
            remote = true,
            maxDistance = 100,
            transport = {
                id = widget.id,
            },
            position = Vector3(x,y,z+1),
        });
        
        ClientAnimals.collectTimers[animalId] = setTimer(function ()
            if (not isElement(instance:getAnimal())) then return false end
            local x,y,z = getPedBonePosition(instance:getAnimal(), bone)
            imports.widgets:setWidgetPosition(widget.id, Vector3(x, y, z));
        end, 1000, 0);
    end
end


function ClientAnimals:onServerStartCollect (collect) 
    ClientAnimals.widgets["collect"] = imports.widgets:createProgress("gas_station", {
        title = "Coletando",
        description = "Você está coletando partes de um animal.",
        esplasedTime = 1000,
        anchor = {"center", "bottom", 0, 100}, 
        network = "pixel_hunter:onClientCollectEnd",
        transport = {
            id = collect,
        },
        remote = true,
    });

    imports.widgets:startProgress("gas_station");
end


function ClientAnimals:onPlayerCollect (data) 
    imports.widgets:destroyWidget(data.transport.id);
end



function ClientAnimals:onServerClean (animalId) 
    ClientAnimals:destroy (animalId)
end


function ClientAnimals:destroy (animalId)
    local instance = ClientAnimals.cache[animalId];
    if (not instance) then return false end

    if (isTimer(ClientAnimals.collectTimers[animalId])) then 
        killTimer(ClientAnimals.collectTimers[animalId]);
    end

    instance:destroy();
    
    if (not ClientAnimals.widgets[animalId]) then return false end
    for widgetId, timer in pairs(ClientAnimals.widgets[animalId]) do 
        imports.widgets:destroyWidget(widgetId);
    end
    
    ClientAnimals.cache[animalId] = nil;
    ClientAnimals.widgets[animalId] = nil;
end