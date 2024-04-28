local imports = {
    core = exports.pixel_core
}

local shop = class:create("shop");
local meta = imports.core:getItemsMeta();

function shop.public:create(...)
    local instance = self:createInstance();
    
    if (instance and not instance:load(...)) then
        instance:destroyInstance();
        return false;
    end
    
    return instance;
end


function shop.public:load (id, ped, pedName, skinId, pos, rot, items)
    self.id = id;
    self.ped =  createPed(skinId, pos.x, pos.y, pos.z, rot);
    self.pedName = pedName;
    self.skinId = skinId;
    self.pos = pos;
    self.rot = rot;
    self.availableItems = items;

    if (self.ped) then 
        setElementData(self.ped, 'interaction', 'shops');
        setElementData(self.ped, 'id', self.pedName);
    end

    self.items = {};

    for k,v in pairs(items) do 
        table.insert(self.items, {
            title = meta[v].title,
            price = meta[v].price,
            icon = meta[v].icon,
            name = v,
        });
    end

    return self;
end