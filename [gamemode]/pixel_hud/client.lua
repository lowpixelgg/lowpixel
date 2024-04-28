local sx, sy = guiGetScreenSize()
local link = "http://mta/"..getResourceName(getThisResource()).."/web-side/index.html"
local browser = createBrowser(sx, sy, true, true)
local components = { "area_name", "radio", "vehicle_name" }
local state = true;


local player = {}

local vehicle = false
local voiceEnabled = false

function dxHud()
    if (getElementData(localPlayer, "state") == "world" and state) then 
        dxDrawImage(0, 0, sx, sy, browser)
    end
end

function hideByComplete (cond) 
    state = not cond
end


function updateDX( )
    local health = getElementHealth(localPlayer)
    local armour = getPedArmor(localPlayer)
    local hunger = getElementData(localPlayer, configs['Elements']['Fome']) or 0
    local thirst = getElementData(localPlayer, configs['Elements']['Sede']) or 0
    local stress = getElementData(localPlayer, configs['Elements']['Stress']) or 100
    local radio = getElementData(localPlayer, "ae.frequencia") or 0

    local x,y,z = getElementPosition(localPlayer)
    local street = getZoneName ( x, y, z, true )
    local direction = getZoneName ( x, y, z, false )

    local time = getRealTime()
    local hours = ""..time.hour..":"..time.minute
    local minutes = time.minute;

    if getPedOccupiedVehicle(localPlayer) then

        fuel = getElementData(getPedOccupiedVehicle(getLocalPlayer()), configs['Elements']['fuel']) or 0
        speed = ( function( x, y, z ) return math.floor( math.sqrt( x*x + y*y + z*z ) * 155 ) end )( getElementVelocity( getPedOccupiedVehicle(localPlayer) ) ) 

end

    SendNUIMessage(browser, { vehicle = vehicle, talking = talking, health = health, armour = armour, thirst = thirst, hunger = hunger, street = street, radio = radio, time = hours, minutes = minutes, direction = direction, voice = voice, speed = speed, fuel = fuel })
end

 function SendNUIMessage(browser, table)
    if isElement(browser) and type(table) == "table" then
        return executeBrowserJavascript(browser, 'window.postMessage('..toJSON(table)..'[0])')
    end
end

 addEventHandler("onClientBrowserCreated", browser, function()
    loadBrowserURL(source, link)
 end)
 
 addEventHandler( "onClientBrowserDocumentReady", browser, 
 function (url)
    SendNUIMessage(browser, {hud = true})

    addEventHandler( "onClientRender", getRootElement(), dxHud, false, "low-9999999")
 end)

 function EntrarEsair()
    if getPedOccupiedVehicle(getLocalPlayer()) then 
       vehicle = true
    else
        vehicle = false
    end
 end

 
setTimer(function()
    EntrarEsair()
    updateDX()
end, 50, 0)

function setHud()
    setPlayerHudComponentVisible("armour", false)
    setPlayerHudComponentVisible("wanted", false)
    setPlayerHudComponentVisible("weapon", false)
    setPlayerHudComponentVisible("money", false)
    setPlayerHudComponentVisible("health", false)
    setPlayerHudComponentVisible("clock", false)
    setPlayerHudComponentVisible("breath", false)
    setPlayerHudComponentVisible("ammo", false)
    setPlayerHudComponentVisible("radar", false)

    for _, component in ipairs( components ) do
        setPlayerHudComponentVisible( component, false )
    end
end
addEventHandler("onClientResourceStart", getResourceRootElement(getThisResource()), setHud)


addEventHandler('onClientPlayerVoiceStart', root,
	function()
		if (source == localPlayer) then
			talking = true
		end
	end
)

addEventHandler('onClientPlayerVoiceStop', root,
	function()
		if (source == localPlayer) then
			talking = false
		end
	end
)