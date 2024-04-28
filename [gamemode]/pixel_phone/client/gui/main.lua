local imports = {
    webui = exports.webui,
    ui = exports.pixel_ui
}

PhoneUI = {};

function PhoneUI:start (item)
    self.divWidth = respo(300);
    self.divHeight = respo(600);
    self.item = item;
    self.visible = true;

    
    if (not self.webui) then 
        exports.webui:startUp();
        self.webui = imports.webui:createWebWindow(0, 0, self.divWidth, self.divHeight, "http://mta/pixel_phone/assets/webui/index.html", true);
    else
        setBrowserRenderingPaused(imports.webui:getBrowser(self.webui), false)
    end
    addEventHandler("onClientPreRender", root, self.render, false, "low-9999");

    return self;
end



function PhoneUI.render () 
    local self = PhoneUI;
    local startX, startY = imports.ui:createLayoutBox("phone", self.divWidth, self.divHeight, 100, 0, "right", "center", false);

    imports.webui:draw(self.webui);
    imports.webui:setWebWindowPosition(self.webui, Vector2(startX, startY))
end



function PhoneUI:setPhoneRoute (route) 
    if (not self.webui) then return false end
    PhoneUI:sendPhoneEvent ("setPhoneRoute", { route = route }, true);
end

function PhoneUI:sendPhoneEvent (event, data, force)
    if (not self.webui) then return false end
    local data = { event = event, data = data }

    if (force) then
        imports.webui:executeJavascriptWithoutEvent(self.webui, "nuiCallFunction('"..toJSON(data).."')");
    else
        imports.webui:executeJavascript(self.webui, "nuiCallFunction('"..toJSON(data).."')");
    end
end

function PhoneUI:getVisible ()
    return self.visible; 
end

function PhoneUI:stop ()
    if (self.webui) then 
        self.visible = false;
        setBrowserRenderingPaused(imports.webui:getBrowser(self.webui), true);
        removeEventHandler("onClientPreRender", root, self.render, false, "low-9999");
    end
end