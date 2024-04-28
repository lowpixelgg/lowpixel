Animations = {};

function Animations:new () 
  Animations.hotbar = { ClientInventory.hotbarUI:getOffsets() };
  Animations.container = { ClientInventory.containerUI:getOffsets() };
  Animations.person = { ClientInventory.personUI:getOffsets() };
  Animations.trade = { ClientInventory.tradeUI:getOffsets() };
end


function Animations:HotbarInOut(progressAnimation) 
  local tickAnimation = getTickCount();
  local hby = Animations.hotbar[2];
  
  local function render_a () 
    if (ClientInventory.isRendering and ClientInventory.hotbarUI.isRendering and progressAnimation == 'enter') then 
      local progress = (getTickCount() - tickAnimation) / 500;
      local hotbarA = interpolateBetween(hby - 100, 0, 0, hby, 0, 0, progress, 'OutQuad');
      
      ClientInventory.hotbarUI:setOffSets(false, hotbarA);
      
      if (progress >= 1) then
        removeEventHandler('onClientRender', root, render_a);
      end 
    elseif (not  ClientInventory.hotbarUI.isRendering and progressAnimation == 'leave') then
      local progress = (getTickCount() - tickAnimation) / 500;
      local hotbarA = interpolateBetween(hby, 0, 0, hby - 100, 0, 0, progress, 'OutQuad');

      ClientInventory.hotbarUI:setOffSets(false, hotbarA);
      
      if (progress >= 1) then
        removeEventHandler('onClientRender', root, render_a);
      end
    end
  end
  
  if (not isEventHandlerAdded( 'onClientRender', root, render_a)) then
    addEventHandler("onClientRender", root, render_a);
    ClientInventory.hotbarUI:setOffSets(false, hby);
  end
end



function Animations:PersonTabInOut(progressAnimation)
  local tickAnimation = getTickCount();
  local hx = Animations.hotbar[1];
  local px = Animations.person[1];
  local cx = Animations.container[1];
  
  local function render_b () 
    if (ClientInventory.isRendering and  progressAnimation == 'enter') then 
      local progress = (getTickCount() - tickAnimation) / 900;
      local toLeft = interpolateBetween(cx, 0, 0, cx - 200, 0, 0, progress, 'OutQuad');
      local toRight = interpolateBetween(px, 0, 0, px + 200, 0, 0, progress, 'OutQuad');
      
      
      ClientInventory.hotbarUI:setOffSets(toLeft, false);
      ClientInventory.containerUI:setOffSets(toLeft, false);
      ClientInventory.personUI:setOffSets(toRight, false);
      
      if (progress >= 1) then
        removeEventHandler('onClientRender', root, render_b);
      end
    elseif (progressAnimation == 'leave') then
      local progress = (getTickCount() - tickAnimation) / 600;
      local toLeft = interpolateBetween(-200, 0, 0, 0, 0, 0, progress, 'OutQuad');
      local toRight = interpolateBetween(200, 0, 0, 0, 0, 0, progress, 'OutQuad');
      
      ClientInventory.hotbarUI:setOffSets(toLeft, false);
      ClientInventory.containerUI:setOffSets(toLeft, false);
      ClientInventory.personUI:setOffSets(toRight, false);
      
      if (progress >= 1) then
        removeEventHandler('onClientRender', root, render_b);
      end
    end
  end
  
  
  if not isEventHandlerAdded( 'onClientRender', root, render_b) then
    addEventHandler("onClientRender", root, render_b);
  end
end



function Animations:TradeTabInOut(progressAnimation)
  local tickAnimation = getTickCount();
  local hx = Animations.hotbar[1];
  local tx = Animations.person[1];
  local cx = Animations.container[1];
  
  local function render_b () 
    if (ClientInventory.isRendering and  progressAnimation == 'enter') then 
      local progress = (getTickCount() - tickAnimation) / 900;
      local toLeft = interpolateBetween(cx, 0, 0, cx - 170, 0, 0, progress, 'OutQuad');
      local toRight = interpolateBetween(tx, 0, 0, tx + 170, 0, 0, progress, 'OutQuad');
      
      
      ClientInventory.hotbarUI:setOffSets(toLeft, false);
      ClientInventory.containerUI:setOffSets(toLeft, false);
      ClientInventory.tradeUI:setOffSets(toRight, false);
      
      if (progress >= 1) then
        removeEventHandler('onClientRender', root, render_b);
      end
    elseif (progressAnimation == 'leave') then
      local progress = (getTickCount() - tickAnimation) / 600
      local toLeft = interpolateBetween(-170, 0, 0, 0, 0, 0, progress, 'OutQuad');
      local toRight = interpolateBetween(170, 0, 0, 0, 0, 0, progress, 'OutQuad');
      
      ClientInventory.hotbarUI:setOffSets(toLeft, false);
      ClientInventory.containerUI:setOffSets(toLeft, false);
      ClientInventory.tradeUI:setOffSets(toRight, false);
      
      if (progress >= 1) then
        removeEventHandler('onClientRender', root, render_b);
      end
    end
  end
  
  
  if not isEventHandlerAdded( 'onClientRender', root, render_b) then
    addEventHandler("onClientRender", root, render_b);
  end
end

