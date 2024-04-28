local imports = {
	core = exports.pixel_core,
};


local camera = class:create("camera");

camera.private.update = nil;
camera.private.onCursorMove = nil;
camera.private.updateShake = nil;
camera.public.isActive = false

local speedometerState = false

local LOOK_BACK_ENABLED = true
local CAMERA_ROTATION_SPEED = 6
local SIDE_LOOK_ANGLE = 60
local MIN_DRIFT_SPEED = 0.17

local positionOffset = Vector3()
local lookOffset =  Vector3()

local targetLookOffset = Vector3()
local currentLookOffset = Vector3()

local startCameraAngle = 0
local prevTurnVelocity = 0

local SHAKE_AMOUNT = 0.012
local cameraShakeZ = 0
local cameraShakeX = 0
local cameraShakeMul = 0.9

local mouseLookSpeed = 50
local mouseLookX = 0
local mouseLookY = 0
local mouseHorizontalLimit = 60
local mouseVerticalLimit = 40

local cockpitOffsets = imports.core:getVehiclesMeta();

function camera.public:onCursorMove(x, y)
    if (isCursorShowing() or isMTAWindowActive()) then
		return;
	end

	local mx = (x - 0.5) * mouseLookSpeed;
	local my = (y - 0.5) * mouseLookSpeed;

	mouseLookX = mouseLookX + mx;
	mouseLookY = mouseLookY + my;

	mouseLookX = math.max(-mouseHorizontalLimit, math.min(mouseHorizontalLimit, mouseLookX));
	mouseLookY = math.max(-mouseVerticalLimit, math.min(mouseVerticalLimit, mouseLookY));
end

function camera.public:update(deltaTime)
    local vehicle = getPedOccupiedVehicle(localPlayer);

    if (not vehicle) then return false end

	if (skipFrame) then
		skipFrame = false;
		return;
	end

	if (not isPedInVehicle(localPlayer)) then
		return self:stop();
	end

    deltaTime = deltaTime / 1000;

	cameraShakeX = cameraShakeX * cameraShakeMul;
	cameraShakeZ = cameraShakeZ * cameraShakeMul;
	cameraShake = Vector3(cameraShakeX * (math.random() * 2 - 1), 0, cameraShakeZ * (math.random() * 2 - 1));
    
    local sideLookAngle = 0;

	sideLookAngle = sideLookAngle + mouseLookX;
	local mouseLookOffset = -mouseLookY / 90;

	local lookLeftState = getPedControlState(localPlayer, "vehicle_look_left");
	local lookRightState = getPedControlState(localPlayer, "vehicle_look_right");
    

	if (LOOK_BACK_ENABLED and lookLeftState and lookRightState) then
		sideLookAngle = 180;
		mouseLookX = 0;
		mouseLookY = 0;
	elseif (lookLeftState) then 
		sideLookAngle = -SIDE_LOOK_ANGLE;
		mouseLookX = 0;
		mouseLookY = 0;
	elseif (lookRightState) then
		sideLookAngle = SIDE_LOOK_ANGLE;
		mouseLookX = 0;
		mouseLookY = 0;
	end

    local driftAngle = 0;

	if (isVehicleOnGround(vehicle)) then
		local velocity = Vector3(getElementVelocity(vehicle));
		local speedSquared = velocity:getSquaredLength();
		local angleMul = math.min(1, speedSquared / MIN_DRIFT_SPEED);
		local velocityAngle = localPlayer.vehicle.rotation.z;
		
        if (speedSquared > 0.00001) then
			velocityAngle = math.deg(getVectorAngle(velocity)) + 270;
		end;
		
        local angleDifference = -differenceBetweenAngles(localPlayer.vehicle.rotation.z, velocityAngle);
		
        if (math.abs(angleDifference) < 120) then
			driftAngle = angleDifference * angleMul;
		end

		cameraShakeX = cameraShakeX + math.random() / 4000 * speedSquared;
		cameraShakeZ = cameraShakeZ + math.random() / 6000 * speedSquared;
	end


	local currentCameraAngle = math.rad(startCameraAngle + driftAngle + sideLookAngle);
	targetLookOffset = Vector3(math.sin(currentCameraAngle), math.cos(currentCameraAngle), lookOffset.z + mouseLookOffset);
	currentLookOffset = currentLookOffset + (targetLookOffset - currentLookOffset) * deltaTime * CAMERA_ROTATION_SPEED;
	currentLookOffset = currentLookOffset + cameraShake;

    
	local cameraPos = localPlayer.vehicle.matrix:transformPosition(positionOffset)
	local cameraLook = localPlayer.vehicle.matrix:transformPosition(positionOffset + currentLookOffset)
	local cameraRoll = -localPlayer.vehicle.rotation.y

    setCameraMatrix(cameraPos, cameraLook, cameraRoll - cameraShake.x * 50)
end


function camera.public:updateShake(collider, force)
	if (force < 60) then
		return false
	end
    
	local mul = math.max(math.min(10, force / 60), 0);
	cameraShakeX = cameraShakeX + SHAKE_AMOUNT * mul * 0.9;
	cameraShakeZ = cameraShakeZ + SHAKE_AMOUNT * mul * 0.2;
end



function camera.public:start() 
	if (self.isActive ) then
		return false;
	end 

    self.isActive  = true;

	local vehicle = getPedOccupiedVehicle(localPlayer);
	local offsets = cockpitOffsets[getElementModel(vehicle)].cockpit;

    if (not offsets) then
		return false;
	end

	positionOffset = Vector3(offsets.bx, offsets.by, offsets.bz);
	lookOffset = (Vector3(offsets.ax, offsets.ay, offsets.az) - positionOffset):getNormalized();
	startCameraAngle = getVectorAngle(lookOffset);


    -- setElementModel(localPlayer, 0)
	setElementAlpha(localPlayer, 0);


    camera.private.update = function (dt) 
        self:update(dt);
    end;

    camera.private.onCursorMove = function (x,y) 
        self:onCursorMove(x, y);
    end;

    camera.private.updateShake = function (collider, force)
        self:updateShake(collider, force);
    end;

	addEventHandler("onClientPreRender", root, camera.private.update);
	addEventHandler("onClientVehicleCollision", getPedOccupiedVehicle(localPlayer), camera.private.updateShake);
	addEventHandler("onClientCursorMove", root, camera.private.onCursorMove);

end

function camera.public:stop() 
	if (not self.isActive) then
		return false;
	end

	self.isActive = false;
	
    setElementAlpha(localPlayer, 255);
    setElementModel(localPlayer, 7);

    setCameraTarget(localPlayer);
	removeEventHandler("onClientPreRender", root, camera.private.update);
	removeEventHandler("onClientCursorMove", root, camera.private.onCursorMove);
	
    if isElement(localPlayer.vehicle) then
		removeEventHandler("onClientVehicleCollision", getPedOccupiedVehicle(localPlayer), camera.private.updateShake);
	end
end