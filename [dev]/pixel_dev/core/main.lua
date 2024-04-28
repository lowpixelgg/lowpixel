addCommandHandler("ensure", function (player, commandName, ...) 
    local args = table.concat({...}, " ")
    for script in args:gmatch("%S+") do
        if (script ~= "&&") then 
          local res = getResourceFromName(script)
          if not res then return end

          restartResource(res)
        end
    end
end) 
