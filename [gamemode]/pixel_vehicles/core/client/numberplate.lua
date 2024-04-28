local numberplate = class:create("numberplate");
local TEXTURE_NAME = "nomer";
local TEXTURE_WIDTH = 256;
local TEXTURE_HEIGHT = 128;
local mainRenderTarget = dxCreateRenderTarget(TEXTURE_WIDTH, TEXTURE_HEIGHT, true);


local textOffsetX = 10
local textOffsetY = 17
local textWidth = 229
local textHeight = 128


function numberplate.public:draw(renderTarget, text) 
    if (not isElement(renderTarget)) then return false end

    dxSetRenderTarget(renderTarget, true);
        dxDrawRectangle(0,0, TEXTURE_WIDTH, TEXTURE_HEIGHT, tocolor(255,0,0));
        dxDrawImage(0,0, TEXTURE_WIDTH, TEXTURE_HEIGHT, "assets/numberplate.png", 0,0,0, tocolor(255,255,255))
        dxDrawText(tostring(text), textOffsetX, 0, textOffsetX + textWidth, textOffsetY + textHeight, tocolor(0, 0, 0, 230), 1, fonts.NumberPlate36, "center", "center")
    dxSetRenderTarget();
end


function numberplate.public:setupNumberPlate (vehicle) 
    if (not isElement(vehicle) or not isElementStreamedIn(vehicle)) then 
        return false;
    end


    local numberplate = getElementData(vehicle, "numberplate");
    self:draw(mainRenderTarget, numberplate);

    local pixels = dxGetTexturePixels(mainRenderTarget);
    local texture = dxCreateTexture(TEXTURE_WIDTH, TEXTURE_HEIGHT)
    dxSetTexturePixels(texture, pixels);


    shaders:replaceTexture(vehicle, TEXTURE_NAME, texture)
    destroyElement(texture)
end