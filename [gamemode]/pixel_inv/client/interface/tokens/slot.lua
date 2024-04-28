SlotToken = newclass "SlotToken";

function SlotToken:init (index, position, number, data, size)
  self.x = 0;
  self.y = 0;
  self.width = 0;
  self.height = 0;
  self.fade = nil;
  self.index  = self.index;
  self.position = position;
  self.data = data;
  self.number = number;
  self.x, self.y = self.position.x, self.position.y;
  self.slotSize = size or respo(68);
  self.tempY = self.position.y;
  self.fade = 0;
end


function SlotToken:design (x, y, alpha) 
  local opacity = (self.data.blocked and alpha/4) or alpha;
    
  local item =  self.data.items[#self.data.items];
  
  if (item) then 
    dxDrawImage(x,y, self.slotSize, self.slotSize, "assets/images/items/"..item.icon..".png", 0,0,0, tocolor(255, 255, 255, opacity)); 
  end

  if (self.data.blocked) then 
    dxDrawImage(x, y, self.slotSize, self.slotSize, "assets/images/slot_lock.png", 0,0,0, tocolor(255,255,255, alpha));
  end
  
  dxDrawImage(x, y, self.slotSize, self.slotSize, "assets/images/slot_bg.png", 0,0,0, tocolor(255, 255, 255, opacity));


  if (self.number and not self.data.blocked) then
    local numbX = x + self.slotSize - respo(21);
    local numbY = y + self.slotSize - respo(20);
    
    dxDrawImage(numbX, numbY, respo(21), respo(20), "assets/images/slot_numb.png", 0, 0, 0, tocolor(255,255,255,alpha));
    dxDrawText(self.data.id, numbX, numbY, respo(21) + numbX, respo(20) + numbY, tocolor(0, 0, 0, alpha), 1.0, fonts.Outfit11, "center", "center", false, false, false, false, false);
  end
end


function SlotToken:render (position, alpha) 
  self.x = position.x;
  self.y = position.y;
  
  self.position.x = self.x;
  self.position.y = self.y;

  self:design(self.x, self.y, alpha);

  if (self.data.moving) then 
    local cx, cy = getCursorPosition();
    cx, cy = cx * screenW, cy * screenH;
    local posX = cx - self.data.click.x;
    local posY = cy - self.data.click.y;
          
    self:design(posX, posY, 255);
  end
end


function SlotToken:isInside (x,y) 
  return (x >= self.position.x and x <= self.position.x + self.slotSize and y >= self.position.y and y <= self.position.y + self.slotSize);
end