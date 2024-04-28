local imports = {
    assets = exports.pixel_assets,
}


fonts = {
    akiraBold52 = imports.assets:useCreateFont("akira.Expanded", respo(40));
    sfBold16 = imports.assets:useCreateFont("sf.Bold", respo(11));
    sfRegular10 = imports.assets:useCreateFont("sf.Regular", respo(9));
    sfRegular18 = imports.assets:useCreateFont("sf.Regular", respo(13));
    graphikRegular14 = imports.assets:useCreateFont("graphik.Regular", respo(14));
    graphikBold14 = imports.assets:useCreateFont("graphik.Medium", respo(14));
}