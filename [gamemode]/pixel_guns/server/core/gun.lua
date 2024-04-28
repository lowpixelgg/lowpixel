local imports = {
    core = exports.pixel_core,
    inventory = exports.pixel_inv
};

local gun = class:create('gun');

local iMeta = imports.core:getItemsMeta();
local wMeta = imports.core:getWeaponsMeta();


function gun.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end



function gun.public:load (player, data)
    self.player = player;
    self.item = data;
    self.iMeta = iMeta[data.name];
    self.wMeta = wMeta[self.iMeta.settings.gunId];

    self.weapon = giveWeapon( player, self.iMeta.settings.gunId, 1, true);
    
    -- has mag clip?
    self.clip = imports.inventory:getSubItemsAt(player, self.item._id)[1];

    if (self.clip) then 
        local amount = #imports.inventory:getSubItemsAt(player, self.clip._id);
        if (amount < 1) then return false end
        
        setWeaponAmmo(self.player, self.iMeta.settings.gunId, amount + 1, amount);
    end

    setElementData(player, 'WeaponData', {
        weapon_id = self.iMeta.settings.gunId,
        skin = 'default',
        -- props = { math.random(0, 1) == 1 and 'redDot' or nil, math.random(0, 1) == 1 and 'silencer556' or nil }
    });
    
    if (getPedAmmoInClip(self.player) < 2) then 
        toggleControl(self.player, 'fire', false);
        toggleControl(self.player, 'action', false);
    end
        
    setElementData(self.player, "guns:id", self.item._id);
    return self;
end


function gun.public:reload ()
    local item, subItems = imports.inventory:getItemById(self.player, self.item._id, true);
    
    if (#subItems > 0) then
        -- has mag clip?
        self.clip = imports.inventory:getSubItemsAt(self.player, self.item._id)[1];

        if (self.clip) then 
            local amount = #imports.inventory:getSubItemsAt(self.player, self.clip._id);
            if (amount < 1) then return false end
            
            setWeaponAmmo(self.player, self.iMeta.settings.gunId, amount + 1, amount);
        end
        
        if (getPedAmmoInClip(self.player) > 2) then 
            toggleControl(self.player, 'fire', true);
            toggleControl(self.player, 'action', true);
        end
    end
end


function gun.public:updateClip () 
    local item, subItems = imports.inventory:getItemById(self.player, self.item._id, true);

    if (#subItems == 0) then 
        setWeaponAmmo(self.player, self.iMeta.settings.gunId, 2, 1);
    end
end

function gun.public:onWeaponFire () 
    if (getPedTotalAmmo(self.player) == 2) then 
        toggleControl(self.player, 'fire', false);
        toggleControl(self.player, 'action', false);
    end

    if (getPedTotalAmmo(self.player) > 1) then
        if (self.clip) then 
            local amount = imports.inventory:getSubItemsAt(self.player, self.clip._id);
            imports.inventory:takePlayerItemById(self.player, amount[#amount]._id);
        end
    end
end

function gun.public:getAmmoInClip ()
    return getWeaponAmmo(self.iMeta.settings.gunId);
end


function gun.public:getWeaponName ()
    return self.item.name;
end


function gun.public:destroy () 
    setElementData(self.player, 'WeaponData', nil);
    setElementData(self.player, "guns:id", nil);

    if (getPedWeaponSlot(self.player) == 0) then
        toggleControl(self.player, 'fire', true);
        toggleControl(self.player, 'action', true);
    end

    self:destroyInstance();
end