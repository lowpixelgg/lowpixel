local imports = {
  ui = exports.pixel_ui;
}

SVG = {}




function SVG:background (id, width, height) 
  local pathLength = 100;
  
  width = width or 1
  height = height or 1
  sizeStroke = sizeStroke or 2
  dashoffset = dashoffset or 100
  
  local radius = math.min(width, height) / 1
  local borderLenght = (2 * math.pi) * radius
  local newW, newH = width + (sizeStroke * 2), height + (sizeStroke * 2)
  
  local raw = string.format([[
      <svg width='%s' height='%s' viewBox="0 0 %s %s" >
          <rect x='%s' y='%s' rx='2' width='%s' height='%s' fill="#1F2025"  stroke='#FD0150'
          stroke-width='%s' stroke-dasharray='%s' stroke-dashoffset='%s' stroke-linejoin='round' />
      </svg>
  ]], newW, newH, newW, newH, sizeStroke, sizeStroke, width, height, sizeStroke, borderLenght, dashoffset)
  
  
  imports.ui:createSvg(id, raw, width, height, borderLenght, dashoffset);
end


function SVG:rectangle(id, width, height, color, opacity)
  color = color or '#D9D9D9';
  
  local raw = string.format([[
  <svg width="%s" height="%s" viewBox="0 0 %s %s" fill="none">
  <rect width="%s" height="%s" rx="2" fill="%s" fill-opacity="%s"/>
  <rect x="0.25" y="0.25" width="%s.5" height="%s.5" rx="5" stroke="white" stroke-opacity="0.1" stroke-width="0.5"/>
  </svg>      
  ]],  width, height,  width, height,  width, height, color, opacity, width, height);
  
  imports.ui:createSvg(id, raw, width, height);
end


function SVG:createProgress (id, width, height) 
  local raw = string.format([[
  <svg width="%s" height="%s" viewBox="0 0 %s %s" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="%s" height="%s" rx="4" fill="white"/>
  </svg>]], width, height, width, height, width, height)
  
  imports.ui:createSvg(id, raw, width, height);
end


function SVG:createKeyBackground (id, width, height) 
  local raw = string.format([[
  <svg width="%s" height="%s" viewBox="0 0 %s %s" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="%s" height="%s" rx="3" fill="white" fill-opacity="0.3"/>
  <rect x="0.5" y="0.5" width="%s" height="%s" rx="2.5" stroke="white" stroke-opacity="0.4"/>
  </svg>
  ]], width, height, width, height, width, height, width-1, height-1);
  
  imports.ui:createSvg(id, raw, width, height);
end



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
  
  
  imports.ui:createSvg(id, raw, width, height, borderLenght, dashoffset);
end