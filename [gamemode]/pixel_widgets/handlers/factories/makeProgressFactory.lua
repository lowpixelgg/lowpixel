Progress = {};
Progress.cache = {};
Progress.timers ={}


function Progress:create (id, ...)
  if (Progress.cache[id]) then return false end

  Progress.cache[id] = progress(...);

  return instance;
end




function Progress:startCountdown (id)
  local instance = Progress.cache[id];
  if (not instance) then return false end
  
  local startTime = getTickCount()
  local endTime = startTime + instance.esplasedTime

  Progress.timers[id] = function () 
    local currentTime = getTickCount();
    
    if (currentTime < endTime) then
      instance.progress = math.floor((currentTime - startTime) / (endTime - startTime) * 100);
    else
      instance.progress = 100;
      
      removeEventHandler("onClientRender", root, Progress.timers[id]);

      Progress.timers[id] = nil;
      Progress.cache[id] = nil;

      if (instance.remote) then 
        network:emit(instance.network, true, false, localPlayer, instance);
      else
        network:emit(instance.network, false, instance);
      end
    end
    
    local minutes = math.floor((endTime - currentTime) / 60000);
    local seconds = math.floor(((endTime - currentTime) % 60000) / 1000);
    instance.time = string.format("%02d:%02d", minutes, seconds);
  end

  addEventHandler("onClientRender", root, Progress.timers[id], true, "low-99999");
end



function Progress:destroy (id) 
  local instance = Progress.cache[id];
  if (not instance) then return false end

  Progress.cache[id] = nil;
end


