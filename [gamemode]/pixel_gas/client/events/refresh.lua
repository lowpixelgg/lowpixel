
network:fetch("pixel_gas:onPlayerInitGas", true):on(function (...) createClientGasService(...)end);
network:fetch("pixel_gas:onPlayerGasOpen", true):on(function (...) onClientOpenWidget(...) end);
network:fetch("pixel_gas:onServerUpdate", true):on(function (...) onServerUpdate(...) end);
network:fetch("pixel_gas:onServerCreateSound", true):on(function (...) onServerCrateSoundEffect(...) end);
network:fetch("pixel_gas:onServerDestroySound", true):on(function (...) onServerDestroySoundEffect(...) end);

network:fetch("pixel_gas:onServerUseItem", true):on(function (...)  onServerUseItem(...) end);

network:fetch("pixel_gas:onServerDestroyGas", true):on(function (...) onProgressEnd(...) end);
network:fetch("pixel_gas:onServerCancel", true):on(function (...) onServerCancel (...) end);