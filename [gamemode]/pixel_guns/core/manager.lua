local imports = {
    isElement = isElement,
    destroyElement = destroyElement,
    getElementType = getElementType,
    getElementData = getElementData,

    dxCreateTexture = dxCreateTexture,
    dxSetShaderValue = dxSetShaderValue
};

local manager = class:create('manager');

manager.public.entities = { };

manager.public.skin_shaders = { };

function manager.public:onElementStreamIn(entity_element)
    self:loadEntity(entity_element);
end

function manager.public:onElementStreamOut(entity_element)
    if(not entity:isValidEntity(entity_element)) then return end;

    local entityInstance = self:get(entity_element);
    if(not entityInstance) then return false end;

    self:unregister(entity_element);
end

function manager.public:onElementDestroy(entity_element)
    local entityInstance = self:get(entity_element);
    if(not entityInstance) then return false end;

    self:unregister(entity_element);
end

function manager.public:onElementDataChange(entity_element, element_key, old_data, new_data)
    if(element_key ~= 'WeaponData') then return end;
    if(not isElementStreamedIn(entity_element)) then return end;

    self:loadEntity(entity_element);
end

function manager.public:get(entity_element)
    return self.entities[entity_element];
end

function manager.public:register(entity_element)
    local existingEntity = self:get(entity_element);
    if(existingEntity) then return existingEntity end;
    
    local entityInstance = entity:create(entity_element);
    if(not entityInstance) then return false end;

    self.entities[entity_element] = entityInstance;
    return self:get(entity_element);
end

function manager.public:unregister(entity_element)
    local entityInstance = self:get(entity_element);
    if(not entityInstance) then return false end;
    
    self.entities[entity_element] = nil;
    entityInstance:destroy();

    return true;
end

function manager.public:loadEntity(entity_element)
    if(not entity:isValidEntity(entity_element)) then return end;
    local entityData = imports.getElementData(entity_element, 'WeaponData');

    local existingEntity = self:get(entity_element);

    if(not entityData) then
        if(existingEntity) then
            self:unregister(entity_element);
        end

        return;
    end

    local entityInstance = existingEntity or self:register(entity_element);
    if(not entityInstance) then return end;

    if(entityData.weapon_id) then
        entityInstance:setWeapon(entityData.weapon_id);
    end

    local weaponInstance = entityInstance:getWeapon();

    if(weaponInstance) then
        if(entityData.skin) then
            weaponInstance:setSkin(entityData.skin);
        end

        if(entityData.props) then
            for _, prop_name in pairs(entityData.props) do
                weaponInstance:addProp(prop_name);
            end
        end
    end
end

function manager.public:getSkinShader(skins_folder, skin_name, texture_name)
    local texture_path = skins_folder .. '/' .. skin_name .. '/' .. texture_name .. '.png';
    if(self.skin_shaders[texture_path]) then
        return self.skin_shaders[texture_path];
    end

    local newSkinTexture = imports.dxCreateTexture('assets/skins/' .. texture_path);
    if(not newSkinTexture) then return false end;

    local newSkinShader = exports.pixel_assets:useCreateShader('tex_replace');
    if(not imports.isElement(newSkinShader)) then 
        imports.destroyElement(newSkinTexture);
        return;
    end

    imports.dxSetShaderValue(newSkinShader, 'Tex0', newSkinTexture);

    self.skin_shaders[texture_path] = newSkinShader;
    return self.skin_shaders[texture_path];
end
