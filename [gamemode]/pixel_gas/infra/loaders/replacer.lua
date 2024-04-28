addEventHandler("onClientResourceStart", resourceRoot, function () 
    local txd = engineLoadTXD("assets/gallon/petrolcan.txd");
    engineImportTXD(txd, 1575);
    local dff = engineLoadDFF("assets/gallon/petrolcan.dff");
    engineReplaceModel(dff, 1575);


    local txd = engineLoadTXD("assets/panel/panel.txd");
    engineImportTXD(txd, 1610);
    local dff = engineLoadDFF("assets/panel/panel.dff");
    engineReplaceModel(dff, 1610);
    local col = engineLoadCOL("assets/panel/panel.col");
    engineReplaceCOL(col, 1610);
end);