local imports = {
    characters = exports.pixel_characters,
    pAttach = exports.pAttach,
    ui = exports.pixel_ui,
    webui = exports.webui,
    notify = exports.pixel_notify,
    assets = exports.pixel_assets,
    widgets = exports.pixel_widgets,
    locales = exports.pixel_lang
}

local gender = "masculine"
local fonts = {
    roboto = imports.assets:useCreateFont("roboto.Medium", respo(20)),
    roboto30 = imports.assets:useCreateFont("roboto.Medium", respo(80))
}


CreatorEngine = {
    showUI = false,
    activeIndex = 1; 
};

CreatorEngine.availableParents = {
    ["feminine"] = {
        [0] = 12,
        [1] = 11,
        [2] = 13,
        [3] = 40,
        [4] = 41,
        [5] = 54,
        [6] = 53,
        [7] = 56,
        [8] = 55,
        [9] = 69,
    }, 
    ["masculine"] = {
        [0] = 7,
        [1] = 17,
        [2] = 15,
        [3] = 16,
        [4] = 18,
        [5] = 19,
        [6] = 20,
        [7] = 21,
        [8] = 22,
        [9] = 24,
    }
}


CreatorEngine.skinColors = {
    [0] = {255, 255, 255},
    [1] = {255, 255, 255},
    [2] = {255, 255, 255},
    [3] = {255, 255, 255},
    [4] = {255, 255, 255},
    [5] = {255, 255, 255},
    [6] = {255, 255, 255},
    [7] = {255, 255, 255},
    [8] = {255, 255, 255},
}


CreatorEngine.cameraPresets = {
    init = {1092.7169189453, 1071.3048095703, 11.254899978638, 1064.5090332031, 1166.5258789062, 10.145102500916, 0, 70},
    zoomPlate = {1092.3531494141, 1071.8214111328, 11.479717254639, 1093.7769775391, 1171.8103027344, 11.050448417664, 0, 70},
    fullBody = {1093.5181884766, 1070.6384277344, 10.152251243591, 1059.7956542969, 1161.1890869141, 35.908004760742, 0, 70},
    shoes = {1093.2214355469, 1072.3890380859, 10.448493003845, 1036.0819091797, 1151.1932373047, -12.46390247345, 0, 70},
    legs = {1093.2214355469, 1072.3890380859, 10.448493003845, 1037.4291992188, 1155.0620117188, 17.687395095825, 0, 70},
    torso = {1093.240234375, 1072.5665283203, 11.172414779663, 1029.1149902344, 1149.2962646484, 10.470930099487, 0, 70},
    head = {1092.8114013672, 1072.9001464844, 11.430898666382, 1040.2386474609, 1157.2764892578, 22.235744476318, 0, 70}
}

addCommandHandler('pos', function() 
    local copy = table.concat({getCameraMatrix()}, ', ')
    
    setClipboard(copy)
end)


CreatorEngine.availableClothes = {
    ["feminine"] = {
        head =  {"head"},
        torso = {"tshirt_1", "tshirt_2", "tshirt_3", "tshirt_4", "tshirt_5", "tshirt_6", "tshirt_7", "tshirt_8", "tshirt_9", "tshirt_10"},
        legs =  {"pants_1", "pants_2", "pants_3", "pants_4", "pants_5", "pants_6", "pants_7", "pants_8", "pants_9"},
        shoes = {"feet_1", "feet_2", "feet_3", "feet_4", "feet_5", "feet_6", "feet_7", "feet_8", "feet_9"}
    },
    ["masculine"] = {
        head =  {"head"},
        torso = {"tshirt_1", "tshirt_2", "tshirt_3", "tshirt_4", "tshirt_5", "tshirt_6", "tshirt_7", "tshirt_8", "tshirt_9", "tshirt_10"},
        legs =  {"pants_1", "pants_2", "pants_3", "pants_4", "pants_5", "pants_6", "pants_7", "pants_8"},
        shoes = {"feet_1", "feet_2", "feet_3", "feet_4", "feet_5", "feet_6", "feet_7", "feet_8"}
    }
}

