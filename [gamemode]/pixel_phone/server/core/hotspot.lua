local hotspot = class:create("hotspot");
local states = {
    STATE_GOOD = "Good",
    STATE_MEDIUM = "Medium",
    STATE_POOR = "Poor",
}


function hotspot.public:create(...) 
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end


function hotspot.public:load(id, name, password, router, mghz)
    self.id = id;
    self.name = name;
    self.password = password;
    self.router = router;
    self.users = {};
    self.mghz = mghz or 100
    
    
    iprint("New Network: "..id)
    return self;
end


function hotspot.public:addUser (player) 
    if (not self.users[player]) then 
        self.users[player] = true;
    end
end


function hotspot.public:removeUser (player) 
    if (self.users[player]) then 
        self.users[player] = nil;
    end
end

function hotspot.public:getSignalState(player)
    local routerPosition = Vector3(unpack(self.router))
    local playerPosition = Vector3(getElementPosition(player))
    
    local distance = getDistanceBetweenPoints3D(routerPosition.x, routerPosition.y, routerPosition.z, playerPosition.x, playerPosition.y, playerPosition.z)
    
    local maxSignalDistance = self.mghz
    local goodSignalThreshold = 0.2 * maxSignalDistance -- 20% of self.mghz
    local mediumSignalThreshold = 0.4 * maxSignalDistance -- 40% of self.mghz
    
    if distance <= maxSignalDistance then
        if distance <= goodSignalThreshold then
            return states.STATE_GOOD
        elseif distance <= mediumSignalThreshold then
            return states.STATE_MEDIUM
        else
            return states.STATE_POOR
        end
    else
        return false
    end
end