local imports = {
    ui = exports.pixel_ui;
}


circle = class "circle";


function circle:init (props)
    self.rectangleWidth = respo(70);
    self.rectangleHeight = respo(70);
    self.progress = 100;
    self.time = "0";
    self.esplasedTime = props.esplasedTime or 1000;
    self.isRendering = true;
    self.network = props.network or "rp_ui:updates/@circle";
    self.autoRendering = props.autoRendering or true;
    self.remote = props.remote or false;
    self.fade = 0;

    SVG:createCircle("circle", self.rectangleWidth, self.rectangleHeight, respo(7));
    SVG:createCircle("circle_bg", self.rectangleWidth, self.rectangleHeight, respo(7));

    imports.ui:setSvgOffset("circle", respo(0));
    imports.ui:setSvgOffset("circle_bg", respo(100));
end


function circle:render ()
    if (self.isRendering) then 
        self.fade = math.min(self.fade + 5, 255);
    else
      self.fade = math.max(self.fade - 5, 0);
    end

    local startX, startY = imports.ui:createLayoutBox("circle_timer", self.rectangleWidth, self.rectangleHeight, 0, respo(100), "center", "bottom", true);

        
    imports.ui:renderSvg("circle_bg", startX, startY, tocolor(13, 13, 13, self.fade/3));
    imports.ui:renderSvg("circle", startX, startY, tocolor(255, 255, 255, self.fade));
    dxDrawText(self.time, startX, startY, startX+self.rectangleWidth, startY+self.rectangleHeight, tocolor(255, 255, 255, self.fade), 1.0, fonts.Poppins13, "center", "center");

    imports.ui:setSvgOffset("circle", respo(self.progress));
end


function circle:setIsRendering (state) 
    self.isRendering = state;
end