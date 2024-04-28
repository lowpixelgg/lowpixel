local imports = {
    widgets = exports.pixel_widgets,
    inventory = exports.pixel_inv
}


heartBeat = nil;

addEventHandler("onClientResourceStart", resourceRoot, function () 
    for _, t in ipairs(global) do
        local trash = t[1]

        if (trash) then
            imports.widgets:createWidget(trash.id, {
                variant = "click",
                name = trash.id,
                text = "Lixeira Publica",
                network = "pixel_trash:onWidgetReady",
                autoRendering = true,
                maxDistance = 5,
                position = Vector3(trash.position.x, trash.position.y, trash.position.z +1)
            });
        end
    end
end)


network:fetch("pixel_trash:onWidgetReady", true):on(function (widget)
    network:emit("pixel_inv:onClientOpenChest", true, false, widget.name, localPlayer);
    
    heartBeat = thread:createHeartbeat(function () 
        local px, py, pz = getElementPosition(localPlayer)
        local ex, ey, ez = widget.position.x, widget.position.y, widget.position.z
  
        local distance = getDistanceBetweenPoints3D ( px, py, pz, ex, ey, ez )
        
        if math.floor(distance) >= 5 then
            if (heartBeat) then 
                heartBeat:destroy()
            end
            
            imports.inventory:closeChestUI();
          return false;
        end        
    return true end, function () end, 250)
end)