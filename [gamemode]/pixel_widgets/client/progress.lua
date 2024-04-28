local imports = {
  ui = exports.pixel_ui,
  blur = exports.pixel_blur,
}

progress = class "progress";

function progress:init (props) 
    self.title = props.title or nil;
    self.description = props.description or nil;
    self.color = props.color or nil;
    self.esplasedTime = props.esplasedTime or 900;
    self.rectangleWidth = respo(240);
    self.rectangleHeight = respo(90);
    self.progress = 0;
    self.time = "00:00";
    self.anchor = props.anchor
    self.wrap = wordWrap(self.description, self.rectangleWidth - 50, 1, "default", false);
    self.isRendering = true;
    self.network = props.network or "rp_ui:updates/@progress";
    self.remote = props.remote or false;
    self.blur = imports.blur:createBlurBox( 0, 0, self.rectangleWidth, self.rectangleHeight, 255, 255, 255, 255, false);
    self.autoRendering = props.autoRendering or true;
    self.transport = props.transport or {};

    SVG:createProgress ("bg_"..self.title.."_slider", self.rectangleWidth - 25, respo(8));
    SVG:createProgress (self.title.."_slider", self.rectangleWidth - 25, respo(8));

    imports.ui:getSvgRectWidth (self.title.."_slider", 0);
    imports.ui:setSvgRectWidth(self.title.."_slider", 0);

    self.fade = 0;
end


function progress:render () 
    if (self.isRendering) then 
      self.fade = math.min(self.fade + 1, 255);
    else
      self.fade = math.max(self.fade - 5, 0);
    end

    local startX, startY = imports.ui:createLayoutBox("progress_"..self.title, self.rectangleWidth, self.rectangleHeight, self.anchor[3] or 0, self.anchor[4] or 0, self.anchor[1], self.anchor[2], true);

    if (self.blur) then 
      imports.blur:render( self.blur )
      imports.blur:setBlurBoxPosition( self.blur, startX, startY );
      imports.blur:setBlurBoxColor(self.blur, 255,255,255,255);
    end

    dxDrawImage(startX, startY, self.rectangleWidth, self.rectangleHeight, "assets/bg_progress.png", 0,0,0, tocolor(31, 32, 37, 200));
    dxDrawImage((startX + self.rectangleWidth - 20) - 10, startY + 5, respo(25), respo(25), "assets/bg_dot.png", 0,0,0, tocolor(255, 174, 100));
    dxDrawText(self.title, startX + 14, startY + 10, respo(100), respo(200), tocolor(201, 198, 206), 1.0, fonts.Roboto11);

    for i = 1, #self.wrap do
      self.rectangleHeight =  40 +((i-1)*dxGetFontHeight()) + 50;
      dxDrawText(self.wrap[i], startX + 15, startY + 34+((i-1)*dxGetFontHeight()), 5, startY + 34+((i-1)*dxGetFontHeight()),  tocolor(201, 198, 206), 1.0, fonts.Roboto8);
    end

    local svgY = startY + self.rectangleHeight - respo(20);
    dxDrawText(self.progress >= 100 and "Finalizado" or self.time, startX + 15, svgY - respo(20), startX + respo( self.rectangleWidth ) - 11, startY + respo(0), tocolor(201, 198, 206, 100), 1.0, fonts.Roboto8, "right", "top");

    imports.ui:renderSvg("bg_"..self.title.."_slider", startX + 15, svgY, tocolor(255, 255, 255, 30));
    imports.ui:renderSvg(self.title.."_slider", startX + 15, svgY, tocolor(103, 100, 255));

    local targetWidth = respo(self.rectangleWidth - 25) / 100 * self.progress;
    local currentWidth = imports.ui:getSvgRectWidth(self.title.."_slider");

    local smoothness = 0.1;
    local smoothWidth = currentWidth + (targetWidth - currentWidth) * smoothness;

    imports.ui:setSvgRectWidth(self.title.."_slider", smoothWidth);
end


function progress:setIsRendering (state)
  self.isRendering = state;
end