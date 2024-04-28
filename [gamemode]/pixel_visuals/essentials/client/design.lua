local imports = {
    assets = exports.pixel_assets,
    ui = exports.pixel_ui
}

scw, sch = guiGetScreenSize()

fonts = {
 Akira30 = imports.assets:useCreateFont("akira.Expanded", respo(17)),
 OutfitRegular10 = imports.assets:useCreateFont("outfit.Regular", respo(9))   
}