local imports = {
    zones = exports.pixel_zones,
}

local animal = class:create("animal");


local meta = {
    ["deer"] = 155,
    ["boar"] = 156,
    ["rabbit"] = 157,
}

function animal.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end


function animal.public:load (id, animalType, x, y, z, shapeInfo) 
    self.id = id;
    self.x = x;
    self.y = y;
    self.z = z;
    self.shapeInfo = shapeInfo or {};
    self.animalType = animalType;
    self.ped = createPed(meta[animalType], self.x, self.y, self.z + 5);
    self.state = "idle";
    self.prey = false;
    self.factors = {
        ["isHungry"] = 0,
        ["isScared"] = 0,
        ["isAngry"] = 0,
        ["isRestless"] = 100,
    }

    self.isAnimalDead = false;
    
    setElementData(self.ped, "hunters:animal_id", self.id);
    setElementData(self.ped, "hunters:animal_type", self.animalType);


    return self;
end

function animal.public:getFactors ()
    return self.factors;
end

function animal.public:getFactor (f) 
    return self.factors[f];
end

function animal.public:setFactor (f, value)
    if (not self.factors[f]) then return false end
    self.factors[f] = value; 
end


function animal.public:checkPlayerStatus()
    local x, y, z = getElementPosition(self.ped)
    local player, percent = findClosestPlayer(x, y, z)

    if player then
        local px, py, pz = getElementPosition(player)
        local isPlayerAtShape = imports.zones:isPointInsidePolygon(px, py, pz, self.shapeInfo)

        if isPlayerAtShape then
        --    self:handlePlayerInsideShape(player, percent)
        else
        end
    end
    self:handlePlayerOutsideShape()
end

function animal.public:handlePlayerInsideShape(player, percent)
    self:setFactor("isHungry", 0);
    self:setFactor("isRestless", 0);
    self.prey = player;

    local weaponID = getPedWeapon(player);

    if (weaponID and weaponID > 0) then
        self:setFactor("isScared", percent);
        self:setFactor("isAngry", 0);
    else
        self:setFactor("isAngry", percent);
        self:setFactor("isScared", 0);
    end
end

function animal.public:handlePlayerOutsideShape()
    if (isTimer(self.eatTimer)) then return false end

    self:setFactor("isAngry", 0);
    self:setFactor("isScared", 0);
    self.prey = false;

    
    local sense = lume.weightedchoice({["isHungry"] = 5, ["isRestless"] = 70});

    if (sense == "isHungry") then 
        self.eatTimer = setTimer(function () 
            if (isTimer(self.eatTimer)) then 
                killTimer(self.eatTimer) 
            end 
        end, 10000, 1);
    end

    self:setFactor(sense, 100);
    self:setFactor(sense == "isHungry" and "isRestless" or "isHungry", 0);
end

function animal.public:chooseState()
    local brain = lume.weightedchoice(self.factors)

    if brain == "isRestless" then
        self.state = "walk"
    elseif brain == "isHungry" then
        self.state = "eating"
    elseif brain == "isScared" then
        self.state = "run"
    elseif brain == "isAngry" then
        self.state = "attack"
    end
end

function animal.public:update(fn)
    self:checkPlayerStatus()
    self:chooseState()

    lume.call(fn, self.state)
end


function animal.public:getWalkOrRunTo () 
    local randomX, randomY, insideShape;
    
    local minX = math.min(self.shapeInfo[1].x, self.shapeInfo[2].x, self.shapeInfo[3].x, self.shapeInfo[4].x);
    local maxX = math.max(self.shapeInfo[1].x, self.shapeInfo[2].x, self.shapeInfo[3].x, self.shapeInfo[4].x);
    local minY = math.min(self.shapeInfo[1].y, self.shapeInfo[2].y, self.shapeInfo[3].y, self.shapeInfo[4].y);
    local maxY = math.max(self.shapeInfo[1].y, self.shapeInfo[2].y, self.shapeInfo[3].y, self.shapeInfo[4].y);
    local z = self.shapeInfo[1].z;

    repeat
        randomX = math.random(minX, maxX);
        randomY = math.random(minY, maxY);
        insideShape = imports.zones:isPointInsidePolygon (randomX, randomY, z, self.shapeInfo);
    until insideShape


    return randomX, randomY, z
end 



function animal.public:getPrey () 
    return self.prey;
end


function animal.public:isDead () 
    return self.isAnimalDead;
end

function animal.public:setIsDeath (state) 
    self.isAnimalDead = state;
end


function animal.public:destroy () 
    if(not animal.public:isInstance(self)) then return false end;

    if (isElement(self.ped)) then 
        destroyElement(self.ped);
    end

    if (isTimer(self.eatTimer)) then  
        killTimer(self.eatTimer)
    end

    self:destroyInstance();

    return true;
end