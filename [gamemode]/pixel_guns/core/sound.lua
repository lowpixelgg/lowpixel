local imports = {
    pairs = pairs,
    getTickCount = getTickCount,

    addEventHandler = addEventHandler,
    removeEventHandler = removeEventHandler,

    getElementPosition = getElementPosition,
    getDistanceBetweenPoints3D = getDistanceBetweenPoints3D,
    core = exports.pixel_core,
    playSound3D = playSound3D,
    getSoundVolume = getSoundVolume,
    setSoundVolume = setSoundVolume,
    setSoundMaxDistance = setSoundMaxDistance,
    setSoundSpeed = setSoundSpeed
}

local sound = class:create('sound');
local weaponsMeta = imports.core:getWeaponsMeta()

function sound.public:shooting(source, weapon_id)
    local gun = weaponsMeta[weapon_id];
    if(not gun) then return false end;

    local px, py, pz = imports.getElementPosition(source);
    local sx, sy, sz = imports.getElementPosition(localPlayer);

    local sound = imports.playSound3D("assets/sounds/"..gun.sound..".wav", px, py, pz, false);
    local sound_far = imports.playSound3D("assets/sounds/"..gun.sound_far..".wav", px, py, pz, false);

    local distance = math.floor(imports.getDistanceBetweenPoints3D(px, py, pz, sx, sy, sz));

    imports.setSoundVolume(sound_far, 0);

    for far_distance, far_volume in imports.pairs(gun.far) do
        if(distance > far_distance and distance < (far_distance + 50)) then
            imports.setSoundVolume(sound_far, far_volume);
            break;
        end
    end

    imports.setSoundMaxDistance(sound_far, table.last(gun.far));
    imports.setSoundMaxDistance(sound, 100);
    imports.setSoundSpeed(sound, 1.3);
    imports.setSoundSpeed(sound_far, 1.3);

    local fade_time = 500;
    local fade_step = 50;

    local volume = 0.6;
    local far_volume = imports.getSoundVolume(sound_far);

    local tick = imports.getTickCount();

    local function render ()
        local elapsed_time = imports.getTickCount() - tick;
        if elapsed_time > fade_time then
            imports.removeEventHandler('onClientRender', root, render);

            -- destroyElement(sound_far)
            return
        end


        local fade = elapsed_time / fade_time;
        local new_volume = (1 - fade) * volume;
        local new_far_volume = fade * far_volume;


        imports.setSoundVolume(sound, new_volume);
        imports.setSoundVolume(sound_far, new_far_volume);
        -- destroyElement(sound);
    end

    imports.addEventHandler('onClientRender', root, render);
end
