factor = exports.pixel_ui:getScaleFactor()
local scw, sch = guiGetScreenSize();


function respo (num2) 
  return math.ceil(num2 * factor)
end


function cursorY( )
	if isCursorShowing( ) then
		local _, mouseY = getCursorPosition( )
		return mouseY * scw
	end
	return 0
end