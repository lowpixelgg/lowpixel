local imports = {
    notify = exports.pixel_notify
}

local sw, sh = guiGetScreenSize();

function getBankData () 
    if (not PhoneItem) then return end

    network:emit("pixel_phone:onClientOpenBank", true, false, localPlayer, PhoneItem.data.id)
    
    network:fetch("pixel_phone:onClientOpenBank", true):on(function (data)
        PhoneUI:sendPhoneEvent("execRequestBank", data, true)
    end)
end


function createBankAccount (data)
    local pic;
    
    if (not PhoneItem) then return false end


    if (data.password ~= data.confirm) then 
        return imports.notify:showInfobox("info", "Banco", "As senhas providas não conhecidem");
    end

    if (PhoneUI.camera) then
        PhoneUI.camera:takePic (function (pixels) 
            network:emit("pixel_phone:onClientBankCreate", true, false, localPlayer, data, dxConvertPixels(pixels, 'png'));
        end);

        PhoneUI.camera:destroy ();
    end

    -- network:fetch("pixel_phone:onClientBankCreate", true):on(function () end);
end


function deleteContact (data)
    if (not PhoneItem) then return false end
    network:emit("pixel_phone:onClientDeleteContact", true, false, localPlayer, data);
end


function getBankByKey (data) 
    if (not PhoneItem) then return false end
    network:emit("pixel_phone:onClientGetBankByKey", true, false, localPlayer, data);
    network:fetch("pixel_phone:onClientGetBankByKey", true):on(function (data) 
        PhoneUI:sendPhoneEvent("execGetBankByKey", data, true);

        if (data) then 
            PhoneUI:setPhoneRoute("/bank/pix/transfer/infos");
        end
    end);
end


function execBankTransfer (data) 
    if (not PhoneItem) then return false end
    network:emit("pixel_phone:onClientExecTransfer", true, false, localPlayer, data);
    network:fetch("pixel_phone:onClientExecTransfer", true):on(function (state) 
        PhoneUI:sendPhoneEvent("execBankTransfer", state, true);

        if (state) then 
            PhoneUI:setPhoneRoute("/bank/confirmPay");
        end
    end);
end 



function updateBankData (data) 
    if (not PhoneItem) then return false end
    PhoneUI:sendPhoneEvent("execBankUpdateData", state, true);
end


function simulateEmprest () 
    if (not PhoneItem) then return false end
    return imports.notify:showInfobox("info", "Banco", "Sua conta ainda não atende os requisitos para emprestimo.")
end


function execBankCamera () 
    if (PhoneUI.camera) then 
        PhoneUI.camera:destroy ();
    end

    
    PhoneUI.camera = Camera ("selfie", 240, 240, sw-respo(390),  380);
end