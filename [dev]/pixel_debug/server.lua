
enabled = false

function onDebugMessage(message, level, file, line)
	if (not enabled) then
		return
	end

	triggerLatentClientEvent("onDebugMessage", resourceRoot, message, level, file, line)
end

addEvent("onClientStartedLog", true)
addEventHandler("onClientStartedLog", resourceRoot,
	function ()
		enabled = true
	end
)

addEventHandler("onPlayerQuit", root,
	function ()
		if (#(getElementsByType("player")) == 0) then
			enabled = false
		end
	end
)

addEventHandler("onResourceStart", resourceRoot,
	function ()
		addEventHandler("onDebugMessage", root, onDebugMessage)
	end
)
