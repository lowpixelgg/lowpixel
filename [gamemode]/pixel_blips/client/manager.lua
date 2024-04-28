local boundedResources = {};
local cache = {};

function boundResource(resource, element)
  if not ( boundedResources[resource] ) then
    boundedResources[resource] = {};
  end
  table.insert(boundedResources[resource], element);
  updateCache(element, "parent", resource);
  return true;
end

function onResourceStop(resource)
  if (boundedResources[resource]) then
    for i, element in ipairs(boundedResources[resource]) do
      destroyCache(element, true);
    end
  end
end
addEventHandler("onClientResourceStop", root, onResourceStop);

function getAllCache(element, initData)
  return cache[element] or false;
end

function getCache(element, key)
  return cache[element] and cache[element][key] or false;
end

function createCache(element, initData)
  cache[element] = initData;
  return true;
end

function updateCache(element, key, value)
  cache[element][key] = value;
  return true;
end

function destroyCache(element, cancelBoundedUpdate)
  if ( cancelBoundedUpdate ~= true ) then
    local resource = getCache(element, "parent");
    for i, cElement in ipairs(boundedResources[resource]) do
      if ( cElement == element ) then
        table.remove(boundedResources[resource], i);
      end
    end
  end
  cache[element] = nil;
  element:destroy();
  return true;
end