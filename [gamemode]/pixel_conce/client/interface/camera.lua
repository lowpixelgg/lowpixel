local imports = {
    getTickCount = getTickCount,

    isElement = isElement,
    getElementPosition = getElementPosition,

    getCameraMatrix = getCameraMatrix,
    setCameraMatrix = setCameraMatrix,

    interpolateBetween = interpolateBetween
};

local camera = class:create('camera');

camera.public.max_distance = 7;
camera.public.target_element = false;
camera.public.animation = false;
camera.public.fov = 70
camera.public.position = nil;
camera.public.look = nil 

function camera.public:get()
    return Matrix(getCameraMatrix());
end

function camera.public:set(position, target_element)
    local look = target_element or Vector3(0, 0, 0);

    if(isElement(target_element)) then
        look = Vector3(getElementPosition(target_element));
    end

    camera.public.position = position
    camera.public.look = look
end

function camera.public:getTarget()
    local actualMatrix = { getCameraMatrix() };
    return Vector3(actualMatrix[4], actualMatrix[5], actualMatrix[6]);
end

function camera.public:getAnimation()
    return self.animation;
end

function camera.public:setAnimation(animation_data)
    self.animation = animation_data;

    return self:getAnimation();
end

function camera.public:setFov(fov) 
    self.fov = fov
end


function camera.public:getFov()
    return self.fov
end

function camera.public:move(finish, target_element, duration)
    if(not finish) then return false end;

    local newAnimation = self:setAnimation({
        tick = getTickCount(),
        start = self:get():getPosition(),
        finish = finish or Vector3(0, 0, 0),
        target_start = self:getTarget(),
        target_finish = target_element or Vector3(0, 0, 0),
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
        local animationProgress = (getTickCount() - animationData.tick) / animationData.duration;

        local newPosition = Vector3(
            interpolateBetween(
                animationData.start.x, animationData.start.y, animationData.start.z,
                animationData.finish.x, animationData.finish.y, animationData.finish.z,
                animationProgress, 'Linear'
            )
        );

        local targetFinish = animationData.target_finish;
        if(isElement(targetFinish)) then
            targetFinish = Vector3(getElementPosition(targetFinish));
        end

        local newTargetPosition = Vector3(
            interpolateBetween(
                animationData.target_start.x, animationData.target_start.y, animationData.target_start.z,
                targetFinish.x, targetFinish.y, targetFinish.z,
                animationProgress, 'Linear'
            )
        );

        self:set(newPosition, newTargetPosition);
        if(animationProgress >= 1) then
            self:setAnimation(false);
        end
    end


    if (camera.public.position) then 
        setCameraMatrix(
        camera.public.position.x,
        camera.public.position.y,
        camera.public.position.z,
        camera.public.look.x,
        camera.public.look.y, 
        camera.public.look.z, 
        0, 
        camera.public.fov
    );
    end
end
