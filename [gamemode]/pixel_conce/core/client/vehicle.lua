local imports = {
  core = exports.pixel_core
}

local vehicle = class:create("vehicle")
local vehiclesMeta = imports.core:getVehiclesMeta()

function vehicle.public:create(...)
  local instance = self:createInstance()
  
  if instance and not instance:load(...) then
    instance:destroyInstance()
    return false
  end
  
  return instance
end



function vehicle.public:load(element)
  local _id = getElementModel(element)
  local car = vehiclesMeta[_id]

  if not car then return false end

  self.element = element
  self.modelId = _id
  self.model = car.name
  self.business = car.business
  self.category = car.category
  self.price = car.price or 0
  self.icon = car.icon
  self.description = car.desc
  self.settings = car.settings or {}
  self.isDoorsOpen = false

  return self
end


function vehicle.public:getElement()
  return self.element
end

function vehicle.public:getSettings()
  return self.settings
end


function vehicle.public:setVehicleColor(color)
  local r,g,b = unpack(color)

  if r and g and b then 
    setVehicleColor(self.element, r,g,b)
    self.color = color
  end
end


function vehicle.public:setVehicleOpenDoors() 
  for i=0,5 do
    setVehicleDoorOpenRatio ( self.element, i, 1 - getVehicleDoorOpenRatio ( self.element, i ), 100)
  end

  self.isDoorsOpen = not self.isDoorsOpen
end