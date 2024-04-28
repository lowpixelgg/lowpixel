local imports = {
    pAttach = exports.pAttach,
}


local props = class:create("props");
props.public.attachments = {};


function props.public:attachPlayerProp(player, propName, callback)
    local prop = getPropsConfig(propName)

    if (prop) then
        if (not props.public.attachments[player]) then 
            props.public.attachments[player] = {}
        end

        props.public.attachments[player][propName] = {
            name = propName,
            subElement = createObject(prop.modelId, 0,0,0)
        }

        imports.pAttach:attach(
            props.public.attachments[player][propName].subElement,
            player,
            prop.bone,
            prop.ox,
            prop.oy,
            prop.oz,
            prop.rx,
            prop.ry,
            prop.rz
        )
        
        return executeCallback(callback, true)
    end

    return executeCallback(callback, false)
end


function props.public:deattachPlayerProp(player, propName, callback) 
    local playerProps = props.public.attachments[player]
    
    if (props.public.attachments[player] == nil) then return false end
    
    local exists = table.find(playerProps, function (prop) 
        return prop.name == propName
    end)

    if (exists) then 
        local element = playerProps[exists].subElement
        imports.pAttach:detach(element)
        destroyElement(element)
        
        props.public.attachments[player][exists] = nil

        return executeCallback(callback, true)
    end

    return executeCallback(callback, false)
end