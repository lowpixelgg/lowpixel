FindZone = newclass "FindZone";

function FindZone:init ()
    self.flotor = createObject(1332, 0,0,0);
    setElementCollisionsEnabled(self.flotor, false);


    self.water = false;
end

function FindZone:render ()
    if (isCursorShowing()) then
        local cursorX, cursorY = getCursorPosition();
        cursorX, cursorY = cursorX * scw, cursorY * sch;
        
        local x,y,z = getWorldFromScreenPosition(cursorX, cursorY, 10);
        local zA = checkLineOfSightWithPolygonZones(x,y,z, x,y,z + 0.1)
        
        
        local pointX, pointY = getScreenFromWorldPosition(x,y,z)
        
        if (pointX and pointY) then 
            dxDrawImage(pointX - 14, pointY - 40, respo(30), respo(30), "assets/icons/point.png", 0,0,0, zA and tocolor(0,255,0) or tocolor(255,255,255))
        end

        if (zA) then 
            self.water = true;
        else
            self.water = false;
        end
        
        setElementPosition(self.flotor, x,y,z);
    end
end



function FindZone:destroy () 
    destroyElement(self.flotor);
end