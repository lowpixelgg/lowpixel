ClientInterac = {};
ClientInterac.cache = {};

local carry;

function ClientInterac:create (data)
    ClientInterac.cache = data;
end


function ClientInterac:doPulse ()
    if (not isCursorShowing() and carry) then 
        carry.showButtons = false;
        carry = nil;
    end

    interactUI:doPulse ()
end


function ClientInterac:getInteractionByPosition (x, y)  
    for _, button in ipairs(ClientInterac.cache) do 
        if (button.world) then 
            if (x >= button.world.x and x <= button.world.x + respo(24) and y >= button.world.y and y <= button.world.y + respo(24)) then 
                return button;
            end
        end
    end
    
    return false;
end


function ClientInterac:getButtonsByPosition(interaction, x, y)
    for _, button in ipairs(interaction.buttons) do 
        if (button.anchor) then 
            if (x >= button.anchor.x and x <= button.anchor.x + respo(100) and y >= button.anchor.y and y <= button.anchor.y + respo(30)) then 
                return button;
            end
        end
    end
end


function ClientInterac.onClick (b, s, abx, aby, _, _, _, clickedElement)
    if (b == "right" and s == "up") then 
        local interaction = ClientInterac:getInteractionByPosition (abx, aby)
        
        if (not interaction) then 
            if (carry) then 
                carry.showButtons = false;
                carry = nil;
            end

            return;
        end
        
        carry = interaction;
        carry.showButtons = true;
    elseif (b == "left" and s == "up") then
        if (carry) then 
            local button = ClientInterac:getButtonsByPosition(carry, abx, aby);

            if (not button) then 
                carry.showButtons = false;
                carry = nil;
            else
                if (button.isRemote) then 
                    network:emit(button.network, true, false, localPlayer, clickedElement);
                else
                    network:emit(button.network, false, false, localPlayer, clickedElement);
                end
            end
        end
    end
end