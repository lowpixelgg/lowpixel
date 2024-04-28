local interac = class:create("interac");


function interac.public:create (...)
    local instance = self:createInstance();
  
    if (instance and not instance:load(...)) then
      instance:destroyInstance();
      return false;
    end
    
    return instance;
end


-- @@types
-- @id: string
-- @buttons: array{ button: { title, network }}
function interac.public:load (id, buttons, distance, x,y)
    if (not id or not buttons) then return false end

    self.id = id;
    self.buttons = buttons;
    self.anchor = { x = x, y = y };
    self.distance = distance or 10;
    self.showButtons = false;

    return self;
end