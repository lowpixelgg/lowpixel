local _table = "bank";
local _keys = "bank_keys";
local _transac = "bank_transactions";
local _contacts = "bank_contacts";


function Phone.bankRepo:setup () 
    database:table(_table):create({
        { name = "phone", type = "varchar", size = 255},
        { name = "firstname", type = "varchar", size = 255 },
        { name = "lastname", type = "varchar", size = 255 },
        { name = "password", type = "int", size = 255 },
        { name = "balance", type = "int", size = 255 },
        { name = "agency", type = "int", size = 255 },
        { name = "picture", type = "varchar", size = 255 },
        { name = "createdAt", type = "int", size = 255},
    });


    database:table(_keys):create({
        { name = "bank", type = "int", size = 255},
        { name = "key", type = "varchar", size = 255},
        { name = "title", type = "varchar", size = 255},
        { name = "createdAt", type = "int", size = 255},
    });


    database:table(_transac):create({
        { name = "from", type = "int", size = 255},
        { name = "to", type = "int", size = 255},
        { name = "description", type = "varchar", size = 255},
        { name = "value", type = "int", size = 255},
        { name = "createdAt", type = "int", size = 255},
    });


    database:table(_contacts):create({
        { name = "bank", type = "int", size = 255},
        { name = "contactId", type = "int", size = 255},
        { name = "createdAt", type = "int", size = 255},
    });


    return print("Phone Bank Repo has been propagated");
end



function Phone.bankRepo:create (data) 
    local _,_, id = database:table(_table):insert({
        phone = data.phone,
        firstname = data.firstname,
        lastname = data.lastname,
        password = data.password,
        balance = 0,
        picture = data.picture,
        agency = data.agency,
        createdAt = os.time()
    });

    return id;
end


function Phone.bankRepo:getBankByPhone (fields, phone, callback) 
    return database:table(_table):select(fields, { phone = phone }, callback);
end


function Phone.bankRepo:getBankByAgency (fields, agency, callback) 
    return database:table(_table):select(fields, { agency = agency }, callback);
end



function Phone.bankRepo:getBankByID (fields, id, callback) 
    return database:table(_table):select(fields, { _id = id }, callback);
end


function Phone.bankRepo:save (bank)
    local store = {}

    for k,v in pairs(bank) do
      store[k] = v;
    end
  
    return database:table(_table):update(store, { _id = bank._id });
end


--[[
    @keys
--]]

function Phone.bankRepo:createBankKey (data) 
    database:table(_keys):insert({
        bank = data.bank,
        key = data.key,
        title = data.title,
        createdAt = os.time()
    });
end

function Phone.bankRepo:getAllBankKeys (fields, bankId, callback) 
    return database:table(_keys):select(fields, { bank = bankId}, callback);
end


function Phone.bankRepo:getKey (fields, key, callback) 
    return database:table(_keys):select(fields, { key = key }, callback);
end


--[[
    @transactions
--]]

function Phone.bankRepo:createBankTransaction (data) 
    local _,_, id = database:table(_transac):insert({
        from = data.from,
        to = data.to,
        value = data.value,
        description = data.description,
        createdAt = os.time()
    });

    return id;
end


function Phone.bankRepo:getAllTransactions (fields, where, callback)
    return database:table(_transac):select(fields, where, callback);
end



--[[
    @contacts
--]]
function Phone.bankRepo:createContact (data)
    local _,_, id = database:table(_contacts):insert({
        bank = data.bank,
        contactId = data.contactId,
        createdAt = os.time()
    })

    return id;
end


function Phone.bankRepo:getContacts (fields, bankId, callback) 
    return database:table(_contacts):select(fields, { bank = bankId }, callback);
end


function Phone.bankRepo:existsContact (bankId, contactId, callback)
    return database:table(_contacts):select({"bank"}, { bank = bankId, contactId = contactId }, callback);
end

function Phone.bankRepo:deleteContact (bankId, contactId) 
    return database:table(_contacts):delete({bank = bankId, contactId = contactId}, callback);
end