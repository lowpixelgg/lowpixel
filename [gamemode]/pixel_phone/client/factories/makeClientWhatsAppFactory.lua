function makeGetWhatsAppData () 
    if (not PhoneItem) then return end

    
    network:emit("pixel_phone:onClientOpenWhatsApp", true, false, localPlayer, PhoneItem.data.id)

    network:fetch("pixel_phone:onClientOpenWhatsApp", true):on(function (data) 
        PhoneUI:sendPhoneEvent("execRequestWhatsApp", data, true)
    end)
end


function makeSendWhatsAppMessage (message) 
    if (not PhoneItem) then return end

    network:emit("pixel_phone:onClientSendMessage", true, false, localPlayer, message);
    network:fetch("pixel_phone:onServerSendMessage", true):on(function (data) 
        PhoneUI:sendPhoneEvent("execSendWhatsAppMessage", data, true)
    end);
end