local imports = {
    widgets = exports.pixel_widgets,
    assets = exports.pixel_assets
}


bombers = {}

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


if (localPlayer) then 
    addEventHandler("onClientResourceStart", resourceRoot, function () 
        local data = parseIPL(fs:read("assets/bombers.ipl"));
        async(function (this) 
            if (data) then 
                for i=1, #data do 
                    local rx, ry, rz = fromQuaternion(tonumber(data[i][7]), tonumber(data[i][8]), tonumber(data[i][9]), tonumber(data[i][10]))
                    local bomber = createObject(1610, data[i][4], data[i][5], data[i][6], rx+0.5, ry, rz);
              
                    bombers[i] = {
                        id = i,
                        bomber = bomber,
                    }    
                end
            end
    
    
            for i, bomber in ipairs(bombers) do
                local x,y,z = getElementPosition(bomber.bomber);
        
                imports.widgets:createWidget(i, {
                    variant = "click",
                    name = "abs",
                    text = "Abastecer",
                    network = "pixel_gas:onPlayerGasOpen",
                    autoRendering = true,
                    remote = false,
                    maxDistance = 5,
                    position = Vector3(x,y,z+1)
                });    
            end
    
            this:destroyInstance();
        end):resume()
    end)
end


if (triggerClientEvent) then 
    addEventHandler("onResourceStart", resourceRoot, function () 
        local data = parseIPL(fs:read("assets/bombers.ipl"));

        if (data) then 
            for i=1, #data do 
                Bombers:registry(i, Vector3(data[i][4], data[i][5], data[i][6])); 
            end
        end
    end)
end