local imports = {
  ui = exports.pixel_ui;
}

SVG = {}


function SVG:background (id, width, height) 
  local pathLength = 115
  local _width = respo(30)
  local _height = respo(30)
  
  local raw = string.format([[
  <svg width="%s" height="%s" viewBox="0 0 %s %s">
  <rect x="2" y="2" width="%s" height="%s" rx="2" fill="#1F2025" stroke-dasharray="%s" stroke-dashoffset="0" stroke="#FD0150" stroke-width="1.5"/>
  </svg>     
  ]], width, height, width, height, _width, _height, pathLength)
  
  return imports.ui:createSvg(id, raw, width, height)
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

