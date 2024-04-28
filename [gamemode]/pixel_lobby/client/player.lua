local MUSIC_VOLUME = 0.02
local TRACKS_COUNT = 5
local currentTrack = 2
local sound
local soundVolume = 0
local soundVolumeSpeed = 10


function GameLobby.player:playNextTrack()
	currentTrack = currentTrack + 1;
	
  if (currentTrack > TRACKS_COUNT) then
		currentTrack = 1;
	end

	if (isElement(sound)) then
		destroyElement(sound);
	end

  sound = playSound("assets/sounds/" .. tostring(currentTrack) .. ".mp3", false);
  setSoundEffectEnabled(sound, "reverb", true);
end


function GameLobby.player.update(dt)
  dt = dt / 1000

	if (not isElement(sound)) then
		return false;
	end

  local vol = getSoundVolume(sound);
  setSoundVolume(sound, vol + (soundVolume - vol) * dt * soundVolumeSpeed);
end


function GameLobby.player:start()
	addEventHandler("onClientSoundStopped", resourceRoot, GameLobby.player.playNextTrack);
	addEventHandler("onClientPreRender", root, GameLobby.player.update);

	currentTrack = math.random(1, TRACKS_COUNT);
	GameLobby.player:playNextTrack();

	if (isElement(sound)) then
    setSoundVolume(sound, 0);
    setSoundPosition(sound, math.random(0, getSoundLength(sound) * 0.1));
	end

	soundVolume = MUSIC_VOLUME;
end


function  GameLobby.player:fadeOut()
	soundVolume = 0;
end


function GameLobby.player:stop (fadeTimer)
  GameLobby.player:fadeOut()
	removeEventHandler("onClientSoundStopped", resourceRoot, GameLobby.player.playNextTrack);
	removeEventHandler("onClientPreRender", root, GameLobby.player.update);

	setTimer(function ()
			if (isElement(sound)) then
			destroyElement(sound);
		end
	end, fadeTimer, 1);
end