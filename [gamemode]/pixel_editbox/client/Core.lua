-- small optimizations
local strGSub = utf8.gsub
local strSub = utf8.sub
local strRep = string.rep
local strLen = utf8.len
local strFormat = string.format
local min = math.min
local max = math.max

local screenWidth, screenHeight = guiGetScreenSize()

local editbox = {}
local editFocused
local dotTexture

local private = {}
setmetatable(private, {__mode = 'k'})

local typeColor = {
    ['default'] = {41, 41, 46},
    ['active'] = {255, 255, 255},
    ['error'] = {193, 89, 89},
    ['success'] = {116, 173, 113},
}

local function rgba2hex(r, g, b, a)
    return string.format("%02x%02x%02x%02x", math.floor(a*255), math.floor(r*255), math.floor(g*255), math.floor(b*255))
end

local function RGBToHex(red, green, blue, alpha)
	if ((red < 0 or red > 255 or green < 0 or green > 255 or blue < 0 or blue > 255) or (alpha and (alpha < 0 or alpha > 255))) then
		return nil
	end
    return strFormat("#%.2X%.2X%.2X", red, green, blue)
end

function editbox:new(x, y, width, height, text, maxCharacter, textScale, font, postGUI)
    local instance = {}

    instance.alpha = 1
    instance.x = x or 0
    instance.y = y or 0
    instance.width = width or 0
    instance.height = height or 0
    instance.text = ''
    instance.placeholder = text
    instance.textX = x or 0
    instance.textY = y or 0
    instance.widthText = (width - (instance.x - instance.textX)) or 0
    instance.textColor = {255, 255, 255, 100 * instance.alpha}
    instance.selectColor = {4, 70, 222, 100 * instance.alpha}
    instance.bgColor = {20, 21, 25}
    instance.borderColor = {typeColor.default[1], typeColor.default[2], typeColor.default[3], 255 * instance.alpha}
    instance.dotImage = nil
    instance.dotWidth = 14
    instance.dotHeight = 14
    instance.textScale = textScale or 1
    instance.font = font or 'default'
    instance.alignX = 'left'
    instance.alignY = 'center'
    instance.postGUI = postGUI or false
    instance.maxCharacter = maxCharacter or 0
    instance.bgRadius = 0
    instance.strokeWidth = 2
    instance.textX = instance.textX + instance.strokeWidth
    instance.fontHeight = dxGetFontHeight(instance.textScale, instance.font)
    instance.cursorBlinkHeight = instance.fontHeight - 10
    instance.rot = 0
    instance.rotX = 0
    instance.rotY = 0
    instance.dotVisible = true
    instance.eventFocus = true

    setmetatable(instance, {__index = self})

    private[instance] = {}
    setmetatable(private[instance], {__index = private})

    private[instance].cursorBlinkColor = {255, 255, 255, 200 * instance.alpha}
    private[instance].validationString = nil
    private[instance].editType = 'default'
    private[instance].textMasked = false
    private[instance].backspaceSpeed = 10
    private[instance].backspaceTick = getTickCount()
    private[instance].cursor = 0
    private[instance].selectStart = 0
    private[instance].selectEnd = 0
    private[instance].isSelecting = false
    private[instance].allTextSelected = false
    private[instance].cursorBlinkVisible = true
    private[instance].cursorBlink = 0
    private[instance].cursorBlinkSpeed = 0.5
    private[instance].cursorBlinkState = false
    private[instance].cursorBlinkEnabled = true
    private[instance].textWidth = dxGetTextWidth(instance.text, instance.textScale, instance.font)
    private[instance].svg = svgCreate(instance.width, instance.height, strFormat([[
        <svg width="%s" height="%s" xmlns="http://www.w3.org/2000/svg"> 
            <rect x="2" y="2" rx="%s" opacity="1" width="%s" height="%s" fill="%s" stroke-width="%s" stroke="#FFFFFF" />
        </svg>
    ]],
        instance.width + (2 * 2),
        instance.height + (2 * 2),
        instance.bgRadius,
        instance.width,
        instance.height,
        RGBToHex(instance.bgColor[1], instance.bgColor[2], instance.bgColor[3], instance.bgColor[4]),
        instance.strokeWidth)
    , function(loaded)
        if (not loaded) then
            return
        end
        dxSetTextureEdge(loaded, 'mirror')
    end)
    private[instance].svgXML = svgGetDocumentXML(private[instance].svg)
    private[instance].rect = xmlFindChild(private[instance].svgXML, 'rect', 0)

  
    return instance
