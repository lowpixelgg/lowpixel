function Phone.whatsappRepo:setup () 
    database:table("whatsapp"):create({
        { name = "picture", type = "varchar", size = 255 },
        { name = "about", type = "varchar", size = 255 },
        { name = "phoneId", type = "varchar", size = 255},
        { name = "stories", type = "varchar", size = 255 },
    })


    database:table("whatsapp_messages"):create({
        { name = "from", type = "int", size = 255 },
        { name = "to", type = "int", size = 255 },
        { name = "content", type = "varchar", size = 255 },
        { name = "createdAt", type = "int", size = 255 }, 
    })

    return print("Phone WhatsApp Repo has been propagated");
end

function Phone.whatsappRepo:getAllMessagesFromTo (from, to, fields, callback)
    return database:table("whatsapp_messages"):select(fields, { from = from, to = to }, function (...) executeCallback(callback, ...) end);
end


function Phone.whatsappRepo:getAllMessages (where, fields, callback) 
    return database:table("whatsapp_messages"):select(fields, where, function (...) executeCallback(callback, ...) end);
end

function Phone.whatsappRepo:getWhatsAppByID(id, fields, callback) 
    return database:table("whatsapp"):select(fields, { _id = id }, callback)[1];
end


function Phone.whatsappRepo:create (phoneId) 
    return database:table("whatsapp"):insert({
        phoneId = phoneId,
        picture = "nil",
        about = "nil",
        stories = "nil",
    });
end


function Phone.whatsappRepo:findByPhone (phoneId, fields, callback) 
    return database:table("whatsapp"):select(fields, { phoneId = phoneId }, callback)[1];
end


function Phone.whatsappRepo:save (whatsapp) 
    local store = {}

    for k,v in pairs(contact) do
      store[k] = v;
    end
  
    return database:table(_table):update(store, { id = contact.id });
end


function Phone.whatsappRepo:delete (id, callback) 
    return database:table("whatsapp"):delete({_id = id}, callback)
end



function Phone.whatsappRepo:createMessage (data) 
    local _,_, id = database:table("whatsapp_messages"):insert({from = data.from, to = data.to, content = data.content, createdAt = os.time() })
    return id
end



function Phone.whatsappRepo:deleteMessage (message_id, callback) 
    return delete:table("whatsapp_messages"):delete({ _id = message_id}, callback);
end