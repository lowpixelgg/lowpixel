function createSvg (...) 
  return SVG:create(...);
end


function setSvgColor (...) 
  return SVG:setColor(...);
end

function setSvgStrokeColor (...) 
  return SVG:setStrokeColor(...);
end

function getSvgRectWidth (...) 
  return SVG:getRectWidth(...);
end

function setSvgRectWidth (...)
  return SVG:setRectWidth (...); 
end

function setSvgRectHeight (...) 
  return SVG:setRectHeight (...);
end

function setSvgOffset (...) 
  return SVG:setSvgOffset(...);
end
function renderSvg (...) 
  return SVG:render(...);
end



function create3DRT (...) 
  return RenderTarget3D:create(...);
end


function set3DRT (...) 
  return RenderTarget3D:set(...);
end


function drawRT3D (...) 
  return RenderTarget3D:draw(...);
end


function setRT3DTransform (...) 
  return RenderTarget3D:setTransform(...);
end



function createLayoutBox (...) 
  local cArgs = {...};

  if (not LayoutBox.cache[cArgs[1]]) then 
    local instance = LayoutBox:create(...);
    LayoutBox.cache[cArgs[1]] = instance;
    
    return instance.startX, instance.startY
  else
    local instance = LayoutBox.cache[cArgs[1]];

    if (instance) then 
      instance:update(...);

      return instance.startX, instance.startY
    else
      return false;
    end
  end

  return false;
end



function getScaleFactor () 
  return Responsive:getScaleFactor();
end


function isMouseInPosition (...) 
  return Design:isMouseInPosition(...); 
end