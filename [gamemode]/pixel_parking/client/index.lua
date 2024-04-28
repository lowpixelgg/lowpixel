local imports = {
  assets = exports.pixel_assets,
  ui = exports.pixel_ui,
  webui = exports.webui,
  hud = exports.pixel_hud,
  inventory = exports.pixel_inv
};

parkingUI = newclass "ParkingUI"
local scx, scy = guiGetScreenSize();
local render = nil



function parkingUI:init (parking, cars) 
  render = function ()
    self:render();
  end

  self.id = parking.id
  self.nuiW = scx
  self.nuiH = scy
  self.cars = cars or {};
  self.fade = 0;
  self.isRendering = true;
  self.startX, self.startY = imports.ui:createLayoutBox("pixel_parking:box", self.nuiW, self.nuiH, 0, 0, "center", "center", false);

  -- Initializing WEBUI:
  imports.webui:startUp()
  self.nui = imports.webui:createWebWindow(self.startX, self.startY, self.nuiW, self.nuiH, "http://mta/pixel_parking/client/nui/index.html", true);
  
  if (not isCursorShowing()) then 
    imports.ui:toggleCursor(true);
  end

  imports.hud:hideByComplete(true);
  imports.inventory:hideByComplete(true);
  
  if (self.nui) then 
    focusBrowser(imports.webui:getBrowser(self.nui))
    
    imports.webui:executeJavascript(self.nui, "nuiCallFunction('"..toJSON(self.cars).."')") 
    addEventHandler("onClientRender", root, render);
  end
end

function parkingUI:stop ()   
  if (isCursorShowing()) then 
    imports.ui:toggleCursor(false);
  end

  imports.hud:hideByComplete(false);
  imports.inventory:hideByComplete(false);
  
  imports.webui:destroyWebWindow(self.nui);

  removeEventHandler("onClientRender", root, render);
end


function parkingUI:render ()
  if (self.isRendering) then 
    self.fade = math.min(self.fade + 10, 255);
  else
    self.fade = math.max(self.fade - 10, 0);
  end

  local ballon_w, ballon_h = respo(682), respo(682)

  dxDrawRectangle(0, 0, scx, scy, tocolor(6, 6, 7, self.fade/1.1));
  dxDrawRectangle(self.startX, self.startY, self.nuiW, self.nuiH, tocolor(9, 9, 9, self.fade));
  
  imports.webui:draw(self.nui);
  dxDrawImage(0 - 400, (scy - ballon_w) + 400, ballon_w, ballon_h, "assets/ballon.png", 0,0,0, tocolor(255, 255, 255, self.fade));
end