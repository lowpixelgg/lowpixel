local imports = {
  core = exports.pixel_core
}

local item = class:create("item")
local meta = imports.core:getItemsMeta();


function item.public:create(...)
  local instance = self:createInstance();
  
  if (instance and not instance:load(...)) then
    instance:destroyInstance();
    return false;
  end
  
  return instance;
end



function item.public:load(id, name, title, icon, amount, price, weight, state, category, timestamp, data)
  self._id = id;
  self.name = name;
  self.title = title;
  self.icon = icon;
  self.amount = amount;
  self.price = price;
  self.weight = weight;
  self.state = state;
  self.category = category;
  self.timestamp = timestamp;
  self.data = data or nil;
  

  local subItems = meta[self.name].subItens

  if (subItems) then 
    self.container = container:create("subItem", {}, 1, subItems.slots, 60, 29, 0, 1000);
  end
  
  return self;
end