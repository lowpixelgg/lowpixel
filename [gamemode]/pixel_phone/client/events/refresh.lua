network:fetch("pixel_phone:onPlayerOpenPhone", true):on(makeClientOpenPhone);
network:fetch("pixel_phone:onPlayerClosePhone", true):on(makeClientClosePhone);
network:fetch("pixel_phone:onServerCreatePhone", true):on(function () makePhoneConfiguration(true) end);
network:fetch("pixel_phone:onServerUpdateBank", true):on(updateBankData);


syncEvent("execPhoneCration", makePhoneCration);
syncEvent("execPhoneConnection", makePhoneConnection);
syncEvent("execRequestWhatsApp", makeGetWhatsAppData);
syncEvent("execSendWhatsAppMessage", makeSendWhatsAppMessage);
syncEvent("execBankRegistration", createBankAccount);
syncEvent("execBootRequest", makeClientConfig);
syncEvent("execRequestBank", getBankData);
syncEvent("execDeleteBankContact", deleteContact);
syncEvent("execGetBankByKey", getBankByKey);
syncEvent("execBankTransfer", execBankTransfer);
syncEvent("execSimulate", simulateEmprest);
syncEvent("execHandleCameraInit", execBankCamera);