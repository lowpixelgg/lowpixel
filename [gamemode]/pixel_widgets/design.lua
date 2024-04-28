local imports =  {
  assets = exports.pixel_assets;
}


scw, sch = guiGetScreenSize()

fonts = {
  opensansRegular10 = imports.assets:useCreateFont("opensans.Regular", respo(10)),
  Roboto11 = imports.assets:useCreateFont("roboto.Medium", respo(11)),
  Roboto8 = imports.assets:useCreateFont("roboto.Regular", respo(8)),
  Poppins13 = imports.assets:useCreateFont("poppins.Bold", respo(20)),
  RobotoMedium10 = imports.assets:useCreateFont("roboto.Medium", respo(8)),
  PoppinsRegular10 = imports.assets:useCreateFont("poppins.Regular", respo(13)),
}