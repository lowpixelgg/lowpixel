local shaders = class:create("shaders");
local assets = exports.pixel_assets;

shaders.public.cache = {}


function shaders.public:replaceTexture(element, clotheType, bodyPartName, layer, texture)
    if (not isElement(element) or type(clotheType) ~= "string" or type(bodyPartName) ~= "string" or not isElement(texture)) then
        return false;
    end

    if (not shaders.public.cache[element]) then 
        shaders.public.cache[element] = {};
    end

    local shaderName = "texture_" .. tostring(clotheType);
    local shader = shaders.public.cache[element][shaderName];

    if (not isElement(shader)) then
        shader = assets:useCreateShader("tex_replace", 0, 0, false, 'ped');
        shaders.public.cache[element][shaderName] = shader;
    end
    
    if (not shader) then
        return false
    end

    if (layer == "Tex1") then  
        dxSetShaderValue(shader, layer, texture);
    else
        engineApplyShaderToWorldTexture(shader, bodyPartName, element);
        dxSetShaderValue(shader, layer, texture);
    end


    return shader;
end


function shaders.public:removeShader(element, clotheType, bodyPartName) 
    if (not isElement(element) or type(clotheType) ~= "string") then return end
    
    local shaderName = "texture_" .. tostring(clotheType);
    
    if (shaders.public.cache[element] == nil) then return end
    
    local shader = shaders.public.cache[element][shaderName];
    
    
    if (shader == nil) then return end
    
    
    engineRemoveShaderFromWorldTexture(shader, bodyPartName, element);
    destroyElement(shader);
    
    shaders.public.cache[element][shaderName] = nil;

    return true;
end


function shaders.public:replaceColor(element, textureName, color)
    if (not isElement(element) or type(textureName) ~= "string") then return false end
    
    local shaderName = "texture_" .. tostring(textureName);
    local shader = shaders.public.cache[element][shaderName];
    

    if (not isElement(shader)) then
        return false;
    end
    
    
    dxSetShaderValue(shader, 'sColor', color);
end


function shaders.public:destroyShaders(element) 
    if (not isElement(element) or shaders.public.cache[element] == nil) then
        return false;
    end
    
    for k, shader in pairs(shaders.public.cache[element]) do
        if isElement(shader) then
            destroyElement(shader);
        end
    end
    
    shaders.public.cache[element] = nil;
end


function shaders.public:hasShaders(element) 
    if (not isElement(element)) then
        return false;
    end
    
    if (shaders.public.cache[element] == nil) then
        return false;
    else
        return true;
    end
end


function shaders.public:getCache () 
    return shaders.public.cache;
end