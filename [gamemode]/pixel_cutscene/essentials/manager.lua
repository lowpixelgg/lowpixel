local imports = {
    getTickCount = getTickCount,

    addEventHandler = addEventHandler,
    removeEventHandler = removeEventHandler,

    setCameraTarget = setCameraTarget,

    isElement = isElement,
    destroyElement = destroyElement,
    setElementAlpha = setElementAlpha,
    getElementPosition = getElementPosition,
    setElementPosition = setElementPosition,
    setElementRotation = setElementRotation,
    setElementFrozen = setElementFrozen,
    setElementDimension= setElementDimension,

    createVehicle = createVehicle,
    setVehicleOverrideLights = setVehicleOverrideLights,

    createPed = createPed,
    warpPedIntoVehicle = warpPedIntoVehicle,
    setPedControlState = setPedControlState,


    fadeCamera = fadeCamera
};

local manager = class:create('manager');

manager.public.playing = false;

manager.public.action = 1;
manager.public.sleep = false;

manager.public.dimension = 0;

manager.public.elements = {
    peds = { },
    vehicles = { }
};

manager.public.cutscene = false;

function manager.public:getCutscene()
    return self.cutscene;
end

function manager.public:getCutsceneData(cutscene_name)
    return cutscenes[cutscene_name];
end

function manager.public:isPlaying()
    return self.playing;
end

function manager.public:play(cutscene_name, dimension, vehicle_id)
    if(self.playing) then return false end;

    local cutsceneData = self:getCutsceneData(cutscene_name);
    if(not cutsceneData) then return false end;

    self.playing = true;
    self.cutscene = cutsceneData;
    self.dimension = dimension or 0;

    if(cutsceneData.music) then
        music:play(cutsceneData.music, cutsceneData.music_start);
    end

    imports.setElementFrozen(localPlayer, true);
    imports.setElementDimension(localPlayer, self.dimension);

    if (vehicle_id) then 
        local vehicleData = {
            element = imports.createVehicle(
                vehicle_id,
                0, 0, 0,
                0, 0, 0
            )
        }
    
        imports.setElementDimension(vehicleData.element, manager.public.dimension);
        self.elements.vehicles["main"] = vehicleData;
    end


    imports.addEventHandler('onClientRender', root, self.render);
end

function manager.public:resetElements()
    for elementListName, elementList in pairs(self.elements) do
        for elementName, elementData in pairs(elementList) do
            self.elements[elementListName][elementName] = nil;
            imports.destroyElement(elementData.element);
        end
    end
end

function manager.public:reset()
    self.playing = false;

    music:reset();

    self.action = 1;
    self.sleep = false;

    self.dimension = 0;

    camera:reset();
    screen:reset();

    self:resetElements();

    self.cutscene = false;

    return true;
end

function manager.public:getElement(element_name, element_type)
    if(not element_type) then return false end;

    local elementList = self.elements[element_type];
    if(not elementList) then return false end;

    return elementList[element_name];
end

