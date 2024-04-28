local imports = {
    isElement = isElement,
    destroyElement = destroyElement,
    core = exports.pixel_core,
    createWeapon = createWeapon,
    getWeaponNameFromID = getWeaponNameFromID
};

local weapon = class:create('weapon');
local weaponsMeta = imports.core:getWeaponsMeta()

local weaponSkinQueue = thread:createQueue(function(threadSelf, item_key, item_value)
    return promise(function(resolve)
        local actualElement = item_value[1]:get();

        for _, textureName in pairs(item_value[2].textures) do
            if(imports.isElement(actualElement)) then
                local oldShaderElement = item_value[1].shaders[textureName];
                local shaderElement = manager:getSkinShader(item_value[2].skins_folder, item_value[3], textureName);

                if(oldShaderElement) then
                    engineRemoveShaderFromWorldTexture(oldShaderElement, textureName, actualElement);
                end

                engineApplyShaderToWorldTexture(shaderElement, textureName, actualElement);

                item_value[1].shaders[textureName] = shaderElement;

                threadSelf:sleep(100);
            end
        end

        return resolve(true);
    end);
end, 250);

function weapon.public:create(entity_instance)
    if(weapon.public:isInstance(self)) then return false end;

    local instance = self:createInstance();

    instance.entity = entity_instance;

    instance.id = 0;
    instance.element = nil;
    instance.props = { };
    instance.shaders = { };

    return instance;
end

function weapon.public:destroy()
    if(not weapon.public:isInstance(self)) then return false end;

    self:resetProps();

    local actualElement = self:get();
    if(imports.isElement(actualElement)) then
        imports.destroyElement(actualElement);
    end


    self:destroyInstance();

    return true;
end

function weapon.public:get()
    if(not weapon.public:isInstance(self)) then return false end;

    return self.element;
end

function weapon.public:set(weapon_id)
    if(not weapon.public:isInstance(self)) then return false end;

    local actualWeaponId = self:getId();
    if(weapon_id == actualWeaponId) then
        self:setSkin('default');
        self:resetProps();

        return true;
    end

    local weaponName = imports.getWeaponNameFromID(weapon_id);
    local newWeapon = imports.createWeapon(weaponName, 0, 0, 0);

    local oldWeapon = self:get();

    self:resetProps();

    self.id = weapon_id;
    self.element = newWeapon;

    if(imports.isElement(oldWeapon)) then
        imports.destroyElement(oldWeapon);
    end

    local entityInstance = self:getEntity();

    exports.pAttach:attach(self.element, entityInstance:get(), 'weapon');

    self:setSkin('default');

    return true;
end

function weapon.public:getId()
    if(not weapon.public:isInstance(self)) then return false end;

    return self.id;
end

function weapon.public:getEntity()
    if(not weapon.public:isInstance(self)) then return false end;

    return self.entity;
end

function weapon.public:setSkin(skin_name)
    if(not weapon.public:isInstance(self)) then return false end;

    local weaponMeta = weaponsMeta[self:getId()];
    if((not weaponMeta) and (not weaponMeta.skins)) then return false end;

    if((not weaponMeta.skins[skin_name]) or (not weaponMeta.skins_folder)) then return false end;

    weaponSkinQueue:add(tostring(self:getEntity():get()), { self, weaponMeta, skin_name });

    return true;
end

function weapon.public:getProp(prop_name)
    if(not weapon.public:isInstance(self)) then return false end;

    return self.props[prop_name];
end

function weapon.public:addProp(prop_name)
    if(not weapon.public:isInstance(self)) then return false end;

    local existingProp = self:getProp(prop_name);
    if(existingProp) then return existingProp end;

    local propInstance = prop:create(self, prop_name);
    if(not propInstance) then return false end;

    self.props[prop_name] = propInstance;
    return self:getProp(prop_name);
end

function weapon.public:removeProp(prop_name)
    if(not weapon.public:isInstance(self)) then return false end;

    local propInstance = self:getProp(prop_name);
    if(not propInstance) then return false end;

    propInstance:destroy();
    self.props[prop_name] = nil;

    return true;
end

function weapon.public:resetProps()
    if(not weapon.public:isInstance(self)) then return false end;

    for prop_name, prop_instance in pairs(self.props) do
        self.props[prop_name] = nil;

        prop_instance:destroy();
    end

    return true;
end
