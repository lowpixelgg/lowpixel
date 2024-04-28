function bindPoint ()
  if getPedOccupiedVehicle(localPlayer) or getPedMoveState(localPlayer) == "crouch" then return end

  if getPedWeapon(localPlayer) == 0 then
    triggerServerEvent("addApontar", getRootElement(), localPlayer)
  end
end

bindKey("mouse2", "down", bindPoint)

function unbindPoint()
	if getPedWeapon(localPlayer) == 28 then
		triggerServerEvent("removerApontar", getRootElement(), localPlayer)
	end
end

bindKey("mouse2", "up", unbindPoint)

addEventHandler("onClientPlayerWeaponFire",localPlayer, function()
	if (getPedWeapon(localPlayer) == 28) then
      cancelEvent()
    end
end)

