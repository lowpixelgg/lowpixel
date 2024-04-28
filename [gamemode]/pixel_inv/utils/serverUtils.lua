function generate_uuid_v4()
    local caracteres = "0123456789abcdef"
    local uuid = ""
    for i = 1, 32 do
        local rand = math.random(1, 16)
        uuid = uuid .. string.sub(caracteres, rand, rand)
    end

    uuid = string.sub(uuid, 1, 12) .. "4" .. string.sub(uuid, 14, 16) .. "a" .. string.sub(uuid, 17, 32)
    return uuid
end

function fetchAssoc (func, ...)
    local event_hash = generate_uuid_v4();
    local args = {...}
    table.insert(args, event_hash);


    return try({
        exec = function (self)
            local data = await(promise(function (resolve, reject)
                call(getResourceFromName("pixel_core"), func, unpack(args))
     

                local function assocFunction (result) 
                    resolve(result);

                    removeEventHandler(event_hash, resourceRoot, assocFunction);
                end
                
                addEvent(event_hash, true);
                addEventHandler(event_hash, resourceRoot, assocFunction);
            end))

            self:destroyInstance()

            return data
        end,
        catch = function () 
            return false
        end
    })
end