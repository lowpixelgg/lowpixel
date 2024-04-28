local sense = class:create("sense");

function sense.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end



function sense.public:load (ped)
    self.animal = ped;
    self.t_Destination = nil;
    self.t_Thread = nil;
    self.t_Walk = false;

    return self;
end


function sense.public:setPedWalkTo (x, y, z)
    self.t_Destination = {x, y, z};
end

function sense.public:update()
    if (not isElement(self.animal) or getElementHealth(self.animal) == 0) then
        self.t_Destination = nil
        self.t_Walk = false
        return false
    end

    local t_PedPos = {getElementPosition(self.animal)}
    
    if (self.t_Destination == nil) then return false end

    local intDistance = getDistanceBetweenPoints3D(t_PedPos[1], t_PedPos[2], t_PedPos[3], unpack(self.t_Destination));
    if (intDistance < 4) then
        self:resetPedControlState(self.animal);
        return false;
    end

    self:updatePedRotation(self.animal, t_PedPos);
    self:updatePedMovement(self.animal, self.t_Walk);

    local bPathClear = self:checkPathClear(self.animal, t_PedPos);

    setPedControlState(self.animal, 'jump', not bPathClear);

    return true
end

function sense.public:resetPedControlState()
    setPedControlState(self.animal, 'forwards', false);

    self.t_Destination = nil;
    self.t_Walk = false;
end

function sense.public:updatePedRotation(animal, t_PedPos)
    local intPedRot = -math.deg(math.atan2(self.t_Destination[1] - t_PedPos[1], self.t_Destination[2] - t_PedPos[2]));
    if (intPedRot < 0) then intPedRot = intPedRot + 360 end
    setElementRotation(animal, 0, 0, intPedRot, 'default', true);
end

function sense.public:updatePedMovement(animal, t_Walk)
    setPedControlState(animal, 'forwards', true);
    setPedControlState(animal, 'sprint', t_Walk);
    setPedControlState(animal, 'walk', not t_Walk);
end

function sense.public:checkPathClear(animal, t_PedPos)
    local t_Matrix = getElementMatrix(animal)
    local int_RayX, int_RayY, int_RayZ = t_Matrix[2][1] + t_Matrix[4][1], t_Matrix[2][2] + t_Matrix[4][2], t_Matrix[2][3] + t_Matrix[4][3]

    for i = 1, 10 do
        local intTargetZ = int_RayZ - 0.5 + i * 0.2
        if (not isLineOfSightClear(t_PedPos[1], t_PedPos[2], t_PedPos[3], int_RayX, int_RayY, intTargetZ, true, true, false, true)) then
            return false
        end
    end
    return true
end



function sense.public:setWalk (state) 
    self.t_Walk = state;
end


function sense.public:destroy () 
    if(not sense.public:isInstance(self)) then return false end;
    self:destroyInstance();
end