local scrX, scrY = guiGetScreenSize()
local devScreenY = 900
factor = exports.pixel_ui:getScaleFactor()

function respo (num2) 
  return math.ceil(num2 * factor)
end

function wordWrap(text, maxwidth, scale, font, colorcoded)
    local lines = {}
    local words = split(text or "", " ") 
    local line = 1 
    local word = 1 
    local endlinecolor
    while (words[word]) do 
        repeat
            if colorcoded and (not lines[line]) and endlinecolor and (not string.find(words[word], "^#%x%x%x%x%x%x")) then 
                lines[line] = endlinecolor 
            end
            lines[line] = lines[line] or "" 

            if colorcoded then
                local rw = string.reverse(words[word]) 
                local x, y = string.find(rw, "%x%x%x%x%x%x#") 
                if x and y then
                    endlinecolor = string.reverse(string.sub(rw, x, y)) 
                end
            end
      
            lines[line] = lines[line]..words[word] 
            lines[line] = lines[line] .. " " 

            word = word + 1 
        until ((not words[word]) or dxGetTextWidth(lines[line].." "..words[word], scale, font, colorcoded) > maxwidth) 
    
        lines[line] = string.sub(lines[line], 1, -2) 
        if colorcoded then
            lines[line] = string.gsub(lines[line], "#%x%x%x%x%x%x$", "") 
        end
        line = line + 1 
    end 
    return lines
end

function getVectorAngle(vector)
	return math.atan2(vector.y, vector.x)
end


function getFormatedNumber(cMoney)
    local moneySuff = {"K", "M", "B", "T", "Q"}
    didConvert = 0
    if not cMoney then
        return "?"
    end
    while cMoney / 1000 >= 1 do
        cMoney = cMoney / 1000
        didConvert = didConvert + 1
    end
    if didConvert > 0 then
        return "$" .. string.format("%.2f", cMoney) .. moneySuff[didConvert]
    else
        return "$" .. cMoney
    end
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

function rotatePosition3D(cx, cy, cz, ox, oy, oz, rotH, rotV)
    local radiansH = math.rad(rotH)
    local radiansV = math.rad(rotV)

    local radius = math.sqrt(ox^2 + oy^2 + oz^2)
    local theta = math.atan2(oy, ox)
    local phi = math.acos(oz / radius)

    theta = theta + radiansH
    phi = phi + radiansV

    local newX = cx + radius * math.sin(phi) * math.cos(theta)
    local newY = cy + radius * math.sin(phi) * math.sin(theta)
    local newZ = cz + radius * math.cos(phi)
    
    return Vector3(newX, newY, newZ);
end

function getOffset3D(basePosition, relativePosition)
    local offsetX = relativePosition.x - basePosition.x
    local offsetY = relativePosition.y - basePosition.y
    local offsetZ = relativePosition.z - basePosition.z
    
    return Vector3(offsetX, offsetY, offsetZ);
end