CreatorEngine.defaultClothes = {
    ["masculine"] = {
        {
            type = "head",
            index = 1
        },
        {
            type = "eye",
            index = 1
        },
        {
            type = "torso",
            index = 1
        },
        {
            type = "torso_2",
            index = 1
        },
        {
            type = "torso_3",
            index = 1
        },
        {
            type = "shoulder_l",
            index = 1
        },
        {
            type = "shoulder_r",
            index = 1
        },
        {
            type = "arm_l",
            index = 1
        },
        {
            type = "arm_l",
            index = 1
        },
        {
            type = "arm_r",
            index = 1
        },
        {
            type = "hand_l",
            index = 1
        },
        {
            type = "hand_r",
            index = 1
        },
        {
            type = "tight_l",
            index = 1
        },
        {
            type = "tight_r",
            index = 1
        },
        {
            type = "leg_l",
            index = 1
        },
        {
            type = "leg_r",
            index = 1
        },
        {
            type = "calf_l",
            index = 1
        },
        {
            type = "calf_r",
            index = 1
        },
        {
            type = "feet_body_l",
            index = 1
        },
        {
            type = "feet_body_r",
            index = 1
        },
        {
            type = "pants_1",
            index = 1
        },      
    },
    ["feminine"] = {
        {
            type = "head",
            index = 1
        },
        {
            type = "eye",
            index = 1
        },
        {
            type = "torso",
            index = 1
        },
        {
            type = "torso_2",
            index = 1
        },
        {
            type = "torso_3",
            index = 1
        },
        {
            type = "shoulder_l",
            index = 1
        },
        {
            type = "shoulder_r",
            index = 1
        },
        {
            type = "arm_l",
            index = 1
        },
        {
            type = "arm_l",
            index = 1
        },
        {
            type = "arm_r",
            index = 1
        },
        {
            type = "hand_l",
            index = 1
        },
        {
            type = "hand_r",
            index = 1
        },
        {
            type = "tight_l",
            index = 1
        },
        {
            type = "tight_r",
            index = 1
        },
        {
            type = "leg_l",
            index = 1
        },
        {
            type = "leg_r",
            index = 1
        },
        {
            type = "calf_l",
            index = 1
        },
        {
            type = "calf_r",
            index = 1
        },
        {
            type = "feet_body_l",
            index = 1
        },
        {
            type = "feet_body_r",
            index = 1
        },
        {
            type = "tshirt_1",
            index = 1
        },
        {
            type = "pants_1",
            index = 1
        },
    }
}


function CreatorEngine:start (id)
    setWeather(0);
    setTime(12, 0);

    imports.webui:startUp()

    self.plate = createObject(1338, 0,0,0);

    setElementDimension(self.plate, getElementDimension(localPlayer));
    setElementCollisionsEnabled(self.plate, false);

    self.showUI = true;

    self.webId = imports.webui:createWebWindow(0, 0, scw, sch, "http://mta/pixel_lobby/assets/creator/index.html", true);
    self.plateRT = dxCreateRenderTarget(respo(512), respo(256));
    self.plateShader = imports.assets:useCreateShader("tex_simple_replace", 0, 0, false, 'object');


    CreatorEngine:createMainPed ();
    imports.pAttach:attach(self.plate, self.mainNPC, 34, 0.1, 0.25, -0.01, 0, 180, 100.8);

    self.id = id;
    
    self:cameraSwitcher("init", "zoomPlate", 10000);

    self.isRendering = true; 

    self:redraw ({ firstName = "", lastName = ""});

    engineApplyShaderToWorldTexture(self.plateShader, "script_rt_id_text_02", self.plate);
    dxSetShaderValue (self.plateShader, "gTexture", self.plateRT);

    addEventHandler("onClientRender", root, CreatorEngine.render);

    if (isDiscordRichPresenceConnected()) then 
        setDiscordRichPresenceDetails("No Lobby");
        setDiscordRichPresenceState("Criando um novo personagem..")
    end

    self.helplist = imports.widgets:createHelplist("character_helplist", {
        list = {
            {key = imports.locales:getString("pixel_lobby:creator_helplist_mouse_keyname"), msg = imports.locales:getString("pixel_lobby:creator_helplist_mouse_msg")},
            {key = imports.locales:getString("pixel_lobby:creator_helplist_arrows_keyname"), msg = imports.locales:getString("pixel_lobby:creator_helplist_arrows_msg")},
            {key = imports.locales:getString("pixel_lobby:creator_helplist_spacebar_keyname"), msg = imports.locales:getString("pixel_lobby:creator_helplist_spacebar_msg")},
            {key = imports.locales:getString("pixel_lobby:creator_helplist_backspace_keyname"), msg = imports.locales:getString("pixel_lobby:creator_helplist_backspace_msg")},
        }
    });

    self.fade = 0;
    imports.ui:toggleCursor(true);
