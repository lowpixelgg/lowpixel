local imports = {
    ipairs = ipairs,
    getTickCount = getTickCount,

    guiGetScreenSize = guiGetScreenSize,
    getScreenFromWorldPosition = getScreenFromWorldPosition,
    getWorldFromScreenPosition = getWorldFromScreenPosition,

    setCameraTarget = setCameraTarget,

    core = exports.pixel_core,

    getPedMoveState = getPedMoveState,
    getPedControlState = getPedControlState,
    getPedTargetCollision = getPedTargetCollision,
    getPedTargetEnd = getPedTargetEnd,
    isPedDucked = isPedDucked,

    dxDrawRectangle = dxDrawRectangle
}

local recoil = class:create('recoil');
local sW, sH = imports.guiGetScreenSize();
local weaponsMeta = imports.core:getWeaponsMeta()

recoil.public.bulletsFired = { };

recoil.public.diffs = {
  diffX = 0,
  diffY = 0
}

recoil.public.lastTick = 0;
recoil.public.bulletCount = 0;

function recoil.public:onFire(weapon_id, _, _, hX, hY, hZ)
    local weaponMeta = weaponsMeta[weapon_id];
    if (weaponMeta) then
        table.insert(recoil.public.bulletsFired, { x = hX, y = hY, z = hZ });

        if(not (recoil.public.lastTick and imports.getTickCount()-recoil.public.lastTick < weaponMeta.maxInterval)) then
            recoil.public.bulletCount = 0;
        else
            recoil.public.bulletCount = recoil.public.bulletCount + 1;
        end

        for i, v in imports.ipairs(weaponMeta.sequence) do
            if(recoil.public.bulletCount <= v.range) then
                local amplitude = 1;

                if(imports.isPedDucked(localPlayer)) then
                    amplitude = 0.5;
                elseif(imports.getPedMoveState(localPlayer) == 'walk') then
                    amplitude = 1.5;
                end

                if(v.x) then
                    if(v.x.type == 'random') then
                        recoil.public.diffs.diffX = recoil.public.diffs.diffX + (math.random(v.x.min, v.x.max)*amplitude);
                    else
                        recoil.public.diffs.diffX = recoil.public.diffs.diffX + (v.x.value*amplitude);
                    end
                end

                if(v.y) then
                    if(v.y.type == 'random') then
                        recoil.public.diffs.diffY = recoil.public.diffs.diffY + (math.random(v.y.min, v.y.max)*amplitude);
                    else
                        recoil.public.diffs.diffY = recoil.public.diffs.diffY + (v.y.value*amplitude);
                    end
                end

                break;
            end
        end

        recoil.public.lastTick = imports.getTickCount();
    end
end

function recoil.public:onRender(timeSlice)
    local recoilTime = 100;
    if (recoil.public.lastTick and imports.getTickCount()-recoil.public.lastTick < recoilTime) then
        local deltaTime = timeSlice / recoilTime;
        local x, y, z = imports.getWorldFromScreenPosition((sW/2)+(recoil.public.diffs.diffX*deltaTime), (sH/2)-(recoil.public.diffs.diffY*deltaTime), 10000);
        imports.setCameraTarget(x, y, z);
    else
        recoil.public.diffs.diffX, recoil.public.diffs.diffY = 0, 0;
    end

    if(imports.getPedControlState('aim_weapon')) then
        local x, y, z = imports.getPedTargetCollision(localPlayer);
        if not x then
            x, y, z = imports.getPedTargetEnd(localPlayer);
        end

        local sx, sy = imports.getScreenFromWorldPosition(x, y, z, 0);
    end
end
