-- =============== TYPES ===============

---@class element: userdata @The type `element` is a generic class that can represent almost all in-game entities.
---@class rope: userdata @The type `rope` represents the rope element.
---@class Vector3: userdata @The type `Vector3` represents a three-dimensional vector.

-- =============== VARIABLES ===============

currentRopes = {};
isServer = not localPlayer;
functions = {};

-- =============== FUNCTIONS ===============

---@param totalNodes integer
---@param segmentLength number
---@param initNodes table
---@return table
function createNodes(totalNodes, segmentLength, initNodes)
    local nodes = {};
    local startPos = Vector3(initNodes[1]);
    for i = 1, totalNodes, 1 do
        nodes[i] = initNodes[i] or Vector3(startPos);
    end
    return nodes;
end

---@param table table
---@return table
function createIndexes(table)
    local newIndex = {};
    for k, v in pairs(table) do
        newIndex[v] = k;
    end
    return newIndex;
end

function syncFunction(fnName, rope, ...)
    if ( isServer ) then
        triggerClientEvent("rocket_rope:"..fnName, rope, ...);
    end
end

function createClientEvent(event, fn)
    if ( not isServer ) then
        addEvent(event, true);
        addEventHandler(event, resourceRoot, fn);
    end
end

---@param totalNodes integer
---@param segmentLength number
---@param initNodes table
---@param style? table
---@param constraints? table
---@param fromServer? boolean
---@return rope
function createRope(totalNodes, segmentLength, initNodes, style, constraints, fromServer)
    local rope = source or Element("rope");
    initNodes = not isServer and tableToVector(initNodes) or initNodes;
    constraints = not isServer and nestedTableToVector(constraints) or constraints;
    currentRopes[rope] = {
        totalNodes = totalNodes,
        segmentLength = segmentLength,
        nodes = createNodes(totalNodes, segmentLength, initNodes),
        initNodes = initNodes,
        style = style or {},
        constraints = constraints or {},
        elements = {},
        elementsIndex = {},
        parent = nil,
        weighting = 0.5,
        uniqueZ = true,
        fromServer = fromServer,
    };
    syncFunction("createRope", rope, totalNodes, segmentLength, vectorToTable(initNodes), style, nestedVectorToTable(constraints), isServer);
    return rope;
end
createClientEvent("rocket_rope:createRope", createRope);

---@param rope rope
---@param fromServer? boolean
---@return boolean
function destroyRope(rope, fromServer)
    if ( currentRopes[rope] ) then
        currentRopes[rope] = nil;
        syncFunction("destroyRope", rope, rope, true);
        if ( fromServer ) then
            return true;
        else
            return rope:destroy();
        end
    end
    return false;
end
createClientEvent("rocket_rope:destroyRope", destroyRope);

---@param rope rope
---@param keepElements boolean
---@return boolean
function resetRope(rope, keepElements)
    if ( currentRopes[rope] ) then
        currentRopes[rope].elements = keepElements and currentRopes[rope].elements or {};
        currentRopes[rope].parent = keepElements and currentRopes[rope].parent or nil;
        currentRopes[rope].nodes = createNodes(currentRopes[rope].totalNodes, currentRopes[rope].segmentLength, currentRopes[rope].initNodes);
        currentRopes[rope].elementsIndex = createIndexes(currentRopes[rope].elements);
        return true;
    end
    return false;
end

---@param rope rope
---@param element element
---@return integer
function addRopeElement(rope, element)
    if ( currentRopes[rope] ) then
        table.insert(currentRopes[rope].elements, element);
        currentRopes[rope].elementsIndex = createIndexes(currentRopes[rope].elements);
        syncFunction("addRopeElement", rope, rope, element);
        return #currentRopes[rope].elements;
    end
    return false;
end
createClientEvent("rocket_rope:addRopeElement", addRopeElement);

---@param rope rope
---@param element element
---@return boolean
function removeRopeElement(rope, element)
    if ( currentRopes[rope] ) then
        local index = currentRopes[rope].elementsIndex[element];
        table.remove(currentRopes[rope].elements, index);
        currentRopes[rope].elementsIndex = createIndexes(currentRopes[rope].elements);
        syncFunction("removeRopeElement", rope, rope, element);
        return true;
    end
    return false;
end
createClientEvent("rocket_rope:removeRopeElement", removeRopeElement);

