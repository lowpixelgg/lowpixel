scw, sch = guiGetScreenSize()

function getMousePosition()
  local mx, my = scw / 2, sch / 2
  if isCursorShowing() then
      mx, my = getCursorPosition()
      mx = mx * scw
      my = my * sch
  end
  return mx, my
end

function toggleCursor (...)
  showCursor(...);
end


if (localPlayer) then 
  bindKey("F2", "up", function () 
    toggleCursor(not isCursorShowing());
  end)
end


setPlayerHudComponentVisible("area_name", false);