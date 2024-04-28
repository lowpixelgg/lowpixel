ConceUI = newclass "ConceUI";


function ConceUI:init (showroom)
   imports.ui:toggleCursor(true);

   self.showroom = showroom;
   self.screen = ScreenComponent (showroom.categories);
   self.configuration = ConfigurationComponent ();

   self.infocar = InfoCarComponent ();
   self.slider = SliderComponent (showroom:getVehicles());
   self.interactions = InteractionsComponent ();
   self.buy = BuyComponent (imports.locales:getString("pixel_conce:main_buycomponent_title"), imports.locales:getString("pixel_conce:main_buycomponent_msg"));
   self.isRenderingShowroom = false;
   self.letteringCount = 0;
   self.tooltips = {};
   self.fade = 0;

   self.moving = {
      state = false,
      startPos = Vector2(0, 0),
      actualH = 0,
      actualV = 0
  }

  animations:create(
     self.configuration,
     self.infocar,
     self.slider
   );

   self.isRenderingShowroom = true;
   self.slider.selectedIndex = 1;

   local firstCarElement = showroom:getVehicles()[1]
   local carMatrix = Matrix(Vector3(getElementPosition(firstCarElement.element)), Vector3(getElementRotation(firstCarElement.element)));
   camera:set(carMatrix:transformPosition(3, 7, 0.7), firstCarElement.element);
   camera:move(carMatrix:transformPosition(3, 7, 0.7), firstCarElement.element, 500);
   
   fadeCamera(true, 1)
   

   self.screen:setIsRendering(true);
   self.configuration:setIsRendering(true);
   self.infocar:setIsRendering(true);
   self.slider:setIsRendering(true);
   
   self.configuration:setVehicle(firstCarElement);
   self.slider:slider();
   
   animations:enter();
   
   setCameraDrunkLevel(10);


   for k,v in pairs(SHOWROOMS.tooltips) do
        if (v.tooltip) then 
            v.tooltip:setIsRendering (false)
        end
    end
end



function ConceUI:render () 
   if (self.isRenderingShowroom)  then
      self.screen:render();
      self.configuration:render();
      self.infocar:render();
      self.slider:render();
      self.interactions:render(showroom:getVehicles()[self.slider.selectedIndex].element);
      self.buy:render();

      camera:render();
  end
end


function ConceUI:onCursorMove(_, cursorX, cursorY)
   local self = showroom.ui;
   if (not self.moving.state) then return false end;

   local xMulti = 0.2;
   local yMulti = 0.4;
   
   local differenceX = (cursorX - self.moving.startPos.x) * xMulti;
   local differenceY = math.max(math.min((cursorY - self.moving.startPos.y) * yMulti, 50), -9);
   
   local actualVehicle = self.showroom:getVehicles()[self.slider.selectedIndex].element;
   local vehiclePosition = Vector3(getElementPosition(actualVehicle));
   
   local offsetPosition = rotatePosition3D(
       0, 0, 0,
       3, 7, 0.7,
       ({ getElementRotation(actualVehicle) })[3],
       0
   );

   local newPosition = rotatePosition3D(
       vehiclePosition.x, vehiclePosition.y, vehiclePosition.z,
       offsetPosition.x, offsetPosition.y, offsetPosition.z,
       -differenceX, -differenceY
   );

   camera:move(newPosition, actualVehicle, 25);

   self.moving.actualH = differenceX / xMulti;
   self.moving.actualV = differenceY / yMulti;
end



