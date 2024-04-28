local imports = {
    addEventHandler = addEventHandler,

    setCameraTarget = setCameraTarget
};

imports.addEventHandler('onClientResourceStop', resourceRoot, function()
    if(manager:isPlaying()) then
        imports.setCameraTarget(localPlayer);
    end
end);

-- addCommandHandler('cut', function(_, cutscene_name)
--     manager:play(cutscene_name, 3);
-- end);
