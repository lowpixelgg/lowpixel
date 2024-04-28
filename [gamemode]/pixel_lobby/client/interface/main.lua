local id;
local display = "UI_LOBBY"
local scx, scy = guiGetScreenSize();

exports.webui:startUp()

function GameLobby.interface:start(user, avatar, characters)
  id = exports.webui:createWebWindow(0, 0, scx, scy, "http://mta/pixel_lobby/assets/html/webui.html", true)
  exports.webui:executeJavascript(id, "const Lobby = new LobbyClass('"..user.username.."', '"..avatar.."', "..toJSON(characters)..")")

  addEventHandler("onClientRender", root, GameLobby.interface.draw)
end


function GameLobby.interface:draw()
  if (not id) then return false end
  
  if display == "UI_LOBBY" then
    exports.webui:draw(id)
  end
end


function  GameLobby.interface:stop()
  removeEventHandler("onClientRender", root, GameLobby.interface.draw)
  exports.webui:destroyWebWindow(id)
end