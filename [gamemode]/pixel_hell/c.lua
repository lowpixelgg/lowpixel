setCameraTarget(localPlayer);

-- Função para criar a animação da câmera "rolando" para baixo
function animateCamera()
    local start = getTickCount()
    local camX, camY, camZ, camLookX, camLookY, camLookZ = getCameraMatrix()

    local screenWidth, screenHeight = guiGetScreenSize() -- Obtém as dimensões da tela

    local function render()
        local now = getTickCount()
        local endTime = start + 20000
        local elapsedTime = now - start
        local duration = endTime - start
        local progress = elapsedTime / duration

        local cam, roll, _ = interpolateBetween(camZ, 0, 0, camZ-5, 360, 0, progress, "SineCurve")

        setCameraMatrix(camX, camY, cam, camLookX, camLookY, cam, roll, getCameraFieldOfView("player"))

        if (math.floor(roll) == 180) then 
            setElementDimension(localPlayer, 777)
            setWeather(160)
            setTime(0,0)
            setSkyGradient( 10, 0, 0, 10, 0, 0 )
        end
        
        if progress >= 1 then
            setCameraTarget(localPlayer)
            removeEventHandler("onClientPreRender", root, render)
        end
    end

    addEventHandler("onClientPreRender", root, render)
end




-- Executar a animação quando o jogador pressiona uma tecla, por exemplo, 'B'
bindKey("b", "down", function()
    animateCamera()
end)

