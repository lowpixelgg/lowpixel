addEventHandler("onClientResourceStart", resourceRoot, function () 
  ConfigStorage.init("player_prefs.json");

  -- GamePlay Settings
  ConfigStorage.setDefault("ui.gps", {nil, nil})
  ConfigStorage.setDefault("ui.stats", {nil, nil})
  ConfigStorage.setDefault("ui.color", {187, 134, 252})

  ConfigStorage.save()
end)