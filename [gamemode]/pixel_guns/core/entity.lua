local imports = {
    isElement = isElement,
    getElementType = getElementType
};

local entity = class:create('entity');

function entity.public:create(entity_element)
    if(entity.public:isInstance(self)) then return false end;

    if(not self:isValidEntity(entity_element)) then return false end;

    local instance = self:createInstance();

    instance.entity = entity_element;
    instance.weapon = nil;

    return instance;
end

function entity.public:destroy()
    if(not entity.public:isInstance(self)) then return false end;

    if(self.weapon) then
        self.weapon:destroy();
    end

    self:destroyInstance();

    return true;
end

function entity.public:isValidEntity(entity_element)
    if(
        (not imports.isElement(entity_element))
        or (
            imports.getElementType(entity_element) ~= 'player'
            and imports.getElementType(entity_element) ~= 'ped'
        )
    ) then return false end;

    return true;
end

function entity.public:get()
    if(not entity.public:isInstance(self)) then return false end;

    return self.entity;
end

function entity.public:getWeapon()
    if(not entity.public:isInstance(self)) then return false end;

    return self.weapon;
end

function entity.public:setWeapon(weapon_id)
    if(not entity.public:isInstance(self)) then return false end;

    local weaponInstance = self:getWeapon() or weapon:create(self);
    if(not weaponInstance) then return false end;

    local weaponInstanceSet = weaponInstance:set(weapon_id);
    if(not weaponInstanceSet) then return false end;

    self.weapon = weaponInstance;
    return self:getWeapon();
end
