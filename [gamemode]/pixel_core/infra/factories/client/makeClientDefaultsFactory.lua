function makeClientDefaultsFactory () 
    setBlurLevel(0);
    setOcclusionsEnabled(false);
    setWorldSoundEnabled(5, false);
    setPlayerHudComponentVisible("all", false);

    io = socket:create("local", "http://127.0.0.1:3030", "websocket")
  
    io:on("__created", function () 
        io:emit("pixel_core:getUserToken", '');
        io:on("pixel_core:getUserToken", function (token) 
          network:emit("pixel_core:onClientPlayerJoin", true,false, localPlayer, token)
        end)
    end);

    if (isDiscordRichPresenceConnected()) then 
      setDiscordApplicationID(Metas.gameMeta.discord.appId);
      setDiscordRichPresenceAsset(Metas.gameMeta.discord.largeAsset, "rocketmta.com")

      for k,button in ipairs(Metas.gameMeta.discord.buttons) do 
        setDiscordRichPresenceButton(k,  button.name, button.url);
      end
    end
end

function contarJogadoresAtivos()
  local jogadores = getElementsByType("player")
  return #jogadores
end

function makeClientRefreshRPCState () 
  if (isDiscordRichPresenceConnected()) then 
    local id = getElementData(localPlayer, "id");
    local name = getElementData(localPlayer, "name");

    if (id and name) then 
      setDiscordRichPresenceDetails("Multi Theft Auto: San Andreas");

      setTimer(function () 
        setDiscordRichPresenceState(string.format("%s jogadores online", contarJogadoresAtivos()))
      end, 20000, 0)
    end
  end
end