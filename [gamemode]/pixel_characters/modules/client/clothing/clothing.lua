local clothing = class:create("clothing")
clothing.public.cache = {}


function clothing.public:redraw(element, gender, clotheType, index, color) 
    if (not isElement(element) or type(gender) ~= "string" or type(clotheType) ~= "string" or type(index) ~= "number") then
        return false;
    end
    
    local clothe = getConfig(gender, clotheType);

    if (not clothe) then return false end
    
    local index = clothe.textures[index];
    
    if not index then return false end
    
    local texture = clothing.public:getCachedTexture (element, index.directory);

    shaders:replaceTexture(element, clotheType, clothe.bodyPartName, "Tex0", texture);
    clothing.public:setBodyClotheColor(element, clotheType, color or index.color);
end


function clothing.public:undraw(element, gender, type) 
    local clothe = getConfig(gender, type);

    if (not clothe) then return false end

    shaders:removeShader(element, type, clothe.bodyPartName);
end


function clothing.public:setupBodyClothes (element)
    if (not element) then return false end

    if (getElementType(element) ~= "player" and getElementType(element) ~= "ped" and not isElement(element) and not isElementStreamedIn(element)) then
        return false;
    end

    
    local clothes = getElementData(element, "clothes");
    local gender = getElementData(element, "gender");

    if (not clothes) then return end


    if (shaders:hasShaders(element)) then
        shaders:destroyShaders(element);
    end

    for k,v in ipairs(clothes) do
        clothing.public:redraw(element, gender, v.type, v.index, v.color);
    end
end


function clothing.public:setBodyClotheColor(element, type, color) 
    shaders:replaceColor(element, type, color);
end


clothing.public.collaborativeCache = {}
function clothing.public:getCachedTexture(player, texture)
    clothing.public.cache[player] = clothing.public.cache[player] or {}
    local playerCache = clothing.public.cache[player]

    if playerCache[texture] then
        return playerCache[texture].element
    end

    for otherPlayer, otherCache in pairs(clothing.public.cache) do
        if otherPlayer ~= player and otherCache[texture] then
            playerCache[texture] = { element = otherCache[texture].element, collaborative = true }
            return otherCache[texture].element
        end
    end

    local newTexture = dxCreateTexture(texture, "argb")

    if isElement(newTexture) then
        playerCache[texture] = { element = newTexture, collaborative = false }
        return newTexture
    end

    return nil
end


function clothing.public:clearPlayerCache(player)
    local playerCache = clothing.public.cache[player]
    if playerCache then
        for texture, textureData in pairs(playerCache) do
            if not textureData.collaborative and isElement(textureData.element) then
                playerCache[texture] = nil;
            end
        end
        clothing.public.cache[player] = nil
    end
end