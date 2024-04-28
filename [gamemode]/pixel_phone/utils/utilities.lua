-- Função para gerar um UUID v4 em Lua para MTA:SA
function generate_uuid_v4()
    local caracteres = "0123456789abcdef"
    local uuid = ""
    for i = 1, 32 do
        local rand = math.random(1, 16)
        uuid = uuid .. string.sub(caracteres, rand, rand)
    end
    -- Definir os bits de versão e de variante para UUID v4
    uuid = string.sub(uuid, 1, 12) .. "4" .. string.sub(uuid, 14, 16) .. "a" .. string.sub(uuid, 17, 32)
    return uuid
end

function generate_random_number()
    local number = ""
    for i = 1, 3 do
        number = number .. tostring(math.random(0, 9))
    end
    number = number .. "-"
    for i = 1, 3 do
        number = number .. tostring(math.random(0, 9))
    end
    return number
end


function syncEvent (event, handler)
    addEvent(event, true);
    addEventHandler(event, root, function (data) handler(fromJSON(data)) end)
end


function executeCallback(callback, ...)
    if type(callback) ~= "function" then
        return false
    end
    local success, err = pcall(callback, ...)
    if not success then
        return false
    end
    return true
end


function table.move(source, start, stop, dest_start, dest)
    dest = dest or source -- se dest não for fornecido, use source como destino
    dest_start = dest_start or 1 -- se dest_start não for fornecido, comece do índice 1

    local length = stop - start
    for i = 0, length do
        dest[dest_start + i] = source[start + i]
    end

    -- Limpar os elementos movidos na tabela de origem
    for i = start, stop do
        source[i] = nil
    end
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


function generate_agency_number ()
    local number = ""
    for i = 1, 7 do
        number = number .. math.random(0, 9)
    end
    return tonumber(number)
end