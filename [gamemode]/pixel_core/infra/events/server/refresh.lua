network:fetch("pixel_core:onClientPlayerJoin"):on(makeAuthFactory);

addEventHandler("onPlayerQuit", root, makeSaveFactory);