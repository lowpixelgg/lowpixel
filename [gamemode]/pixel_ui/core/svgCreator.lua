SVG = {};
SVG.cache = {};


local function useCacheSvg(width, height, rawData)
  if (type(width) ~= "number" or type(height) ~= "number") then return false end

  local svgElm = svgCreate(width, height, rawData)
  local svgXML = svgGetDocumentXML(svgElm);
  local rect = xmlFindChild(svgXML, 'rect', 0);
 
  return {
    svg = svgElm,
    xml = svgXML,
    rect = rect
  };
end




function SVG:create (id, raw, width, height, borderLength, dashoffset) 
  if (not SVG.cache[id]) then 
    local svg = useCacheSvg(width, height, raw);
    
    if (not svg) then return error("pixel_ui: error ocurred when create svg") end

    local details = {
      type="rect",
      width = width,
      height = height,
      svgDetails = svg,
      borderLength = borderLength or 0,
      dashoffset = dashoffset or 0,
    };

    SVG.cache[id] = details;
  end
  
  return SVG.cache[id];
end


function SVG:setColor (id, color, opacity) 
  if (not SVG.cache[id]) then return false end
  local svg = SVG.cache[id];
  local rect = svg.svgDetails.rect;
  
  xmlNodeSetAttribute(rect, 'fill', color);
  xmlNodeSetAttribute(rect, 'fill-opacity', opacity);
  svgSetDocumentXML(svg.svgDetails.svg, svg.svgDetails.xml);

  return true;
end


function SVG:setStrokeColor (id, color, opacity) 
  if (not SVG.cache[id]) then return false end
  local svg = SVG.cache[id];
  local rect = svg.svgDetails.rect;
  
  xmlNodeSetAttribute(rect, 'stroke', color);
  xmlNodeSetAttribute(rect, 'stroke-opacity', opacity);
  svgSetDocumentXML(svg.svgDetails.svg, svg.svgDetails.xml);

  return true;
end


function SVG:getRectWidth(id) 
  if (not SVG.cache[id]) then return end
  local svg = SVG.cache[id]
  local rect = svg.svgDetails.rect
  
  return xmlNodeGetAttribute(rect, 'width', width)
end

function SVG:setRectWidth (id, width) 
  if (not SVG.cache[id]) then return end
  local svg = SVG.cache[id]
  
  local rect = svg.svgDetails.rect
  
  xmlNodeSetAttribute(rect, 'width', width)
  svgSetDocumentXML(svg.svgDetails.svg, svg.svgDetails.xml)
end

function SVG:setRectHeight (id, height) 
  if (not SVG.cache[id]) then return end
  local svg = SVG.cache[id]
  
  local rect = svg.svgDetails.rect
  
  xmlNodeSetAttribute(rect, 'height', height)
  svgSetDocumentXML(svg.svgDetails.svg, svg.svgDetails.xml)
end

function SVG:setSvgOffset(id, value) 
  if (not SVG.cache[id]) then return end
  local svg = SVG.cache[id]
  local rect = svg.svgDetails.rect


  local currentOffset = xmlNodeGetAttribute(rect, 'stroke-dashoffset')
  if value == currentOffset then return false end

  local newOffset = (svg.dashoffset / 100) * value
  local newValue = svg.borderLength - ((svg.borderLength / 100) * newOffset)
    
  xmlNodeSetAttribute(rect, 'stroke-dashoffset', newValue)
  svgSetDocumentXML(svg.svgDetails.svg, svg.svgDetails.xml)
end



function SVG:render (id, x, y, color, rot, postGUI, modulate, rotX, rotY, rotZ) 
  if (not SVG.cache[id]) then return false end
  local svg = SVG.cache[id];

  color = color or tocolor(255,255,255,255);
  rot = rot or 0;
  postGUI = postGUI or false;

  local width, height = svg.width, svg.height;


  if (modulate) then 
    dxSetBlendMode('add');
      dxDrawImage(x, y, width, height, svg.svgDetails.svg, rotX or 0, rotY or 0, rotZ or 0, color, postGUI);
   dxSetBlendMode('blend');
  else
    dxDrawImage(x, y, width, height, svg.svgDetails.svg, rotX or 0, rotY or 0, rotZ or 0, color, postGUI);
  end
end