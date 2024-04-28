widgets = class "widgets";

local imports = {
  ui = exports.pixel_ui,
}

local clickTexture = dxCreateTexture("assets/clickme.png")

function widgets:init (id, props) 
  if (props.variant == "key") then
    self.key = props.key;
  end
  
  self.id = id
  self.variant = props.variant;
  self.name = props.name or nil;
  self.icon = props.icon or clickTexture;
  self.network = props.network or nil;
  self.remote = props.remote or false;
  self.transform = {x = 0, y = 0};
  self.position = props.position or nil;
  self.width = respo(36);
  self.height = respo(36);
  self.text = props.text or false;
  self.maxDistance = props.maxDistance;
  self.attach = props.attach or nil;
  self.autoRendering = props.autoRendering;
  self.svg = SVG:background (self.name, self.width, self.height);
  self.transport = props.transport or {}
  
  
  
  if (self.text) then 
    local text_size = dxGetTextSize(self.text);
    local padding = 20;
    local centerX = text_size + padding;
    local centerY = respo(32);
    
    self.textBg = SVG:rectangle(self.name.."_text", centerX, centerY, "#131313", 1)
  end
  
  
  self.offset = 0;
  self.glow = 255;
  self.clickHold = false;
  self.isRendering = true;
  self.fade = 0;

  imports.ui:setSvgOffset(self.name, 0);
end


function widgets:render ()  
  if (self.isRendering) then 
    self.fade = math.min(self.fade + 1, 255);
  else
    self.fade = math.max(self.fade - 5, 0);
  end
  
  if (self.clickHold) then 
    self.offset = math.min(self.offset + 2, 100);
  else
    self.offset = math.max(self.offset - 2, 0);
  end
  
  imports.ui:setSvgOffset(self.name, self.offset);
  
  if (self.autoRendering and self.position) then
    local rescueX, rescueY = getScreenFromWorldPosition(self.position.x, self.position.y, self.position.z);
    
    if (rescueX and rescueY) then 
      self.transform.x, self.transform.y = rescueX, rescueY;      
    else
      return;
    end
  end
  
  local imageX, imageY =self.transform.x, self.transform.y;
  local imageWidth, imageHeight = self.width, self.height;
  local imageFilePath = self.variant == "key" and "assets/keys/"..self.key..".png" or self.icon;
  
  if (self.variant == "click" or self.variant == "key") then 
    imports.ui:renderSvg(self.name, self.transform.x, self. transform.y, tocolor(255,255,255));
    dxDrawImage(self.transform.x, self.transform.y, imageWidth, imageHeight, imageFilePath, 0, 0, 0);
  end
  
  if (self.text) then 
    local size = dxGetTextWidth(self.text);
    local bgw, bgh = size + 20, respo(33);
    local textX = (size + 20) - size/2;
    local tabX, tabY = self.transform.x + respo(36), self.transform.y + 1;
    
 
    imports.ui:renderSvg(self.name.."_text", tabX, tabY, tocolor(255,255,255, 255), 0, false, true);
    dxDrawText(self.text, tabX, tabY, bgw + tabX, bgh + tabY, tocolor(255, 255, 255, 120), 1.0, fonts.opensansRegular10, "center", "center");    
  end
end


function widgets:setTransoform(position)   
  local rescueX, rescueY = getScreenFromWorldPosition(position.x, position.y, position.z);
  
  if (rescueX and rescueY) then 
    self.transform.x, self.transform.y = rescueX, rescueY;
    self.position = position;
  end
end


function widgets:isInside(x,y) 
  return (x >= self.transform.x and x <= self.transform.x + self.width and y >= self.transform.y and y <= self.transform.y + self.height);
end


function widgets:checkDistance () 
  local px, py, pz = getElementPosition(localPlayer);
  local distance = getDistance(self.position.x, self.position.y, self.position.z, px, py, pz);
  
  return math.floor(distance) < self.maxDistance;
end

function widgets:setIsRendering(state) 
  self.isRendering = state;
end