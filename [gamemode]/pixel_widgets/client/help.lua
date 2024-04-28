local imports = {
    ui = exports.pixel_ui,
}

help = class "Help";


-- @type! { key = "BACKSPACE", msg = "Total Description" }
function help:init (props)
    self.list = {};
    

    for _, help in ipairs(props.list) do 
        local keyTitle = help.key;
        local keySize = dxGetTextWidth(keyTitle);
        local msgSize = dxGetTextSize(help.msg);
        local padding = respo(20);
        local centerX = keySize + padding;
        local centerY = respo(30);

        SVG:createKeyBackground ("svg"..help.key, centerX, centerY);

        table.insert(self.list, { data = help, size = { centerX, centerY }, textSize = msgSize})
    end
end


function help:render (alpha)
    for i, help in ipairs(self.list) do
        local kw, kh = help.size[1],  help.size[2];
        local startX = scw - kw - respo(10);
        local startY = (i - 1) * ( kh + 5) + respo(10);
        local textSize = help.textSize;

        self:key(help, startX, startY, alpha);

        dxDrawText(help.data.msg, startX, startY + kh, startX - 10, startY, tocolor(255, 255, 255, alpha / 2), 1.0, fonts.PoppinsRegular10, "right", "center", false, false, false, false, false);
    end
end



function help:key (key, x,y, alpha) 
    local data = key.data;
    local kw, kh = key.size[1],  key.size[2];

    dxDrawText(data.key, x, y, x + kw, y + kh, tocolor(255,255,255, alpha/1.5), 1.0, fonts.RobotoMedium10, "center", "center")
    imports.ui:renderSvg("svg"..data.key, x, y, tocolor(255,255,255, alpha))
end