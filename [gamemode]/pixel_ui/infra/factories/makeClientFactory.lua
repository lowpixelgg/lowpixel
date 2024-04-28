local function getLayoutBoxes(x, y)
  for k,v in pairs(LayoutBox.cache) do 
    if (v:isInside(x, y)) then return v end
  end
  
  return false;
end


function makeLayoutBoxEvents (b, s, abx, aby) 
  if (b == 'left' and s == 'down') then 
    local box = getLayoutBoxes(abx, aby);
    
    if (not box) then return false end
    
    carry = box
    
    carry.click = {
      x = abx - box.startX,
      y = aby - box.startY
    }
    
    carry:setMoving(true)
  elseif (b == 'left' and s == 'up') then
    if (carry) then 
      carry:setMoving(false);
    end
  end
end