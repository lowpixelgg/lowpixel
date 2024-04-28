function createSlider(id, width, height) 
    local raw = string.format([[
    <svg width="%s" height="%s" viewBox="0 0 %s %s" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="%s" height="%s" rx="2" fill="white"/>
    </svg>]], width, height, width, height, width, height)
    
    imports.ui:createSvg(id, raw, width, height)
end

function createRectangle(id, width, height, color, opacity) 
        color = color or '#D9D9D9'
        
        local raw = string.format([[
        <svg width="%s" height="%s" viewBox="0 0 %s %s" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="%s" height="%s" rx="8" fill="url(#paint0_linear_246_299)" fill-opacity="0.04"/>
        <rect x="0.25" y="0.25" width="%s.5" height="%s.5" rx="8" stroke="white" stroke-opacity="0.06" stroke-width="0.5"/>
        <defs>
        <linearGradient id="paint0_linear_246_299" x1="0" y1="%s" x2="93.7723" y2="-85.649" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="white" stop-opacity="0.4"/>
        </linearGradient>
        </defs>
        </svg>           
        ]], width, height, width, height, width, height, width, height, height)
        
        imports.ui:createSvg(id, raw, width, height)
end

function createRect(id, width, height, round) 
    local raw = string.format([[
    <svg width="%s" height="%s" viewBox="0 0 %s %s" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="%s" height="%s" fill="white" rx="%s"/>
    </svg>
    ]], width, height, width, height, width, height, round or 0)
    
    imports.ui:createSvg(id, raw, width, height)
end



function createBuyBackground(id, width, height) 
    local raw = string.format([[
    <svg width="%s" height="%s" viewBox="0 0 %s %s" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="%s" height="%s" rx="8" fill="url(#paint0_linear_246_299)" fill-opacity="0.04"/>
    <rect x="0.25" y="0.25" width="%s.5" height="%s.5" rx="8" stroke="white" stroke-opacity="0.06" stroke-width="0.5"/>
    <defs>
    <linearGradient id="paint0_linear_246_299" x1="0" y1="%s" x2="93.7723" y2="-85.649" gradientUnits="userSpaceOnUse">
    <stop stop-color="white"/>
    <stop offset="1" stop-color="white" stop-opacity="0.4"/>
    </linearGradient>
    </defs>
    </svg>           
    ]], width, height, width, height, width, height, width, height, height);
    
    imports.ui:createSvg(id, raw, width, height);
  end
  