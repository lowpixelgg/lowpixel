function makeSaveFactory () 
  local id = getElementData(source, "id")
  local state = getElementData(source, "state")

  if (not id) then return false end
  if (state ~= "world") then return false end


  local character = Characters.repo:getOne (id, {
    "id", "firstname", "lastname", "address", "playTime", "hunger", "thirst", "clothes", "tattoos"
  });

  if (not character) then return false end

  local x,y,z = getElementPosition(source)
  local rx, ry,rz = getElementRotation(source)

  local toStore = {
    x = x,
    y = y,
    z = z,
    rx = rx,
    ry = ry,
    rz = rz,
    dim = getElementDimension(source),
    int = getElementInterior(source)
  }


  character.address = toJSON(toStore)
  character.tattoos = toJSON(getElementData(source, "tattoos") or {}) 
  character.clothes = toJSON(getElementData(source, "clothes") or {})

  if (isElement(source)) then 
    network:emit("pixel_characters:onSaveAction", true, false, source);
  end

  Characters.repo:save(character)
end