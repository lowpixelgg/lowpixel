Circle = {};
Circle.cache = {};
Circle.timers = {}

function Circle:create (id, ...)
  if (Circle.cache[id]) then return id end
  Circle.cache[id] = circle(...);
  
  return id;
end


function Circle:render(id, ...) 
  local instance = Circle.cache[id];
  
  if (not instance) then return false end
  
  return instance:render(...);
end


function Circle:startCountdown (id)
  local instance = Circle.cache[id];
  if (not instance) then return false end
  
  
  local startTime = getTickCount()
  local endTime = startTime + instance.esplasedTime
  
  Circle.timers["render_"..id] = function () 
    local currentTime = getTickCount();
  
    if (currentTime < endTime) then
      instance.progress = math.floor((currentTime - startTime) / (endTime - startTime) * 100);
    else
      instance.progress = 100;
      instance:setIsRendering(false);
  
      setTimer(function ()
        if (instance.remote) then 
          network:emit(instance.network, true, false, localPlayer);
        else
          network:emit(instance.network);
        end
        

      end, 500, 1)
  

      Circle:destroy(id);
      instance.time = "0";
      return;
    end
  
    local totalSeconds = math.floor((endTime - currentTime) / 1000)
    local minutes = math.floor(totalSeconds / 60)
    local seconds = totalSeconds % 60
  
    if minutes == 0 then
        instance.time = string.format("%d", seconds)
    else
        instance.time = string.format("%01d:%02d", minutes, seconds)
    end
  end
  
  addEventHandler("onClientRender", root, Circle.timers["render_"..id], true, "low-99999");
end



function Circle:destroy (id) 
  local instance = Circle.cache[id];
  if (not instance) then return false end

  Circle.cache[id] = nil;
  removeEventHandler("onClientRender", root, Circle.timers["render_"..id]);
end
