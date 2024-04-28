local imports = {
    guiGetScreenSize = guiGetScreenSize,

    getTickCount = getTickCount,

    dxCreateScreenSource = dxCreateScreenSource,
    dxUpdateScreenSource = dxUpdateScreenSource,
    dxDrawImage = dxDrawImage,
    dxDrawRectangle = dxDrawRectangle,
    tocolor = tocolor,

    isElement = isElement,
    destroyElement = destroyElement,

    interpolateBetween = interpolateBetween
};

local screen = class:create('screen');

screen.public.size = Vector2(imports.guiGetScreenSize());
screen.public.source = false;

screen.public.fade = false;
screen.public.blackbar = false;

local blackbarSize = 80;

function screen.public:getSize()
    return self.size;
end

function screen.public:getSource()
    return self.source;
end

function screen.public:setSource(new_source)
    self.source = new_source;

    return self:getSource();
end

function screen.public:switchSource(new_state)
    if(not new_state) then
        local oldScreenSource = self:getSource();
        self:setSource(false);

        if(imports.isElement(oldScreenSource)) then
            imports.destroyElement(oldScreenSource);
        end
    else
        local size = self:getSize();
        local newSource = self:setSource(imports.dxCreateScreenSource(size.x, size.y));

        imports.dxUpdateScreenSource(newSource);
    end

    return self:getSource();
end

function screen.public:getFade()
    return self.fade;
end

function screen.public:setFade(fade_data)
    self.fade = fade_data;

    return self:getFade();
end

function screen.public:switchFade(new_fade, duration)
    local fadeData = self:getFade();
    local newFade = self:setFade({
        running = true,
        tick = imports.getTickCount(),
        actual = fadeData and fadeData.actual or 0,
        start = fadeData and fadeData.actual or 0,
        finish = new_fade or 0,
        duration = duration or 0
    });

    return newFade;
end

function screen.public:getBlackbar()
    return self.blackbar;
end

function screen.public:setBlackbar(blackbar_data)
    self.blackbar = blackbar_data;

    return self:getBlackbar();
end

function screen.public:switchBlackbar(new_state, duration)
    local blackbarData = self:getBlackbar();
    local newBlackbar = self:setBlackbar({
        running = true,
        tick = imports.getTickCount(),
        actual = blackbarData and blackbarData.actual or 0,
        start = blackbarData and blackbarData.actual or 0,
        finish = new_state and 100 or 0,
        duration = duration or 0
    });

    return newBlackbar;
end

function screen.public:reset()
    self:setFade(false);
    self:setBlackbar(false);

    local actualSource = self:getSource();
    self:setSource(false);
    if(imports.isElement(actualSource)) then
        imports.destroyElement(actualSource);
    end

    return true;
end

function screen.public:render()
    local screenSize = self:getSize();
    local screenSource = self:getSource();

   if(screenSource) then
        imports.dxUpdateScreenSource(screenSource);
        imports.dxDrawImage(0, 0, screenSize.x, screenSize.y, screenSource);
    end

    local fadeData = self:getFade();
    if(fadeData) then
        if(fadeData.running) then
            local fadeProgress = (imports.getTickCount() - fadeData.tick) / fadeData.duration;
            local newFade = imports.interpolateBetween(fadeData.start, 0, 0, fadeData.finish, 0, 0, fadeProgress, 'Linear');

            fadeData.actual = newFade;
            if(fadeProgress >= 1) then
                fadeData.running = false;
            end
        end

        imports.dxDrawRectangle(0, 0, screenSize.x, screenSize.y, imports.tocolor(0, 0, 0, fadeData.actual));

        if(fadeData.finish == 0 and fadeData.actual == 0) then
            self:setFade(false);
        end
    end

    local blackbarData = self:getBlackbar();
    if(blackbarData) then
        if(blackbarData.running) then
            local blackbarProgress = (imports.getTickCount() - blackbarData.tick) / blackbarData.duration;
            local newBlackbar = imports.interpolateBetween(blackbarData.start, 0, 0, blackbarData.finish, 0, 0, blackbarProgress, 'InOutQuad');

            blackbarData.actual = newBlackbar;
            if(blackbarProgress >= 1) then
                blackbarData.running = false;
            end
        end

        imports.dxDrawRectangle(
            0, ((blackbarSize / 100) * blackbarData.actual) - blackbarSize,
            screenSize.x, blackbarSize,
            -16777216
        );

        imports.dxDrawRectangle(
            0, screenSize.y - ((blackbarSize / 100) * blackbarData.actual),
            screenSize.x, blackbarSize,
            -16777216
        );

        if(blackbarData.finish == 0 and blackbarData.actual == 0) then
            self:setBlackbar(false);
        end
    end
end
