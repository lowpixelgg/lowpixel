local imports = {
    pAttach = exports.pAttach,
    rope = exports.pixel_rope,
    core = exports.pixel_core
}

local fisher = class:create('fisher')

function fisher.public:create(...)
    local instance = self:createInstance()

    if instance and not instance:load(...) then
        instance:destroyInstance()
        return false
    end

    return instance
end

function fisher.public:load(player, fishgrod)
    self.player = player
    self.fishgrod = fishgrod
    self.water = water
    self.player = player
    self.amplitude = 0.001
    self.frequency = 0.5
    self.state = 'idle'
    self.trytofish = nil
    self.mountFish = {}
    self.tFixedChoice = nil

    self:mountFishByRodLevel(self.fishgrod)

    self.fishergrod = createObject(1371, 0, 0, 0)
    setElementCollisionsEnabled(self.fishergrod, false)

    imports.pAttach:attach(self.fishergrod, self.player, 34, 0, 0, 0, 0, 0, 0)
    imports.pAttach:setPositionOffset(self.fishergrod, 0.08, 0.44, -1.6)
    imports.pAttach:setRotationOffset(self.fishergrod, 133.2, 0, 0)

    return self
end

function fisher.public:start(x, y, z)
    self:setOffsets('fishing_idle')

    self.tFixedUpdate =
        thread:createHeartbeat(
        function()
            self:update()
            return true
        end,
        function()
        end,
        15
    )
    self.flotor = createObject(1332, x, y, z)

    local x2, y2, z2 = getElementPosition(self.fishergrod)
    local x3, y3, z3 = getElementPosition(self.flotor)

    local constraints = {
        [1] = {
            type = 'self-update',
            elementId = 1
        },
        [10] = {
            type = 'self-update',
            elementId = 2
        }
    }

    self.rope =
        imports.rope:createRope(
        10,
        0.1,
        {
            [1] = Vector3(x, y, z)
        },
        {},
        constraints
    )

    imports.rope:addRopeElement(self.rope, self.flotor)
    imports.rope:addRopeElement(self.rope, self.fishergrod)
end

function fisher.public:update()
    local fx, fy, fz = getElementPosition(self.fishergrod)
    local bx, by, bz = getElementPosition(self.flotor)

    if (self.state == 'idle') then
        local currentTime = getTickCount()
        local yOffset = self.amplitude * math.sin(currentTime * 2 * math.pi * self.frequency / 1000)
        local fx2, fy2, fz2 = getElementPosition(self.flotor)

        moveObject(self.flotor, 10000, fx2, fy2, fz2 - yOffset)
    elseif (self.state == 'catch') then
        local currentTime = getTickCount()
        local fx2, fy2, fz2 = getElementPosition(self.flotor)
        local a = lume.weightedchoice(self.mountFish[self.trytofish].stride)
        local b = lume.weightedchoice(self.mountFish[self.trytofish].stride)

        local xOffset = fx2 + a * math.sin(currentTime * 2 * math.pi * 1 / 1000)
        local yOffset = fy2 + b * math.sin(currentTime * 2 * math.pi * 1 / 1000)

        moveObject(self.flotor, 10000, xOffset, yOffset, fz2)
    end
end

function fisher.public:fishChoice(cb)
    local tryFish =
        lume.weightedchoice(
        {
            [1000] = 29,
            [2000] = 30,
            [3000] = 40
        }
    )

    self.tFixedChoice =
        setTimer(
        function()
            if (not self.tFixedChoice) then
                return false
            end

            local tryFishThis = lume.weightedchoice(self:formatProbabilities())
            return cb(self.mountFish[tryFishThis])
        end,
        tryFish,
        1
    )
end

function fisher.public:destroy()
    if (self.flotor) then
        destroyElement(self.flotor)
    end

    if (self.fishergrod) then
        destroyElement(self.fishergrod)
    end

    if (self.tFixedUpdate) then
        self.tFixedUpdate:destroy()
    end

    if (self.rope) then
        imports.rope:destroyRope(self.rope)
    end

    if (isTimer(self.tFixedChoice)) then
        killTimer(self.tFixedChoice)
        self.tFixedChoice = nil
    end

    self:destroyInstance()
end

function fisher.public:formatProbabilities()
    local probabilitiers = {}

    for k, v in pairs(self.mountFish) do
        probabilitiers[v.itemName] = v.probability
    end

    return probabilitiers
end

function fisher.public:mountFishByRodLevel(fishingrod)
    local meta = imports.core:getFishMeta()
    for _, fish in pairs(meta) do
        if (fish.fishrodLevel == 'basic') then
            self.mountFish[_] = fish
        end
    end
end

function fisher.public:setOffsets(anim)
    if (anim == 'fishing_idle') then
        imports.pAttach:setPositionOffset(self.fishergrod, 0.1, 1.65, -0.25)
        imports.pAttach:setRotationOffset(self.fishergrod, 200, 0, 0)

        self.state = 'idle'
    elseif (anim == 'fishing_catch_loop') then
        imports.pAttach:setPositionOffset(self.fishergrod, 0, -0.5, -1.5)
        imports.pAttach:setRotationOffset(self.fishergrod, 100.8, 0, 1.6)

        self.state = 'catch'
    end
end
