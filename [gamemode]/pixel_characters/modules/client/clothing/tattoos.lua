local tattoos = class:create("tattoos");

local TEXTURE_SIZE = 512;
local TATTOO_SIZE = 55;
local RT_POOL_SIZE = 8;
local RT_POOL_SIZE_LARGE = 20;
local RENDER_TARGET_POOL = {};
local USED_RENDER_TARGETS = {};

local bodyRenderTarget = nil;
local mainRenderTarget = dxCreateRenderTarget(TEXTURE_SIZE, TEXTURE_SIZE, true);
local selection = dxCreateTexture("assets/selection.png");
local textures = {};

function tattoos.public:evaluate()
    --local dxStatus = dxGetStatus();
    --outputDebugString("BodyTexture: VRAM = " .. tostring(dxStatus.VideoMemoryFreeForMTA) .. "/" .. tostring(dxStatus.VideoCardRAM));
    --
    --if (dxStatus.VideoMemoryFreeForMTA >= 150) then
    --    local poolSize = RT_POOL_SIZE;
    --    if (dxStatus.VideoMemoryFreeForMTA > 500) then
    --        poolSize = RT_POOL_SIZE_LARGE;
    --        
    --        outputDebugString("BodyTexture: Using additional render targets");
    --    end
    --    outputDebugString("BodyTexture: RT_POOL_SIZE = " .. tostring(poolSize));
    --    
    --    for i = 1, poolSize do
    --        local renderTarget = dxCreateRenderTarget(TEXTURE_SIZE, TEXTURE_SIZE, true);
    --        if isElement(renderTarget) then
    --            table.insert(RENDER_TARGET_POOL, renderTarget);
    --        else
    --            break
    --        end
    --    end
    --else
    --    
    --    outputDebugString("Warning: Not enough VRAM to use render target pool (" .. tostring(tostring(dxStatus.VideoMemoryFreeForMTA)) .. ")");
    --    outputDebugString("BodyTexture: Using textures only");
    --    RENDER_TARGET_POOL = {};
    --end
end


function tattoos.public:getBodyRenderTarget(body) 
    if (not body) then return end
    
    if (isElement(USED_RENDER_TARGETS[body])) then return USED_RENDER_TARGETS[body] end
    
    if (#USED_RENDER_TARGETS == 0) then
        outputDebugString("BodyTexture: renderTargetPool is empty. Using main RT");
        return mainRenderTarget;
    end
    
    USED_RENDER_TARGETS[body] = table.remove(RENDER_TARGET_POOL, 1);
    return USED_RENDER_TARGETS[body];
end


function tattoos.public:freeBodyRenderTarget(body)    
    if (USED_RENDER_TARGETS[body])then
        table.insert(RENDER_TARGET_POOL, USED_RENDER_TARGETS[body]);
        USED_RENDER_TARGETS[body] = nil;
        return true;
    end
    
    return false;
end

function tattoos.public:drawTattoo(tattoo, selected) 
    local texture = textures[tattoo.tatooId];
    
    if (not isElement(texture)) then
        textures[tattoo.tatooId] = exports.pixel_assets:useCreateTexture("tattoos/".. tattoo.tatooId .. ".png");
        texture = textures[tattoo.tatooId];
    end
    
    if (selected) then
        dxDrawImage(tattoo.x - tattoo.width / 2, tattoo.y - tattoo.height / 2, tattoo.width, tattoo.height, selection, tattoo.rotation);
    end
    
    dxDrawImage(tattoo.x - tattoo.width / 2, tattoo.y - tattoo.height / 2, tattoo.width, tattoo.height, texture, tattoo.rotation, 0, 0, tocolor(255,255,255, 255));
end



function tattoos.public:redrawBodyTattoos(renderTarget, tattoos, selected) 
    if (not isElement(renderTarget)) then
        return;
    end
    
    if (true) then
        selected = 0;
    end
    
    dxSetRenderTarget(renderTarget, true);
    dxSetBlendMode("modulate_add");
    
    
    if (type(tattoos) == "table") then
        for i, tatoo in ipairs(tattoos) do
            self:drawTattoo(tatoo, selected == i);
        end
    end
    
    dxSetBlendMode("blend");
    dxSetRenderTarget();
end


function tattoos.public:createBodyRenderTarget(body, part, bodyPartName) 
    if (not isElement(body)) then return end
    
    bodyRenderTarget = dxCreateRenderTarget(TEXTURE_SIZE, TEXTURE_SIZE, true);
    
    shaders:replaceTexture(body, part, bodyPartName, "Tex1", bodyRenderTarget);
    
    return bodyRenderTarget;
end


function tattoos.public:setupBodyTattoos(body) 
    if (not isElement(body) or not isElementStreamedIn(body)) then
        return;
    end
    
    local tattoos = getElementData(body, "tattoos");
    
    if (not tattoos) then return end
    
    for k,v in ipairs(tattoos) do 
        local renderTarget = self:getBodyRenderTarget(body);
        self:redrawBodyTattoos(renderTarget, tattoos);
        
        if (renderTarget == mainRenderTarget) then
            local pixels = dxGetTexturePixels(mainRenderTarget);
            local texture = dxCreateTexture(TEXTURE_SIZE, TEXTURE_SIZE);
            
            dxSetTexturePixels(texture, pixels);
            
            local config = getConfig("masculine", v.part);
            shaders:replaceTexture(body, v.part, config.bodyPartName, "Tex1", texture);

            destroyElement(texture);
        else
            local config = getConfig("masculine", v.part);
            shaders:replaceTexture(body, v.part, config.bodyPartName, "Tex1", texture);
        end
    end
end