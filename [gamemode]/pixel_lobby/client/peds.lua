local positions = {
  [1] = {
    elem = nil,
    rotateOn = false,
    pos = Vector3(1085.94617, 1067.60132, 10.83816),
    rot = Vector3(0, 0, 190),
  },
  [2] = {
    elem = nil,
    pos = Vector3(1085.94617 - 0.6, 1067.60132 +0.5, 10.83816),
    rotateOn = false,
    rot = Vector3(0, 0, 180)
  },
  [3] = {
    elem = nil,
    rotateOn = false,
    pos = Vector3(1085.94617 + 0.6, 1067.60132 +0.5, 10.83816),
    rot = Vector3(0, 0, 160)
  }
}


local openSans = exports.pixel_assets:useCreateFont("opensans.Regular", 15);

function GameLobby.peds:start(characters)
  for i,v in pairs(characters) do
    GameLobby.peds:create(i, v, positions[i].pos, positions[i].rot);
  end

  addEventHandler("onClientRender", root, GameLobby.peds.drawNametags);
  addEventHandler("onClientClick", root, GameLobby.peds.rotate);
  addEventHandler("onClientCursorMove", root, GameLobby.peds.rotateMove);
  setCameraMatrix(1085.8563232422, 1063.8464355469, 11.225603103638, 1085.8563232422, 1163.8464355469, 11.225603103638, 0, 70);
end

function GameLobby.peds:stop()
  for k,v in ipairs(positions) do
    if v.elem and v.clothes then
        for ck,cv in ipairs(v.clothes) do
            exports.pixel_characters:destroyPlayerClothes(v.elem)
        end
      end
  end

  for k,v in ipairs(positions) do
    if v.elem then
      destroyElement(v.elem);
    end
  end

  removeEventHandler("onClientRender", root, GameLobby.peds.drawNametags);
  removeEventHandler("onClientClick", root, GameLobby.peds.rotate);
  removeEventHandler("onClientCursorMove", root, GameLobby.peds.rotateMove);
end


function GameLobby.peds:drawNametags()
  for k,v in ipairs(positions) do
      if (v.data) then
        dxDrawTextOnElement(v.elem, "( "..v.data.firstname.." "..v.data.lastname.." )",1,13,255,255,255,255, 1, openSans)
      end
  end
end


function GameLobby.peds:create(id, character, pos, rot)
  ped = createPed(character.model, pos)
  positions[id].elem = ped
  positions[id].data = character

  positions[id].startRotation = rot.z
  positions[id].targetRotation = 0
  


  local clothes = fromJSON(character.clothes)

  if (clothes) then 
    positions[id].clothes = clothes
    setElementRotation(ped, rot)
  
    for k,v in ipairs(clothes) do
        exports.pixel_characters:setPlayerClothe(ped, character.gender, v.type, v.index)
    end
  end


  setElementDimension(ped, getElementDimension(localPlayer))
end


function GameLobby.peds:rotate(button, state, _, _, _, _, _, clickedElement)
  if not clickedElement then positions[1].rotateOn = false positions[2].rotateOn = false positions[3].rotateOn = false return end
  if button == "left" and getElementType( clickedElement ) == "ped" then
      for index, value in ipairs( positions ) do
          if positions[index].elem == clickedElement then
              if state == "down" and not positions[index].rotateOn then
                positions[index].rotateOn = true
              elseif state == "up" and positions[index].rotateOn then
                positions[index].rotateOn = false
              end
          end
      end
  end
end

function GameLobby.peds:rotateMove(absoluteX, absoluteY)
  for index, value in ipairs( positions ) do
    if positions[index].rotateOn then
        if not positions[index].previousAbsoluteX then
          positions[index].previousAbsoluteX = absoluteX
        end

        if absoluteX > positions[index].previousAbsoluteX then
          positions[index].targetRotation = positions[index].startRotation + 5
        elseif absoluteX < Peds[index].previousAbsoluteX then
          positions[index].targetRotation = positions[index].startRotation - 5
        end

        positions[index].startRotation = interpolateBetween(positions[index].startRotation, 0, 0, positions[index].targetRotation, 0, 0, 0.5, "Linear")
        positions[index].previousAbsoluteX = absoluteX
        setElementRotation( positions[index].elem, 0, 0, positions[index].startRotation )
    end
  end
end

function GameLobby.peds:getElement(id)
  if not id then return end
  return positions[id].elem
end



function GameLobby.peds:setAlpha(id, alpha)
  if (not elem or not positions[id])then return end
  return setElementAlpha(positions[id], alpha)
end

function GameLobby.peds:setPedAnimation(id)
  if (not positions[id]) then return end
  local group,name = getRandomAnim();

  if (group and name) then 
    return setPedAnimation(positions[id].elem, group, name);
  end
end