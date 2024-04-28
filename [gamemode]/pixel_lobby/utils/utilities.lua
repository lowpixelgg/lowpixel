function dxDrawTextOnElement(TheElement,text,height,distance,R,G,B,alpha,size,font, ...)
  local x, y, z = getElementPosition(TheElement)
  local x2, y2, z2 = getCameraMatrix()
  local distance = distance or 10
  local height = height or 1
  local value1 = -10
  local value2 = -10
  
  if (isLineOfSightClear(x, y, z+2, x2, y2, z2, ...)) then
    local sx, sy = getScreenFromWorldPosition(x, y, z+height)
    if(sx) and (sy) then
      local distanceBetweenPoints = getDistanceBetweenPoints3D(x, y, z, x2, y2, z2)
      if(distanceBetweenPoints < distance) then
        dxDrawText(text, sx+value1, sy+value2, sx - 10, sy + 50, tocolor(R or 255, G or 255, B or 255, alpha or 255), (size or 1)-(distanceBetweenPoints / distance), font or "arial", "center", "center")
      end
    end
  end
end


Pednames = {
  [1] = {
      group="PLAYIDLES",
      name="shift"
  },
  [2] = {
      group="PLAYIDLES",
      name="stretch"
  },
  [3] = {
      group="PLAYIDLES",
      name="strleg"
  },
  [4] = {
      group="PLAYIDLES",
      name="time"
  },
  [5] = {
      group="DANCING",
      name="dance_loop"
  },
  [6] = {
      group="DANCING",
      name="DAN_Loop_A"
  },
  [7] = {
      group="DANCING",
      name="DAN_dnce_d"
  },
}

function getRandomAnim()
  local anim = Pednames[math.random(0, #Pednames)]
  return anim.group, anim.name
end




sm = {}
sm.moov = 0
sm.object1,sm.object2 = nil,nil
 
local function removeCamHandler()
	if(sm.moov == 1)then
		sm.moov = 0
	end
end
 
local function camRender()
	if (sm.moov == 1) then
		local x1,y1,z1 = getElementPosition(sm.object1)
		local x2,y2,z2 = getElementPosition(sm.object2)
		setCameraMatrix(x1,y1,z1,x2,y2,z2)
	else
		removeEventHandler("onClientPreRender",root,camRender)
	end
end

function smoothMoveCamera(x1,y1,z1,x1t,y1t,z1t,x2,y2,z2,x2t,y2t,z2t,time)
	if(sm.moov == 1)then
		destroyElement(sm.object1)
		destroyElement(sm.object2)
		killTimer(timer1)
		killTimer(timer2)
		killTimer(timer3)
		removeEventHandler("onClientPreRender",root,camRender)
	end

  
	sm.object1 = createObject(1337,x1,y1,z1)
	sm.object2 = createObject(1337,x1t,y1t,z1t)
  
  setElementCollisionsEnabled (sm.object1,false) 
	setElementCollisionsEnabled (sm.object2,false) 
	setElementAlpha(sm.object1,0)
	setElementAlpha(sm.object2,0)
	setObjectScale(sm.object1,0.01)
	setObjectScale(sm.object2,0.01)
	moveObject(sm.object1,time,x2,y2,z2,0,0,0,"InOutQuad")
	moveObject(sm.object2,time,x2t,y2t,z2t,0,0,0,"InOutQuad")
	sm.moov = 1
	timer1 = setTimer(removeCamHandler,time,1)
	timer2 = setTimer(destroyElement,time,1,sm.object1)
	timer3 = setTimer(destroyElement,time,1,sm.object2)
	addEventHandler("onClientPreRender",root,camRender)
	return true
end

function generateID()
  local characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  local length = 5
  local id = ""
  
  for i = 1, length do
      local rand = math.random(1, #characters)
      id = id .. string.sub(characters, rand, rand)
  end
  
  return id
end


function isEventHandlerAdded( sEventName, pElementAttachedTo, func )
  if type( sEventName ) == 'string' and isElement( pElementAttachedTo ) and type( func ) == 'function' then
      local aAttachedFunctions = getEventHandlers( sEventName, pElementAttachedTo )
      if type( aAttachedFunctions ) == 'table' and #aAttachedFunctions > 0 then
          for i, v in ipairs( aAttachedFunctions ) do
              if v == func then
                  return true
              end
          end
      end
  end
  return false
end