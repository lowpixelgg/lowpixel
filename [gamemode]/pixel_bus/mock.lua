local pontos = {
    {x = -163.18687, y = -827.25195, z = 31.07379},
    {x = -171.71928, y = -851.21167, z = 29.92042},
    {x = -180.65550, y = -874.71558, z = 29.34595},
    {x = -187.00092, y = -891.87775, z = 29.33735},
    {x = -164.80171, y = -899.85394, z = 29.34595},
}

local ped = createPed(2, pontos[1].x, pontos[1].y, pontos[1].z)
local veh = createVehicle(411, pontos[1].x, pontos[1].y, pontos[1].z, 0, 0, 158)
warpPedIntoVehicle(ped, veh)

local pontoAtual = 1

function calcularAngulo(destino)
    local x, y = getElementPosition(ped)
    local anguloDestino = math.deg(math.atan2(destino.y - y, destino.x - x))
    return anguloDestino
end

function dirigirAoPonto()
    local destino = pontos[pontoAtual]
    local anguloDestino = calcularAngulo(destino)
    local anguloAtual = getVehicleRotation(veh)

    local diferencaAngulo = anguloDestino - anguloAtual
    local direcaoRoda = diferencaAngulo / 180 -- Normalizar para um intervalo entre -1 e 1

    setPedControlState(ped, 'vehicle_left', direcaoRoda < 0)
    setPedControlState(ped, 'vehicle_right', direcaoRoda > 0)
    setPedControlState(ped, 'accelerate', true)

    if getDistanceBetweenPoints2D(ped, destino.x, destino.y) < 5 then
        -- Chegou ao ponto, passa para o próximo
        pontoAtual = pontoAtual + 1
        if pontoAtual > #pontos then
            pontoAtual = 1
        end
    end
end

addEventHandler('onClientRender', root, dirigirAoPonto)
