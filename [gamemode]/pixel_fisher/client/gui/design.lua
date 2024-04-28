local imports = {
    assets = exports.pixel_assets
}
scw, sch = guiGetScreenSize();


fonts = {
    PoppinMedium = imports.assets:useCreateFont("poppins.Medium", respo(10)),
    OutfitBlack = imports.assets:useCreateFont("outfit.Bold", respo(40)),
    InterLight = imports.assets:useCreateFont("outfit.Regular", respo(10)),
    RobotoMedium = imports.assets:useCreateFont("roboto.Medium", respo(10))
}