end

function editbox:render(forceX, forceY, alpha)
    self.x = forceX or self.x;
    self.y = forceY or self.y;
    self.textX  = forceX or self.x;
    self.textY = forceY or self.y;

    --dxSetBlendMode('add')
    -- dxDrawRectangle(self.x, self.y, self.width, self.height, tocolor(255,0,0))
    dxDrawImage(
        self.x,
        self.y,
        self.width,
        self.height,
        private[self].svg,
        self.rot, self.rotX, self.rotY,
        tocolor(self.borderColor[1], self.borderColor[2], self.borderColor[3], self.borderColor[4] * alpha),
        self.postGUI
    )

    --dxSetBlendMode('blend')

    if (private[self].textMasked) then
        dxDrawText(
            strRep('*', strLen(((self.text ~= '' or (editFocused == self)) and self.text or self.placeholder))),
            self.textX,
            self.textY,
            self.textX + self.widthText,
            self.textY + self.height,
            tocolor(self.textColor[1], self.textColor[2], self.textColor[3], self.textColor[4] * alpha),
            self.textScale, self.font, ((private[self].textWidth > (self.width - (self.strokeWidth * 4))) and 'right' or self.alignX), self.alignY,
            ((private[self].textWidth > (self.width - (self.strokeWidth * 4))) and true or false),
            false,
            self.postGUI
        )
    else
        dxDrawText(
            ((self.text ~= '' or (editFocused == self)) and self.text or self.placeholder),
            self.textX,
            self.textY,
            self.textX + self.widthText,
            self.textY + self.height,
            tocolor(self.textColor[1], self.textColor[2], self.textColor[3], self.textColor[4] * alpha),
            self.textScale, self.font, ((private[self].textWidth > (self.width - (self.strokeWidth * 4))) and 'right' or self.alignX), self.alignY,
            ((private[self].textWidth > (self.width - (self.strokeWidth * 4))) and true or false),
            false,
            self.postGUI
        )
    end

    if (self.dotVisible) then
        dxDrawImage(
            (self.x + self.width) - self.dotWidth - 10,
            self.y + ((self.height / 2) - (self.dotHeight / 2)),
            self.dotWidth,
            self.dotHeight,
            self.dotImage,
            0, 0, 0,
            tocolor(self.borderColor[1], self.borderColor[2], self.borderColor[3], self.borderColor[4] * alpha),
            self.postGUI
        )
    end

    if (editFocused == self) then
        if (private[self].cursorBlinkEnabled) then
            private[self].cursorBlink = private[self].cursorBlink + getFrameTime()

            if (private[self].cursorBlink >= private[self].cursorBlinkSpeed) then
                private[self].cursorBlink = 0
                private[self].cursorBlinkState = not private[self].cursorBlinkState
            end

            if (private[self].cursorBlinkState) then
                local textW = (private[self].textMasked) and dxGetTextWidth(strSub(strRep('*', strLen(self.text)), 1, private[self].cursor), self.textScale, self.font) or dxGetTextWidth(strSub(self.text, 1, private[self].cursor), self.textScale, self.font)
                local cursorX = (self.alignX == 'center') and (self.textX + (((self.width + (self.x - self.textX)) + textW) / 2)) or self.textX + textW

                if (cursorX >= self.x + self.width) then
                    cursorX = self.x + self.width - 2 - self.strokeWidth
                end

                if (private[self].cursorBlinkVisible) then
                    dxDrawRectangle(
                        (textW > 0 and cursorX + 5 or cursorX),
                        self.y + ((self.height / 2) - (self.cursorBlinkHeight / 2)), 
                        1, 
                        self.cursorBlinkHeight, 
                        tocolor(private[self].cursorBlinkColor[1], private[self].cursorBlinkColor[2], private[self].cursorBlinkColor[3], private[self].cursorBlinkColor[4] * alpha)
                    )
                end
            end
        end

        if (getKeyState('backspace')) then
            private[self].backspaceSpeed = private[self].backspaceSpeed - 1

            if ((getTickCount() - private[self].backspaceTick) >= private[self].backspaceSpeed) then
                if (private[self].backspaceSpeed <= 0) then
                    if (private[self].cursor > 0) then
                        self.text = strSub(self.text, 1, private[self].cursor - 1) .. strSub(self.text, private[self].cursor + 1)
                        private[self].cursor = private[self].cursor - 1
                        private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)):sub(1, private[self].cursor), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)
                    end
                end
                private[self].backspaceTick = getTickCount() + 50
            end
        else
            private[self].backspaceSpeed = 20
        end
    end

    if (private[self].allTextSelected) then
        local center = (private[self].textWidth > self.width and self.widthText or private[self].textWidth)
        dxDrawRectangle(((self.alignX == 'center') and (self.textX + ((self.widthText - center) / 2)) or self.textX), self.y + ((self.height / 2) - (self.cursorBlinkHeight / 2)), center, self.cursorBlinkHeight, tocolor(self.selectColor[1], self.selectColor[2], self.selectColor[3], self.selectColor[4] * alpha))
    end

    if (private[self].isSelecting) then
        local mouseX, _ = getCursorPosition()
        mouseX = mouseX * screenWidth

        local textWidth = dxGetTextWidth(strSub(self.text, 0, private[self].cursor), self.textScale, self.font)

        if (mouseX <= self.x + textWidth) then
            private[self].cursor = getTextLogicalOffset(self.text, mouseX - self.textX, self.textScale, self.font) - 1
        elseif (mouseX >= self.x + textWidth) then
            private[self].cursor = getTextLogicalOffset(self.text, mouseX - self.textX, self.textScale, self.font) - 1
        end

        private[self].cursor = max(0, private[self].cursor)
        private[self].selectEnd = getTextLogicalOffset(self.text, mouseX - self.textX, self.textScale, self.font) - 1
        private[self].cursorBlink = 0
    end

    local selectStartX = self.textX + dxGetTextWidth(strSub(self.text, 1, private[self].selectStart), self.textScale, self.font)
    local selectEndX = self.textX + dxGetTextWidth(strSub(self.text, 1, private[self].selectEnd), self.textScale, self.font)

    dxDrawRectangle(selectStartX, self.y + ((self.height / 2) - (self.cursorBlinkHeight / 2)), ((selectEndX - selectStartX) >= self.width and self.widthText or (selectEndX - selectStartX)), self.cursorBlinkHeight, tocolor(self.selectColor[1], self.selectColor[2], self.selectColor[3], self.selectColor[4] * alpha))

