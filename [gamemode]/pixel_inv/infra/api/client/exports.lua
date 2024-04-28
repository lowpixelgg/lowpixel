function hideByComplete (state) 
    if (state) then 
        unbindKey("tab");
        
        if (ClientInventory.isRendering) then 
            ClientInventory:toggle("hide");
        end

        ClientInventory.minecraftUI = false;
    else
        bindKey("tab", "up", ClientInventory.bindInventoryAction);

        ClientInventory.minecraftUI = true;
    end
end


function closeChestUI () 
    if (ClientInventory.chestUI) then 
        ClientInventory.chestUI:setIsRendering(false);
        setTimer(function () ClientInventory.chestContext = nil; ClientInventory.chestUI = nil end, 1000, 1)
    end
end