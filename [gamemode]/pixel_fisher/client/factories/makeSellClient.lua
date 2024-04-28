local imports = {
    ui = exports.pixel_ui,
    notify = exports.pixel_notify,
    core = exports.pixel_core,
    locales = exports.pixel_lang
}

SellHandler = {};
SellHandler.UI = nil;

local meta = imports.core:getItemsMeta();


function SellHandler:open (data)  
    if (#data.fishes < 1) then 
        return imports.notify:showInfobox("info", imports.locales:getString("pixel_fisher:sell_toast_title"), imports.locales:getString("pixel_fisher:sell_toast_message")); 
    end

    local fishes = {}

    for _, fish in ipairs(data.fishes) do 
        table.insert(fishes, {
            id = fish._id,
            ImageURL = "https://cdn.discordapp.com/attachments/1118387423844503644/1161655576338645082/fish.png?ex=6539170f&is=6526a20f&hm=6311b1d1a316b0620e7fb2fce69eef060d67c62ed92d16f2baf58df4f7982085&",
            rarity = fish.name,
            price = meta[fish.name].price,
            amount = fish.amount,
            item = fish,
        })
    end
    
    data.fishes = nil;
    data.fishes = fishes;
    fishes = nil;

    SellHandler.UI = SellUI(data);
    imports.ui:toggleCursor(true);

    addEventHandler("onClientRender", root, SellHandler.doPulse);
    
    collectgarbage()
end

function SellHandler:doPulse ()
    if (not isCursorShowing()) then return SellHandler:close () end
    
    SellHandler.UI:render();
end

function SellHandler:makeSellUpdate (data) 
    if (#data.fishes < 1) then 
        return SellHandler:close ();
    end

    local fishes = {}

    for _, fish in ipairs(data.fishes) do 
        table.insert(fishes, {
            id = fish._id,
            ImageURL = "https://cdn.discordapp.com/attachments/1118387423844503644/1161655576338645082/fish.png?ex=6539170f&is=6526a20f&hm=6311b1d1a316b0620e7fb2fce69eef060d67c62ed92d16f2baf58df4f7982085&",
            rarity = fish.name,
            price = meta[fish.name].price,
            amount = fish.amount,
            item = fish,
        })
    end

    data.fishes = nil;
    data.fishes = fishes;
    fishes = nil;

    SellHandler.UI:sendPhoneEvent("updateGlobalContext", data, true);
end

function SellHandler:close ()
    removeEventHandler("onClientRender", root, SellHandler.doPulse);

    SellHandler.UI:destroy ();
    SellHandler.UI = nil;
    
    imports.ui:toggleCursor(false);
end

function SellHandler:sell (data) 
   if (data) then data = {fromJSON(data)} end
   network:emit("pixel_fisher:onClientSellFish", true, false, localPlayer, data);
end