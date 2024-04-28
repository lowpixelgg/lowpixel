function createCharacter (...)
  return Characters.repo:create(...)
end

function getSingleCharacter (...)
  return Characters.repo:getOne(...)
end

function getCharactersByRef (...)
  return Characters.repo:getByRef(...)
end

function saveSingleCharacter (...)
  return Characters.repo:save(...)
end