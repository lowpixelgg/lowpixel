function wordWrap(text, maxwidth, scale, font, colorcoded)
    local lines = {}
    local words = split(text, " ") 
    local line = 1 
    local word = 1 
    local endlinecolor
    while (words[word]) do 
        repeat
            if colorcoded and (not lines[line]) and endlinecolor and (not string.find(words[word], "^#%x%x%x%x%x%x")) then 
                lines[line] = endlinecolor 
            end
            lines[line] = lines[line] or "" 
  
            if colorcoded then
                local rw = string.reverse(words[word]) 
                local x, y = string.find(rw, "%x%x%x%x%x%x#") 
                if x and y then
                    endlinecolor = string.reverse(string.sub(rw, x, y)) 
                end
            end
      
            lines[line] = lines[line]..words[word] 
            lines[line] = lines[line] .. " " 
  
            word = word + 1 
        until ((not words[word]) or dxGetTextWidth(lines[line].." "..words[word], scale, font, colorcoded) > maxwidth) 
    
        lines[line] = string.sub(lines[line], 1, -2) 
        if colorcoded then
            lines[line] = string.gsub(lines[line], "#%x%x%x%x%x%x$", "") 
        end
        line = line + 1 
    end 
    return lines
  end