end


function CreatorEngine:createMainPed () 
    self.mainNPC = createPed(CreatorEngine.availableParents[gender][0], 1092.33521, 1073.68738, 10.83594, 180);

    setElementPosition(localPlayer, -180.89215, -799.56238, 30.45908)

    setElementDimension(self.mainNPC, 777);
    setElementRotation(self.mainNPC, 0,0, 180);
    -- self:setPedAnimation ("lobby", "sign", -1, true);

    imports.assets:playCustomAnimation (self.mainNPC, "cutscenes", "sign", -1, true);

    for k,v in ipairs(self.defaultClothes[gender]) do 
        imports.characters:setPlayerClothe(self.mainNPC, gender, v.type, v.index);
    end
end


function CreatorEngine:redraw(data)
    dxSetRenderTarget(self.plateRT);

    dxDrawImage(0, 0, respo(512), respo(256), "assets/plate/bg.png", 0, 0, 0, tocolor(255, 255, 255))
    
    local fullName = "N/A"
    if data.firstName and data.firstName ~= "" then
        fullName = data.firstName
        if data.lastName and data.lastName ~= "" then
            fullName = fullName .. " " .. data.lastName
        end
    end

    dxDrawText(fullName, 0, 10, respo(512), respo(256), tocolor(255, 255, 255), 1.0, fonts.roboto, "center", "top")
    dxDrawText(self.id, 0, -10, respo(512), respo(256), tocolor(73, 73, 73), 1.0, fonts.roboto30, "center", "center")
    
    dxSetRenderTarget()
end




function CreatorEngine:resetPosition() 
    setElementPosition(self.mainNPC, 1092.33521, 1073.68738, 10.83594)
end

function CreatorEngine:switchNPCParent (index)
    index = tonumber(index);

    local parent = self.availableParents[gender][index];

    if (parent) then 
        setElementModel(self.mainNPC, parent);

        return ture;
    end

    return false;
end


function CreatorEngine:switchNPCColor (index) 
    index = tonumber(index);

    local color = self.skinColors[index];
    
    if (color) then   
        local r,g,b = unpack(color);


        for _, bodyPart in ipairs(self.defaultClothes[gender]) do 
            if (not bodyPart.skipColor) then 
                imports.characters:setPlayerClothecolor(self.mainNPC, bodyPart.type, { r/255, g/255, b/255, 1});
            end
        end
    end
end



function CreatorEngine:cameraSwitcher (startName, endName, time) 
    local start = self.cameraPresets[startName];
    local endPos = self.cameraPresets[endName];


    if (not start or not endPos) then return false end

    self.activeCamera = endName;
    smoothMoveCamera(start[1], start[2], start[3], start[4], start[5], start[6], endPos[1], endPos[2], endPos[3], endPos[4], endPos[5], endPos[6], time);
end


function CreatorEngine:bodySelector ()
    if (self.plate) then 
        destroyElement(self.plate);
        setPedAnimation(self.mainNPC, false);

        imports.assets:stopCustomAnimation(self.mainNPC);
    end


    self:cameraSwitcher(self.activeCamera, "fullBody", 1500);
    self.selectorUI = SelectorComponent(self.mainNPC);
    
    self.selectorUI:setIsRendering (true);


    self:resetPosition() ;
    -- self:setPedAnimation ("creator.gta5", "postura", -1, true);

    if (not isEventHandlerAdded("onClientKey", root, CreatorEngine.onKey)) then 
        addEventHandler("onClientKey", root, CreatorEngine.onKey); 
    end
end

function CreatorEngine:sendCharacterEvent (event, data, force)
    if (not self.webId) then return false end
    local data = { event = event, data = data }

    if (force) then 
        imports.webui:executeJavascriptWithoutEvent(self.webId, "nuiCallFunction('"..toJSON(data).."')");
    else
        imports.webui:executeJavascript(self.webId, "nuiCallFunction('"..toJSON(data).."')");
    end
end

-- function CreatorEngine:setPedAnimation (block, anim, time, loop)
--     setPedAnimation(self.mainNPC, block,  anim, time, loop);
-- end