function manager.public:executeAction(action_data)
    local actualActionName = action_data[1];
    local actualActionData = action_data[2];

    if(actualActionName == 'multiple') then
        for _, subActionData in pairs(actualActionData) do
            self:executeAction(subActionData);
        end
    elseif(actualActionName == 'screen_source') then
        screen:switchSource(not screen:getSource());
    elseif(actualActionName == 'blackbar_switch') then
        screen:switchBlackbar(not screen:getBlackbar(), actualActionData.duration);
    elseif(actualActionName == 'sleep') then
        self.sleep = { start = getTickCount(), duration = actualActionData.duration };
    elseif(actualActionName == 'element_destroy') then
        local elementData = self:getElement(actualActionData.name, actualActionData.type);

        if(elementData) then
            self.elements[actualActionData.type][actualActionData.name] = nil;
            imports.destroyElement(elementData.element);
        end
    elseif(actualActionName == 'element_alpha') then
        local elementData = self:getElement(actualActionData.name, actualActionData.type);

        if(elementData) then
            imports.setElementAlpha(elementData.element, actualActionData.alpha or 0);
        end
    elseif(actualActionName == 'element_position') then
        local elementData = self:getElement(actualActionData.name, actualActionData.type);

        if(elementData) then
            imports.setElementPosition(
                elementData.element,
                actualActionData.position.x, actualActionData.position.y, actualActionData.position.z,
                type(actualActionData.warp) == 'boolean' and actualActionData.warp or true
            );
        end
    elseif(actualActionName == 'element_rotation') then
        local elementData = self:getElement(actualActionData.name, actualActionData.type);

        if(elementData) then
            imports.setElementRotation(
                elementData.element,
                actualActionData.rotation.x, actualActionData.rotation.y, actualActionData.rotation.z
            );
        end
    elseif(actualActionName == 'vehicle_spawn') then
        local vehiclePosition = actualActionData.position:getPosition();
        local vehicleRotation = actualActionData.position:getRotation();

        local vehicleData = {
            element = imports.createVehicle(
                actualActionData.id,
                vehiclePosition.x, vehiclePosition.y, vehiclePosition.z,
                vehicleRotation.x, vehicleRotation.y, vehicleRotation.z
            )
        }

        imports.setElementDimension(vehicleData.element, manager.public.dimension);
        self.elements.vehicles[actualActionData.name] = vehicleData;
    elseif(actualActionName == 'vehicle_light') then
        local vehicleData = self:getElement(actualActionData.name, 'vehicles');

        if(vehicleData) then
            imports.setVehicleOverrideLights(vehicleData.element, actualActionData.state);
        end
    elseif(actualActionName == 'ped_spawn') then
        local pedData = {
            element = imports.createPed(
                actualActionData.id,
                actualActionData.position.x, actualActionData.position.y, actualActionData.position.z,
                (actualActionData.rotation or 0)
            )
        }

        imports.setElementDimension(pedData.element, manager.public.dimension);
        self.elements.peds[actualActionData.name] = pedData;
    elseif(actualActionName == 'ped_control') then
        local pedData = self:getElement(actualActionData.name, 'peds');

        if(pedData and actualActionData.control) then
            imports.setPedControlState(pedData.element, actualActionData.control, actualActionData.state or false);
        end
    elseif(actualActionName == 'ped_wapixel_vehicle') then
        local pedData = self:getElement(actualActionData.name, 'peds');
        local vehicleData = self:getElement(actualActionData.vehicle, 'vehicles');

        if(pedData and vehicleData) then
            imports.warpPedIntoVehicle(pedData.element, vehicleData.element, actualActionData.seat or 0);
        end
    elseif(actualActionName == 'fadein') then
        screen:switchFade(0, actualActionData.duration);
    elseif(actualActionName == 'fadeout') then
        screen:switchFade(255, actualActionData.duration);
    elseif(actualActionName == 'cam_set') then
        camera:setAnimation(false);
        camera:set(actualActionData.position, actualActionData.look, actualActionData.look_type);
    elseif(actualActionName == 'cam_move') then
        camera:move(
            actualActionData.position, actualActionData.duration,
            actualActionData.look, actualActionData.look_type
        );
    end
end

function manager.public:render()
    local cutsceneData = manager.public:getCutscene();

    screen:render();
    camera:render();
    music:render();

    local sleepData = manager.public.sleep;
    if(sleepData and (imports.getTickCount() - sleepData.start) >= sleepData.duration) then
        manager.public.sleep = false;
    end

    -- ===== DEBUG =====
    if(sleepData) then
        dxDrawText('Sleep: ' .. sleepData.duration .. 'ms - ' .. imports.getTickCount() - sleepData.start .. 'ms', 200, 320);
    end
    dxDrawText('Action: ' .. manager.public.action, 200, 340);
    -- ===== ===== =====

    if(not manager.public.sleep) then
        local actualAction = cutsceneData.actions[manager.public.action];

        if(actualAction) then
            local actualActionName = actualAction[1];

            manager.public:executeAction(actualAction);
            manager.public.action = manager.public.action + 1;
        else
            local fadeData = screen:getFade();
            local blackbarData = screen:getBlackbar();

            if(
                (not fadeData or not fadeData.running)
                and ((not blackbarData) or (not blackbarData.running))
            ) then
                if(fadeData and fadeData.actual ~= 0) then
                    camera:setAnimation(false);

                    imports.setElementFrozen(localPlayer, false);
                    imports.setElementDimension(localPlayer, 0);

                    manager.public:resetElements();
                    screen:switchSource(false);
                    
                    imports.fadeCamera(false, 0);
                    screen:switchFade(0, 0);
                else
                    camera:setAnimation(false);

                    manager.public:resetElements();
                    screen:switchSource(false);

              
                    imports.setElementFrozen(localPlayer, false);
                    imports.setElementDimension(localPlayer, 0);

                    imports.removeEventHandler('onClientRender', root, manager.public.render);

                    music:stop();
                    manager.public:reset();

                    network:emit('pixel_cutscene:onClientCutsceneFinished', false);
                end
            end
        end
    end
end
