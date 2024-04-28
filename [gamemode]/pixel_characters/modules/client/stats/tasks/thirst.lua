
local thirst_props = {
    counter_limit = 10, -- tempo para descer a cede em segundos
    element = 'thirst',
    amount_to_discount = 1,
    fat = true,
    effect = function(player,task,value)
        if task then 
            local shake_level = (value <= 20 and 150 or 50)
            setCameraDrunkLevel(shake_level)
        else
            setCameraDrunkLevel(0)
        end
    end
}

stats:setProps('thirst',thirst_props)