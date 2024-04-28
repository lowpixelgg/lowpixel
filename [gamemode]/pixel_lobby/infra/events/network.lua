network:create("lobby:onPlayerEnterLobby", false);
network:create("lobby:onClientLeaveLobby", false);
network:create("lobby:onClientExitCreator", false);
network:create("pixel_lobby:onInventoryRegister", false);

addEvent("pixel_lobby:play", true);
addEvent("pixel_lobby:select", true);
addEvent("pixel_lobby:withoutCharacter", true);

addEvent("web:onChangeParent", true);
addEvent("web:onChangeColor", true);
addEvent("web:onCompleteStage2", true);
addEvent("web:onComplete", true);
addEvent("web:onError", true)
addEvent("web:changeGender", true);
addEvent("web:onSelectClothe", true);
addEvent("web:redrawPlate", true);