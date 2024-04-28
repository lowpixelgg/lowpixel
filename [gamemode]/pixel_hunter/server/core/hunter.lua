local imports = {
    zones = exports.pixel_zones,
}

local hunter = class:create("hunter");

function hunter.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end



function hunter.public:load (id, animalType, qtd, shapeInfo)
    self.id = id;
    self.animalType = animalType or "javali";
    self.shapeInfo = shapeInfo or {};
    self.zone = imports.zones:createZone(5, self.shapeInfo, nil, nil);
    self.animals = {};
    self.timers = {};
    self.animalQtd = qtd;


    self.minX, self.maxX, self.minY, self.maxY = math.huge, -math.huge, math.huge, -math.huge
    
    for _, point in ipairs(shapeInfo) do
        self.minX = math.min(self.minX, point.x);
        self.maxX = math.max(self.maxX, point.x);
        self.minY = math.min(self.minY, point.y);
        self.maxY = math.max(self.maxY, point.y);
    end

    self.z = shapeInfo[1].z;

    for i=1, self.animalQtd do 
        self:createAnimalAtShape(i, animalType, shapeInfo);
    end
    
    return self;
end


function hunter.public:createAnimalAtShape (id, animalType, shapeInfo)
    local randomX, randomY, insideShape
    repeat
        randomX = math.random(self.minX, self.maxX)
        randomY = math.random(self.minY, self.maxY)
        insideShape = imports.zones:isPointInsidePolygon(randomX, randomY, self.z, shapeInfo)
    until insideShape

    self.animals[id] = animal:create(id, animalType, randomX, randomY, self.z, shapeInfo)
end


function hunter.public:getAnimals() 
    return self.animals;
end


function hunter.public:getAnimal(id) 
    return self.animals[id];
end


function hunter.public:onAnimalWasted (id, killer, fn) 
    local animal = self:getAnimal(id);
    if (not animal) then return false end

    if (animal:isDead()) then return false end
    if (isTimer(self.timers[id])) then return false end

    animal:setIsDeath(true);

    self.timers[id] = setTimer(function () 
        killTimer(self.timers[id]);
        self.timers[id] = nil;
        
        animal:destroy();
        
        setTimer(function () 
            self:createAnimalAtShape(id, self.animalType, self.shapeInfo);
        end, 20000, 1);
        
        pcall(fn);
    end, 50000, 1);
end