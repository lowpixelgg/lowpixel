local screenW, screenH = guiGetScreenSize()
factor = exports.pixel_ui:getScaleFactor()

getAllElements = Element.getAllByType;
getDist3D = getDistanceBetweenPoints3D;
getDist2D = getDistanceBetweenPoints2D;

function respo (num2) 
    return math.ceil(num2 * factor)
end


function createRT(w, h, alpha, render)
    local rt = dxCreateRenderTarget(w, h, alpha);
    dxSetRenderTarget(rt, true)
    render();
    dxSetRenderTarget()
    return rt;
end


function isCursorInPosition( x, y, width, height )
    if not isCursorShowing() then
        return false
    end
    local scrX, scrY = guiGetScreenSize()
    local cursorX, cursorY = getCursorPosition()
    local cursorX, cursorY = ( cursorX * scrX ), ( cursorY * scrY )
    return ( ( cursorX >= x and cursorX <= x + width ) and ( cursorY >= y and cursorY <= y + height ) )
end


function isCursorInCircle(x, y, r)
    if isCursorShowing( ) then
        local cx, cy = getCursorAbsolutePosition();
        return (x-cx)^2+(y-cy)^2 <= r^2;
    end
    return false;
end


function isPointInPosition( px, py, x, y, w, h )
    return ( ( px >= x and px <= x + w ) and ( py >= y and py <= y + h ) )
end

function isBoxInPosition( bx, by, bw, bh, x, y, w, h, tolerance )
    local tolerance = tolerance or 0;
    x, y, w, h = x - tolerance, y - tolerance, w + tolerance, h + tolerance;
    if not ( isPointInPosition(bx, by, x, y, w, h) ) then
        return false;
    elseif not ( isPointInPosition(bx + bw, by, x, y, w, h) ) then
        return false;
    elseif not ( isPointInPosition(bx, by + bh, x, y, w, h) ) then
        return false;
    elseif not ( isPointInPosition(bx + bw, by + bh, x, y, w, h) ) then
        return false;
    end
    return true;
end


function getCursorAbsolutePosition()
    if not isCursorShowing() then
        return false;
    end
    local cx, cy = getCursorPosition();
    return cx * screenW, cy * screenH;
end


function convert(x, y, factorScale)
    return (x + 3000)/factorScale, (-y + 3000)/factorScale;
end

function toMapPosition(mapX, mapY, mapScale, x, y, size, factorScale)
    return mapX + x * mapScale - size/2, mapY + y * mapScale - size/2;
end

function convertToMapPosition(mapX, mapY, mapScale, x, y, size, factorScale)
    x, y = convert(x, y, factorScale);
    return mapX + x * mapScale - size/2, mapY + y * mapScale - size/2;
end

function convertToWorldPosition(x, y, mapX, mapY, mapSize)
    return (x - mapX) / mapSize * 6000 - 3000, (y - mapY) / mapSize * -6000 + 3000
end


function fetchRoute (sx, sy, sz, ex, ey, ez) 
    return try({
        exec = function ()
            local route = await(promise(function (resolve, reject) 
                network:emit("pixel_map:onClientRequestRoute", true, false, localPlayer, sx, sy, sz, ex, ey, ez);
                network:fetch("pixel_map:onClientRequestRoute", true):on(function (nodes) 
                    resolve(nodes);
                end);
            end));
            
            return route;
        end,
        catch = function () 
            return false;
        end
    })
end



function calculatePathByCoord (sx, sy, sz, ex, ey, ez, fn)
    async(function (this) 
        local nodes  = fetchRoute(sx, sy, sz, ex, ey, ez);
        
        pcall(fn, nodes);
        
        this:destroyInstance();
    end):resume()
end




function drawCenteredText(text, x, y, w, h, color, size, font, postGUI)
    return dxDrawText(text, x, y, w + x, h + y + 3, color, size, font, "center", "center", false, false, postGUI)
end


function math.lerp(a, b, t)
    return a + (b - a) * t;
end

function math.clamp(x, min, max)
    if x < min then return min end
    if x > max then return max end
    return x;
end

function getRGBA(color)
    if color then
        local blue = bitExtract(color, 0, 8);
        local green = bitExtract(color, 8, 8);
        local red = bitExtract(color, 16, 8);
        local alpha = bitExtract(color, 24, 8);
        return red, green, blue, alpha;
    end
end