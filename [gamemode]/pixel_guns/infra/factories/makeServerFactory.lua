local imports = {
    core = exports.pixel_core
}

Guns = {};
Guns.cache = {};

local iMeta = imports.core:getItemsMeta();
local wMeta = imports.core:getWeaponsMeta();

function Guns:getWeaponInstance (player, item)
    local meta = iMeta[item.name];
    if (not meta) then return false end

    if (not Guns.cache[player]) then 
        Guns.cache[player] = {};
    end


    if (not Guns.cache[player][item._id]) then 
        Guns.cache[player][item._id] = gun:create(player, item);
    end

    return Guns.cache[player][item._id];
end


function Guns:useItem (player, item)
    local instance = Guns:getWeaponInstance (player, item);
end


function Guns:onHotbarUpdate (player, data)
    local weaponId = getElementData(player, "guns:id");
    if (not weaponId) then return false end 
    
    
    if (not Guns.cache[player]) then
        return false;
    else
        Guns.cache[player][weaponId]:updateClip();
    end
    
    
    local weapon = Guns.cache[player][weaponId];
    if (not weapon) then return false end

    local isItemInHotBar = table.find(data.items, function (v) return v.name == weapon:getWeaponName() end);


    if (isItemInHotBar == nil) then
        takeAllWeapons(player);
        
        weapon:destroy();
        Guns.cache[player][weaponId] = nil;
        
        return;
    end

    
        
    if (data.itemActive and data.itemActive.name ~= weapon:getWeaponName()) then 
        takeAllWeapons(player);
        weapon:destroy();
        Guns.cache[player][weaponId] = nil;
        
        return;
    end
end


function Guns:onPlayerReload (player, gun)
    local weaponId = getElementData(player, "guns:id");
    if (not weaponId) then return false end 

    local weapon = Guns.cache[player][weaponId];

    if (not weapon) then return false end

    weapon:reload()
end



function Guns:onWeaponFire (player, ...) 
    local weaponId = getElementData(player, "guns:id");
    if (not weaponId) then return false end 
    
    local weapon = Guns.cache[player][weaponId];
    if (not weapon) then return false end

    weapon:onWeaponFire();
end