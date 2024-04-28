SVG = {}
SVG.cache = {}


local function useCacheSvg(width, height, rawData)
    if type(width) ~= "number" or type(height) ~= "number" then return false end
    
    local svgElm = svgCreate(width, height, rawData)
    
    local svgXML = svgGetDocumentXML(svgElm)
    local rect = xmlFindChild(svgXML, 'rect', 0)
    
    return {
        svg = svgElm,
        xml = svgXML,
        rect = rect
    }
end


function SVG.background (id, width, height) 
    local pathLength = 100
    
    local raw = string.format([[
    <svg width="%s" height="%s" viewBox="0 0 %s %s">
    <rect x="2" y="2" width="26" height="26" rx="2" stroke-dasharray="%s" stroke-dashoffset="0" stroke="#4F4FCE" stroke-width="2"/>
    </svg>     
    ]], width, height, width, height,  pathLength)
    
    local svg = useCacheSvg(width, height, raw)
    
    
    if not svg then return false end
    
    local details = {
        type="rect",
        width = width,
        height = height,
        dashoffset = pathLength,
        svgDetails = svg
    }
    
    SVG.cache[id] = details
    
    return SVG.cache[id]
end


function SVG.setSVGOffset(id, value)
    local svg = SVG.cache[id];
    
    if (not svg) then return false end
    
    local rect = svg.svgDetails.rect
    local currentOffset = xmlNodeGetAttribute(rect, 'stroke-dashoffset')
    if value == currentOffset then return false end
    
    local newOffset = (100 - value) * (svg.dashoffset / 100)
    
    xmlNodeSetAttribute(rect, 'stroke-dashoffset', newOffset)
    svgSetDocumentXML(svg.svgDetails.svg, svg.svgDetails.xml)
end


function SVG.render(id, x, y, color, rot, postGUI) 
    
    if (not SVG.cache[id]) then return false end
    if not id or type(x) ~= "number" or type(y) ~= "number" then return false end
    
    local svg = SVG.cache[id];
    
    color = color or tocolor(255,255,255,255);
    rot = rot or 0;
    postGUI = postGUI or false;
    
    local width, height = svg.width, svg.height;
    
    dxDrawImage(x, y, width, height, svg.svgDetails.svg, rot, 0, 0, color, postGUI)
end