end

function editbox:click(button, state, cursorX, cursorY)
    if (button == 'left' and state == 'down') then
        if (cursorX >= self.x and cursorX <= self.x + self.width and cursorY >= self.y and cursorY <= self.y + self.height) then
            if (not editFocused) then
                editFocused = self
                guiSetInputMode('no_binds')
                editFocused.editType = 'active'
                editFocused:setProperty('borderColor', {typeColor.active[1], typeColor.active[2], typeColor.active[3], 50 * self.alpha})
                editFocused:setProperty('textColor', {typeColor.active[1], typeColor.active[2], typeColor.active[3], 255 * self.alpha})
            end

            if (private[self].allTextSelected) then
                private[self].allTextSelected = false
            end

            --@needs revamp logic
            -- if (not private[self].isSelecting) then
            --     private[self].isSelecting = true
            --     private[self].cursorBlinkState = false
            --     private[self].cursorBlinkEnabled= false
            --     private[self].selectStart = getTextLogicalOffset(self.text, cursorX - self.textX, self.textScale, self.font) - 1
            -- end

            private[self].cursorBlinkState = true
            private[self].cursor = strLen(self.text)

            for i = 1, strLen(self.text) do
                if (cursorX <= self.textX + private[self].textWidth) then
                    private[self].cursor = i - 1
                    break
                end
            end

            if (private[self].cursor < 0) then
                private[self].cursor = 0
            elseif (private[self].cursor > strLen(self.text)) then
                private[self].cursor = strLen(self.text)
            end
        else
            if (self == editFocused) then
                editFocused = nil
                guiSetInputMode('allow_binds')
            end

            private[self].cursorBlinkState = false
            private[self].allTextSelected = false
            private[self].isSelecting = false
            private[self].selectStart = 0
            private[self].selectEnd = 0
        end
    elseif (button == 'left' and state == 'up') then
        private[self].isSelecting = false
        private[self].cursorBlinkState = true
        private[self].cursorBlinkEnabled = true
    end
end

