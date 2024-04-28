addEventHandler("onResourceStart", resourceRoot, function () 
    for k,v in ipairs(getElementsByType("player")) do 
        Interactions:fetch(v);
    end
end)


network:fetch("pixel_characters:onCharacterSpawn", true):on(function (player) 
    Interactions:fetch(player);
end);


-- addCommandHandler("fetch", function (player) 
--     Interactions:fetch(player);
-- end)