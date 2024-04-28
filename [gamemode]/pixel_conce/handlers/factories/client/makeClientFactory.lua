SHOWROOMS = {};
SHOWROOMS.tooltips = {};

function SHOWROOMS:enter(props) 
    showroom:create(props);
    showroom:enter();
    
    return false;
end


function SHOWROOMS:createTooltips () 
    for k,v in ipairs(getElementsByType("vehicle"))  do
        if (getElementData(v, "conce_vehicle")) then 
            SHOWROOMS.tooltips[v] = { vehicle = v; tooltip = nil }
        end
    end
end


function SHOWROOMS:renderTooltips () 
    for k,v in pairs(SHOWROOMS.tooltips)  do
        if not v.vehicle or not isElement(v.vehicle) then return end 
       
        local x,y,z = getElementPosition(localPlayer);
        local cx, cy, cz = getElementPosition(v.vehicle);
        local distance = getDistanceBetweenPoints3D(x, y, z, cx, cy, cz)

        if (distance < 20) then 
            if (not v.tooltip) then 
                SHOWROOMS.tooltips[v.vehicle].tooltip = TooltipComponent (v.vehicle);
            end
        else
            if (v.tooltip) then 
                v.tooltip:destroy();
                SHOWROOMS.tooltips[v.vehicle].tooltip = nil;
            end
        end

        if (v.tooltip) then 
            v.tooltip:render()
        end
    end
end

function SHOWROOMS:exit (id) 
    showroom:exit();
    return false;
end