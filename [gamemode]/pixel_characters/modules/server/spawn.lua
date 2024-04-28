local imports = {
  interactions = exports.pixel_interactions,
}
local hotspawns = {
  {x = -1685.51099, y = -2242.67285, z = 13.54688},
  {x = 812.36169, y = -1351.55762, z = 0.50781}
}

local function spawnCharacter(player,skin, x,y,z,rx,ry,rz,int,dim)
	fadeCamera(player, true)
	setCameraTarget(player, player)
  
  spawnPlayer(player, x, y, z, 0, skin, 0, 0, nil)
  setElementPosition(player, x, y, z)
end


function spawn (player, id)
  if (not isElement(player) or type(id) ~= "string") then
    return
  end


  local character =  exports.pixel_core:getSingleCharacter (id, {
    "id", "firstname", "lastname", "address", "playTime", "hunger", "thirst", "clothes", "tattoos", "model", "gender"
  })


  if (not character) then return false end

  local clothes = fromJSON(character.clothes)
  local tattoos = tattoos and fromJSON(character.tattoos) or  {}
  local address = character.address and fromJSON(character.address) or false
  local random = math.random(1, #hotspawns)


  if (address) then
    spawnCharacter(player,
      character.model,
      address.x,
      address.y,
      address.z,
      address.rx,
      address.ry,
      address.rz,
      address.int,
      address.dim
    )

  else
    spawnCharacter(player,
      character.model,
      hotspawns[random].x,
      hotspawns[random].y,
      hotspawns[random].z,
      0,
      0,
      0,
      0,
      0
    )
  end

  
  element:set(player, {
    id = character.id,
    clothes = clothes or {},
    tattoos = tattoos or {},
    playTime = character.playTime,
    hunger = character.hunger,
    thirst = character.thirst
  });


  setCameraTarget(player)
  fadeCamera(player, true, 1)

  setElementData(player, "name", character.firstname .. ' ' .. character.lastname)
  setElementData(player, "state", "world");
  setElementData(player, "interaction", "character_interaction");
  setElementData(player, "gender", character.gender);

  network:emit("pixel_characters:onCharacterSpawn", true, player, player);
  network:emit("pixel_characters:onCharacterSpawn", false, player, player);
  
  network:emit("pixel_inv:onCharacterSpawn", true, false, player, player);
end