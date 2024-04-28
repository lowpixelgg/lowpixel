function getFrameTime()
    return 1 / 60
end

function getTextLogicalOffset(text, offset, charScale, charFont)
    local n = 0;
    local len = #text;
    local curOffset = 0;
    local charWidth;

    while (n <= len) do
        charWidth = dxGetTextWidth(utf8.sub(text, n, n), charScale, charFont);
        curOffset = curOffset + charWidth;
        
        n = n + 1;
        
        if (curOffset > offset) then
            break;
        end
    end
    
    if not (n == 1) and (curOffset - offset > charWidth * 0.5) then
        return n - 1, curOffset - charWidth;
    end
    
    return n, curOffset;
end