function editbox:key(key, press)
    if (not press) then
        return
    end

    if (editFocused == self) then
        if (key == 'backspace') then
            if (private[self].allTextSelected) then
                self:clear()
                private[self].cursor = 0
                private[self].cursorBlink = 0
                private[self].allTextSelected = false
                private[self].isSelecting = false
                private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)

                if (not private[self].cursorBlinkEnabled) then
                    private[self].cursorBlinkEnabled = true
                end
            elseif (private[self].selectStart ~= private[self].selectEnd) then
                local selectStart = min(private[self].selectStart, private[self].selectEnd)
                local selectEnd = max(private[self].selectStart, private[self].selectEnd)

                self.text = strSub(self.text, 0, selectStart) .. strSub(self.text, selectEnd + 1)
                private[self].cursor = selectStart
                private[self].allTextSelected = false
                private[self].isSelecting = false
                private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)
                private[self].selectStart = 0
                private[self].selectEnd = 0

                if (private[self].isSelecting) then
                    private[self].isSelecting = false
                end

                if (not private[self].cursorBlinkEnabled) then
                    private[self].cursorBlinkEnabled = true
                end
            else
                if (private[self].cursor > 0) then
                    self.text = strSub(self.text, 1, private[self].cursor - 1) .. strSub(self.text, private[self].cursor + 1)
                    private[self].cursor = private[self].cursor - 1
                    private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)
                end
            end
        elseif (key == 'delete') then
            if (private[self].allTextSelected) then
                self:clear()
                private[self].cursor = 0
                private[self].cursorBlink = 0
                private[self].allTextSelected = false
                private[self].isSelecting = false
                private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)

                if (not private[self].cursorBlinkEnabled) then
                    private[self].cursorBlinkEnabled = true
                end
            elseif (private[self].selectStart ~= private[self].selectEnd) then
                local selectStart = min(private[self].selectStart, private[self].selectEnd)
                local selectEnd = max(private[self].selectStart, private[self].selectEnd)

                self.text = strSub(self.text, 0, selectStart) .. strSub(self.text, selectEnd)
                private[self].cursor = selectStart
                private[self].allTextSelected = false
                private[self].isSelecting = false
                private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)
                private[self].selectStart = 0
                private[self].selectEnd = 0

                if (not private[self].cursorBlinkEnabled) then
                    private[self].cursorBlinkEnabled = true
                end
            elseif (private[self].cursor < #self.text) then
                self.text = strSub(self.text, 1, private[self].cursor) .. strSub(self.text, private[self].cursor + 2)
                private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)
            end
        elseif (key == 'end') then
            private[self].cursor = #self.text

        elseif (key == 'home') then
            private[self].cursor = 0
            private[self].cursorBlink = 0
        elseif (key == 'arrow_l') then
            private[self].cursor = private[self].cursor - 1

            if (private[self].cursor < 0) then
                private[self].cursor = 0
            elseif (private[self].cursor > strLen(self.text)) then
                private[self].cursor = strLen(self.text)
            end
        elseif (key == 'arrow_r') then
            private[self].cursor = private[self].cursor + 1

            if (private[self].cursor < 0) then
                private[self].cursor = 0
            elseif (private[self].cursor > strLen(self.text)) then
                private[self].cursor = strLen(self.text)
            end
        elseif (getKeyState('lshift') and key == 'arrow_l') then
            private[self].selectStart = private[self].cursor
            private[self].cursor = private[self].cursor - 1

            if (private[self].cursor < 0) then
                private[self].cursor = 0
            end
        elseif (key == 'a' and getKeyState('lctrl')) then
            private[self].cursor = 0
            private[self].cursorBlink = 0
            private[self].cursorBlinkEnabled = false
            private[self].allTextSelected = true
        elseif (key == 'c' and getKeyState('lctrl')) then
            if (self:hasSelection()) then
                setClipboard(strSub(self.text, min(private[self].selectStart, private[self].selectEnd), max(private[self].selectStart, private[self].selectEnd)))
                return
            end

            setClipboard(self:getText())
        elseif (key == 'x' and getKeyState('lctrl')) then
            if (self:hasSelection()) then
                setClipboard(strSub(self.text, min(private[self].selectStart, private[self].selectEnd) + 1, max(private[self].selectStart, private[self].selectEnd) + 1))
                self.text = strSub(self.text, 0, min(private[self].selectStart, private[self].selectEnd)) .. strSub(self.text, max(private[self].selectStart, private[self].selectEnd) + 1)
                private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)
                private[self].cursor = min(private[self].selectStart, private[self].selectEnd)
                private[self].allTextSelected = false
                private[self].isSelecting = false
                private[self].selectStart = 0
                private[self].selectEnd = 0
            elseif (private[self].allTextSelected) then
                setClipboard(self:getText())
                self:clear()
                private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)
                private[self].cursor = 0
                private[self].cursorBlink = 0
                private[self].allTextSelected = false
                private[self].isSelecting = false
                private[self].selectStart = 0
                private[self].selectEnd = 0
            else
                setClipboard(self:getText())
                self:clear()
                private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)
                private[self].cursor = 0
                private[self].cursorBlink = 0
                private[self].allTextSelected = false
                private[self].isSelecting = false
                private[self].selectStart = 0
                private[self].selectEnd = 0
            end
        end
    end
