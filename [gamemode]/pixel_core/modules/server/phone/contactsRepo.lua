local _table = "contacts";


function Phone.contactsRepo:setup () 
    database:table(_table):create({
        { name = "phone", type = "varchar", size = 255},
        { name = "name", type = "varchar", size = 255 },
        { name = "number", type = "varchar", size = 255 },
        { name = "phoneId", type = "varchar", size = 255 },
        { name = "createdAt", type = "int", size = 255},
    });

    return print("Phone Contacts Repo has been propagated");
end


function Phone.contactsRepo:create (data) 
    database:table(_table):insert({
        name = data.name,
        number = data.number,
        phoneId = data.phoneId,
        createdAt = os.time()
    });


    return true;
end


function Phone.contactsRepo:getOneByNumber (number, fields, callback) 
    if (type(number) ~= "string" or type(fields) ~= "table") then
        return false;
    end

    return database:table(_table):select(fields, { number = number }, callback);   
end


function Phone.contactsRepo:getOneById (id, fields, callback)
    if (type(number) ~= "string" or type(fields) ~= "table") then
        return false;
    end

    return database:table(_table):select(fields, { id = id }, callback);    
end

function Phone.contactsRepo:getAllByPhone (phoneId, fields, callback)
    return database:table(_table):select(fields, { phone = phoneId }, function (...) executeCallback(callback, ...) end);
end


function Phone.contactsRepo:save (contact) 
    local store = {}

    for k,v in pairs(contact) do
      store[k] = v;
    end
  
    return database:table(_table):update(store, { id = contact.id });
end



function Phone.contactsRepo:delete (id)
    return database:table(_table):delete({id = id}, callback);
end