local imports = {
    assets = exports.pixel_assets;
}
local shaders = class:create("shaders");
shaders.public.cache = {};



function shaders.public:hasTexture(vehicle, textureName) 
    return not not self.cache[shaderName][vehicle]
end


function shaders.public:replaceTexture(vehicle, textureName, texture) 
    if not (isElement(vehicle) or type(textureName) ~= "string" or not isElement(texture)) then
        return false;
    end
    

    local shaderName = "texture_" .. tostring(textureName);

    if (not self.cache[shaderName]) then
        self.cache[shaderName] = {};
    end

    local shader = self.cache[shaderName][vehicle];

    if (isElement(shader)) then
        destroyElement(shader) ;
        shader = nil;
    end

    if (not isElement(shader)) then
        shader = imports.assets:useCreateShader("tex_replace", 0, 0, false, 'vehicle');
    end

    if (not shader) then
        return false;
    end

    engineApplyShaderToWorldTexture(shader, textureName, vehicle);
    dxSetShaderValue(shader, "Tex0", texture);
 
    self.cache[shaderName][vehicle] = shader;
    return true;
end

