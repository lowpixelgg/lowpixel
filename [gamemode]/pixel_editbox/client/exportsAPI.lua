local edits = {}

function createEditbox(x, y, width, height, text, maxCharacter, textScale, font, postGUI)
    local identify = #edits + 1
    edits[identify] = EditboxClass(x, y, width, height, text, maxCharacter, textScale, font, postGUI)

    return identify
end

function renderEditbox(identify, x,y,alpha)
    if (not edits[identify]) then
        return
    end
    edits[identify]:render(x,y,alpha)
end

function clickEditbox(identify, button, state, abx, aby)
    if (not edits[identify]) then
        return
    end
    
    edits[identify]:click(button, state, abx, aby)
end

function keyEditbox(identify, key, press)
    if (not edits[identify]) then
        return
    end
    edits[identify]:key(key, press)
end

function pasteEditbox(identify, text)
    if (not edits[identify]) then
        return
    end
    edits[identify]:paste(text)
end

function charEditbox(identify, char)
    if (not edits[identify]) then
        return
    end
    edits[identify]:char(char)
end

function setTextEditbox(identify, text)
    if (not edits[identify]) then
        return
    end
    edits[identify]:setText(text)
end

function getTextEditbox(identify)
    if (not edits[identify]) then
        return
    end
    return edits[identify]:getText()
end

function hasSelectionEditbox(identify)
    if (not edits[identify]) then
        return
    end
    return edits[identify]:hasSelection()
end

function mouseReleaseEditbox(identify)
    if (not edits[identify]) then
        return
    end
    edits[identify]:mouseRelease()
end

function clearEditbox(identify)
    if (not edits[identify]) then
        return
    end
    edits[identify]:clear()
end

function setPropertyEditbox(identify, property, value)
    if (not edits[identify]) then
        return
    end
    edits[identify]:setProperty(property, value)
end

function destroyEditbox(identify)
    if (not edits[identify]) then
        return
    end

    edits[identify]:freeMemory()
    edits[identify] = nil
end

function focusedEditbox(identify, func)
    if (not edits[identify]) then
        return
    end
    edits[identify]:onFocused(func)
end