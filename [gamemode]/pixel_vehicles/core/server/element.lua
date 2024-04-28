local element = class:create("element");

element.public.loadFields = {
    "_id",
    "character",
    "chest_id",
    "numberplate",
    "fuel",
    "damage",
    "stickers",
    "parking_id",
    "model",
    "parking_entry"
}

element.public.saveFields = {
    "_id",
    "character",
    "numberplate",
    "chest_id",
    "fuel",
    "damage",
    "stickers",
    "parking_id",
    "parking_entry"
}


function element.public:set(vehicle, data)
    for i, name in ipairs(element.public.loadFields) do
        if (data[name] ~= nil) then
            setElementData(vehicle, name, data[name])
        end
    end
end


function element.public:get(vehicle)
    local fields = {}
    for i,name in ipairs(element.public.saveFields) do
        fields[name] = getElementData(vehicle, name)
    end
    
    return fields
end


function element.public:clear(vehicle)
    for i,name in ipairs(loadFields) do
        setElementData(vehicle, name, nil)
    end
end
