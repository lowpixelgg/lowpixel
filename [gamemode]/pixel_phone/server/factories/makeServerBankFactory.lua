local imports = {
    core = exports.pixel_core,
    notify = exports.pixel_notify,
};

BankApp = {};

function BankApp:getBankData (player) 
    local instance = Phones.cache[player];
    if (not instance) then return false end
    async(function (this) 
        local result = instance:getBank():get()
        
        network:emit("pixel_phone:onClientOpenBank", true, false, player, result);
        this:destroyInstance();
    end):resume()
end


function BankApp:createAccount (player, data, avatar) 
    local instance = Phones.cache[player];
    if (not instance) then return false end
    
    async(function (this)
        local result = instance:getBank():createBank(data, avatar);
        
        if (result) then 
            network:emit("pixel_phone:onClientBankCreate", true, false, player);
        end
        
        this:destroyInstance();
    end):resume();
end



function BankApp:deleteContact (player, data) 
    local instance = Phones.cache[player];
    if (not instance) then return false end
    
    async(function (this) 
        instance:getBank():removeContact(data.id);
        this:destroyInstance();
    end):resume()
end


function BankApp:getBankByKey (player, data) 
    local instance = Phones.cache[player];
    if (not instance) then return false end
    
    async(function (this)
        local keys = instance:getBank().keys
        
        local exists = fetchAssoc("getKey", { "bank" }, data.key);
        
        if (not exists) then 
            imports.notify:showInfobox(player, "info", "Banco", "Esta chave pix não existe.");
            network:emit("pixel_phone:onClientGetBankByKey", true, false, player, false);
            
            return this:destroyInstance();
        end
        
        local bank = fetchAssoc("getBankByID", {"_id", "firstname", "lastname", "agency"}, exists.bank);
        
        network:emit("pixel_phone:onClientGetBankByKey", true, false, player, bank);
        
        this:destroyInstance();
    end):resume()
end


function BankApp:makeTransaction (player, data) 
    local instance = Phones.cache[player];
    if (not instance) then return false end
    
    async(function (this) 
        local bank = instance:getBank();
        local balance = bank:getBalance();
        local contact

        if (data.value > balance) then 
            imports.notify:showInfobox(player, "info", "Banco", "Você não tem dinheiro suficiente para esta transação");
            network:emit("pixel_phone:onClientExecTransfer", true, false, player, false);
            
            return this:destroyInstance();
        end
        
        local newBalance = balance - data.value;
        bank:setBalance(newBalance > 0 and newBalance or 0);
        
        -- Check if Player is in server;
        local phonePlayer, phone = table.find(Phones.cache, function (p) return p:getBank().id == data.id end);
        
        if (phone) then 
            local toBank = phone:getBank();
            local toBalance = toBank:getBalance();
            
            local newBalance = toBalance + data.value;
            toBank:setBalance(newBalance);

            local result = toBank:get();
            
            if (result) then 
                network:emit("pixel_phone:onServerUpdateBank", true, false, phonePlayer, result);
            end
        else
            local toBank = fetchAssoc("getBankByID", { "balance", "_id" }, data.bank);

            toBank.balance = toBank.balance + data.value;
            imports.core:saveBank(toBank);
        end


        -- Save Contact
        if (data.save) then 
            contact = bank:addContact(data.bank);
        end
        
        transaction = bank:addTransaction (data.bank, data.value, data.description);

        network:emit("pixel_phone:onClientExecTransfer", true, false, player, {
            balance = newBalance > 0 and newBalance or 0,
            contact = contact and contact or false,
            transaction = transaction or {},
        });
        
        this:destroyInstance();
    end):resume()
end