function ConceUI:onClick(b, s, abx, aby, worldX, worldY, worldZ, element)
   local vehicle = self.showroom:getVehicles()[self.slider.selectedIndex] 
   
   if (self.buy.isRendering) then 
       self.buy:onClick(b,s, abx, aby, function (button) 
           if (button == "confirm") then 
               local formatVehicle = {
                   showroom = self.showroom.id,
                   price = vehicle.price,
                   color  = vehicle.color or { 255, 255, 255 },
                   model = getElementModel(vehicle.element)
               }

               network:emit("pixel_conce:onClientBuy", true, false, localPlayer, formatVehicle);
               self.buy:setIsRendering (false);
           elseif (button == "cancel") then
               self.buy:setIsRendering (false);
           end
       end);
   end

   if (self.buy.isRendering) then 
       return;
   end
   
   if ( b == "left" and s == "down") then
       local openDoors = self.interactions:getButtonByPosition(abx, aby)
       
       if openDoors then 
           vehicle:setVehicleOpenDoors()
       end
       
       local color = self.infocar:getColorsByPosition(abx, aby)
       
       if color then
           vehicle:setVehicleColor(color.color)
           self.infocar.selectedColor = color.color
       end
   end
end


function ConceUI:onKey(button, press)    
   if (self.buy and self.buy.isRendering) then 
       return;
   end


   if press then
       if (button == 'mouse1') then
           local cursorPosition = Vector2(getCursorPosition());
           
           local cursorX = cursorPosition.x * scw;
           local cursorY = cursorPosition.y * sch;
           

           self.moving.startPos = Vector2(cursorX - self.moving.actualH, cursorY - self.moving.actualV);
           self.moving.state = true;
       end
       
       if (button == "arrow_u" or button == "arrow_d") then 
           self.infocar:switch(button)
       end
       
       if (button == "arrow_l" or button == "arrow_r") then
           local previus = self.showroom:getVehicles()[self.slider.selectedIndex]
           
           if previus and previus.isDoorsOpen then 
               previus:setVehicleOpenDoors()
           end
           
           
           self.slider:switch(button, function (index) 
               local vehicle = self.showroom:getVehicles()[index]
               
               self.infocar:setVehicle(vehicle)
               
               self.configuration:setVehicle(vehicle)
               
               self.moving.actualH = 0;
               self.moving.actualV = 0;
               
               local carMatrix = Matrix(Vector3(getElementPosition(vehicle.element)), Vector3(getElementRotation(vehicle.element)));
               camera:move(carMatrix:transformPosition(3, 7, 0.7), vehicle.element, 1100);
           end)
       end
       
       if (button == "enter") then
           local vehicle = self.showroom:getVehicles()[self.slider.selectedIndex] 
           
           if (self.infocar.selected == "cutscene") then
           elseif (self.infocar.selected == "buy") then
               self.buy:setDescription (string.format(imports.locales:getString("pixel_conce:main_buyaction_msg"), vehicle.business.title, vehicle.model));
               self.buy:setIsRendering (true);
           end            
       end
       
       if (button == "mouse_wheel_up") then 
           if (camera.fov >= 30) then 
               camera.fov = camera.fov - 1
           end
       elseif (button == "mouse_wheel_down") then
           if (camera.fov <= 70) then 
               camera.fov = camera.fov + 1
           end
       end

       if (button == "backspace") then
           local vehicle = self.showroom:getVehicles()[self.slider.selectedIndex] 
           
           if vehicle.isDoorsOpen then 
               vehicle:setVehicleOpenDoors()
           end
           
           showroom:exit(self.showroom.id)
       end
   else
       if (button == 'mouse1') then
           self.moving.state = false;
       end
   end
end


function ConceUI:exit()
   self.configuration:setIsRendering(false);
   self.infocar:setIsRendering(false);
   self.slider:setIsRendering(false);
   self.screen:setIsRendering(false);

   if (isTimer(self.graphTimer)) then 
       killTimer(self.graphTimer);
   end

   animations:exit();
   
   setTimer(function () 
       self.isRenderingShowroom = false

       imports.ui:toggleCursor(false);
       setCameraDrunkLevel(0)

       self.screen:destroy ();
       self.slider:destroy ();


       for k,v in pairs(SHOWROOMS.tooltips) do
            if (v.tooltip) then 
                v.tooltip:setIsRendering (true)
            end
       end
   end, 1300, 1)
end