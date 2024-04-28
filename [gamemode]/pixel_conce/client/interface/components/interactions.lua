InteractionsComponent = newclass "InteractionsComponent";


function InteractionsComponent:init ()
    self.doors = {}
end


function InteractionsComponent:render (vehicle) 
    if vehicle then 
        local x,y,z = getVehicleComponentPosition ( vehicle, "windscreen_dummy", "world" )

        if x and y and z then 
            local scx, scy = getScreenFromWorldPosition(x, y,z, 0, false)
            self.doors = { scx, scy }

            if scx and scy then 
                dxDrawImage(scx, scy, respo(25), respo(25), "assets/images/icons/doors.png")
            end
        end
    end
end


function InteractionsComponent:getButtonByPosition (x, y) 
    if self.doors[1] and self.doors[2] then 
        local isInside = (x >= self.doors[1] and x <= self.doors[1] + respo(25) and y >= self.doors[2] and y <= self.doors[2] + respo(25))

        if isInside then
            return true
        end

        return false
    end
end