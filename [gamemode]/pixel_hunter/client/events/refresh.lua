network:fetch("pixel_hunter:setAnimalWalkTo", true):on(function (...) ClientAnimals:setAnimalWalkTo (...) end);
network:fetch("pixel_hunter:onPlayerKillAnimal", true):on(function (...) ClientAnimals:onPlayerKill (...) end);
network:fetch("pixel_hunter:onServerStartCollect", true):on(function (...) ClientAnimals:onServerStartCollect (...) end);
network:fetch("pixel_hunter:onPlayerCollect", true):on(function (...) ClientAnimals:onPlayerCollect(...) end);
network:fetch("pixel_hunter:onServerClean", true):on(function (...) ClientAnimals:onServerClean(...) end);

addEventHandler("onClientResourceStart", resourceRoot, function () 
    ClientAnimals:doPulse ();
end)

addEventHandler("onClientElementStreamIn", root, function ()
    local animalID = getElementData(source, "hunters:animal_id");
    
    if (getElementType(source) == "ped" and getElementData(source, "hunters:animal_id")) then 
        for _, anim in pairs( list ) do
            engineReplaceAnimation( source, "ped", anim, Animations[getElementData(source, "hunters:animal_type")].blockName, anim );
        end
    end
end);


addEventHandler("onClientElementStreamOut", root, function ()
    local animalID = getElementData(source, "hunters:animal_id");

    if (getElementType(source) == "ped" and animalID) then
        ClientAnimals:destroy(animalID)
    end
end);


-- [[ Debug Code --]]
local data = {}
network:fetch("pixel_hunter:setAnimalFactors", true):on(function (serverData)
    data[serverData.ped] = serverData;
end);


local state = false;
bindKey("F7", "down", function ()
    state = not state;
end)

addEventHandler("onClientRender", root, function () 
    if not state then return false end

    for _, data in pairs(data) do 
        local x,y,z = getElementPosition(data.ped);
        local sx, sy = getScreenFromWorldPosition(x,y,z);


        if (sx and sy) then 
            dxDrawText(string.format("isAngry: %s,\nisHungry: %s,\nisScared: %s,\nisRestless: %s", data.factors.isAngry, data.factors.isHungry, data.factors.isScared, data.factors.isRestless), sx, sy, 100, 100, tocolor(255,255,0), 1.1, "default-bold")
        end
    end
end);


-- Função para criar a GUI
local visible = false 
local janela

function criarGUI()
    if visible then 
        destroyElement(janela)
        visible = false 
    else
        visible = true 
        -- Criar a janela principal
        janela = guiCreateWindow(200, 200, 400, 300, "Exemplo de GUI MTA:SA", false)

        -- Criar a área de texto
        areaDeTexto = guiCreateMemo(10, 30, 380, 200, "", false, janela)

        -- Criar o botão
        botaoCopiar = guiCreateButton(150, 240, 100, 30, "Copiar Tabela", false, janela)
        
        -- Adicionar um manipulador de eventos para o botão
        addEventHandler("onClientGUIClick", botaoCopiar, copiarTabela, false)
    end
end
addCommandHandler("copy", criarGUI)


local positions = {};
addCommandHandler("limpar", function()
    positions = {}
    outputChatBox('posicao limpa')
end)


bindKey("z", "down", function () 
    local x,y,z = getElementPosition(localPlayer);
    table.insert(positions, {
        x = x,
        y = y,
        z = z-1,
    })

    outputChatBox('posicao copiada')
end)

function copiarTabela()

    local conteudoTabela = tableToString(positions)

    iprint(conteudoTabela)
    guiSetText(areaDeTexto, conteudoTabela)
end

function tableToString(tbl)
    local result = ""
    for _, subTable in ipairs(tbl) do
        result = result .. "{"
        for key, value in pairs(subTable) do
            result = result .. key .. " = " .. tostring(value) .. ", "
        end
        result = result:sub(1, -3) .. "},\n" -- Adicionar quebra de linha e vírgula
    end
    return result
end