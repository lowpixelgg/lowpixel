local imports = {
  createBlip = createBlip,
  createBlipAttachedTo = createBlipAttachedTo,
  getBlipOrdering = getBlipOrdering,
  getBlipVisibleDistance = getBlipVisibleDistance,
  setBlipOrdering = setBlipOrdering,
  setBlipVisibleDistance = setBlipVisibleDistance
};

function createBlip(x, y, z, name, icon, color, ordering, visibleDistance)
  local blip = imports.createBlip(x, y, z, 0, 2, 255, 255, 255, ordering, visibleDistance);
  createCache(blip, {
    element = blip,
    name = name,
    icon = icon,
    color = color or 0xFF000000,
  });
  boundResource(sourceResource, blip);
  return blip;
end

function createBlipAttachedTo(elementToAttachTo, name, icon, color, ordering, visibleDistance)
  local blip = imports.createBlipAttachedTo(elementToAttachTo, 0, 2, 255, 255, 255, ordering, visibleDistance);
  createCache(blip, {
    element = blip,
    name = name,
    icon = icon,
    color = color or 0xFF000000,
  });
  boundResource(sourceResource, blip);
  return blip;
end

function isBlip(blip)
  return getAllCache(blip) and true or false;
end

function getBlipCache(blip)
  return getAllCache(blip);
end

function getBlipName(blip)
  return getCache(blip, "name") or false;
end

function getBlipIcon(blip)
  return getCache(blip, "icon") or false;
end

function getBlipColor(blip)
  return getCache(blip, "color") or false;
end

getBlipOrdering = imports.getBlipOrdering;
getBlipVisibleDistance = imports.getBlipVisibleDistance;
getBlipPosition = getElementPosition;
getBlipDimension = getElementDimension;
getBlipInterior = getElementInterior;

function setBlipName(blip, name)
  if ( getCache(blip, "name") ~= name ) then
    updateCache(blip, "name", name);
    return true;
  end
  return false;
end

function setBlipIcon(blip, icon)
  if ( getCache(blip, "icon") ~= icon ) then
    updateCache(blip, "icon", icon);
    return true;
  end
  return false;
end

function setBlipColor(blip, color)
  if ( getCache(blip, "color") ~= color ) then
    updateCache(blip, "color", color);
    return true;
  end
  return false;
end

setBlipOrdering = imports.setBlipOrdering;
setBlipVisibleDistance = imports.setBlipVisibleDistance;
setBlipPosition = setElementPosition;
setBlipDimension = setElementDimension;
setBlipInterior = setElementInterior;

function destroyBlip(blip)
  return destroyCache(blip);
end

function getBlips(startat, streamedIn) -- Do not use it in a render
  local blips = {};
  for i, blip in ipairs(Element.getAllByType("blip", startat, streamedIn)) do
    if ( getAllCache(blip) ) then
      table.insert(blips, blip);
    end
  end
  return blips;
end