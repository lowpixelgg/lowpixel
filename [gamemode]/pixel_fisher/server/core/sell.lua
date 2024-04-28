local imports = {
    core = exports.pixel_core
}

local sell = class:create('sell')

function sell.public:create(...)
    local instance = self:createInstance();

    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end

    return instance;
end

function sell.public:load(player, character)
    self.player = player
    self.character = character
    self.level = imports.core:getFisherByCharacter(character, {"_id", "currentExperience", "currentTask"});

    
    if (not self.level) then
        local createdId = imports.core:createFisher(character, 0);
        
        if (createdId) then 
            self.level = {
                id = createdId,
                currentExperience = 0,
            };
        end
    end


    self.tasks = tasks:create(self.level._id);

    return self;
end


function sell.public:incrementExp (inc) 
    self.level.currentExperience = self.level.currentExperience + inc;
end

function sell.public:getTasks ()
    return self.tasks;
end

function sell.public:getLevelState()
    local xp = self.level.currentExperience
    local level = math.floor(xp / 1000)
    local xpForNextLevel = 1000 - (xp % 1000)

    return {
        currentLevel = level,
        currentExperience = xp,
    }
end


function sell.public:getAvailableTasks ()
    return self.tasks.availableTasks;
end

function sell.public:saveLevel () 
    imports.core:saveFisher (self.level);
end

function sell.public:destroy() 
    self.tasks:destroy();
    self:destroyInstace();
end

