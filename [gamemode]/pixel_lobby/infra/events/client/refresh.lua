network:fetch("lobby:onPlayerEnterLobby", true):on(function (...) GameLobby:enter (...) end);

addEventHandler("pixel_lobby:select", root, function (id) GameLobby.peds:setPedAnimation(tonumber(id)) end);
addEventHandler("pixel_lobby:play", root, function (id) GameLobby:stop(id) end);
addEventHandler("web:onChangeParent", root, function (...) CreatorEngine:switchNPCParent (...) end);
addEventHandler("web:onChangeColor", root, function (...) CreatorEngine:switchNPCColor (...) end);
addEventHandler("web:onCompleteStage2", root, function () CreatorEngine:bodySelector () end);
addEventHandler("web:onError", root, function (...) CreatorEngine:onError(...) end);
addEventHandler("web:onComplete", root, function (...) CreatorEngine:exitAndCreate (...) end);
addEventHandler("web:onSelectClothe", root, function (...) CreatorEngine:setBodyClothe(...) end);
addEventHandler("web:redrawPlate", root, function (data) data = fromJSON(data); CreatorEngine:redraw (data)  end);
addEventHandler("web:changeGender", root, function (...) CreatorEngine:changeGender (...) end);

addEventHandler("onClientResourceStart", resourceRoot, function () 

    local txd = engineLoadTXD("assets/plate/placa_id.txd");
    engineImportTXD(txd, 1338);
    local dff = engineLoadDFF("assets/plate/placa_id.dff");
    engineReplaceModel(dff, 1338);
    local col = engineLoadCOL("assets/plate/placa_id.col");
    engineReplaceCOL(col, 1338);


    engineLoadIFP("assets/ifp/cutscenes.ifp", "lobby");
    engineLoadIFP("assets/ifp/clothingshoes.ifp", "creator.shoes");
    engineLoadIFP("assets/ifp/clothingshirt.ifp", "creator.shirt");
    engineLoadIFP("assets/ifp/gta5.ifp", "creator.gta5")
end);