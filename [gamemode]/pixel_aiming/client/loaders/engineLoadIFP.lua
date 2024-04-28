local IFP

function loadIFP()  
    IFP = engineLoadIFP( "assets/IFP/bearings.ifp", "bearings" )
end
addEventHandler( "onClientResourceStart", resourceRoot, loadIFP )

function setAnimation( player, nameAnim )
    local moveState = getPedMoveState( player )
    if IFP then
        if player and nameAnim and moveState ~= "jump" and isPedAiming( player ) then
            if nameAnim == "Left" or nameAnim == "Right" or nameAnim == "Back" then
                local rotPlayerX, rotPlayerY, rotPlayerZ = getElementRotation( player )
                setElementRotation( player, rotPlayerX, rotPlayerY, rotPlayerZ )
            end
            setPedAnimation( player, "bearings", "PBearing_".. nameAnim, -1, false, true, false, false )
        end
    else
        loadIFP()
    end
end
addEvent( "bearing_setAnimation", true )
addEventHandler( "bearing_setAnimation", root, setAnimation )

function isPedAiming(thePedToCheck)
	if isElement(thePedToCheck) then
		if getElementType(thePedToCheck) == "player" or getElementType(thePedToCheck) == "ped" then
			if getPedTask(thePedToCheck, "secondary", 0) == "TASK_SIMPLE_USE_GUN" or isPedDoingGangDriveby(thePedToCheck) then
				return true
			end
		end
	end
	return false
end