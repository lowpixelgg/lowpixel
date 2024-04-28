local imports = {
    inventory = exports.pixel_inv,
    notify = exports.pixel_notify,
    rope = exports.pixel_rope,
}

Bombers = {
    cache = {}
};

local invoices = {};



function Bombers:registry(bomberId, position) 
    if (Bombers.cache[bomberId]) then return false end

    Bombers.cache[bomberId] = {
        use = false,
        position = position
    }

    return true;
end


function Bombers:createGasService (player, bomber, liters)
    local instance = Bombers.cache[bomber.id];
    if (not instance) then return false end 


   local hasMoneyToBuy = imports.inventory:hasPlayerItem(player, "money");
   local checkoutPrice = calculateFuelCost(liters, 13);

   if (instance.use) then return imports.notify:showInfobox(player, "info", "Gas Station", "Parece que esta bomba já está em uso."); end
   if (hasMoneyToBuy.totalCount < checkoutPrice) then return imports.notify:showInfobox(player, "info", "Gas Station", "Você não dinheiro suficiente para abastecer"); end

   imports.inventory:takePlayerItem(player, "money", checkoutPrice);
   
   local constraints = {
      [1] = {
          type = 'fixed',
          position = instance.position,
      },
      [30] = {
          type = 'bone',
          boneId = 34,
          elementId = 1,
      },

      [35] = {
          type = 'bone',
          boneId = 25,
          elementId = 1,
      }
   }

   local rope =
      imports.rope:createRope(
      35,
      0.02,
      {
          [1] = instance.position
      },
      {
          color = tocolor(0,0,0),
          weighting = 0.05,
      },
      constraints
   )
   imports.rope:addRopeElement(rope, player)


   invoices[player] = {
      totalPrice = checkoutPrice, 
      liters = liters,
      heartbeat = nil,
      rope = rope,
      bomberId = bomber.id,
      totalLiters = 0,
   };

   
   instance.use = true;

   network:emit("pixel_gas:onPlayerInitGas", true, false, player, rope);
end



function Bombers:onClientInitGas (player, x,y,z, vehicle)
    local instance = invoices[player];
    if (not instance) then return false end

    local bomber = Bombers.cache[instance.bomberId];
    if (not bomber) then return false end

    instance.heartbeat = thread:createHeartbeat(function () 
        local total = instance.liters;

        imports.rope:setRopeConstraints(instance.rope, {
            [1] = {
                type = 'fixed',
                position = bomber.position,
            },
            [35] = {
                type = 'vehicleComponent',
                component = 'petrocap_comp',
                vehicle = vehicle,
            }
        });

        instance.totalLiters = instance.totalLiters + 1;
        instance.vehicle = vehicle;

        setElementFrozen(vehicle, true)


        if (instance.totalLiters < total) then
            local increment = instance.totalLiters + 1000;
            
            setElementData(vehicle, "fuel", increment);
            network:emit("pixel_gas:onServerUpdate", true, false, player, instance.bomberId, instance.totalLiters, calculateFuelCost(instance.totalLiters, 13));
        else
            instance.heartbeat:destroy();
            setElementFrozen(vehicle, false);
        end
    return true; end, function () end, 1000)

    imports.rope:removeRopeElement(rope, player);
    network:emit("pixel_gas:onServerCreateSound", true, false, root, player, x, y, z);
end


function Bombers:onClientEntGas (player) 
    local instance = invoices[player];
    if (not instance) then return false end

    local bomber = Bombers.cache[instance.bomberId];
    if (not bomber) then return false end

    if (isElement(instance.vehicle)) then 
        setElementFrozen(instance.vehicle, false);
    end

    bomber.use = false;

    if (instance.rope) then 
        imports.rope:destroyRope(instance.rope);
    end
    
    if (instance.heartbeat) then 
        instance.heartbeat:destroyInstance();
    end

    invoices[player] = nil;

    network:emit("pixel_gas:onServerDestroySound", true, false, root, player);
    network:emit("pixel_gas:onServerDestroyGas", true, false, player);
end