local imports = {
  core = exports.pixel_core,
  ipairs = ipairs,
}

local trading = class:create("trading");
local itemsData = imports.core:getItemsMeta();
local items = imports.core:getItemsMeta();

function trading.public:create(...)
  local instance = self:createInstance();
  
  if (instance and not instance:load(...)) then
    instance:destroyInstance();
    return false;
  end
  
  return instance;
end


function trading.public:load(players) 
  self.players = {};
 
  for index, player in imports.ipairs(players) do 
    self.players[index] = {
      player = player,
      items = {},
      state = false
    };
  end
  
  return self;
end


function trading.public:destroy()
  if (not trading.public:isInstance(self)) then return false end
  self:destroyInstance();
  return true;
end


function trading.public:refreshPlayerItems (player, inventory, entries)
  local i, playerItems = table.find(self.players, function (t) 
    return t.player == player;
  end)

  for itemIndex, item in ipairs(entries) do 
    local exists = table.find(playerItems.items, function (v) return v._id == item._id end);

    if (item.container == "trade") then 
      if exists then 
        playerItems.items[exists].slot = item.slot;
      else
        local invItemIndex, invItem = table.find(inventory.items, function (v) return v._id == item._id end)
        
        if (invItem) then
           table.insert(playerItems.items, item);
            inventory:removeItem(invItem._id);
        end 
      end 
    else
      
      table.remove(playerItems.items, exists);
      inventory:setItem(item._id, item.slot, item.name, item.state, item.timestamp, item.container, item.amount, item.data);
    end
  end

  return playerItems.items;
end



function trading.public:refreshPlayerState (player, state) 
  local i, playerItems = table.find(self.players, function (t) 
    return t.player == player;
  end)

  if (state == nil) then
    self.players[i].state = not self.players[i].state;
  else
    self.players[i].state = state;
  end
  

  return self.players[i].state;
end


function trading.public:getPlayer(player)
  local i, box = table.find(self.players, function (t) 
    return t.player == player;
  end)

  if (box) then 
    return self.players[i];
  end

  return false;
end


function trading.public:doPulse(cb)
  local count = 0;
  local heartbeat;

  heartbeat = thread:createHeartbeat(function ()  
    if (self.players[1].state and self.players[2].state) then
      count = count + 1;

      if (count > 5) then
        heartbeat:destroy();
        executeCallback(cb, true);
      end
    else
      heartbeat:destroy()
      executeCallback(cb, false)
    end

    return true end, function () end, 250)
end


local function formatTable(tbl)
  local new = {};

  for _, item in imports.ipairs(tbl) do 
    local name = item.name;
    
    if (not new[name]) then 
      new[name] = {};
    end

    table.insert(new[name], item);
  end

  return new;
end

function trading.public:execInventoryTrade(player1, player2)
  return try({
    exec = function ()
      local trade = await(promise(function (resolve, reject) 
        local inventory1 = Inventories.cache[player1];
        local inventory2 = Inventories.cache[player2];
        
        local tradeHold = {};
        
        -- clear items for player inventory without 
        -- lose this if server restart or player reconnect
        for _, player in imports.ipairs(self.players) do 
          if (#player.items > 0) then 
            for itemIndex, item in imports.ipairs(player.items) do
              tradeHold[player.player] = {};
              table.insert(tradeHold[player.player], item);
            end
          end
        end

        async(function (this) 
          if (#self.players[1].items > 0) then
            local request = self:switchItems(self.players[1].player, self.players[2].player, tradeHold);


            if (not request) then 
              return reject({msg = "Infelizmente o negociante está sem espaço na mochila.", player = self.players[1].player});
            end
          end
        
          if (#self.players[2].items > 0) then
            local request = self:switchItems(self.players[2].player, self.players[1].player, tradeHold);

            if (not request) then 
              return reject({msg = "Infelizmente o negociante está sem espaço na mochila.", player = self.players[2].player});
            end
          end

          resolve(true);

          this:destroyInstance();
        end):resume();
      end))

      return trade;
    end,
    catch = function (err) return err end
  })
end


function trading.public:switchItems(player1, player2, hold)
  return try({
    exec = function () 
      local switch = await(promise(function (resolve, reject) 
        local inventory1 = Inventories.cache[player1]
        local inventory2 = Inventories.cache[player2]


        if inventory1 and inventory2 then 
          local isPlayer1 = table.find(self.players, function (v) return v.player == player1 end)
          local separe = inventory2:separeItemsByPerecibility(formatTable(self.players[isPlayer1].items))    
        
          if separe then
            for k,v in imports.ipairs(separe) do 
              local give = inventory2:giveItem(v.name, v.amount, v.state, v.timestamp) 
             
              if (not give) then
                return reject(false)
              end

              --[[
                  Now is secure to delete player-inventory1 item without trade bugs
                  or trade-duplication.
              --]]
              imports.core:deleteItem(v._id)
            end
          else
            return reject(false)
          end


        else
            return reject(false)
        end

        
        return resolve(true)
      end))

      return switch
    end,
    catch = function (err) return err end
  })
end


function trading.public:calcMaxWeight(items, maxWeight)
  local total = 0

  for _, item in imports.ipairs(items) do
    total = total + itemsData[item.name].weight
  end

  if total > maxWeight then
    return false
  end

  return true
end