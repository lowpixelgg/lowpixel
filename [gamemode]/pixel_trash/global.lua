global = {}

local separators = {IPL = ", ", IDE = ", "};


function parseIPL (rw) 
    rw = (rw and string.split(rw, "\n")) or rw
    if not rw then return false end
    local result = {}
    for i = 1, table.length(rw), 1 do
      local data = string.split(rw[i], separators.IPL)
      data[2] = (data[2] and string.gsub(data[2], "%s", "")) or data[2]
      if data[2] then
        data.nativeID = (isNativeModelsEnabled and false) or nil
        data.nativeLOD = (data.nativeID and false) or nil
        table.insert(result, data)
      end
    end
    return result
end

async(function (this) 
    local data = parseIPL(fs:read("assets/trashs.ipl"));

    if (data) then 
        for i=1, #data do 
            table.insert(global, {
                {name = "Lixeira #"..tostring(i), id = "trash_"..tostring(i), position = Vector3(data[i][4], data[i][5], data[i][6]), widget = nil },
            })
        end
    end
end):resume()