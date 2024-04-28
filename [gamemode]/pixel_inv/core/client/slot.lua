local slot = class:create("slot");
local items = exports.pixel_core:getItemsMeta();


function slot.public:create(...)
  local instance = self:createInstance();
  
  if (instance and not instance:load(...)) then
    instance:destroyInstance();
    return false;
  end
  
  return instance;
end


function slot.public:load(id, selected, blocked, category, container)
  self.id = id;
  self.selected = selected;
  self.blocked = blocked;
  self.category = category;
  self.container = container;
  self.moving = false;
  self.items = {};
  
  return self;
end


function slot.public:setSelected()
  self.selected = not self.selected;
end


function slot.public:setBlocked(state)
  self.blocked = state;
end


function slot.public:isMoving()
  return self.moving;
end


function slot.public:setMoving(state)
  self.moving = state;
end


function slot.public:setItem(item) 
  self.items[#self.items + 1] = item;
end


function slot.public:setItems(items)
  self.items = items;
end


function slot.public:clearItems()
  self.items = {};
end


function slot.public:removeItemFromIndex(index)
  if (index) then
    table.remove(self.items, index);
    return true;
  end
  
  return false;
end


function slot.public:removeItem() 
  if (self.items[#self.items]) then
    table.remove(self.items, #self.items);
    return true;
  end
  return false;
end


function slot.public:getItem()
  return (self.items[#self.items] == 0) and false or self.items[#self.items];
end

function slot.public:getItemByID(id) 
  local item = table.find(self.items, function (item) 
    return item._id == id;
  end)

  return self.items[item];
end

function slot.public:getAllItems()
  return self.items;
end

function slot.public:getContainer() 
  return self.container;
end


function slot.public:getItemIndex(id)
  for i, v in ipairs(self.items) do
    if (v._id == itemID) then
      return i;
    end
  end
  return false;
end



function slot.public:getAmount() 
  if items[self.items[1].name].useFlexAmount then 
    return self.items[1].amount;
  else
    return #self.items;
  end

  return false;
end



function slot.public:getCountItems () 
  local count = 0;

  for _, v in ipairs(self.items) do 
    count = count + 1
  end

  return count;
end