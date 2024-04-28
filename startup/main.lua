local TODO = {
  "webui",
  "dreamcore",

  "pAttach",
  "head_moving",
  "betterhandling",
  "defaultstats",
  "dr_ssao",
  "shader_palette",

  -- locales
  "pixel_lang",

  -- Assets
  "pixel_assets",
  "custom_markers",
  
  -- Ui
  "pixel_ui",
  "pixel_notify",
  "pixel_blur",
  "pixel_editbox",
  "pixel_visuals",
  "pixel_widgets",
  
  
  -- GameMode
  "pixel_config",
  "pixel_queue",
  "pixel_core",
  "pixel_interactions",
  "pixel_hud",
  "pixel_inv",
  "pixel_hospital",
  "pixel_characters",
  "pixel_lobby",
  "pixel_vehicles",
  "pixel_cutscene",
  "pixel_guns",
  "pixel_voice",
  "pixel_phone",

  -- Mechanics 
  "pixel_aiming",
  "pixel_rope",
  "pixel_zones",

  -- Game
  "pixel_parking",
  "pixel_conce",
  "pixel_trash",
  "pixel_gas",
  "pixel_shops",
  "pixel_nametags",
  "pixel_blips",
  "pixel_map",

  -- Jobs
  "pixel_fisher",
  "pixel_hunter",

  -- Models
  "pixel_cars",
  "pixel_dev",
  "pixel_level",

  -- Maps
  "pixel_map_clothing"
}



local function processResource(resourceName, start)
  local resource = getResourceFromName(resourceName)

  if not resource then return false end

  local state = getResourceState(resource)

  if start then
    startResource(resource)
    if state == "loaded" then
      return true
    else
      return false
    end
  else
    return stopResource(resource)
  end
end


local function shutdownGamemode (displayMessage, kickPlayers)
  if displayMessage then
    for i = 1, 20 do
      outputChatBox(" ", root, 255, 0, 0)
    end

    outputChatBox("*** GAMEMODE SHUTDOWN ***", root, 255, 0, 0)
  end

  if kickPlayers then
    for i, player in ipairs(getElementsByType("player")) do
      kickPlayer(player, "GAMEMODE", "GAMEMODE SHOWDOWN/RESTART")
    end
  end

  for i, resourceName in ipairs(TODO) do
    processResource(resourceName, false)
  end
end


addEventHandler("onResourceStart", resourceRoot, function ()
  local players = getElementsByType ( "player" )
  for k, player in ipairs ( players ) do
    account = getPlayerAccount ( player )
      if ( not isGuestAccount ( account ) ) then
        logOut ( player )
      end
  end

  for i,resource in ipairs(TODO) do
    if processResource(resource, true) then
      print(resource, 'has been started.')
    else
      print("error when load: "..resource)
    end
  end
end)

addEventHandler("onResourceStop", resourceRoot, function ()
  shutdownGamemode(true, false)
end)