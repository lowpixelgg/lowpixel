local imports = {
    core = exports.pixel_core,
    inventory = exports.pixel_inv
};

local Bank = class:create("Bank");
local DEFAULT_SELECT_BANK = { "_id", "phone", "firstname", "lastname", "password", "balance", "agency", "createdAt", "picture" }
local DEFAULT_SELECT_KEYS = { "_id", "bank", "key", "title", "createdAt" };
local DEFAULT_SELECT_TRANSACTIONS = { "from", "to", "createdAt", "value", "description", "_id" };


function Bank.public:create (...) 
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end


function Bank.public:load (player, phone)
    self.phone = phone;
    self.player = player;

    return self;
end


function Bank.public:doMakeAgency () 
    return try({
        exec = function ()
            local number = await(promise(function (resolve, reject) 
                self.timer = setTimer(function (c) 
                    if (self.timer) then 
                        local agencyNumber = generate_agency_number()
                        local existsBank = fetchAssoc("getBankByAgency", agencyNumber, DEFAULT_SELECT_BANK)

                        if (not existsBank) then 
                            killTimer(self.timer);
                            resolve(agencyNumber);
                        end
                    end    
                end, 1000, 0)

            end))

            return number
        end,
        catch = function () 
            return false
        end
    })
end


function Bank.public:get () 
    local bank = fetchAssoc("getBankByPhone", DEFAULT_SELECT_BANK, self.phone.id);

    if (bank) then 
        bank.extract = fetchAssoc("getAllBankTransactions", DEFAULT_SELECT_TRANSACTIONS, { from = bank._id });

        local others = fetchAssoc("getAllBankTransactions", DEFAULT_SELECT_TRANSACTIONS, { to = bank._id });

        for k,v in ipairs(others) do
            local userBank = fetchAssoc("getBankByID", DEFAULT_SELECT_BANK, v.from);
            
            if (userBank) then
                userBank.password = nil;

                table.insert(bank.extract, {
                    _id =  v._id;
                    bank = v.bank;
                    from = v.from;
                    to =  v.to;
                    value =  v.value;
                    description = v.description;
                    createdAt =  v.createdAt;
                    name = userBank.firstname;
                });
            end
        end

        bank.keys = fetchAssoc("getAllBankKeys", DEFAULT_SELECT_KEYS, bank._id);
        
        local contacts = fetchAssoc ("getContacts", { "contactId" }, bank._id);
        bank.contacts = {};

        for k,v in ipairs(contacts) do
            local userBank = fetchAssoc("getBankByID", { "firstname", "lastname", }, v.contactId);
            local keys = fetchAssoc("getAllBankKeys", DEFAULT_SELECT_KEYS, v.contactId);
            
            
            if (userBank) then 
                table.insert(bank.contacts, {
                    id = v.contactId,
                    bank = userBank,
                    key = keys[1] or nil,
                });
            end
        end

        
        self.id = bank._id;
        self.firstname = bank.firstname;
        self.lastname = bank.lastname;
        self.password = bank.password;
        self.balance = bank.balance;
        self.createdAt = bank.createdAt;
        self.keys = bank.keys;
        self.extract = bank.extract;
        self.contacts = bank.contacts;
        self.picture = bank.picture;
        

        return bank;
    else
        return false;
    end
end


