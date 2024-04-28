FloaterWidget = newclass "FloaterWidget";



function FloaterWidget:init () 
end


function FloaterWidget:render (fx, fy, fz, x,y,z) 
    local wx, wy  = getScreenFromWorldPosition(fx,fy,fz);

    if (wx and wy) then
        local fixedX =  wx - 10;
        local fixedY = wy - 57;
        dxDrawImage(fixedX, fixedY, 24, 24, "assets/icons/widget.png");
        dxDrawText(calculateDifference(fx,fy,fz, x,y,z), fixedX, fixedY, fixedX + 25, fixedY+ 80, tocolor(255,255,255), 1.0, fonts.PoppinMedium, "center", "center");
    end
end