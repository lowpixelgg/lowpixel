network:fetch("pixel_voice:onPlayerSpawn", true):on(initializeVoipPlayer);
network:fetch("pixel_voice:onPlayerJoinChannel", true):on(onPlayerJoinChannel);
network:fetch("pixel_voice:onPlayerLeaveChannel", true):on(onPlayerLeaveChannel);