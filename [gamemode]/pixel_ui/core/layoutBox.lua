local LayoutBox = imports.class:create("LayoutBox");
LayoutBox.public.cache = {}


function LayoutBox.public:create(...)
  local instance = self:createInstance()
  
  if instance and not instance:load(...) then
      instance:destroyInstance()
      return false
  end
  
  return instance
end


function LayoutBox.public:load(id, width, height, offsetX, offsetY, startIndicationX, startIndicationY, relativeOffsetID) 
	self.id = id;
	self.width = width;
	self.height = height;
	self.offsetX = offsetX;
	self.offsetY = offsetY;
	
	
	if (relativeOffsetID) then 
		if startIndicationX == "right" then
			self.offsetX = scw - (width + offsetX)
		elseif startIndicationX == "center" then
			self.offsetX = scw / 2 - width / 2 + offsetX
		end
		
		if startIndicationY == "bottom" then
			self.offsetY = sch - (height + offsetY)
		elseif startIndicationY == "center" then
			self.offsetY = sch / 2 - height / 2 +offsetY
		end	
	end
	
	self.startX = 0 
	self.startY = 0
	self.startIndicationX = startIndicationX;
	self.startIndicationY = startIndicationY;
	self.isMoving = false;
	self.relativeOffsetID = relativeOffsetID or false;
	self.click = {}

	self.rescueX = nil;
	self.rescueY = nil;

	self:update(id, width, height, offsetX, offsetY, startIndicationX, startIndicationY, relativeOffsetID);

	return self
end


function LayoutBox.public:update(id, width, height, offsetX, offsetY, startIndicationX, startIndicationY, relativeOffsetID)
	self.width = width;
	self.height = height;


	local startX = offsetX 
	local startY = offsetY
	
	local offx = relativeOffsetID and self.offsetX or offsetX
	local offy = relativeOffsetID and self.offsetY or offsetY

	offsetX = self.rescueX and (self.rescueX) or offx;
	offsetY = self.rescueY and (self.rescueY) or offy;

	

	if (relativeOffsetID) then 
		startIndicationX = "left";
		startIndicationY = "top";
	end
	
	
	if (self.isMoving and isCursorShowing() and relativeOffsetID) then
		local cx, cy = getCursorPosition()
		cx, cy = cx * scw, cy * sch
		local posX = cx - self.click.x
		local posY = cy - self.click.y
		
		if (posX > scw - width) then
			posX = scw - width
		elseif (posX < 0) then
			posX = 0
		end
		
		if (posY > sch - height) then
			posY = sch - height
		elseif (posY < 0) then
			posY = 0
		end
	
		
		self.rescueX = posX
		self.rescueY = posY
	end
	
	
	self.startX = offsetX
	self.startY = offsetY

	
	
	
	if startIndicationX == "right" then
		self.startX = scw - (width + offsetX)
	elseif startIndicationX == "center" then
		self.startX = scw / 2 - width / 2 + offsetX
	end
	
	if startIndicationY == "bottom" then
		self.startY = sch - (height + offsetY)
	elseif startIndicationY == "center" then
		self.startY = sch / 2 - height / 2 + offsetY
	end

	
	return self.startY, self.startY;
end


function LayoutBox.public:isInside(x, y)
	return (
		x >= self.startX and
		x <= self.startX + self.width and
		y >= self.startY and
		y <= self.startY + self.height
	)
end


function LayoutBox.public:setMoving(state) 
	self.isMoving = state;
end