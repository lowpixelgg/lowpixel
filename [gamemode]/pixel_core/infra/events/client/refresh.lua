addEventHandler("onClientResourceStart", resourceRoot, makeClientDefaultsFactory);
network:fetch("pixel_characters:onCharacterSpawn", true):on(makeClientRefreshRPCState);