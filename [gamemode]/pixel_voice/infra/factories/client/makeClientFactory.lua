local imports = {
    core = exports.pixel_core
}

VOIP = nil;
local useLocalPed = true;
local radioVolume = 0;



local function clientProcessing()
    local playerList = VOIP.playerList;
    local usersdata = {};
    local localHeading;
    
    if (VOIP.headingType == 1) then
        localHeading = math.rad(getElementRotation(localPlayer).z);
    else
        localHeading = math.rad(Vector3(getElementRotation(getCamera())).z % 360);
    end
    
    local localPos;
    if (useLocalPed) then
        localPos = Vector3(getPedBonePosition(localPlayer, 8));
    else
        localPos = Vector3(getPedBonePosition(localPlayer, 8));
    end
    
    local usersdata = {};
    
    for _, player in ipairs(getElementsByType("player")) do
        local playerTalking = getElementData(player, "voip:talking");
        
        if (VOIP.serverId ~= player and playerTalking ~= 0) then
            local playerPos = Vector3(getPedBonePosition(player, 8));
            local dist = math.floor(getDistanceBetweenPoints3D(localPos.x, localPos.y, localPos.z, playerPos.x, playerPos.y, playerPos.z));
            
            if (dist <= VOIP.distance[3]) then
                local mode = tonumber(getElementData(player, "voip:mode")) or 1;
                local volume = -30 + (30 - dist / VOIP.distance[mode] * 30);
                
                if (volume >= 0) then
                    volume = 0;
                end
                
                local angleToTarget = localHeading - math.atan2(playerPos.y - localPos.y, playerPos.x - localPos.x);
                
                local userData = {
                    uuid = getElementData(player, "voip:pluginUUID"),
                    volume = volume,
                    muted = 1,
                    radioEffect = false,
                    posX = VOIP.plugin_data.enableStereoAudio and math.cos(angleToTarget) * dist or 0,
                    posY = VOIP.plugin_data.enableStereoAudio and math.sin(angleToTarget) * dist or 0,
                    posZ = VOIP.plugin_data.enableStereoAudio and playerPos.z or 0
                };
                
                if (dist < VOIP.distance[mode]) then
                    userData.muted = 0;
                    userData.volume = volume;
                end
                
                table.insert(usersdata, userData);
            end
        end
    end
    
    for _, channel in pairs(VOIP.myChannels) do
        for _, subscriber in pairs(channel.subscribers) do
            if (subscriber == VOIP.serverId) then
                
            else
                local remotePlayerUsingRadio = getElementData(subscriber, "radio:talking");
                local remotePlayerChannel = getElementData(subscriber, "radio:channel");
                
                if (remotePlayerUsingRadio and remotePlayerChannel == channel.id) then
                    local remotePlayerUuid = getElementData(subscriber, "voip:pluginUUID");
                    
                    local userData = {
                        uuid = remotePlayerUuid,
                        radioEffect = false,
                        muted = false,
                        volume = radioVolume,
                        posX = 0,
                        posY = 0,
                        posZ = VOIP.plugin_data.enableStereoAudio and localPos.z or 0
                    };
                    
                    if ((type(remotePlayerChannel) == "number" and remotePlayerChannel <= VOIP.config.radioClickMaxChannel) or channel.radio) then
                        userData.radioEffect = true;
                    end
                    
                    local found = false;
                    for k, v in pairs(usersdata) do
                        if (v.uuid == remotePlayerUuid) then
                            usersdata[k] = userData;
                            found = true;
                            break;
                        end
                    end
                    
                    if not found then
                        usersdata[#usersdata + 1] = userData;
                    end
                end
            end
        end
    end
    
    VOIP.plugin_data.Users = usersdata;
    VOIP.plugin_data.posX = 0;
    VOIP.plugin_data.posY = 0;
    VOIP.plugin_data.posZ = VOIP.plugin_data.enableStereoAudio and localPos.z or 0;
end



function initializeVoipPlayer ()
    local meta = imports.core:getVoiceSettings().ClientSettings;

    meta.plugin_data.localName = getElementData(localPlayer, "id");

    
    VOIP = voip:create(meta); 
    
    VOIP.plugin_data.Users = {};
    VOIP.plugin_data.radioTalking = false;
    VOIP.plugin_data.radioChannel = -1;
    VOIP.plugin_data.localRadioClicks = false;
    VOIP.mode = 1;
    VOIP.talking = false;
    VOIP.pluginStatus = -1;
    VOIP.pluginVersion = "0";
    VOIP.serverId = localPlayer;
    VOIP.localName = getElementData(localPlayer, "id");

    VOIP.myChannels = {};
    
    
    setElementData(VOIP.serverId, "voip:mode", VOIP.mode, true);
    setElementData(VOIP.serverId, "voip:talking", VOIP.talking, true);
    setElementData(VOIP.serverId, "radio:channel", VOIP.plugin_data.radioChannel, true);
    setElementData(VOIP.serverId, "radio:talking", VOIP.plugin_data.radioTalking, true);
    setElementData(VOIP.serverId, "voip:pluginStatus", VOIP.pluginStatus, true);
    setElementData(VOIP.serverId, "voip:pluginVersion", VOIP.pluginVersion, true);
    
    
    if (VOIP) then 
        VOIP:initialize();
        VOIP.processFunction = clientProcessing;
    end
    
    
    setTimer(function () VOIP:loop() end, 250, 0)
end


function onPlayerJoinChannel(channelId, player, channelData) 
    if (player == VOIP.serverId and channelData) then
        local previousChannel = VOIP.plugin_data.radioChannel;
        
        VOIP.plugin_data.radioChannel = channelData.id;
        VOIP.myChannels[channelData.id] = channelData;
        
        if (previousChannel ~= VOIP.plugin_data.radioChannel) then
            setElementData(VOIP.serverId, "radio:channel", VOIP.plugin_data.radioChannel, true);
        end
        
    elseif (VOIP.myChannels[channelId]) then
        VOIP.myChannels[channelId].subscribers[player] = player;
    end
end


function onPlayerLeaveChannel(channelId, player) 
    if (player == voip.serverId and voip.myChannels[channelId]) then
        local previousChannel = voip.plugin_data.radioChannel;
        voip.myChannels[channelId] = nil;
        if (voip.plugin_data.radioChannel == channelId) then 
            if (table.length(voip.myChannels) > 0) then
                for channelId, _ in pairs(voip.myChannels) do
                    voip.plugin_data.radioChannel = channelId;
                    break;
                end
            else
                voip.plugin_data.radioChannel = -1; 
            end
        end
        
        if (previousChannel ~= voip.plugin_data.radioChannel) then 
            setElementData(voip.serverId, "radio:channel", voip.plugin_data.radioChannel, true);
        end
        
        
    elseif (voip.myChannels[channelId]) then
        voip.myChannels[channelId].subscribers[player] = nil;
    end
end


function addPlayerToRadio(channel, isRadio) 
    network:emit("pixel_voice:addPlayerToRadio", true, false, channel, localPlayer, isRadio);
end


function removePlayerFromRadio(channel) 
    network:emit("pixel_voice:addPlayerToRadio", true, false, channel, VOIP.serverId)
end



local isInRadio = false;
local isInRadioID = nil;

addCommandHandler("radio", function (cmd, radio) 
    if (radio) then 
        isInRadio = true;
        isInRadioID = tonumber(radio);

        addPlayerToRadio(isInRadioID,true )
    end
end)



addCommandHandler("radio_off", function ()
    if (isInRadio and isInRadioID) then 
        removePlayerFromRadio(isInRadioID, true) 
        isInRadio = false;
        isInRadioID = nil
    end
end)