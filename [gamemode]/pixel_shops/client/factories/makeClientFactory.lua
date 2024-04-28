local imports = {
    inventory = exports.pixel_inv,
    hud = exports.pixel_hud,
}


local gui;
local shop;

function makeClientOpenShop (data)
    if (gui) then return false end
    
    shop = data;
    gui = ShopsUI (data.items);
    gui:setIsRendering(true);
    
    if (gui) then
        imports.inventory:hideByComplete(true);
        imports.hud:hideByComplete(true);

        addEventHandler("onClientRender", root, onClientRender, false, "low-5");
        addEventHandler("onClientClick", root,  onClientClick);
        addEventHandler("onClientKey", root, onKey);
    end
end


function onClientRender ()
    if (gui) then 
        gui:render();
    end
end


function destroyUI () 
    if (gui) then
        gui:setIsRendering(false);
        
        setTimer(function ()
            imports.inventory:hideByComplete(false);
            imports.hud:hideByComplete(false);
            
            removeEventHandler("onClientRender", root, onClientRender, false, "low-5");
            removeEventHandler("onClientClick", root,  onClientClick);
            removeEventHandler("onClientKey", root, onKey);

            gui:destroyInstance();
            gui = nil;
            shop = nil;
        end, 700, 1);
    end
end

function onKey (k, s) 
    if (k == "backspace" and s == true) then 
        if (gui) then 
            destroyUI (); 
        end    
    end
end


function onClientClick (b, s, abx, aby)
    if (b == "left" and s == "up") then 
        if (gui.hoverCheckout) then
            network:emit("pixel_shops:onClientCheckout",  true, false, localPlayer, shop.id, gui.checkOut);
            return destroyUI();
        end

        local item, button = gui:getButtonsByPosition(abx, aby)
        
        if (item and button) then 
            if (button.id == "plus" and item:getQtd() < 15) then
                item:setQtd(item:getQtd() + 1);
                gui:addItem (item.item);
            elseif (button.id == "sub" and item:getQtd() > 0) then
                item:setQtd(item:getQtd() - 1); 
                gui:remItem (item.item);
            end
        end
    end
end