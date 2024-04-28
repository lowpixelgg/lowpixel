local imports = {
  core = exports.pixel_core,
  inventory = exports.pixel_inv
};

local phone = class:create("phone");


function phone.public:create(...)
  local instance = self:createInstance();
  
  if (instance and not instance:load(...)) then
    instance:destroyInstance();
    return false;
  end
  
  return instance;
end



function phone.public:load (player, owner, item)
  self.owner = owner;
  self.player = player;
  self.item = item;
  
  local account = imports.core:findPhoneByOwner(self.owner, { "id", "owner", "number", "background", "plan" });

  if (account) then 
    self.id = account.id;
    self.number = account.number;
    self.plan = account.plan;
  end
  
  
  return self;
end


function phone.public:createPhone (item) 
  local number = self:requestNumber();
  local uuid = generate_uuid_v4();
  
  if (number and uuid) then 
    local createPhone = imports.core:createPhone({
      id = uuid,
      number = number, 
      owner = self.owner,
      plan = 0
    });
    
    
    local editItem = imports.inventory:editItemdata(self.player, self.item._id, { boot = true, id = uuid });
    
    if (editItem) then 
      self.id = uuid;
      self.number = number;
      self.plan = 0;
      
      return true;
    end
  end
  
  return false;
end

function phone.public:requestNumber ()
  return try({
    exec = function ()
      local number = await(promise(function (resolve, reject) 
        local timer;
        
        timer = setTimer(function () 
          if (timer) then 
            local phoneNumber = generate_random_number()
            local existsPhone = imports.core:findPhoneByNumber(phoneNumber, { "id" })
            
            if (not existsPhone[1]) then 
              killTimer(timer);
              resolve(phoneNumber);    
            end   
          end             
        end, 1000, 0)
      end))
      
      return number
    end,
    catch = function () 
      return false
    end
  });
end


function phone.public:getWhatsApp ()
  if (not self.whatsapp) then 
    self.whatsapp = WhatsApp:create(player, self);
  end
  return self.whatsapp;
end

function phone.public:getBank () 
  if (not self.bank) then 
    self.bank = Bank:create(player, self);
  end
  
  return self.bank;
end

function phone.public:destroy ()
  self.id = nil;
  self.number = nil;
  self.owner = nil;
  self.plan = nil;
end