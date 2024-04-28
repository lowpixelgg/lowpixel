function makeWidgetsRendering () 
  for k,v in pairs(Progress.cache) do 
    if (v.autoRendering) then 
      v:render()
    end
  end
  
  for k,v in pairs(Circle.cache) do 
    if (v.autoRendering) then 
      v:render();
    end
  end

  for k,v in pairs(Widgets.cache) do 
    if (v:checkDistance()) then
      if (v.autoRendering) then 
        v:render();
      end
    end
  end

end


function makeWidgetsClick (b, s, abx, aby)
  local tooltip = Widgets:getWidgetByTransform (abx, aby);
  
  if (tooltip and tooltip.variant == "click") then 
      if (not tooltip:checkDistance ()) then return false end
      local function holdTimer()
          if (tooltip.offset >= 100 and tooltip.clickHold) then
              if (tooltip.remote) then 
                network:emit(tooltip.network, true, false, localPlayer, tooltip);
              else
                network:emit(tooltip.network, false, tooltip);
              end

              tooltip.offset = 0;
              tooltip.clickHold = false;

              removeEventHandler("onClientRender", root, holdTimer);
          elseif tooltip.offset ~= 100 and not tooltip.clickHold then
              removeEventHandler("onClientRender", root, holdTimer);
          end
      end
      
      if b == "left" and s == "down" then                
          tooltip.clickHold = true;
          
          addEventHandler("onClientRender", root, holdTimer);
      elseif b == "left" and s == "up" then
          tooltip.clickHold = false;
          removeEventHandler("onClientRender", root, holdTimer);
      end
  end
end
