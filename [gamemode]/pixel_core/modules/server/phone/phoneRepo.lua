local _table = "phones";


function Phone.phoneRepo:setup () 
    database:table(_table):create({
        { name = "id", type = "varchar", size = 255 },
        { name = "owner", type = "varchar", size = 255},
        { name = "number", type = "varchar", size = 255 },
        { name = "background", type = "varchar", size = 255 },
        { name = "plan", type = "int", size = 255 },
    });

    return print("Phone Repo has been propagated");
end


function Phone.phoneRepo:create (data) 
    return database:table(_table):insert({
        id = data.id,
        number = data.number, 
        owner = data.owner,
        background = "cdn.discordapp.com/attachments/669348897763754005/1166610531994570855/bg.png",
        plan = 0
    });
end



function Phone.phoneRepo:getOneByOwner (owner, fields, callback) 
    if (type(owner) ~= "string" or type(fields) ~= "table") then
        return false;
    end 

    
    return database:table(_table):select(fields, { owner = owner }, callback)[1];
end


function Phone.phoneRepo:getOne (id, fields, callback) 
    if (type(id) ~= "string" or type(fields) ~= "table") then
        return false;
    end

    return database:table(_table):select(fields, { id = id }, callback)[1];
end


function Phone.phoneRepo:getOneByNumber (number, fields, callback) 
    if (type(number) ~= "string" or type(fields) ~= "table") then
        return false;
    end

    return database:table(_table):select(fields, { number = number }, callback);   
end


function Phone.phoneRepo:save (phone)
    local store = {}

    for k,v in pairs(phone) do
      store[k] = v;
    end
  
    return database:table(_table):update(store, { id = phone.id });
end


function Phone.phoneRepo:delete (id, callback) 
    database:table(_table):delete({id = id}, callback);
end