function Bank.public:createBank (data, avatar) 
    local agency = self:doMakeAgency ();

    if (agency) then
        local tempName = 'temp_'..getTickCount()..'.png'
        local tempAvatar = fileCreate(tempName);
        fileWrite(tempAvatar, avatar);
        fileClose(tempAvatar);

        
        local file = fileOpen (tempName, true );
        local tempAvatarData = fileRead ( file, fileGetSize ( file ) );
        tempAvatarData = base64Encode ( tempAvatarData );
        fileClose ( file );
        fileDelete(tempName);

        fetchRemote("https://saturn-api.rocketmta.com/v1/game/attachments", {
            method = "POST",
            headers = {
                [ "x-access-token" ] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImE0MjAyMTRiLWUyMWYtNDIzMS05MTQ3LTcyOThkZTM2Y2MwMiIsImZlYXR1cmVzIjpbImNyZWF0ZTp1c2VyIiwicmVhZDp1c2VyIiwicmVhZDp1c2VyOnNlbGYiLCJyZWFkOnVzZXI6bGlzdCIsImNyZWF0ZTp3aGl0ZWxpc3QiLCJjcmVhdGU6YXBwb2ludG1lbnQiLCJ1cGRhdGU6cHJvZmlsZTpzZWxmIiwicHJvZmlsZTpzdWJzY3JpYmUiLCJyZWFkOnN1YnNjcmliZXJzOmxpc3QiLCJwcm9maWxlOnVuc3Vic2NyaWJlIiwiY3JlYXRlOnNlc3Npb24iLCJjcmVhdGU6cG9zdCIsInJlYWQ6cG9zdCIsInJlYWQ6Y29tbWVudHMiLCJyZWFkOnBvc3Q6bGlzdCIsImNyZWF0ZTpjb21tZW50IiwidXBkYXRlOnBvc3QiLCJkZWxldGU6cG9zdCIsInJlYWQ6d2hpdGVsaXN0Omxpc3QiLCJyZWFkOndoaXRlbGlzdCIsInVwZGF0ZTp3aGl0ZWxpc3QiLCJ1cGRhdGU6d2Vlay10aW1lcyJdLCJpYXQiOjE3MDE0NjU5NDUsImV4cCI6MTcwMjA3MDc0NSwic3ViIjoiYTQyMDIxNGItZTIxZi00MjMxLTkxNDctNzI5OGRlMzZjYzAyIn0.JvLGxgXmxRRCwp5YfMMwbiU9KJH_XxPoKdU7o5hQi2M",
                [ "Content-Type" ] = "multipart/form-data"
            },
            formFields = {
                [ "file" ] = "data:image/png;base64,"..tempAvatarData,
                [ "folder" ] = "game/photos"
            }
        }, function (body) 
            local _id = imports.core:createBank({
                phone = self.phone.id,
                firstname = data.firstname,
                lastname = data.lastname,
                password = data.password,
                picture = fromJSON(body).body.url or "",
                agency = agency,
            });
                
            imports.core:createKey({
                bank = _id,
                title = "Telefone",
                key = self.phone.number,
            }); 
            
            imports.core:createKey({
                bank = _id,
                title = "Agencia",
                key = agency,
            });
        end)

        return true;
    end
    

    return false;
end


function Bank.public:getBalance () 
    return self.balance;
end

function Bank.public:setBalance (value)
    self.balance = value;
    self:save();
end

function Bank.public:addTransaction (bankId, value, description) 
    local exists = fetchAssoc("existsContact", self.id, bankId);

    if (exists) then 
        local userBank = fetchAssoc("getBankByID", { "firstname", "lastname", }, bankId);

        local id = imports.core:createTransaction({
            from = self.id,
            to = bankId,
            value = value,
            description = description;
        });

        if (id) then 
            local transaction = {
                _id = id;
                bank = bankId;
                from = self.id;
                to =  bankId;
                value =  value;
                createdAt =  os.time();
                name = userBank.firstname;
            }

            table.insert(self.extract, transaction);

            return transaction;
        end
    end

    return false;
end 

function Bank.public:addContact (contactId)
    local exists = fetchAssoc("existsContact", self.id, contactId);

    if (not exists) then 
        local userBank = fetchAssoc("getBankByID", { "firstname", "lastname", }, contactId);
        local keys = fetchAssoc("getAllBankKeys", DEFAULT_SELECT_KEYS, contactId);

        local id = imports.core:createBankContact({
            bank = self.id,
            contactId = contactId;
        });


        if (id) then 
            local contact = {
                id = contactId,
                bank = userBank,
                key = keys[1] or nil
            }
            table.insert(self.contacts, contact);
            return contact;
        end
    end
    
    return false;
end

function Bank.public:removeContact (contactId)
    local exists = fetchAssoc("existsContact", self.id, contactId);

    if (exists) then 
        local delete = imports.core:deleteContact(self.id, contactId);
    
        if (delete) then 
            local index, _ = table.find(self.contacts, function (v) return v.id == contactId end);
            
            if (index) then 
                self.contacts[index] = nil;
                return true;
            end
        end
    end
    
    return false;
end

function Bank.public:save ()
    imports.core:saveBank({
        _id = self.id;
        firstname = self.firstname;
        lastname = self.lastname;
        balance = self.balance;
    });
end