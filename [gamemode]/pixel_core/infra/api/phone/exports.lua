function createPhone (...) 
    return Phone.phoneRepo:create(...);
end


function findPhoneByOwner (...) 
    return Phone.phoneRepo:getOneByOwner (...); 
end


function findPhone (...) 
    return Phone.phoneRepo:getOne(...);
end


function findPhoneByNumber (...) 
    return Phone.phoneRepo:getOneByNumber(...);
end


function savePhone (...) 
    return Phone.phoneRepo:save(...);
end


function deletePhone (...) 
    return Phone.phoneRepo:delete(...);
end


-- Contacts
function createPhoneContact (...) 
    return Phone.contactsRepo:create(...);
end


function findContactByNumber (...)
    return Phone.contactsRepo:getOneByNumber(...);
end


function findContact (...) 
    return Phone.contactsRepo:getOneById(...);
end

function getAllContactsByPhone (phoneId, fields, eventName)
    local callerRoot = sourceResourceRoot
    
    return Phone.contactsRepo:getAllByPhone (phoneId, fields, function (result) 
        triggerEvent(eventName, callerRoot, result);
    end);
end

function saveContact (...) 
    return Phone.contactsRepo:save(...);
end


function deleteContact (...) 
    return Phone.contactsRepo:delete(...);
end


-- Gallery
function createGalleryPicture (...) 
    return Phone.galleryRepo:create(...);
end


function getGalleryPicture (...)
    return Phone.galleryRepo:getOneByID(...);
end

function getGalleryPicturesByPhone (...) 
    return Phone.galleryRepo:getAllByPhoneID(...);
end

function deleteGalleryPicture (...) 
    return Phone.galleryRepo:delete(...);
end



--- WhatsApp
function createWhatsApp (...) 
    return Phone.whatsappRepo:create (...); 
end

function findWhatsAppByPhone (...) 
    return Phone.whatsappRepo:findByPhone (...); 
end


function deleteWhatsApp (...) 
    return Phone.whatsappRepo:save (...); 
end


function createMessage (...)
    return Phone.whatsappRepo:createMessage (...); 
end

function getWhatsAppById (...)
    return Phone.whatsappRepo:getWhatsAppByID (...);
end

function getAllmessages (where, fields, eventName) 
    local callerRoot = sourceResourceRoot

    return Phone.whatsappRepo:getAllMessages (where, fields, function (result) 
        triggerEvent(eventName, callerRoot, result)
    end) 
end

function getAllMessagesFromTo (from, to, fields, eventName) 
    local callerRoot = sourceResourceRoot

    return Phone.whatsappRepo:getAllMessagesFromTo (from, to, fields, function (result) 
        triggerEvent(eventName, callerRoot, result);
    end);
end


function deleteMessage (...) 
    return Phone.whatsappRepo:deleteMessage (...); 
end



-- Bank
function createBank (...) 
    return Phone.bankRepo:create(...);
end


function getBankByPhone (fields, phoneId, eventName) 
    local callerRoot = sourceResourceRoot;

    return Phone.bankRepo:getBankByPhone (fields, phoneId, function (result) 
        triggerEvent(eventName, callerRoot, #result > 0 and result[1] or false);
    end);
end

function getBankByID (fields, id, eventName)
    local callerRoot = sourceResourceRoot;

    return Phone.bankRepo:getBankByID (fields, id, function (result) 
        triggerEvent(eventName, callerRoot, #result > 0 and result[1] or false);
    end);
end


function getBankByAgency (fields, agency, eventName) 
    local callerRoot = sourceResourceRoot;

    return Phone.bankRepo:getBankByAgency (fields, agency, function (result) 
        triggerEvent(eventName, callerRoot, #result > 0 and result[1] or false);
    end);
end


function saveBank (bank) 
    return Phone.bankRepo:save (bank);
end


-- Bank Keys
function createKey (...)
    return Phone.bankRepo:createBankKey(...)
end


function getAllBankKeys (fields, bank, eventName) 
    local callerRoot = sourceResourceRoot;

    return Phone.bankRepo:getAllBankKeys (fields, bank, function (result) 
        triggerEvent(eventName, callerRoot, #result > 0 and result or false);
    end);
end


function getKey (fields, key, eventName) 
    local callerRoot = sourceResourceRoot;

    return Phone.bankRepo:getKey (fields, key, function (result) 
        triggerEvent(eventName, callerRoot, #result > 0 and result[1] or false);
    end);
end


-- Bank Transaction
function createTransaction (...) 
    return Phone.bankRepo:createBankTransaction (...);
end


function getAllBankTransactions (fields, where, eventName) 
    local callerRoot = sourceResourceRoot;

    return Phone.bankRepo:getAllTransactions (fields, where, function (result) 
        triggerEvent(eventName, callerRoot, result);
    end);
end



-- Bank Contacts
function createBankContact (...)
    return Phone.bankRepo:createContact (...);
end

function getContacts (fields, bankId, eventName) 
    local callerRoot = sourceResourceRoot;


    return Phone.bankRepo:getContacts (fields, bankId, function (result) 
        triggerEvent(eventName, callerRoot, result);
    end);
end


function existsContact (bankId, contactId, eventName) 
    local callerRoot = sourceResourceRoot;

    return Phone.bankRepo:existsContact(bankId, contactId, function (result) 
        triggerEvent(eventName, callerRoot, result[1] and true or false); 
    end)
end

function deleteContact (...) 
    return Phone.bankRepo:deleteContact (...); 
end