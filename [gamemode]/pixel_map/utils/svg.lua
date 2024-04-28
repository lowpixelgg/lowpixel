local imports = {
    ui = exports.pixel_ui;
}

SVG = {}



function SVG:createCircle (id,  width, height, sizeStroke, dashoffset) 
    local pathLength = 100;
    
    width = width or 1
    height = height or 1
    sizeStroke = sizeStroke or 2
    dashoffset = dashoffset or 100
    
    local radius = math.min(width, height) / 2
    local borderLenght = (2 * math.pi) * radius
    local newW, newH = width + (sizeStroke * 2), height + (sizeStroke * 2)
    
    local raw = string.format([[
    <svg width='%s' height='%s' >
    <rect x='%s' y='%s' rx='%s' width='%s' height='%s' fill='#FFFFFF' fill-opacity='0' stroke='#FFFFFF'
    stroke-width='%s' stroke-dasharray='%s' stroke-dashoffset='%s' stroke-linejoin='round' />
    </svg>
    ]], newW, newH, sizeStroke, sizeStroke, radius, width, height, sizeStroke, borderLenght, dashoffset)
    
    
    return imports.ui:createSvg(id, raw, width, height, borderLenght, dashoffset);
end