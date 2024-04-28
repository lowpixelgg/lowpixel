network:fetch("pixel_gas:onClientCheckout", true):on(function (...) Bombers:createGasService(...) end);
network:fetch("pixel_gas:onClientGasClientStart", true):on(function (...) Bombers:onClientInitGas(...) end);
network:fetch("pixel_gas:onProgressEnd", true):on(function (...) Bombers:onClientEntGas(...) end);
network:fetch("pixel_gas:onInventoryRequestUse", true):on(function (...) Gallons:RequestUse(...) end);
network:fetch("pixel_inv:onServerUpdateHotbar", true):on(function (...) Gallons:onPlayerUnquipGallon (...) end);
network:fetch("pixel_gas:onProgressItemEnd", true):on(function (...) Gallons:onProgressEnd (...) end);

addEventHandler("onPlayerQuit", root, function () 
    Bombers:onClientEntGas (source);
    Gallons:destroyGallon (source);
end);