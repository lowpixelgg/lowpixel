-- ****************************************************************************
-- *
-- *  PROJECT:     MTA:SA CEF utilities (https://github.com/Jusonex/mtasa_cef_tools)
-- *  FILE:        webui/src/ExportsAPI.lua
-- *  PURPOSE:     Exports interface for people who don't want to add webui to their project
-- *
-- ****************************************************************************
local webWindows = {}

function startUp()
	WebUIManager:new()
end

function createWebWindow(posX, posY, sizeX, sizeY, url, transparent)
	local identifier = #webWindows + 1
	webWindows[identifier] = WebWindow:new(Vector2(posX, posY), Vector2(sizeX, sizeY), url, transparent)
	
	return identifier
end

function createGhost(id, posX, posY, sizeX, sizeY, url, transparent)
	if not webWindows[id] then 
		webWindows[id] = WebWindow:new(Vector2(posX, posY), Vector2(sizeX, sizeY), url, transparent)
	end

	return id
end

function destroyWebWindow(identifier)
	local webWindow = webWindows[identifier]
	if not webWindow then return false end
	
	webWindow:destroy()
	webWindows[identifier] = nil
	return true
end

function getWebWindowPosition(identifier)
	local webWindow = webWindows[identifier]
	if not webWindow then return false end
	
	local pos = webWindow:getPosition()
	return pos.x, pos.y
end

function setWebWindowPosition(identifier, x, y)
	local webWindow = webWindows[identifier]
	if not webWindow then return false end

	return webWindow:setPosition(Vector2(x,y))
end

function loadWebWindowURL(identifier, url)
	local webWindow = webWindows[identifier]
	if not webWindow then return false end
	
	return webWindow:getUnderlyingBrowser():loadURL(url)
end

function getWebWindowTexture(identifier)
	local webWindow = webWindows[identifier]
	if not webWindow then return false end
	
	return webWindow:getTexture()
end

function executeJavascript(identifier, code)
	local webWindow = webWindows[identifier]
	if not webWindow then return false end

	return webWindow:executeJavascript(code)
end

function executeJavascriptWithoutEvent(identifier, code) 
	local webWindow = webWindows[identifier]
	
	if not webWindow then return false end
	executeBrowserJavascript(webWindow.m_Browser, code)
end

function onBrowserEvent(identifier, eventName, handler) 
	local webWindow = webWindows[identifier]
	if not webWindow then return false end
	return webWindow:onBrowserEvent(eventName, handler)
end

function getBrowser(identifier)
	local webWindow = webWindows[identifier]
	if not webWindow then return false end
	
	return webWindow:getTexture()
end

function draw(identifier)
	local webWindow = webWindows[identifier]
	if not webWindow then return false end

	return webWindow:draw()	
end