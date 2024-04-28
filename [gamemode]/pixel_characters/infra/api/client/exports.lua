function setPlayerClothe (...)
  return makeAddPlayerClothes(...);
end


function remPlayerClothe (...)
  return makeRemovePlayerClothes(...);
end


function getPlayerClothes (...) 
  return makeGetPlayerClothes(...);
end


function setPlayerClothecolor (...) 
  return makeSetClotheColor(...);
end

function destroyPlayerClothes (...) 
  return makeDestroyPlayerClothes(...);
end


function setPlayerAttachment(...)
  Props.setPlayerAttachment(...);
end

function removePlayerAttachment(...)
  Props.removePlayerAttachment(...);
end