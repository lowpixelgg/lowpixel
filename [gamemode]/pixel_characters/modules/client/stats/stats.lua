local imports = {
    assets = exports.pixel_assets,
}

local stats = class:create("stats")

stats.public.get = {};
stats.public.animationscache = {};
stats.public.soundCache = { };
stats.public.valueEffects = { 
    [30] = true,
    [25] = true,
    [20] = true,
    [15] = true,
    [10] = true,
};

function stats.public:setHunger(player,task,value)
     local hunger_value = getElementData(player, self.get.hunger['element']) or 0
     local task_by_value = (task == 'add' and hunger_value + value or hunger_value - value) 
     task_by_value = (task_by_value > 0 and task_by_value or 0 )
     task_by_value = (task_by_value > 100 and 100 or task_by_value )

     if self.get.hunger['fat'] then 
        local player_Weight = self.getWeight(player)
     end

     if self.valueEffects[task_by_value] then 
        if self.get.hunger['effect'] then 
            self.get.hunger['effect'](player)
        end
     end

    --if task_by_value <= 10 then 
    --    if (getElementHealth(localPlayer) <= 10) then setElementHealth(localPlayer, 10); return end
    --    setElementHealth(player, getElementHealth(localPlayer) - 10);
    --end

    setElementData(player, self.get.hunger['element'], tonumber(task_by_value))
end

function stats.public:getWeight(player)
    return 10 ;
end

function stats.public:setThirst(player,task,value)
    local thist_value = getElementData(player,self.get.thirst['element']) or 0
    local task_by_value = (task == 'add' and thist_value + value or thist_value - value) 
    task_by_value = (task_by_value > 0 and task_by_value or 0 )
    task_by_value = (task_by_value > 100 and 100 or task_by_value )
    
    if self.valueEffects[task_by_value] then 
        self.get.thirst['effect'](player,'add',task_by_value)
    else 
        self.get.thirst['effect'](player,nil)
    end

    --if task_by_value <= 10 then 
    --    if (getElementHealth(localPlayer) <= 10) then setElementHealth(localPlayer, 10); return end
    --    setElementHealth(player, getElementHealth(localPlayer) - 10);
    --end


    setElementData(player, self.get.thirst['element'], tonumber(task_by_value))
end

function stats.public:createSoundEffect(player,path)
    self:clearSoundCache(player)
   
    local positions = {getElementPosition(player)}
    self.soundCache[player] = imports.assets:playSoundFX3D(path, positions[1],positions[2],positions[3], false, 1)
    
    attachElements(self.soundCache[player],player)
    setSoundMaxDistance(self.soundCache[player],40)
    setSoundVolume(self.soundCache[player],1)
end

function isSoundFinished(theSound)
    return ( getSoundPosition(theSound) == getSoundLength(theSound) )
end

function stats.public:setForwards(player,bol)
    setPedControlState(player, 'sprint', bol)
end

function stats.public:setStamina(player,task,value)
    local thist_value = getElementData(player,self.get.stamina['element']) or 100
    local task_by_value = (task == 'add' and thist_value + value or thist_value - value) or 0  
    
    task_by_value = (task_by_value > 0 and task_by_value or 0 )
    task_by_value = tonumber((task_by_value > 100 and 100 or task_by_value ))
    
    if (task_by_value < 20 and not getElementData(localPlayer,'stats: blocksprint')) then 
        network:emit('pixel_characters:createAnimEffect',true,player,player,'block',task_by_value)
        stats.public:setForwards(player,false)
        self.get.stamina['effect'](player)
    elseif (task_by_value > 25 and getElementData(localPlayer,'stats: blocksprint')) then 
        network:emit('pixel_characters:createAnimEffect',true,player,player,'run',task_by_value)
        stats.public:setForwards(player,true)
    end

    setElementData(player, self.get.stamina['element'], task_by_value)
end

function stats.public:setProps(statName,props)
    self.get[statName] = props
    return true 
end


function stats.public:clearSoundCache(player)
    if self.soundCache[player] then
        if isElement(self.soundCache[player]) then 
            destroyElement(self.soundCache[player])
        end
        self.soundCache[player] = nil  
    end
end
