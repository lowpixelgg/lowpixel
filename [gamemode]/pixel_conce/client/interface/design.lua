imports = {
    assets = exports.pixel_assets,
    blur = exports.pixel_blur,
    cutscene = exports.pixel_cutscene,
    ui = exports.pixel_ui,
    widgets = exports.pixel_widgets,
    locales = exports.pixel_lang

}

scw, sch = guiGetScreenSize()

fonts = {
    Outfit94 = imports.assets:useCreateFont("outfit.Regular", respo(11)),
    ExoMedium10 = imports.assets:useCreateFont("exo.Medium", respo(10.5)),
    PoppinsRegular10 = imports.assets:useCreateFont ("poppins.Regular", respo(10)),
    HansomBold20 = imports.assets:useCreateFont ("hansom.Bold", respo(20)),
    OutfitBold8 = imports.assets:useCreateFont("outfit.Medium", respo(9)),
    RobotoRegular92 = imports.assets:useCreateFont("roboto.Regular", respo(11)),
    AbcBold30 = imports.assets:useCreateFont("abc.Bold", respo(35)),
    OutfitRegular13 = imports.assets:useCreateFont("outfit.Regular", respo(13)),
    RobotoRegular10 = imports.assets:useCreateFont("roboto.Regular", respo(8)),
    ExoRegular10 = imports.assets:useCreateFont("exo.Bold", respo(11)),
    OutfitBold11 = imports.assets:useCreateFont("outfit.Bold", respo(13)),
    OutfitLight9 = imports.assets:useCreateFont("outfit.Light", respo(9)),
    OutfitBold9 = imports.assets:useCreateFont("outfit.Bold", respo(10)),
    HansomBold11 = imports.assets:useCreateFont ("hansom.Bold", respo(11)),
    
    -- tooltip
    
    ExoBold10 = imports.assets:useCreateFont("exo.Bold", 10),
    OutfitBold10 = imports.assets:useCreateFont("outfit.Bold", 10),
    AbcBold20 = imports.assets:useCreateFont("exo.Bold", 20),
    RobotoRegular = imports.assets:useCreateFont("roboto.Regular", 11),
    PoppinsRegular13 = imports.assets:useCreateFont("poppins.Regular", respo(15)),
    OutfitRegular96 = imports.assets:useCreateFont("outfit.Regular", respo(9.6)),
    Roboto8 = imports.assets:useCreateFont("roboto.Regular", respo(9)),
}