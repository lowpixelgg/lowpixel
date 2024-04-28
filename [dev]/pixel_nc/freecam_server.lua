function setPlayerFreecamEnabled(player, x, y, z, dontChangeFixedMode)
	removePedFromVehicle(player)
	setElementData(player, "realinvehicle", 0, false)

	return triggerClientEvent(player,"doSetFreecamEnabled", getRootElement(), x, y, z, dontChangeFixedMode)
end

function setPlayerFreecamDisabled(player, dontChangeFixedMode)
	return triggerClientEvent(player,"doSetFreecamDisabled", getRootElement(), dontChangeFixedMode)
end

function setPlayerFreecamOption(player, theOption, value)
	return triggerClientEvent(player,"doSetFreecamOption", getRootElement(), theOption, value)
end

function isPlayerFreecamEnabled(player)
	return getElementData(player,"freecam:state")
end


enableNC = {}

function isPlayerInACL(player, acl)
    if (isElement(player)) and (getElementType(player) == "player") and (not isGuestAccount(getPlayerAccount(player))) and (aclGetGroup(acl or "")) then
        local account = getPlayerAccount(player)
        return isObjectInACLGroup("user."..getAccountName(account), aclGetGroup(acl))
    end
    return false
end

addCommandHandler("nc", function (player) 
	if (not isPlayerInACL(player, "Admin")) then return false end

	if (not enableNC[player]) then 
		enableNC[player] = false;
	end

	if (not enableNC[player]) then 
		setPlayerFreecamEnabled(player, 0,0,0, true);
		setElementAlpha(player, 0);
		enableNC[player] = true;
	else
		setPlayerFreecamDisabled(player, true);
		setElementAlpha(player, 255);
		enableNC[player] = false;
	end
end)