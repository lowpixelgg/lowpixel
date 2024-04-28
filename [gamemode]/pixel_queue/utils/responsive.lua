local scrX, scrY = guiGetScreenSize()
factor = exports.pixel_ui:getScaleFactor()

function respo (num2) 
  return math.ceil(num2 * factor)
end