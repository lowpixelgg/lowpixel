-- Widget

function createWidget(...) 
  return Widgets:create(...);
end

function renderWidget(...) 
  return Widgets:render(...);
end

function setWidgetPosition(...) 
  return Widgets:setPosition(...);
end

function destroyWidget (...) 
  return Widgets:destroy(...);
end

-- Progress

function createProgress (...) 
  return Progress:create (...);
end


function startProgress (...) 
  return Progress:startCountdown(...)
end

function destroyProgress (...)
  return Progress:destroy(...);
end



-- Help list
function createHelplist (...)
  return Help:create (...);
end


function renderHelplist (...)
  return Help:render(...);
end




-- Circle
function createCircleTimer (...) 
  return Circle:create(...);
end


function startCircleTimer (...) 
  return Circle:startCountdown (...); 
end



function destroyCircle (...) 
  return Circle:destroy (...);
end