network:fetch("lobby:onClientLeaveLobby"):on(function (...) makeLeaveLobby(...) end);
network:fetch("lobby:onClientExitCreator", true):on(function (...) makeCreateCharacter(...) end);