SeparateComponent = newclass "SeparateComponent";


function SeparateComponent:init (slot, title, buttons) 
  if (not slot or not title or not buttons) then return false end

  self.divWidth = 0;
  self.divHeight = respo(160);
  self.x = 0;
  self.y = 0;


  self.slot = slot;
  self.buttons = {};
  self.blur = nil;

  startX = 0;
  startY = 0;

  self.title = title or "{{ text_title }}";

  local spacing = factor + 0.5;
  local totalWidth = 0 ;
    
  for _, button in ipairs(buttons) do 
    local button_size = respo(dxGetTextSize(button.title));
    local padding = respo(100);
    local centerX = button_size + padding;
    local centerY = respo(40);
    
    self.divWidth = self.divWidth + centerX + spacing;
    createRectangle(button.title, centerX, centerY, false, 0.05);

    local button = ButtonToken (0,0, centerX, centerY, button.title, button.color, button.opacity, button.action);
      

    table.insert(self.buttons, button);
  end

  createInputBackground("bg_input", respo(150), respo(30));
  createSeparateBackground('bg_separate',  self.divWidth, respo(120));

  self:createEditbox ();
  self:createBgBlur ();
end


function SeparateComponent:render () 
  local startX, startY = imports.ui:createLayoutBox("inventory_input", respo(self.divWidth), self.divHeight, 0, 0, "center", "center", false);
  self.x = startX;
  self.y = startY;

  if (self.blur) then 
    imports.blur:render( self.blur );
  end

  dxDrawImage( 0, 0, scw, sch, "assets/images/background.png", 0, 0, 0, tocolor(255,255,255, 200));
  
  imports.ui:renderSvg('bg_separate', startX, startY, tocolor(255,255,255,255), 0, false, true);
  
  dxDrawText(self.title, startX + 20, startY + 30, self.divWidth, self.divHeight, tocolor(255,255,255), 1.0, fonts.PoppinsRegular13);

  local spacing = 3;
  local totalWidth = 0 ;

  for k,v in ipairs(self.buttons) do 
    local string_size_button = respo(dxGetTextSize(v.text)) + respo(100);
    local centerX = string_size_button;
    local tabX = startX + totalWidth;
    local buttonY = startY + self.divHeight - respo(35);
    
    v:render(tabX, buttonY);
    totalWidth = totalWidth + centerX + spacing;
  end

  if (self.editbox) then 
    imports.editbox:renderEditbox(self.editbox,  self.x + self.divWidth / 2 - respo(220) / 2, self.y + respo(60), 1);
  end
end


function SeparateComponent:createBgBlur () 
  self.blur = imports.blur:createBlurBox( 0, 0, scw, sch, 255, 255, 255, 255, false);
  return true;
end


function SeparateComponent:createEditbox () 
  if (self.editbox) then return false end

  self.editbox = imports.editbox:createEditbox(self.x + self.divWidth / 2 - respo(220) / 2, self.y + respo(60), respo(220), respo(40), imports.locales:getString("pixel_inv:separate_input_text_placeholder"), 10, 1, fonts.OutfitLight10, false);

  imports.editbox:setPropertyEditbox(self.editbox, 'dotVisible', false);
  imports.editbox:setPropertyEditbox(self.editbox, 'typeEdit', 'default');
  imports.editbox:setPropertyEditbox(self.editbox, 'borderColor', {52, 52, 52, 50});
  imports.editbox:setPropertyEditbox(self.editbox, 'bgRadius', 7);
  imports.editbox:setPropertyEditbox(self.editbox, 'validationString', '[0-9]*');
  imports.editbox:setPropertyEditbox(self.editbox, 'alignX', "center");
end


function SeparateComponent:destroyEdit () 
  if (self.editbox) then 
    imports.editbox:destroyEditbox(self.editbox);
    self.editbox = nil;
  end
end


function SeparateComponent:destroyBlur () 
  imports.blur:destroyBlurBox(self.blur);
  return true;
end

function SeparateComponent:getButtonByPosition (x,y) 
  for _, button in ipairs(self.buttons) do 
    if (x >= button.x and x <= button.x + button.w and y >= button.y and y <= button.y + button.h) then 
      return button;
    end
  end    
  return false;
end


function SeparateComponent:destroy () 
  self:destroyEdit();
  self:destroyBlur();
end


function SeparateComponent:onClick (b,s,abx,aby, callback) 
  if (b == "left" and s == "up") then 
    local button = self:getButtonByPosition(abx, aby);

    if (button) then 
      executeCallback(callback, button.action, self.slot)
    end
  end
end