local imports = {
    getTickCount = getTickCount,

    isElement = isElement,
    getElementPosition = getElementPosition,

    getCameraMatrix = getCameraMatrix,
    setCameraMatrix = setCameraMatrix,

    interpolateBetween = interpolateBetween
};

local camera = class:create('camera');

camera.public.animation = false;

function camera.public:get()
    return Matrix(imports.getCameraMatrix());
end

function camera.public:set(position, look, look_type)
    local lookPosition = look;

    if(type(lookPosition) == 'string') then
        local elementData = manager:getElement(lookPosition, look_type);

        if(elementData and imports.isElement(elementData.element)) then
            lookPosition = Vector3(imports.getElementPosition(elementData.element));
        else
            lookPosition = Vector3(0, 0, 0);
        end
    end

    imports.setCameraMatrix(position.x, position.y, position.z, lookPosition.x, lookPosition.y, lookPosition.z);
end

function camera.public:getAnimation()
    return self.animation;
end

function camera.public:setAnimation(animation_data)
    self.animation = animation_data;

    return self:getAnimation();
end

function camera.public:move(finish, duration, look, look_type)
    if(not finish) then return false end;

    local actualPosition = self:get():getPosition();
    local newAnimation = self:setAnimation({
        tick = imports.getTickCount(),
        start = actualPosition,
        finish = finish or Vector3(0, 0, 0),
        look = look or Vector3(0, 0, 0),
        look_type = look_type,
        duration = duration or 0
    });

    return newAnimation;
end

function camera.public:reset()
    self.animation = false;
end

function camera.public:render()
    local animationData = self:getAnimation();

    if(animationData) then
        local animationProgress = (imports.getTickCount() - animationData.tick) / animationData.duration;

        local newPosition = Vector3(
            imports.interpolateBetween(
                animationData.start.x, animationData.start.y, animationData.start.z,
                animationData.finish.x, animationData.finish.y, animationData.finish.z,
                animationProgress, 'InOutQuad'
            )
        );

        self:set(newPosition, animationData.look, animationData.look_type);
        if(animationProgress >= 1) then
            self:setAnimation(false);
        end

        dxDrawText('Camera: ' .. (imports.getTickCount() - animationData.tick) .. 'ms', 200, 300);
    end
end
