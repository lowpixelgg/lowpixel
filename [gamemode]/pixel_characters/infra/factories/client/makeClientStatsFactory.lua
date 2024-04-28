local imports = {
    widgets = exports.pixel_widgets,
    core = exports.pixel_core
}

local meta = imports.core:getItemsMeta();

function makePlayerEat (item)
    imports.widgets:createCircleTimer("eatTimer", {
        network = "pixel_characters:onCircleTimerEnd",
        esplasedTime = meta[item.name]['props'].eatTime or 2000,
        remote = true,
    });

    imports.widgets:startCircleTimer("eatTimer");
end


function makeServerDestroyTimer ()
    imports.widgets:destroyCircle("eatTimer");
end