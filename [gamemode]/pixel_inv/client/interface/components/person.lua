PersonComponent = newclass "PersonComponent";

function PersonComponent:init (slots) 
  self.offSetX = 0;
  self.offSetY = 25;
  self.isRendering = false;
  self.slotsUI = {};
  self.divWidth = respo(384);
  self.divHeight = respo(540);
  self.fade = 0;

  for i, slot  in ipairs(slots) do  
    local slot = PropToken (k, slot);
    table.insert(self.slotsUI, slot);
  end
end


function PersonComponent:render () 
  local startX, startY = imports.ui:createLayoutBox("inventory_person", self.divWidth, self.divHeight,  respo(self.offSetX), respo(self.offSetY), "center", "center", false);

  if (self.isRendering) then
    self.fade = math.min(self.fade + 3, 255);
  else
    self.fade = math.max(self.fade - 10, 0);
  end

  dxDrawImage(startX, startY, self.divWidth, self.divHeight, "assets/images/bg_person.png", 0,0,0, tocolor(255,255,255,self.fade/2));
  dxDrawImage(startX, startY, self.divWidth, self.divHeight, "assets/images/person.png", 0,0,0, tocolor(255,255,255,self.fade/2));
  
  local slotSize = respo(68);
  local slotSpacing = respo(5);
  
  local positions = {
    {x = startX + respo(100), y = startY + respo(20)},
    {x = startX + respo(100), y = startY + respo(70)},

    {x = startX + respo(240), y = startY + respo(20)},
    {x = startX + respo(240), y = startY + respo(70)},


    {x = startX + respo(170), y = startY + respo(50)},
    {x = startX + respo(170), y = startY + respo(120)},
    {x = startX + respo(170), y = startY + respo(175)},
    {x = startX + respo(170), y = startY + respo(230)},


    {x = startX + respo(60), y = startY + respo(260)},
    {x = startX + respo(290), y = startY + respo(280)},

    
    {x = startX + respo(170), y = startY + respo(310)},
    {x = startX + respo(170), y = startY + respo(470)},
  };
  
  for k, slot in ipairs(self.slotsUI) do
    local slotX = startX + (k - 1) * (slotSize + slotSpacing);
    slot:render(positions[k], self.fade);
  end
end


function PersonComponent:setOffSets (ofx, ofy) 
  if (ofx) then 
    self.offSetX =  ofx;
  end

  if (ofy) then 
    self.offSetY = ofy;
  end
end 

function PersonComponent:getOffsets () 
  return self.offSetX, self.offSetY;
end

function PersonComponent:setIsRendering (state) 
  self.isRendering = state;
end

function PersonComponent:getSlotByPosition (x,y) 
  for _, slot in ipairs(self.slotsUI) do
    if (slot:isInside(x, y)) then
      return slot;
    end
  end
  
  return nil;
end