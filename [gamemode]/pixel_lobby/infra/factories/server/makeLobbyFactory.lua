local imports = {
  core = exports.pixel_core,
  inventory = exports.pixel_inv,
  characters = exports.pixel_characters
}


local slots = {
  ["torso"] =  {clotheName = "torso_base", slot = 6},
  ["shoes"]  =  {clotheName = "shoe_base",  slot = 12},
  ["legs"]  =  {clotheName = "pants_base", slot = 11}
}

function doMakeID () 
  return try({
      exec = function ()
          local character_id = await(promise(function (resolve, reject) 
              
              local idTimer = setTimer(function () 
                  local id = generateID()
                  local exists = imports.core:getSingleCharacter(id, { "id" })
              
                  if (not exists) then 
                    idTimer = nil;
                      resolve(string.upper(id));

                      return;
                  end                
              end, 1000, 0)
          end))

          return character_id
      end,
      catch = function () 
          return false
      end
  })
end



function makeJoinLobby (player)
  local id = getElementData(player, "user").userId;

  if (not id) then
    kickPlayer(player);
  end

  local characters = imports.core:getCharactersByRef(id, {
    "id",
    "firstname",
    "lastname",
    "playTime",
    "clothes",
    "model",
    "gender",
  });

  setElementData(player, "state", "lobby");
  spawnPlayer (player, 0, 0, 0, 0, 0, 0, 0);

  if (#characters > 0) then 
    network:emit("lobby:onPlayerEnterLobby", true, false, player, characters);
  else
    async(function (this) 
      local id = doMakeID();

      if (id) then 
        network:emit("lobby:onPlayerEnterLobby", true, false, player, false, id);
        this:destroyInstance()
      end
    end):resume()
  end
end


function makeCreateCharacter (player, data) 
  local user = getElementData(player, "user");

  if (user) then 
    local create = imports.core:createCharacter({
      id = data.id,
      firstname = data.firstName,
      lastname = data.lastName,
      hunger = 100,
      thirst = 100,
      clothes = toJSON(data.clothes),
      tattoos = toJSON({}),
      playTime = 0,
      model = data.model,
      gender = data.gender,
      refId = user.userId
    });
  
    if (create) then         
      setElementData(player, "id", data.id);

      async(function (this) 
        local registryInv = imports.inventory:registryInventory(player, false);

        network:fetch("pixel_lobby:onInventoryRegister", true):on(function () 
          for k,v in ipairs(data.clothes) do 
            local clothe = imports.characters:getConfig(data.gender, v.type);

            if (#clothe.body >= 1) then 
              local attachedTo = imports.characters:getConfig(data.gender, v.type).attachedTo;
    
              if (attachedTo) then 
                local slot = slots[attachedTo]
                
                if (slot) then
                  imports.inventory:givePlayerItem(player, slot.clotheName, 1, 1, 1, slot.slot, { 
                    is = "clothing",
                    genre = data.gender,
                    part = v.type,
                    index = v.index
                  }, "person");
                end
              end            
            end
          end    
          
          this:destroyInstance();
        end);
      end):resume()
  

      makeJoinLobby (player);
    else
      kickPlayer(player)
    end
  end
end

function makeLeaveLobby (player, id)
  setElementFrozen(player, false);
  setElementAlpha(player, 255);
  setElementData(player, "id", id)

  network:emit("pixel_voice:onPlayerSpawn", true, false, player, true);
end