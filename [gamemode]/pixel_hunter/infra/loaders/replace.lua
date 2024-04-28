list = {
    "WALK_player",
    "IDLE_stance", 
    "sprint_civi",
    "WALK_start",
    "Run_stop",
    "Run_stopR",
    "kd_left",
    "kd_right",
    "KO_skid_back",
    "KO_skid_front",
    "KO_shot_face",
    "KO_shot_front",
    "KO_shot_stom",
    "KO_spin_l",
    "KO_spin_r",
};



Animations = {
    ["deer"] = {
        blockName = "animals.deer",
        model = 155,
        dff = "assets/Anim20/A20_1.dff",
        txd = "assets/Anim20/A20_1.txd",
        IFP = engineLoadIFP("assets/Anim20/deer1.ifp", "animals.deer");
    },
    ["boar"] = {
        blockName = "animals.boar",
        model = 156,
        dff = "assets/Anim2/boar.dff",
        txd = "assets/Anim2/boar.txd",
        IFP = engineLoadIFP("assets/Anim2/boar.ifp", "animals.boar");
    },
    ["rabbit"] = {
        blockName = "animals.rabbit",
        model = 157,
        dff = "assets/Anim19/rabbit.dff",
        txd = "assets/Anim19/rabbit.txd",
        IFP = engineLoadIFP("assets/Anim19/rabbit.ifp", "animals.rabbit");
    }
}

addEventHandler("onClientResourceStart", resourceRoot, function () 
    for _, model in pairs(Animations) do 
        local txd = engineLoadTXD(model.txd);
        engineImportTXD(txd, model.model);
        local dff = engineLoadDFF(model.dff);
        engineReplaceModel(dff, model.model);
    end

    -- for _, anim in pairs( list ) do
    --     engineReplaceAnimation( localPlayer, "ped", anim, Animations["deer"].blockName, anim );
    -- end
    
    -- setPedAnimation(localPlayer, "ped", "kd_left");
end);



