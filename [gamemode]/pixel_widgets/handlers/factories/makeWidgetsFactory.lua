Widgets = {};
Widgets.cache = {};


function Widgets:create (id, ...) 
  if (not Widgets.cache[id]) then 
    Widgets.cache[id] = widgets(id, ...);
    return id;
  end

  return false;
end

function Widgets:render(id)
  local instance = Widgets.cache[id];
  if (not instance) then return false end

  instance:render();
end


function Widgets:setPosition (id, ...) 
  local instance = Widgets.cache[id];
  if (not instance) then return false end

  instance:setTransoform(...);
end


function Widgets:getWidgetByTransform (x,y)
  for k,v in pairs(Widgets.cache) do 
    if (v:isInside(x,y)) then 
      return v;
    end
  end
end



function Widgets:destroy (id) 
  local instance = Widgets.cache[id];
  if (not instance) then return false end

  Widgets.cache[id] = nil;
end