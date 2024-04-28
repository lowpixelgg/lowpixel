Design = {};



function Design:isMouseInPosition(x, y, w, h) 
  if (not isCursorShowing()) then return false end
    
  local cursorX, cursorY = getCursorPosition();
  calculatedCursorX, calculatedCursorY = cursorX * scw, cursorY * sch;
  
  if (calculatedCursorX <= x or calculatedCursorX >= x + w or calculatedCursorY <= y or calculatedCursorY >= y + h) then
      return false;
  end

  return true;
end