local imports = {
    createBrowser = createBrowser,
    fetchRemote = fetchRemote,
    loadBrowserURL = loadBrowserURL,
    addEventHandler = addEventHandler,
    addEvent = addEvent,
    ui = exports.pixel_ui
}

local websockets = class:create("websockets");


-- Register net events
addEvent("websocket:onMessage", true);
addEvent("websocket:onConnect", true);
addEvent("websocket:onPageLoaded", true);

function websockets.public:init(address, serverId)
  if (not address or not serverId) then return false end

  self.endpoint = address;
  self.serverId = serverId;
  self.clientIp = nil;
  self.voipStatus = nil;
  self.browser = createBrowser(1, 1, true, true);
  self.latency = nil;


  addEventHandler("onClientBrowserCreated", self.browser, function()
    loadBrowserURL(self.browser, "http://mta/local/assets/websocket/index.html");
    setBrowserRenderingPaused(self.browser, true);
  end);

  addEventHandler("onClientBrowserDocumentReady", self.browser, function () 
    executeBrowserJavascript(self.browser, 'doStartWebSocket ("'..self.endpoint..'", "rocketmta")')
  end);

  
  addEventHandler("websocket:onMessage", self.browser, function (...) self:eventProc(...) end);
  addEventHandler("websocket:onConnect", self.browser, function () self:doUpdateClientIP(self.endpoint) end);

  -- addEventHandler("onClientRender", root,websockets.public.draw);
  network:emit("pixel_voice:onCharacterHandshake", true, false, localPlayer);
  -- removeEventHandler("onClientRender", root, websockets.public.draw);
  
  return self;
end



function websockets.public.draw () 
  local startX, startY = imports.ui:createLayoutBox("queue", respo(452), respo(218), 100, 0, "left", "center", false);
    
  dxDrawText("HANDSHAKE", startX, startY, 100, 50, tocolor(206, 211, 224), 1.0, fonts.akiraBold52);
  dxDrawText("Oque é isso?", startX, startY + 80, 100, 50, tocolor(206, 211, 224), 1.0, fonts.sfBold16, "left", "top", false, true, false, true, false);
  dxDrawText("Para desfrutar da melhor experiência possível em termos de comunicação, nós utilizamos um sistema de voip externo.\nPor isso, você precisa conectar em nosso servidor do TeamSpeak(#CED3E0lowpixel.tsbr.top#70737A)\n\n#a87d32Lembre-se de que você precisa estar com o nosso plugin instalado.\nEle pode ser encontrado em nosso Discord.", startX, startY + 100, 100, 50, tocolor(112, 115, 122), 1.0, fonts.sfRegular18, "left", "top", false, true, false, true, false)
end



function websockets.public:doUpdateClientIP(endpoint)
  if (not endpoint) then return false end

  if (self.voip ~= "OK") then 
    fetchRemote('http://'.. endpoint .. '/getmyip', function (res, err) 
      if (err == 0) then 
        self.clientIp = res;
        self:sendMessage ("updateClientIP", {
          ip = self.clientIp
        });

      else
        error("Problems to update client ip", err)
      end
    end)
  end

  setTimer(function () self:doUpdateClientIP(self.endpoint) end, 10000, 1);
end


function websockets.public:eventProc (data) 
  local payload = fromJSON(data);

  local proc = {
    ["setTS3Data"] = function () 
      if (VOIP) then
        if (isEventHandlerAdded("onClientRender", root, websockets.public.draw)) then 
        end
        
        VOIP:updateClient ('pluginVersion', payload.data.pluginVersion);
        VOIP:updateClient ('pluginUUID', payload.data.uuid);

        if (payload.data.talking) then 
          setElementData(VOIP.serverId, "voip:talking", 1, true);
        else
          setElementData(VOIP.serverId, "voip:talking", 0, true);
        end
      end
    end,
    ["ping"] = function () 
      self:sendMessage("pong", {})
    end,
    ["disconnectMessage"] = function () 
      print("voice: disconnectMessage")
    end,
    ["onLatency"] = function () 
      self.latency = payload.data
    end,
  }

  return proc[payload.event] ()
end


function websockets.public:sendMessage (event, data)
    executeBrowserJavascript(self.browser, "doSendMessage('"..event.."', '"..toJSON(data).."')");
end


function websockets.public:receiveClientCall(name, payload) 
  self.voipStatus = "OK";

  local proc = {
    ["initializeSocket"] = function () 
      self:init("34.95.176.27:33250", "rocketmta");
    end,
    ["updateTokovoipInfo"] = function () 
    end,
    ["updateTokoVoip"] = function () 
      if (VOIP) then 
        self:sendMessage("data", payload);
      end
    end,
    ["disconnect"] = function ()
      self.voipStatus = "DISCONNECT";
    end,
  }

  return proc[name] ()
end