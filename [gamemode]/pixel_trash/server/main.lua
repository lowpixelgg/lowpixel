local imports = {
    inventory = exports.pixel_inv
}

addEventHandler("onResourceStart", root, function () 
    for _, t in ipairs(global) do
        local trash = t[1]

        if (trash) then 
            imports.inventory:registerChest(trash.id, trash.name, 3, false);
        end
    end
end);