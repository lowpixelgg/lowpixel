local imports = {
    assets = exports.pixel_assets
};



fonts = {
    OutfitMedium = imports.assets:useCreateFont("outfit.Medium", respo(8)),
    OutfitRegular11 = imports.assets:useCreateFont("outfit.Regular", respo(11)),
    OutfitMedium10 = imports.assets:useCreateFont("outfit.Medium", respo(11)),
    LuxoraBook11 = imports.assets:useCreateFont ("luxora.Book", respo(10));
    LuxoraMedium20 = imports.assets:useCreateFont ("luxora.Medium", respo(15)),
    LuxoraRegular15 = imports.assets:useCreateFont ("luxora.Regular", respo(11));

    GilroyBold = imports.assets:useCreateFont ("gilroy.Bold", respo(20));


    LuxuraGrotesk = imports.assets:useCreateFont ("outfit.Regular", respo(11));
}