function makeAuthFactory (player, token)
  async(function (this) 
    if (not player or not isElement(player) and type(token) ~= "string") then return false end
    
    local auth = Users.accounts:login(player, token);
    
    if (auth) then
      network:emit("pixel_core:onServerPlayerAuth", true, false, player, { success = true });
      
      
      setElementData(player, "user", {
        userId = auth.body.id;
        username = auth.body.username;
        avatar = auth.body.avatar;
        isPremium = auth.body.isPremium;
        isEarly = auth.body.isEarlySupporter;
      });

      network:emit("pixel_queue:onCorePlayerJoin", false, player);
    else
      network:emit("pixel_core:onServerPlayerAuth", true, false, player, { success = false });
    end

    this:destroyInstance();
  end):resume();
end