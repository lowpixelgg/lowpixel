local queue = class:create("queue");
queue.public.settings = {
  maxAlivePlayers = 50,
  maxQueueingPlayers = 300,
}

queue.public.playing = {};
queue.public.waiting = {};

function queue.public:addQueuePlayer(player)
  if (not self.waiting[player]) then
    self.waiting[player] = {
      timestamp = os.time();
      freePass = getElementData(player, "user") and getElementData(player, "user").isPremium or false or false;
    };

    return true;
  end 

  return false;
end


function queue.public:removeQueuePlayer(player)
  if (self.waiting[player]) then 
    self.waiting[player] = nil;

    return true;
  end

  return false;
end


function queue.public:addPlayingPlayer(player)
  if (not self.playing[player]) then
    self.playing[player] = {};

    return true;
  end

  return false;
end


function queue.public:removePlayingPlayer(player)
  if (self.playing[player]) then 
    self.playing[player] = nil;

    return true;
  end

  return false;
end


function queue.public:getQueuePlayers () 
  return self.waiting
end

function queue.public:getAlivePlayers () 
  return self.playing
end

function queue.public:getOlderPlayer (now) 
  local oldestKey = nil
  local oldestTimestamp = math.huge
  
  for key, value in pairs(self.waiting) do
    if value.timestamp < oldestTimestamp then
      oldestKey = key
      oldestTimestamp = value.timestamp
    end
  end
  
  return oldestKey
end


function queue.public:getPrioritedPlayers () 
  local oldestKey = nil
  local oldestTimestamp = math.huge
  
  for key, value in pairs(self.waiting) do
    if value.timestamp < oldestTimestamp then
      if (getElementData(key, "isPremium")) then 
        oldestKey = key
        oldestTimestamp = value.timestamp
      end
    end
  end
  
  return oldestKey
end