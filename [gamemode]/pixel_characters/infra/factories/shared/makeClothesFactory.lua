function makeAddPlayerClothes (player, gender, part, index, color) 
  if (not isElement(player)) then return false end
  
  local attachedTo = getConfig(gender, part).attachedTo;
  
  
  if (attachedTo) then
    local _clothes = getElementData(player, "clothes") or {};
    local attachIndex, attached = table.find(_clothes, function (attach) return getConfig(gender, attach.type).attachedTo == attachedTo end);

    if (attachIndex) then 
      makeRemovePlayerClothes(player, gender, attached.type)
    end
  end


  local occluders = getConfig(gender, part).occluders;
  local body = getConfig(gender, part).body;
  local clothes = getElementData(player, "clothes") or {};



  local exists = table.find(clothes, function (clothe)
    return clothe.type == part;
  end)
  
  if (clothes[exists]) then
    clothes[exists].index = index;
  else
    table.insert(clothes, {type = part, index = index, color = color});
  end

  
  setElementData(player, "clothes", clothes);
  setElementData(player, "gender", gender);

  if (body) then 
    for _, bodyClothe in pairs(body) do 
      local _, bodyExists = table.find(clothes, function (clothe) return clothe.type == bodyClothe end);

      if (bodyExists) then 
        makeRemovePlayerClothes (player, gender, bodyExists.type) 
      end
    end
  end
end


function makeRemovePlayerClothes (player, gender, type) 
  if (not isElement(player) ) then return false end

  local clothes = getElementData(player, "clothes") or {};
  local body = getConfig(gender, type).body;
  local backoffs =  getConfig(gender, type).backoff;



  local exists = table.find(clothes, function (clothe)
    return clothe.type == type;
  end)


  if (not exists) then return end

  local tmp = {};

  for k,v in ipairs(clothes) do
    if (k ~= exists) then
      table.insert(tmp, {type = v.type, index = v.index, color = color});
    end
  end

  setElementData(player, "clothes", tmp);
  setElementData(player, "gender", gender);


  if (body) then 
    for _, bodyClothe in pairs(body) do
      if (type == bodyClothe.type) then return false end

      local _, bodyExists = table.find(clothes, function (clothe) return clothe.type == bodyClothe end);

      if (not bodyExists) then 
        makeAddPlayerClothes (player, gender, bodyClothe, 1, {1,1,1,1}) 
      end
    end
  end

  return true;
end



function makeGetPlayerClothes (player) 
  local clothes = getElementData(player, "clothes") or {};
    
  if (clothes) then
      return clothes
  end

  return false;
end



function makeSetClotheColor (player, type, color) 
  local clothes = getElementData(player, "clothes") or {};
    
  local existsIndex, clothe = table.find(clothes, function (clothe)
      return clothe.type == type;
    end)
  

  if (not existsIndex) then return end
  clothe.color = color


  return setElementData(player, "clothes", clothes);
end


function makeDestroyPlayerClothes (source)     
  shaders:destroyShaders(source);
  clothing:clearPlayerCache(source);
end



-- if (localPlayer) then 
--   addCommandHandler("clothes_add", function (_, type, gender, index) 
--     index = tonumber(index);
  
--     makeAddPlayerClothes(localPlayer, gender, type, index)
--   end)
  
--   addCommandHandler("clothes_rem", function (_, type, gender, index) 
--     makeRemovePlayerClothes(localPlayer, gender, type)
--   end)
  
--   -- setElementData(localPlayer, "clothes", {});

--   addCommandHandler("clothes_body", function (_, arg) 
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "head", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "eye", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "torso", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "torso_2", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "torso_3", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "shoulder_l", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "shoulder_r", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "arm_l", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "arm_r", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "hand_l", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "hand_r", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "tight_l", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "tight_r", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "leg_l", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "leg_r", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "calf_l", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "calf_r", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "feet_body_l", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "feet_body_r", 1);

--     makeAddPlayerClothes(localPlayer, arg or "masculine", "feet_1", 1);
--     makeAddPlayerClothes(localPlayer, arg or "masculine", "pants_1", 1);
--   end)
-- end