local voip = class:create("voip");


function voip.public:create(...) 
  local instance = self:createInstance();

  if instance and not instance:load(...) then
    instance:destroyInstance()
    return false
  end
  
  return instance
end


function voip.public:load(config)
  self.config = config;
  
  for k,v in pairs(self.config) do 
    self[k] = v;
  end
  
  self.lastNetworkUpdate = 0;
  self.playerList = {};
  self.lastPlayerListUpdate = self.playerListRefreshRate;
  return self;
end


function voip.public:loop() 
  self:processFunction();
  websockets:receiveClientCall("updateTokoVoip", self.plugin_data);
 
  self.lastNetworkUpdate = self.lastNetworkUpdate + self.refreshRate;
  self.lastPlayerListUpdate = self.lastPlayerListUpdate + self.refreshRate;
  if (self.lastNetworkUpdate >= self.networkRefreshRate) then
    self.lastNetworkUpdate = 0;
  end
  if (self.lastPlayerListUpdate >= self.playerListRefreshRate) then
    self.playerList = getElementsByType("player");
    self.lastPlayerListUpdate = 0;
  end
end

function voip.public:initialize() 
  websockets:receiveClientCall("initializeSocket", self.wsServer)

  setTimer(function ()
    if ((self.keySwitchChannelsSecondary and getKeyState(self.keySwitchChannelsSecondary)) or not self.keySwitchChannelsSecondary) then
      if (getKeyState(self.keySwitchChannels) and table.length(self.myChannels) > 0) then
        
        local myChannels = {};
        local currentChannel = 0;
        local currentChannelID = 0;

        for channel, _ in pairs(self.myChannels) do
          if (channel == self.plugin_data.radioChannel) then
            currentChannel = #myChannels + 1;
            currentChannelID = channel;
          end
          myChannels[#myChannels + 1] = {channelID = channel};
        end
        if (currentChannel == #myChannels) then
          currentChannelID = myChannels[1].channelID;
        else
          currentChannelID = myChannels[currentChannel + 1].channelID;
        end
        self.plugin_data.radioChannel = currentChannelID;
        setElementData(self.serverId, "radio:channel", currentChannelID, true);

      end
    elseif (getKeyState(self.keyProximity)) then
      if (not self.mode) then
        self.mode = 1;
      end
      self.mode = self.mode + 1;
      if (self.mode > 3) then
        self.mode = 1;
      end
      setElementData(self.serverId, "voip:mode", self.mode, true);
    end

    if (getKeyState(self.radioKey) and self.plugin_data.radioChannel ~= -1 and self.config.radioEnabled) then
      self.plugin_data.radioTalking = true;
      self.plugin_data.localRadioClicks = true;

      if (self.plugin_data.radioChannel > self.config.radioClickMaxChannel) then
        self.plugin_data.localRadioClicks = false;
      end

      if (not getElementData(self.serverId, "radio:talking")) then
        setElementData(self.serverId, "radio:talking", true, true);
      end

      if (lastTalkState == false and self.myChannels[self.plugin_data.radioChannel] and self.config.radioAnim) then
        lastTalkState = true
      end

    else

      self.plugin_data.radioTalking = false;
      if (getElementData(self.serverId, "radio:talking")) then
        setElementData(self.serverId, "radio:talking", false, true);
      end

      if lastTalkState == true and self.config.radioAnim then
        lastTalkState = false
      end
    end
  end, 50, 0)
end


function voip.public:updateClient (key, data) 
  if (self[key] == data) then return end
  self[key] = data;

  setElementData(self.serverId, "voip:" .. key, self[key], true);
end


function voip.public:disconnect () 
  websockets:receiveClientCall("disconnect", {});
end