local imports = {
    ui = exports.pixel_ui,
}
local forceRotationX, forceRotationY = 0, 0

instant "Components:Visualizer" {
    rectangleWidth = respo(500),
    rectangleHeight = respo(500),
    RT3D = nil,
    MAX_TRANSORM_ANGLE = 30,
    
    constructor = function (self, texture)
        self.texture = texture;
        self.fadeClose = 3;
        self.RT3D = RenderTarget3D.create(self.rectangleWidth, self.rectangleHeight);
    end,
    
    render = function (self, fade)
        local startX, startY = imports.ui:createLayoutBox("visuals_visualizer", self.rectangleWidth, self.rectangleHeight, 0,0, "center", "center", false)
        
        dxDrawImage(startX, startY, self.rectangleWidth, self.rectangleHeight, "assets/visuals.png", 0,0,0, tocolor(255,255,255, fade))
        
        RenderTarget3D.set(self.RT3D)
            dxDrawImage(0, 0, self.rectangleWidth, self.rectangleHeight,  self.texture, 0,0,0, tocolor(255,255,255, fade))
        dxSetRenderTarget()
        
        
        if self.RT3D then
            RenderTarget3D.draw(self.RT3D, startX, startY, self.rectangleWidth, self.rectangleHeight)
            
            local mouseX, mouseY = getMousePosition()
            if not isCursorShowing() then
                mouseX, mouseY = forceRotationX * scw, forceRotationY * sch
            end
            local rotationX = -(mouseX - scw / 2) / scw * self.MAX_TRANSORM_ANGLE
            local rotationY = (mouseY - sch / 2) / sch * self.MAX_TRANSORM_ANGLE
            
            RenderTarget3D.setTransform(self.RT3D, rotationX, rotationY, 0)
        end
        
        local backspaceWidth = respo(90)
        local backspaceHeight = respo(30)
        self.backspaceX = startX + (self.rectangleWidth - backspaceWidth) / 2
        self.backspaceY = (sch - backspaceHeight) - respo(20)
        
        if imports.ui:isMouseInPosition(self.backspaceX, self.backspaceY, backspaceWidth, backspaceHeight) then
            self.fadeClose = math.max(self.fadeClose - 0.1, 1)
        else
            self.fadeClose = math.min(self.fadeClose + 0.1, 3)
        end

        dxDrawImage(self.backspaceX, self.backspaceY, backspaceWidth, backspaceHeight, "assets/backspace.png", 0,0,0, tocolor(255, 255, 255, fade/self.fadeClose));
    end,

    getButton = function (self, x, y) 
        return x >= self.backspaceX and x <= self.backspaceX + respo(90) and y >= self.backspaceY and y <= self.backspaceY + respo(30)
    end
};


function getMousePosition()
    local mx, my = scw / 2, sch / 2
    if isCursorShowing() then
        mx, my = getCursorPosition()
        mx = mx * scw
        my = my * sch
    end
    return mx, my
end
