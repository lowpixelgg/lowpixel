function roaming(timestamp)
  local now = getRealTime().timestamp
  local diff = timestamp - now
  
  if diff <= 0 then
    return false
  elseif diff <= 60 then
    return diff .. " seg"
  elseif diff <= 3600 then
    local minutes = math.floor(diff / 60)
    return minutes .. " min"
  elseif diff <= 86400 then
    local hours = math.floor(diff / 3600)
    return hours .. " horas"
  else
    local days = math.floor(diff / 86400)
    return days .. " dias"
  end
end


function getFormatedNumber(cMoney)
  if not cMoney then
    return "?"
  end

  local suffixes = {"", "k", "m", "b", "t"}
  local suffixIndex = 1

  while cMoney / 1000 >= 1 and suffixIndex < #suffixes do
    cMoney = cMoney / 1000
    suffixIndex = suffixIndex + 1
  end

  local formattedNumber = string.format("%.1f%s", cMoney, suffixes[suffixIndex])

  return formattedNumber
end


function isEventHandlerAdded( sEventName, pElementAttachedTo, func )
  if type( sEventName ) == 'string' and isElement( pElementAttachedTo ) and type( func ) == 'function' then
      local aAttachedFunctions = getEventHandlers( sEventName, pElementAttachedTo )
      if type( aAttachedFunctions ) == 'table' and #aAttachedFunctions > 0 then
          for i, v in ipairs( aAttachedFunctions ) do
              if v == func then
                  return true
              end
          end
      end
  end
  return false
end


function getMousePosition()
  local mx, my = scw / 2, sch / 2
  if isCursorShowing() then
      mx, my = getCursorPosition()
      mx = mx * scw
      my = my * sch
  end
  return mx, my
end


function executeCallback(callback, ...)
  if type(callback) ~= "function" then
    return false
  end
  local success, err = pcall(callback, ...)
  if not success then
    return false
  end
  return true
end