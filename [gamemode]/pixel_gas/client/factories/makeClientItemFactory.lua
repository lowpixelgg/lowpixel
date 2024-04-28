local imports = {
    notify = exports.pixel_notify,
    widgets = exports.pixel_widgets,
    core = exports.pixel_core,
}

local item;
local tFixedWidget;

local meta = imports.core:getItemsMeta();
local vehicle;

function attachCarToGallon (_, _, x, y, z) 
    local px, py, pz = getElementPosition(localPlayer);
    local distance = getDistanceBetweenPoints3D(px, py, pz, x,y,z);
    local data = meta[item.name];

    if (not data) then return false end
    if (math.floor(distance) > 4) then return false end 

    if (tFixedWidget) then 
        tFixedWidget:destroyInstance();
    end

    imports.widgets:destroyWidget("anex_gallon");
    imports.widgets:createProgress("gas_gallon", {
        title = "Abastecendo",
        description = "Aguarde enquanto seu veiculo está sendo abastecido.",
        esplasedTime = data['props'].amount * 2,
        network = "pixel_gas:onProgressItemEnd",
        anchor = {"center", "bottom", 0, 100}, 
        remote = true,
    });

    imports.widgets:startProgress("gas_gallon")

    unbindKey("e", "up", attachCarToGallon);
end


function onServerUseItem (data, _vehicle) 
    if (bomberInUse) then 
        return imports.notify:showInfobox("info", "Gas Station", "Você não pode usar este item por que já está abastecendo.");
    end

    vehicle = _vehicle;
    
    local x,y,z = getVehicleComponentPosition(vehicle, "petrocap_comp", "world");
    item = data;

    imports.widgets:createWidget("anex_gallon", {
        name = "anex_gallon",
        text = 'E para anexar o galão.',
        autoRendering = true,
        remote = true,
        maxDistance = 5,
        position = Vector3(x,y,z)
    });
    
    tFixedWidget = thread:createHeartbeat(function ()
        local x,y,z = getVehicleComponentPosition(vehicle, "petrocap_comp", "world");
        imports.widgets:setWidgetPosition("anex_gallon", Vector3(x,y,z));
    return true end, function () end, 250);

    bindKey("e", "up", attachCarToGallon, x,y,z);
end



function onServerCancel () 
    imports.widgets:destroyWidget("anex_gallon");
    imports.widgets:destroyProgress("gas_gallon");

    if (tFixedWidget) then 
        tFixedWidget:destroyInstance();
    end


    item = nil;
    tFixedWidget = nil;
    vehicle = nil;


    unbindKey("e", "up", attachCarToGallon);
end