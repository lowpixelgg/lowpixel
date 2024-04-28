WeaponID = {
	[28] = true,
}

addEventHandler('onPlayerWeaponSwitch', getRootElement(),
	function(previousWeaponID, currentWeaponID)
		if (WeaponID[currentWeaponID] ) then
			toggleControl(source, 'fire', false)
			toggleControl(source, 'action', false)
			setPlayerHudComponentVisible(source, "crosshair", false)
		else
			toggleControl(source, 'fire', true)
			toggleControl(source, 'action', true)
			setPlayerHudComponentVisible(source, "crosshair", true)
		end
	end
)

local tempoApontar = {}

function addApontar(p)
if tempoApontar[p] then return end
tempoApontar[p] = true
local finger = giveWeapon(p, 28, 1, true)

if (getPedWeapon(p) == 28) then 
	setWeaponProperty(getPedWeapon(p), "poor", "damage", 0);
	setWeaponProperty(getPedWeapon(p), "std", "damage", 0);
	setWeaponProperty(getPedWeapon(p), "pro", "damage", 0);
end


	setTimer(function()
		tempoApontar[p] = nil
	end, 1000, 1)
end
addEvent("addApontar", true)
addEventHandler("addApontar", getRootElement(), addApontar)

function removerApontar(p)
takeWeapon(p, 28)
end
addEvent("removerApontar", true)
addEventHandler("removerApontar", getRootElement(), removerApontar)