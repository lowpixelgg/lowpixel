local imports = {
  ui = exports.pixel_ui,
};

function useCreateMenuBg(id, width, height, color, round, opacity) 
  local raw = string.format([[
  <svg width="%s" height="%s" viewBox="0 0 %s %s" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="%s" height="%s" rx="%s" fill="%s" fill-opacity="%s"/>
  </svg>
  ]], width, height, width, height, width,height, round or 3, color or "white", opacity or 1);
  
  imports.ui:createSvg(id, raw, width, height);
end

-- function createReceiveItem(id, width, height) 
--   local raw = string.format([[
--     <svg width="%s" height="%s" viewBox="0 0 112 132" fill="none" xmlns="http://www.w3.org/2000/svg">
--     <path d="M0 9C0 4.02944 4.02944 0 9 0H103C107.971 0 112 4.02944 112 9V107H0V9Z" fill="#1B1C21" fill-opacity="0.35"/>
--     <path d="M0 107H112V127C112 129.761 109.761 132 107 132H5C2.23858 132 0 129.761 0 127V107Z" fill="#1B1C21"/>
--     </svg>    
--   ]], width, height, width, height, width, height);
  
--   imports.ui:createSvg(id, raw, width, height);
-- end

function createInputBackground(id, width, height) 
  local raw = [[
  <svg width="240" height="40" viewBox="0 0 240 40" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="240" height="40" rx="6" fill="url(#paint0_linear_246_301)" fill-opacity="0.03"/>
  <rect x="0.25" y="0.25" width="239.5" height="39.5" rx="7.75" stroke="white" stroke-opacity="0.06" stroke-width="2"/>
  <defs>
  <linearGradient id="paint0_linear_246_301" x1="0" y1="40" x2="12.973" y2="-37.8378" gradientUnits="userSpaceOnUse">
  <stop stop-color="white"/>
  <stop offset="1" stop-color="white" stop-opacity="0.4"/>
  </linearGradient>
  </defs>
  </svg>      
  ]];
  
  imports.ui:createSvg(id, raw, width, height);
end




function createSeparateBackground(id, width, height) 
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




function createRectangle(id, width, height, color, opacity)
  color = color or '#D9D9D9';
  
  local raw = string.format([[
  <svg width="%s" height="%s" viewBox="0 0 %s %s" fill="none">
  <rect width="%s" height="%s" rx="2" fill="%s" fill-opacity="%s"/>
  <rect x="0.25" y="0.25" width="%s.5" height="%s.5" rx="5" stroke="white" stroke-opacity="0.1" stroke-width="0.5"/>
  </svg>      
  ]],  width, height,  width, height,  width, height, color, opacity, width, height);
  
  imports.ui:createSvg(id, raw, width, height);
end