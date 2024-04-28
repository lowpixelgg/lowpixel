local imports = {
    webui = exports.webui;
}

SellUI = newclass "SellUI";



function SellUI:init(data) 
    exports.webui:startUp()
    self.webui =  imports.webui:createWebWindow(0, 0, scw, sch, "http://mta/pixel_fisher/assets/nui/index.html", true);
        
    self:sendPhoneEvent("sendFrontData", data);
end


function SellUI:render ()
    imports.webui:draw(self.webui);
end


function SellUI:destroy () 
    imports.webui:destroyWebWindow(self.webui);
end


function SellUI:sendPhoneEvent (event, data, force)
    if (not self.webui) then return false end
    local data = { event = event, data = data }

    if (force) then 
        imports.webui:executeJavascriptWithoutEvent(self.webui, "nuiCallFunction('"..toJSON(data).."')");
    else
        imports.webui:executeJavascript(self.webui, "nuiCallFunction('"..toJSON(data).."')");
    end
end