end

function editbox:paste(text)
    if (editFocused == self) then
        if (private[self].allTextSelected) then
            self:clear()
            private[self].cursor = 0
            private[self].cursorBlink = 0
            private[self].allTextSelected = false
        end

        self.text = strSub(self.text, 1, private[self].cursor) .. text .. strSub(self.text, private[self].cursor + 1)
        private[self].cursor = private[self].cursor + strLen(text)
        private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)
    end
end

function editbox:char(character)
    if (not (editFocused == self)) then
        return
    end

    if (private[self].validationString) then
        local m = character:match(private[self].validationString)
        if (m == "") then
            return
        end
    end

    if (strLen(self.text) >= self.maxCharacter) then
        return
    end

    if (private[self].allTextSelected) then
        self:clear()
        private[self].cursor = 0
        private[self].cursorBlink = 0
        private[self].allTextSelected = false
    end

    self.text = strSub(self.text, 1, private[self].cursor) .. character .. strSub(self.text, private[self].cursor + 1)
    private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)
    private[self].cursor = private[self].cursor + 1
end

function editbox:setText(text)
    self.text = text
    private[self].cursor = strLen(self.text)
    private[self].textWidth = (private[self].textMasked) and dxGetTextWidth(strRep('*', strLen(self.text)), self.textScale, self.font) or dxGetTextWidth(self.text, self.textScale, self.font)
end

function editbox:getText()
    return self.text
end

function editbox:hasSelection()
    return ((private[self].selectStart ~= 0 and private[self].selectEnd ~= 0) and true or false)
end

function editbox:mouseRelease()
    if (private[self].isSelecting) then
        private[self].isSelecting = false
        private[self].allTextSelected = false
    end
end

function editbox:clear()
    self.text = ''
end

function editbox:freeMemory()
    local svg = private[self].svg
    if (svg and isElement(svg)) then
        destroyElement(svg)
        if editFocused == self then 
            editFocused = nil
        end
    end
end

function editbox:setProperty(property, value)
    if (property == 'bgRadius') then
        xmlNodeSetAttribute(private[self].rect, 'rx', value)
        svgSetDocumentXML(private[self].svg, private[self].svgXML)
        return true
    elseif (property == 'bgColor') then
        local function rgbToHex(r, g, b)
            local rgb = (r * 0x10000) + (g * 0x100) + b
            return strFormat("#%06x", rgb)
        end

        local newColor = rgbToHex(value[1], value[2], value[3])

        xmlNodeSetAttribute(private[self].rect, 'fill', newColor)
        svgSetDocumentXML(private[self].svg, private[self].svgXML)
        return true
    elseif (property == 'opacity') then
        xmlNodeSetAttribute(private[self].rect, 'opacity', value)
        svgSetDocumentXML(private[self].svg, private[self].svgXML)
        return true
    elseif (property == 'textX') then
        self.textX = self.x + value
        self.widthText = self.width - value
        return true
    elseif (property == 'textY') then
        self.textY = self.y + value
        return true
    elseif (property == 'textMasked') then
        private[self].textMasked = value
        return true
    elseif (property == 'typeEdit') then
        private[self].editType = value
        self.borderColor = {typeColor[value][1], typeColor[value][2], typeColor[value][3], 255 * self.alpha}
        return true
    elseif (property == 'cursorBlinkVisible') then
        private[self].cursorBlinkVisible = value
        return true
    elseif (property == 'validationString') then
        private[self].validationString = value
        return true
    elseif (property == 'cursorBlinkColor') then
        private[self].cursorBlinkColor = value
        return true
    elseif (property == 'posY') then
        self.y = value
        -- self.textY = self.y + self.textY
        return true
    end

    if (not self[property]) then
        return error('Invalid property', 2)
    end

    self[property] = value

    return true
end

function editbox:onFocused(func)
    self.eventFocus = func
end

addEventHandler('onClientResourceStop', resourceRoot, function()
    editFocused = nil
    guiSetInputMode('allow_binds')
end)

function EditboxClass(x, y, width, height, text, maxCharacter, textScale, font, postGUI)
    return editbox:new(x, y, width, height, text, maxCharacter, textScale, font, postGUI)
end