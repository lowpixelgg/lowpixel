local imports = {
    ui = exports.pixel_ui;
    locales = exports.pixel_lang
}

ClientQueue = {
    data = {
        waiting = {}
    };
};



function ClientQueue:start ()
    addEventHandler("onClientRender", root, ClientQueue.render);
end


function ClientQueue:render () 
    local startX, startY = imports.ui:createLayoutBox("queue", respo(452), respo(218), 0, 0, "center", "center", false);
    
    dxDrawImage(startX, startY, respo(32), respo(32), "assets/icons/server.png");

    dxDrawText(table.size(ClientQueue.data.waiting) or 0, startX, startY + 40, 100, 50, tocolor(206, 211, 224), 1.0, fonts.akiraBold52);
    dxDrawText(imports.locales:getString("pixel_queue:waiting_on_queue"), startX, startY + 110, 100, 50, tocolor(206, 211, 224), 1.0, fonts.sfBold16);

    local nextPlayersToJoin = ClientQueue:getPositionInQueue(localPlayer);

    dxDrawText(nextPlayersToJoin and nextPlayersToJoin..imports.locales:getString("pixel_queue:players_above_you") or imports.locales:getString("pixel_queue:you_are_the_next"), startX, startY + 130, 100, 50, tocolor(112, 115, 122), 1.0, fonts.sfRegular10)
    dxDrawText(imports.locales:getString("pixel_queue:dont_wait_buya_premium"), startX, startY + 160, 100, 50, tocolor(112, 115, 122), 1.0, fonts.sfRegular18, "left", "top", false, true, false, true, false)
end


function ClientQueue:getPositionInQueue(player) 
    if (not ClientQueue.data.waiting[player]) then return end
    local position = 0
    local playerTimestamp = ClientQueue.data.waiting[player].timestamp
    
    for key, value in pairs(ClientQueue.data.waiting) do
        if value.timestamp < playerTimestamp then
            position = position + 1
        end
    end
    
    if position > 0 then
        return position
    else
        return false
    end
end

function ClientQueue:stop ()
    removeEventHandler("onClientRender", root, ClientQueue.render);
end