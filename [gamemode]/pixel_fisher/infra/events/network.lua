network:create("pixel_fisher:onPlayerStartFishing", false);
network:create("pixel_fisher:onClientReady", false);
network:create("pixel_fisher:onServerCatch", false);
network:create("pixel_fisher:onClientEndCatch", false);
network:create("pixel_fisher:onPlayerEndingCatch", false);
network:create("pixel_fisher:onInventoryRequestUse", false);
network:create("pixel_fisher:onPlayerUseFishrod", false);
network:create("pixel_fisher:onPlayerStopFishing", false);

network:create("pixel_fisher:onPlayerInteraction", false);
network:create("pixel_fisher:onServerOpenSell", false);

network:create("pixel_fisher:onClientSellFish", false);
network:create("pixel_fisher:onServerSellFish", false);


network:create("pixel_fisher:onServerCreateDropSoundEffect", false);
network:create("pixel_fisher:onServerCreateCatchSoundEffect", false);
network:create("pixel_fisher:onServerDestroyCatchSound", false);

if (localPlayer) then 
    addEvent("pixel_fisher:onCloseNUI", true);
    addEvent("pixel_fisher:onSellFishing", true);
end