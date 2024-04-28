network:fetch("pixel_phone:onInventoryRequestUse", true):on(function (...) Phones:usePhoneItem(...) end);
network:fetch("pixel_inv:onServerUpdateHotbar", true):on(function (...) Phones:unequipPhoneItem (...) end);
network:fetch("pixel_phone:onClientOpen", true):on(function (...) Phones:getPhoneData(...) end);
network:fetch("pixel_phone:onClientCreate", true):on(function (...) Phones:createPhone(...) end);

network:fetch("pixel_phone:getNearestNetworks", true):on(function (...) HotSpots:getBestSignals(...) end);
network:fetch("pixel_phone:onClientTryConnection", true):on(function (...) HotSpots:tryConnection (...) end);

network:fetch("pixel_phone:onClientOpenWhatsApp", true):on(function (...) Whats:getWhatsApp (...) end);
network:fetch("pixel_phone:onClientSendMessage", true):on(function (...) Whats:addWhatsppMessage (...) end);

network:fetch("pixel_phone:onClientOpenBank", true):on(function (...) BankApp:getBankData (...) end);
network:fetch("pixel_phone:onClientBankCreate", true):on(function (...) BankApp:createAccount (...) end);
network:fetch("pixel_phone:onClientDeleteContact", true):on(function (...) BankApp:deleteContact (...) end);
network:fetch("pixel_phone:onClientGetBankByKey", true):on(function (...) BankApp:getBankByKey (...)  end);
network:fetch("pixel_phone:onClientExecTransfer", true):on(function (...) BankApp:makeTransaction (...) end);