local _table = "galleries";

function Phone.galleryRepo:setup () 
    database:table(_table):create({
        { name = "url", type = "varchar", size = 255 },
        { name = "phoneId", type = "int", size = 255 },
        { name = "createdAt", type = "int", size = 255},
    });
    
    return print("Phone Gallery Repo has been propagated");
end



function Phone.galleryRepo:create (data) 
    database:table(_table):insert({
        url = data.url,
        phoneId = data.phoneId,
        createdAt = os.time()
    });
    
    return true;
end


function Phone.galleryRepo:getOneByID (id, fields, callback) 
    if (type(id) ~= "string" or type(fields) ~= "table") then
        return false;
    end

    return database:table(_table):select(fields, { id = id }, callback);  
end


function Phone.galleryRepo:getAllByPhoneID (phoneId, fields, callback) 
    local data = database:table(_table):select(fields, { phoneId = phoneId }, callback);
    
    if (#data > 0) then         
        return data;
    end
    
    return false;
end


function Phone.galleryRepo:delete (id, callback) 
    return database:table(_table):delete({id = id}, callback);
end