-- =============== SET FUNCTIONS ===============

---@param rope rope
---@param constraints table
---@param fromServer? boolean
---@return boolean
function setRopeConstraints(rope, constraints)
    if ( currentRopes[rope] ) then
        currentRopes[rope].constraints = not isServer and nestedTableToVector(constraints) or nestedTableToVector(constraints);
        syncFunction("setRopeConstraints", rope, rope, nestedVectorToTable(constraints));

        return true;
    end
    return false;
end
createClientEvent("rocket_rope:setRopeConstraints", setRopeConstraints);

---@param rope rope
---@param style table
---@return boolean
function setRopeStyle(rope, style)
    if ( currentRopes[rope] ) then
        currentRopes[rope].style = style;
        syncFunction("setRopeStyle", rope, rope, style);
        return true;
    end
    return false;
end
createClientEvent("rocket_rope:setRopeStyle", setRopeStyle);

---@param rope rope
---@param weighting number
---@return boolean
function setRopeWeighting(rope, weighting)
    if ( currentRopes[rope] ) then
        currentRopes[rope].weighting = weighting;
        syncFunction("setRopeWeighting", rope, rope, weighting);
        return true;
    end
    return false;
end
createClientEvent("rocket_rope:setRopeWeighting", setRopeWeighting);

---@param rope rope
---@param elementId integer
---@return boolean
function setRopeParent(rope, elementId)
    if ( currentRopes[rope] ) then
        currentRopes[rope].parent = currentRopes[rope].elements[elementId];
        syncFunction("setRopeParent", rope, rope, elementId);
        return true;
    end
    return false;
end
createClientEvent("rocket_rope:setRopeParent", setRopeParent);

---@param rope rope
---@param value boolean
---@return boolean
function setRopeUniqueZ(rope, value)
    if ( currentRopes[rope] ) then
        currentRopes[rope].uniqueZ = value;
        syncFunction("setRopeUniqueZ", rope, rope, value);
        return true;
    end
    return false;
end
createClientEvent("rocket_rope:setRopeUniqueZ", setRopeUniqueZ);

-- =============== GET FUNCTIONS ===============

---@param rope rope
---@param nodeId integer
---@return Vector3
function getNodePosition(rope, nodeId)
    if ( currentRopes[rope] ) then
        return currentRopes[rope].nodes[i];
    end
    return false;
end

---@param rope rope
---@return table
function getRopeElements(rope)
    if ( currentRopes[rope] ) then
        return currentRopes[rope].elements;
    end
    return false;
end

---@param rope rope
---@return integer
function getRopeElementId(rope, element)
    if ( currentRopes[rope] ) then
        return currentRopes[rope].elementsIndex[element] or false;
    end
    return false;
end

---@param rope rope
---@param elementId integer
---@return element
function getRopeElement(rope, elementId)
    if ( currentRopes[rope] ) then
        return currentRopes[rope].elements[elementId];
    end
    return false;
end

---@param rope rope
---@return table
function getRopeConstraints(rope)
    if ( currentRopes[rope] ) then
        return currentRopes[rope].constraints;
    end
    return false;
end

---@param rope rope
---@return table
function getRopeStyle(rope)
    if ( currentRopes[rope] ) then
        return currentRopes[rope].style;
    end
    return false;
end

---@param rope rope
---@param weighting number
---@return boolean
function getRopeWeighting(rope, elementId)
    if ( currentRopes[rope] ) then
        return currentRopes[rope].weighting;
    end
    return false;
end

---@param rope rope
---@return boolean
function getRopeParent(rope)
    if ( currentRopes[rope] ) then
        return currentRopes[rope].parent;
    end
    return false;
end

---@param rope rope
---@return boolean
function getRopeUniqueZ(rope)
    if ( currentRopes[rope] ) then
        return currentRopes[rope].uniqueZ;
    end
    return false;
end

-- =============== SYNC CACHE ===============

function receiveCache(cache)
    local newCache = {};
    for k, v in pairs(cache) do
        v.constraints = nestedTableToVector(v.constraints);
        v.initNodes = tableToVector(v.initNodes);
        v.nodes = createNodes(v.totalNodes, v.segmentLength, v.initNodes);
        newCache[k] = v;
    end
    currentRopes = newCache;
end
createClientEvent("rocket_rope:receiveCache", receiveCache);