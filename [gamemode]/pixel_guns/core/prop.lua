local imports = {
    isElement = isElement,
    destroyElement = destroyElement,
    core = exports.pixel_core
};

local prop = class:create('prop');
local propsMeta = imports.core:getPropsMeta()

function prop.public:create(weapon_instance, prop_name)
    if(prop.public:isInstance(self)) then return false end;

    local propMeta = propsMeta[prop_name];
    if(not propMeta) then return false end;

    local propWeaponMeta = propMeta.weapons[weapon_instance:getId()];
    if(not propWeaponMeta) then return false end;

    local instance = self:createInstance();

    instance.name = prop_name;

    instance.parent = weapon_instance;
    instance.object = createObject(propMeta.model_id, 0, 0, 0);
    setElementCollisionsEnabled(instance.object, false);

    exports.pAttach:attach(
        instance.object, weapon_instance:getEntity():get(), 'weapon',
        propWeaponMeta.x, propWeaponMeta.y, propWeaponMeta.z
    );

    return instance;
end

function prop.public:destroy()
    if(not prop.public:isInstance(self)) then return false end;

    if(imports.isElement(self.object)) then
        imports.destroyElement(self.object);
    end

    self:destroyInstance();

    return true;
end

function prop.public:getParent()
    if(not prop.public:isInstance(self)) then return false end;

    return self.parent;
end
