factor = exports.pixel_ui:getScaleFactor()

function respo (num2) 
  return math.ceil(num2 * factor)
end


function getItemIndex(num, tableSize)
    return math.min(math.ceil((num * tableSize) / 100), tableSize)
end