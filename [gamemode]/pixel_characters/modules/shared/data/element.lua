local element = class:create("element")

element.public.loadFields = {
  "id",
  "firstname",
  "lastname",
  "playTime",
  "hunger",
  "thirst",
  "clothes",
  "tattoos"
}

element.public.saveFields = {
  "playTime",
  "hunger",
  "thirst",
  "tattoos",
  "clothes",
}

function element.public:set(player, data)
  for i, name in ipairs(element.public.loadFields) do
    if (data[name] ~= nil) then
      setElementData(player, name, data[name])
    end
  end
end


function element.public:get(player)
  local fields = {}
  for i,name in ipairs(element.public.saveFields) do
    fields[name] = getElementData(player, name)
  end

  return fields
end


function element.public:clear(player)
  for i,name in ipairs(loadFields) do
    setElementData(player, name, nil)
  end
end