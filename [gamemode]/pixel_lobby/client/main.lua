local imports = {
  ui = exports.pixel_ui
}

GameLobby = {};
GameLobby.player = {};
GameLobby.peds = {};
GameLobby.interface = {};


function GameLobby:enter (characters, id)
  local account = getElementData(localPlayer, "user");


  if (characters) then 
    fetchRemote(account.avatar, { method="GET" }, function (data, headers)
      fadeCamera(true);
      setTime(12,0);

      imports.ui:toggleCursor(true);

      if (headers.success) then
        GameLobby.interface:start(account, base64Encode(data), characters)
      else
        GameLobby.interface:start(account, 'error', characters)
      end
  
      
      GameLobby.peds:start(characters)
      GameLobby.player:start();
    end);

    if (isDiscordRichPresenceConnected()) then 
      setDiscordRichPresenceDetails("No Lobby");

      if (#characters == 1) then 
        setDiscordRichPresenceState("Aguardando com 1 personagem..");
      else
        setDiscordRichPresenceState("Aguardando com "..#characters.." personagens..");
      end
  end
  else
    fadeCamera(true);
    setTime(12,0);

    setElementDimension(localPlayer, 777);
    CreatorEngine:start (id);
  end
end

function GameLobby:stop(id)
  fadeCamera(false, 0.5)

  setTimer(function ()
    fadeCamera(false);
    imports.ui:toggleCursor(false);
  
    GameLobby.interface:stop();
    GameLobby.peds:stop();
    GameLobby.player:stop(1000);
    
    network:emit("lobby:onClientLeaveLobby", true, false, localPlayer, id);
  end, 2000, 1);


  collectgarbage()
end