Props = {}

function Props.setPlayerAttachment(player, propName, haveAction)
    props:attachPlayerProp(player, propName, function ()
        iprint("prop has been created for - ", player);
    end)
end

function Props.removePlayerAttachment(player, propName, haveAction)
    props:deattachPlayerProp(player, propName, function () 
        iprint ("prop has been destroyed for - ", player)
    end)
end


addCommandHandler("cabeeeelo", function (player) 
    Props.setPlayerAttachment(player, "hair_fem_1", false);
end)