function CreatorEngine:showClothesSelector ()
    self.selectorUI:setIsRendering (false);
end



function CreatorEngine.render () 
    local self = CreatorEngine;

    if (self.isRendering) then 
        self.fade = math.min(self.fade + 5, 255);
    else
        self.fade = math.max(self.fade - 1, 0);
    end


    dxDrawImage(0,0, scw, sch, imports.webui:getBrowser(self.webId), 0,0,0,tocolor(255,255,255,self.fade));

    if (self.selectorUI) then 
        self.selectorUI:render()
    end

    imports.widgets:renderHelplist(self.helplist, self.fade);
end

function CreatorEngine.onKey(button, press)
    local self = CreatorEngine;

    if (self.selectorUI.isRendering) then 
        self.selectorUI:onClientKey(button, press)    
    end


    if (button == "space" and press) then
        CreatorEngine:showClothesSelector ();
        self:cameraSwitcher(self.activeCamera, self.selectorUI.bodyParts[self.selectorUI.activeIndex].camera, 2000);

        local clothes = {}
        local workAt = self.availableClothes[gender][self.activeCamera];

        for _,v in pairs(workAt) do 
            local clothe = imports.characters:getConfig(gender, v);

            for clotheIndex, clothe in ipairs(clothe.textures) do
                table.insert(clothes, { id = clotheIndex, type = v, icon = clothe.icon, name = clothe.name })
            end
        end

        if (self.activeCamera == "torso") then 
            imports.assets:playCustomAnimation (self.mainNPC, "clothing_shirt", "try_shirt_neutral", -1, true);

        elseif (self.activeCamera == "shoes") then
            imports.assets:playCustomAnimation (self.mainNPC, "clothing_shoes", "try_shoes_neutral", -1, true);
        end


        self:sendCharacterEvent("showAvailableClothes", {
            activeCamera = self.activeCamera,
            clothes = clothes;
        }, true);

    elseif (button == "backspace" and press) then
        setTimer(function () 
            CreatorEngine:bodySelector ()
        end, 2000, 1);

        self:sendCharacterEvent("bodySelector", true, true);
        self:cameraSwitcher(self.activeCamera, "fullBody", 2000)
    end
end


function CreatorEngine:setBodyClothe(clothe) 
    clothe = fromJSON(clothe)

    imports.characters:setPlayerClothe(self.mainNPC, gender, clothe.type, clothe.id);
end

function CreatorEngine:exitAndCreate (data) 
    data = fromJSON(data)

    fadeCamera(false, 1)

    setTimer(function () 
        removeEventHandler("onClientRender", root, CreatorEngine.render);
        removeEventHandler("onClientKey", root, CreatorEngine.onKey); 
    end, 1000, 1)
    
    setTimer(function () 
        network:emit("lobby:onClientExitCreator", true, false, localPlayer, {
            id = self.id,
            firstName = data.firstName,
            lastName = data.lastName,
            gender = gender,
            model = getElementModel(self.mainNPC),
            clothes = getElementData(self.mainNPC, "clothes"),
        });

        self:stop();
    end, 2500, 1)
end


function CreatorEngine:onError(data) 
    data = fromJSON(data);

    if (data.stage == 0 and data.errmsg == "pixel_lobby:larger_age") then 
        return imports.notify:showInfobox("info", imports.locales:getString("pixel_lobby:creator_toast_title"), imports.locales:getString("pixel_lobby:creator_toast_msg1"))
    elseif (data.stage == 0 and data.errmsg == "pixel_lobby:empty_fields") then
        return imports.notify:showInfobox("info", imports.locales:getString("pixel_lobby:creator_toast_title"), imports.locales:getString("pixel_lobby:creator_toast_msg2"))
    end
end

function CreatorEngine:stop ()
    if (self.plate) then 
        destroyElement(self.plate);
    end
    
    imports.characters:destroyPlayerClothes(self.mainNPC);
    imports.webui:destroyWebWindow(self.webId);


    destroyElement(self.plateShader);
    destroyElement(self.plateRT);
    destroyElement(self.mainNPC);
end


function CreatorEngine:changeGender (data)
    if (data) then 
        gender = data;
          
        
        imports.characters:destroyPlayerClothes(self.mainNPC);

        destroyElement(self.mainNPC);
        CreatorEngine:createMainPed ();
    end
end