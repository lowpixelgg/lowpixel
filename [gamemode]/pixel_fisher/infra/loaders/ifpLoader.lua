local anim_block = "job.fishning"

addEventHandler("onClientResourceStart", resourceRoot, function ()     
    local txd = engineLoadTXD("assets/vara/fishingrod.txd");
    engineImportTXD(txd, 1371);
    local dff = engineLoadDFF("assets/vara/fishingrod.dff");
    engineReplaceModel(dff, 1371);
    
    local boiadff = engineLoadDFF("assets/boia/boia.dff");
    engineReplaceModel(boiadff, 1332)


    local skintxd = engineLoadTXD("assets/peds/cwmofr.txd");
    engineImportTXD(skintxd, 158);
    local skindff = engineLoadDFF("assets/peds/cwmofr.dff");
    engineReplaceModel(skindff, 158)
end);
