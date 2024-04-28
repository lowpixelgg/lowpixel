local imports = {
    ui = exports.pixel_ui
}

SVG = {};


function SVG:createRectangle (id, width, height, rx, fillOpacity, strokeOpacity, sizeStroke)
    width = width or 1
    height = height or 1
    rx = rx or 2
    sizeStroke = sizeStroke or 2
    fillOpacity = fillOpacity or 1
    strokeOpacity = strokeOpacity or 1
    
    local newW, newH = width + (sizeStroke * 2), height + (sizeStroke * 2)
    local contourLength = 2 * (width + height)
    
    local raw = string.format([[
        <svg width='%s' height='%s' viewBox="0 0 %s %s" xmlns="http://www.w3.org/2000/svg">
            <rect x='%s' y='%s' rx='%s' width='%s' height='%s' fill-opacity='%s' fill="white" stroke-opacity='%s' stroke='white'
            stroke-width='%s' stroke-dasharray='%s' />
        </svg>
    ]], newW, newH, newW, newH, sizeStroke, sizeStroke, rx, width, height, fillOpacity, strokeOpacity, sizeStroke, contourLength)

    imports.ui:createSvg(id, raw, width, height);
end



function SVG:createLine (id, width, height) 
    local raw = string.format([[
        <svg width="%s" height="%s" viewBox="0 0 %s %s" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="%s" height="%s" rx="3.15" fill="#D9D9D9"/>
        </svg>
    ]], width, height, width, height, width, height)


    imports.ui:createSvg(id, raw, width, height);
end