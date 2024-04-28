local animal = class:create("animal");


function animal.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end


function animal.public:load (animal, state) 
    self.sense = sense:create(animal);
    self.state = state or "walk";
    self.factors = {};
    self.animal = animal;
    
    self.animalType = getElementData(self.animal, "hunters:animal_type");


    return self;
end


function animal.public:getState () 
    return self.state;
end


function animal.public:setState (state)
    self.state = state or "walk"
end


function animal.public:setFactors (factors)
    self.factors = factors;
end

function animal.public:getFactors () 
    return self.factors;
end

function animal.public:getAnimal () 
    return self.animal;
end

function animal.public:getSense ()
    return self.sense;
end

function animal.public:getType () 
    return self.animalType;
end


function animal.public:destroy() 
    if(not animal.public:isInstance(self)) then return false end;

    self:getSense():destroy();
    self:destroyInstance();
end