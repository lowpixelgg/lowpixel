local imports = {
    core = exports.pixel_core,
    inventory = exports.pixel_inv
};

local WhatsApp = class:create("WhatsApp");
local DEFAULT_SELECT_MESSAGES =  { "from", "to", "content", "createdAt", "_id" }
local DEFAULT_SELECT_CONTACTS = { "phone", "name", "number", "phoneId", "createdAt", "_id" }

function WhatsApp.public:create (...) 
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end


function WhatsApp.public:load (player, phone)
    self.phone = phone;

    local exists = imports.core:findWhatsAppByPhone(self.phone.id, { "picture", "about", "_id", "stories" });

    if (not exists) then 
        imports.core:createWhatsApp(self.phone.id);
    end

    local account = imports.core:findWhatsAppByPhone(self.phone.id, { "picture", "about", "_id", "stories" });
    if (not account) then return false end

    self.id = account._id;
    self.picture = account.picture;
    self.about = account.about;
    self.stories = account.stories;
    self.chatboxes = {};
    
    
    return self;
end



function WhatsApp.public:get ()
    return try({
        exec = function ()
            local data = await(promise(function (resolve, reject) 
                local myContacts = fetchAssoc("getAllContactsByPhone", self.phone.id, DEFAULT_SELECT_CONTACTS);
                local sentMessages = fetchAssoc("getAllmessages", { from = self.id }, DEFAULT_SELECT_MESSAGES);
                local receivedMessages = fetchAssoc("getAllmessages", { to = self.id }, DEFAULT_SELECT_MESSAGES);
                
                for k,v in ipairs(myContacts) do 
                    local contactWhatsapp = imports.core:findWhatsAppByPhone(v.phoneId, { "picture", "phoneId", "about", "_id" });
                    
                    table.insert(self.chatboxes, {
                        data = {
                            id = contactWhatsapp._id,
                            phoneId = v.id,
                            name = v.name,
                            about = contactWhatsapp.about,
                            stories = contactWhatsapp.stories,
                            picture = contactWhatsapp.pictures
                        },
                        messages = {}
                    });
                end
                
                for k, v in ipairs(sentMessages) do
                    local callerWhatsApp = imports.core:getWhatsAppById(v.to, { "picture", "phoneId", "about", "_id" })
                    local callerPhone = imports.core:findPhone(callerWhatsApp.phoneId, { "id", "number" })
                    
                    if (callerWhatsApp and callerPhone) then
                        local _, exists = table.find(self.chatboxes, function (e) return e.data.id == v.to end)
                        
                        if (not exists) then
                            table.insert(self.chatboxes, {
                                data = {
                                    id = callerWhatsApp._id,
                                    phoneId = callerPhone.id,
                                    name = callerPhone.number,
                                    about = callerWhatsApp.about,
                                    stories = callerWhatsApp.stories,
                                    picture = callerWhatsApp.pictures
                                },
                                messages = {}
                            })
                        end
                        
                        local _, existsMessage = table.find(self.chatboxes, function (b)
                            local exist = table.find(b.messages, function (m) return m._id == v._id end)
                            return exist and true or false
                        end)
                        
                        if (not existsMessage) then
                            local messageIndex, message = table.find(self.chatboxes, function (f) return f.data.id == callerWhatsApp._id end)
                            
                            if (messageIndex) then
                                table.insert(self.chatboxes[messageIndex].messages, v)
                            end
                        end
                    end
                end
                
                for k, v in ipairs(receivedMessages) do
                    local callerWhatsApp = imports.core:getWhatsAppById(v.from, { "picture", "phoneId", "about", "_id" })
                    local callerPhone = imports.core:findPhone(callerWhatsApp.phoneId, { "id", "number" })
                    
                    if (callerWhatsApp and callerPhone) then
                        local _, exists = table.find(self.chatboxes, function (e) return e.data.id == v.from end)
                        
                        if (not exists) then
                            table.insert(self.chatboxes, {
                                data = {
                                    id = callerWhatsApp._id,
                                    phoneId = callerPhone.id,
                                    name = callerPhone.number,
                                    about = callerWhatsApp.about,
                                    stories = callerWhatsApp.stories,
                                    picture = callerWhatsApp.pictures
                                },
                                messages = {}
                            })
                        end
                        
                        local _, existsMessage = table.find(self.chatboxes, function (b)
                            local exist = table.find(b.messages, function (m) return m._id == v._id end)
                            return exist and true or false
                        end)
                        
                        if (not existsMessage) then
                            local messageIndex, message = table.find(self.chatboxes, function (f) return f.data.id == callerWhatsApp._id end)
                            
                            if (messageIndex) then
                                table.insert(self.chatboxes[messageIndex].messages, v)
                            end
                        end
                    end
                end

                return resolve({
                    _id = self.id,
                    about = self.about,
                    picture = self.picture,
                    chatboxes = self.chatboxes
                })
            end))
            
            return data
        end,
        catch = function () 
            return false
        end
    });
end


function WhatsApp.public:addMessage (data) 
    data._id = imports.core:createMessage({
        from = data.from,
        to = data.to,
        content = data.content,
        createdAt = os.time();
    });

    return data;
end