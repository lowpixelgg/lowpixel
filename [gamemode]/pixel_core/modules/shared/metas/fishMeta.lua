Metas.fishMeta = {
    ["fish_corvina"] = {
        stride = {
            [1] = 1,
            [5] = 50,
            [7] = 10,
            [10] = 90,
        },
        
        probability = 30;
        execProb = function ()             
            if (getWeather() == 8) then 
                return 100
            else
                return 30
            end
        end,

        fishrodLevel = "basic",
        fishingDiffcult =2.99,
        fishingTime = 10000,
        itemName = "fish_corvina",
    },

    ["fish_piau"] = {
        stride = {
            [20] = 5,
            [5] = 30,
            [6] = 10,
            [10] = 60,
        },
    
        probability = 30;
        execProb = function () 
            local timehour, timeminute = getTime()

            if (timehour >= 10 and timehour < 20) then 
                return 50
            else
                return 30
            end
        end,

        fishrodLevel = "basic",
        fishingDiffcult = 2.99,
        fishingTime = 10000,
        itemName = "fish_piau",
    }
}

setTimer(function () 
    for k,v in pairs(Metas.fishMeta) do 
        if (v.execProb) then 
            local newProbability = v.execProb();
            
            if (newProbability) then 
                Metas.fishMeta[k].probability = newProbability;
            end
        end
    end

end, 2000, 0)