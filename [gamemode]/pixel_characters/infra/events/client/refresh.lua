addEventHandler("onClientElementDataChange", root, function (dataName, oldValue)      
  if (getElementType(source) == "player" or getElementType(source) == "ped") then
      if dataName == "clothes" then
        clothing:setupBodyClothes (source)
      elseif dataName == "tattoos" then
        tattoos:setupBodyTattoos(source) 
      end
  end
end);



addEventHandler("onClientResourceStart", resourceRoot, function ()
  tattoos:evaluate()

  for key, ped in ipairs(getElementsByType("player")) do
    clothing:setupBodyClothes(ped)
    tattoos:setupBodyTattoos(ped)
  end
end)


addEventHandler("onClientElementStreamIn", root, function ()
  if (getElementType(source) == "player" or  getElementType(source) == "ped") then
    clothing:setupBodyClothes(source)
    tattoos:setupBodyTattoos(source)
  end
end)


addEventHandler("onClientElementStreamOut", root, function ()
  if (getElementType(source) == "player" or getElementType(source) == "ped") then
    shaders:destroyShaders(source)
    clothing:clearPlayerCache(source)
  end
end)


network:fetch('pixel_characters:createSoundEffect',true):on(function(player,path)
  stats:createSoundEffect(player,path)
end)



addEventHandler( "onClientElementStreamOut", root,  function ()
    if getElementType(source) == "player" then
        stats:clearSoundCache(source)
    end
end)



network:fetch("pixel_characters:onServerRequestEat", true):on(function (...) makePlayerEat(...) end);
network:fetch("pixel_characters:onServerCancelTimer", true):on(function (...) makeServerDestroyTimer(...) end);