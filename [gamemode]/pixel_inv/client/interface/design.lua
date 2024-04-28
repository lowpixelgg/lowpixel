scw, sch = guiGetScreenSize();
screenW, screenH = guiGetScreenSize();


imports = {
  assets = exports.pixel_assets,
  locales = exports.pixel_lang,
  blur = exports.pixel_blur,
  core = exports.pixel_core,
  notify = exports.pixel_notify,
  visuals = exports.pixel_visuals,
  editbox = exports.pixel_editbox,
  ui = exports.pixel_ui,
  widgets= exports.pixel_widgets
};


itemsMeta = imports.core:getItemsMeta();

fonts = {
  OutfitRegular12 = imports.assets:useCreateFont("outfit.Regular", respo(12)),
  OutfitRegular11 = imports.assets:useCreateFont("outfit.Regular", respo(11)),
  OutfitLight7 = imports.assets:useCreateFont("outfit.Light", respo(7)),
  OutfitRegular9 = imports.assets:useCreateFont("outfit.Regular", respo(9.0)),
  OutfitRegular95 = imports.assets:useCreateFont("outfit.Regular", respo(9.5)),
  OutfitRegular96 = imports.assets:useCreateFont("outfit.Regular", respo(10)),
  OutfitRegular85 = imports.assets:useCreateFont("outfit.Regular", respo(10)),
  OutfitRegular86 = imports.assets:useCreateFont("outfit.Regular", respo(8.6)),
  PoppinsRegular10 = imports.assets:useCreateFont ("poppins.Regular", respo(10)),
  PoppinsRegular14 = imports.assets:useCreateFont ("poppins.Light", respo(14)),
  PoppinsLight10 = imports.assets:useCreateFont ("poppins.Light", respo(14)),
  PoppinsRegular13 = imports.assets:useCreateFont("poppins.Regular", respo(13)),
  Outfit11 = imports.assets:useCreateFont("outfit.Regular", respo(10)),
  Roboto11 = imports.assets:useCreateFont("outfit.Medium", respo(9)),
};