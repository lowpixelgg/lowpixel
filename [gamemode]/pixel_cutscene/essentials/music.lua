local imports = {
    playSound = playSound,
    stopSound = stopSound,
    getSoundLength = getSoundLength,
    getSoundPosition = getSoundPosition,
    setSoundPosition = setSoundPosition,

    getTickCount = getTickCount,

    isElement = isElement,
    destroyElement = destroyElement
};

local music = class:create('music');

music.public.element = false;
music.public.tick = 0;

music.public.start = 0;
music.public.length = 0;

function music.public:getElement()
    return self.element;
end

function music.public:setElement(new_element)
    self.element = new_element;

    return self:getElement();
end

function music.public:getTick()
    return self.tick;
end

function music.public:setTick(new_tick)
    self.tick = new_tick;

    return self:getTick();
end

function music.public:getStart()
    return self.start;
end

function music.public:setStart(new_start)
    self.start = new_start or 0;

    return self:getStart();
end

function music.public:getLength()
    return self.length;
end

function music.public:setLength(new_length)
    self.length = new_length or 0;

    return self:getLength();
end

function music.public:play(music_name, start_time)
    local musicElement = self:setElement(imports.playSound('assets/sounds/' .. music_name, true));
    local musicStart = self:setStart(start_time);

    self:setLength(imports.getSoundLength(musicElement));
    imports.setSoundPosition(musicElement, musicStart);
end

function music.public:stop()
    local musicElement = self:getElement();

    if(imports.isElement(musicElement)) then
        imports.stopSound(musicElement);
    end

    return true;
end

function music.public:reset()
    local actualElement = self:getElement();
    self:setElement(false);
    if(imports.isElement(actualElement)) then
        imports.destroyElement(actualElement);
    end

    self:setTick(0);
    self:setStart(0);
    self:setLength(0);

    return true;
end

function music.public:render()
    local musicElement = self:getElement();
    if(not imports.isElement(musicElement)) then return false end;

    local musicTick = self:getTick();
    if(musicTick == 0) then
        musicTick = imports.getTickCount();
        self:setTick(musicTick);
    end

    local musicExact = (imports.getTickCount() - musicTick) / 1000;

    local musicStart = self:getStart();
    local musicLength = self:getLength();
    if(musicExact + musicStart >= musicLength) then
        musicTick = imports.getTickCount();
        self:setTick(musicTick);
    end

    local musicDiff = math.abs(musicExact - (imports.getSoundPosition(musicElement) - musicStart));

    if(musicDiff >= 0.1) then
        imports.setSoundPosition(musicElement, musicExact + musicStart);
    end

    dxDrawText('Sound Orig.: ' .. imports.getSoundPosition(musicElement), 200, 200);
    dxDrawText('Sound Skip.: ' .. imports.getSoundPosition(musicElement) - musicStart, 200, 220);
    dxDrawText('Sound Calc.: ' .. musicExact, 200, 240);
    dxDrawText('Sound Diff.: ' .. musicDiff, 200, 260);

    return true;
end
