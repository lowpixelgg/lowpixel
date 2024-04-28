local animations = class:create("animations");

function animations.public:create(configs, info, slider) 
    self.configuration = configs
    self.infocar = info
    self.slider = slider

    self.cfx = configs:getOffsets()
    self.ifx = info:getOffsets()
    self.sy = slider:getOffsets()
end


function animations.public:enter()
    local tickAnimation = getTickCount()
    local self = animations.public

    local function render ()
        local progress = (getTickCount() - tickAnimation) / 1000
        local configX = interpolateBetween(self.cfx - 250, 0, 0, self.cfx, 0, 0, progress, 'OutQuad')
        local infoX = interpolateBetween(self.ifx - 100, 0, 0, self.ifx, 0, 0, progress, 'OutQuad')
        local sliderY = interpolateBetween(self.sy - 100, 0, 0, self.sy, 0, 0, progress, 'OutQuad')

        self.configuration:setOffSets(configX, false)
        self.infocar:setOffSets(infoX, false)
        self.slider:setOffSets(false, sliderY)

        if (progress >= 1) then
            removeEventHandler('onClientRender', root, render)
        end 
    end

    addEventHandler("onClientRender", root, render)
end


function animations.public:exit(configs, infos, slider) 
    local tickAnimation = getTickCount()
    local self = animations.public


    
    local function render ()
        local progress = (getTickCount() - tickAnimation) / 900
        local configX = interpolateBetween(self.cfx, 0, 0, self.cfx - 250, 0, 0, progress, 'OutQuad')
        local infoX = interpolateBetween(self.ifx, 0, 0, self.sy - 100, 0, 0, progress, 'OutQuad')
        local sliderY = interpolateBetween(self.sy, 0, 0, self.sy - 100, 0, 0, progress, 'OutQuad')

        self.configuration:setOffSets(configX, false)
        self.infocar:setOffSets(infoX, false)
        self.slider:setOffSets(false, sliderY)

        if (progress >= 1) then
            removeEventHandler('onClientRender', root, render)
        end 
    end

    addEventHandler("onClientRender", root, render) 
end