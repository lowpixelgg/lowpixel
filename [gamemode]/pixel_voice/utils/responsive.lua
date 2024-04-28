local imports = {
    assets = exports.pixel_assets,
}

local scrX, scrY = guiGetScreenSize()
factor = exports.pixel_ui:getScaleFactor()

function respo (num2) 
  return math.ceil(num2 * factor)
end

fonts = {
    akiraBold52 = imports.assets:useCreateFont("akira.Expanded", respo(40));
    sfBold16 = imports.assets:useCreateFont("sf.Bold", respo(11));
    sfRegular10 = imports.assets:useCreateFont("sf.Regular", respo(9));
    sfRegular18 = imports.assets:useCreateFont("sf.Regular", respo(13));
}