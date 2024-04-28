PropToken = newclass "PropToken";

function PropToken:init (index, data)
  self.index  = self.index;
  self.position = {x = 0, y = 0};
  self.data = data; 
end

function PropToken:design (x, y, alpha) 
  local size = respo(45);
  local opacity = (self.data.blocked and 0.3 * alpha) or 1 * alpha;

  dxDrawImage(x, y, size, size, "assets/images/slot_bg.png", 0,0,0, tocolor(255, 255, 255, opacity));
  
 
  local item =  self.data.items[#self.data.items];
  
  if (item) then 
    dxDrawImage(x,y, size, size, "assets/images/items/"..item.icon..".png", 0,0,0, tocolor(255, 255, 255, opacity)); 
  else
    dxDrawImage(x, y, size, size, "assets/images/person/"..self.data.category..".png", 0,0,0, tocolor(255, 255, 255, opacity));  
  end
end

function PropToken:render (position, alpha) 
  self.position.x = position.x;
  self.position.y = position.y;

  self:design(self.position.x, self.position.y, alpha);

  if (self.data.moving) then 
    local cx, cy = getCursorPosition();
    cx, cy = cx * screenW, cy * screenH;
    local posX = cx - self.data.click.x;
    local posY = cy - self.data.click.y;
    
    self:design(posX, posY, alpha);
  end
end

function PropToken:isInside(x,y) 
  return (x >= self.position.x and x <= self.position.x + respo(60) and y >= self.position.y and y <= self.position.y + respo(60));
end
