local scrX, scrY = guiGetScreenSize()
factor = exports.pixel_ui:getScaleFactor()

function respo (num2) 
    return math.ceil(num2 * factor)
end

function getElementOffset ( entity, offX, offY, offZ )
    local posX, posY, posZ = 0, 0, 0
    if isElement ( entity ) and type ( offX ) == 'number' and type ( offY ) == 'number' and type ( offZ ) == 'number' then
        local center = getElementMatrix ( entity )
        if center then
            posX = offX * center [ 1 ] [ 1 ] + offY * center [ 2 ] [ 1 ] + offZ * center [ 3 ] [ 1 ] + center [ 4 ] [ 1 ]
            posY = offX * center [ 1 ] [ 2 ] + offY * center [ 2 ] [ 2 ] + offZ * center [ 3 ] [ 2 ] + center [ 4 ] [ 2 ]
            posZ = offX * center [ 1 ] [ 3 ] + offY * center [ 2 ] [ 3 ] + offZ * center [ 3 ] [ 3 ] + center [ 4 ] [ 3 ]
        end
    end
    return posX, posY, posZ
end

function math.clamp ( value, lower, upper )
    value, lower, upper = tonumber ( value ), tonumber ( lower ), tonumber ( upper )
    if value and lower and upper then
        if value < lower then 
            value = lower
        elseif value > upper then 
            value = upper 
        end
        return value
    end
    return false
end