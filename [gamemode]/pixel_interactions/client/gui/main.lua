local imports = {
    ui = exports.pixel_ui
};

local interactUI = class:create("interactUI");
local background = SVG:rectangle("bg_text", respo(100), respo(30), "#131313", 1)


function interactUI.public:doPulse ()
    local element = self:findElement();

    if (element) then
        local interaction = getElementData(element, "interaction");

        if (interaction) then 
            local index, data = table.find(ClientInterac.cache, function (v) return v.id == interaction end);
            if (data) then 

                local ex, ey, ez = getElementPosition(element);
                local px, py, pz = getElementPosition(localPlayer);
                local distance = getDistanceBetweenPoints3D(ex, ey, ez, px, py, pz);


                if (math.floor(distance) < data.distance) then 
                    local sx, sy = getScreenFromWorldPosition(ex, ey, ez);
                
                    if (sx and sy) then
                        local fx, fy = sx + data.anchor.x, sy + data.anchor.y
                        local hover = isMouseInPosition(fx, fy, respo(24), respo(24));

                        ClientInterac.cache[index].world = { x = fx, y = fy };
                        
                        if (data.showButtons) then 
                            self:drawButtons (index);
                        end

                        dxDrawImage(fx, fy, respo(24), respo(24), "assets/eye.png", 0, 0, 0, hover and tocolor(255, 0, 78, 255) or tocolor(255, 255, 255, 100));
                    end
                end 
            end
        end
    end
end


function interactUI.public:drawButtons (index) 
    local interaction = ClientInterac.cache[index];
    local espacamento = respo(1)

    if (interaction.world) then 
        for buttonIndex, button in ipairs(interaction.buttons) do   
            local bgw, bgh = respo(100), respo(30)
            local tabX, tabY = (interaction.world.x + 20), (interaction.world.y + 20) + (bgh + espacamento) * (buttonIndex - 1)
            
            button.anchor = { x = tabX, y = tabY };

            local hover = isMouseInPosition(tabX, tabY, respo(100), respo(30));

            imports.ui:renderSvg("bg_text", tabX, tabY, tocolor(255, 255, 255, 255), 0, false, true)
            dxDrawText(button.title, tabX, tabY, bgw + tabX, bgh + tabY, tocolor(255, 255, 255, hover and 255 or 120), 1.0, fonts.opensansRegular10, "center", "center")
        end
    end    
end


function interactUI.public:findElement()
    local camX, camY, camZ, lookAtX, lookAtY, lookAtZ = getCameraMatrix()
    local dirX, dirY, dirZ = lookAtX - camX, lookAtY - camY, lookAtZ - camZ
    local mag = math.sqrt(dirX^2 + dirY^2 + dirZ^2)
    dirX, dirY, dirZ = dirX / mag, dirY / mag, dirZ / mag

    local elementTypes = {"ped", "player", "vehicle", "object"}

    for _, elementType in ipairs(elementTypes) do
        for _, element in ipairs(getElementsByType(elementType)) do
            if element ~= getLocalPlayer() then
                local elemX, elemY, elemZ = getElementPosition(element)
                local dist = math.sqrt((camX - elemX)^2 + (camY - elemY)^2 + (camZ - elemZ)^2)
                if dist <= 100 then
                    local elemDirX, elemDirY, elemDirZ = elemX - camX, elemY - camY, elemZ - camZ
                    local magElem = math.sqrt(elemDirX^2 + elemDirY^2 + elemDirZ^2)
                    elemDirX, elemDirY, elemDirZ = elemDirX / magElem, elemDirY / magElem, elemDirZ / magElem

                    local dotProduct = dirX * elemDirX + dirY * elemDirY + dirZ * elemDirZ
                    if dotProduct > math.cos(math.rad(10)) then
                        return element
                    end
                end
            end
        end
    end

    return nil
end