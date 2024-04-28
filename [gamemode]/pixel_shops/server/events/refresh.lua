local imports = {
    interactions = exports.pixel_interactions,
}

network:fetch("pixel_shops:onPlayerInteraction", true):on(function (...) Shops:openShop (...)end);
network:fetch("pixel_shops:onClientCheckout", true):on(function (...) Shops:onSell(...) end);

addEventHandler("onResourceStart", resourceRoot, function () 
    imports.interactions:createInteraction("shops", {
        { title = "Comprar", network = "pixel_shops:onPlayerInteraction", isRemote = true }
    }, 10, 0, -70);
end);