-- cutscenes['sport'] = {
--     music = 'airplanemode.mp3',
--     music_start = 11,
--     actions = {
--         {'fadeout', { duration = 1000 }},
--         {'sleep', { duration = 1100 }},

--         {'multiple', {
--             {'screen_source'},

--             {'cam_set', { position = Vector3(1567.977, -1514.674, 15.293), look = Vector3(1588.875, -1533.625, 13.587) }},
--             {'cam_move', { position = Vector3(1575.644, -1544.57, 16.519), look = Vector3(1587.37, -1538.404, 13.589), duration = 9000 }},

--             {'element_position', { name = 'main', type = 'vehicles', position = Vector3(1532.91, -1492.67, 13.561) }},
--             {'element_rotation', { name = 'main', type = 'vehicles', rotation = Vector3(-0, 0, 309.687) }},

--             {'vehicle_light', { name = 'main', state = 2 }},

--             {'ped_spawn', { id = 7, name = 'main', position = Vector3(0, 0, 0), rotation = 0 }},
--             {'ped_wapixel_vehicle', { name = 'main', vehicle = 'main' }},

--             {'element_alpha', { name = 'main', type = 'peds', alpha = 0 }},

--             {'ped_control', { name = 'main', control = 'accelerate', state = true }},
--             {'ped_control', { name = 'main', control = 'brake_reverse', state = true }},
--             {'ped_control', { name = 'main', control = 'vehicle_left', state = true }}
--         }},

--         {'fadein', { duration = 900 }},

--         {'sleep', { duration = 5000 }},
--         {'fadeout', { duration = 1000 }},

--         -- Lateral Carro
--         {'sleep', { duration = 900 }},
--         {'multiple', {
--             {'cam_set', { position = Vector3(1533.61, -1499.462, 14.814), look = 'main', look_type = 'vehicles' }},
--             {'cam_move', { position = Vector3(1541.076, -1493.37, 13.712), look = 'main', look_type = 'vehicles', duration = 7000 }},
--             {'blackbar_switch', { duration = 1000 }},
--             {'fadein', { duration = 100 }}
--         }},

--         -- Traseira Carro
--         {'sleep', { duration = 3500 }},
--         {'multiple', {
--             {'cam_set', { position = Vector3(1528.472, -1493.535, 13.300), look = 'main', look_type = 'vehicles' }},
--             {'cam_move', { position = Vector3(1531.322, -1496.539, 13.300), look = 'main', look_type = 'vehicles', duration = 10000 }}
--         }},

--         -- {'element_move', { name = 'main', type = 'vehicles', position = Matrix(1563.495, -1488.708, 13.558, -0, 0, 276.484), duration = 3000 }},

--         -- Frente Carro
--         {'sleep', { duration = 3400 }},
--         {'multiple', {
--             {'cam_set', { position = Vector3(1540.523, -1488.577, 13.553), look = 'main', look_type = 'vehicles' }},
--             {'cam_move', { position = Vector3(1536.61, -1490.364, 15.555), look = 'main', look_type = 'vehicles', duration = 11000 }}
--         }},
        
--         {'sleep', { duration = 3000 }},
--         {'blackbar_switch', { duration = 1000 }},
--         {'fadeout', { duration = 1000 }}
--     }
-- };



cutscenes['sport'] = {
    music = 'airplanemode.mp3',
    music_start = 11,
    actions = {
        {'fadeout', { duration = 1000 }},
        {'sleep', { duration = 1100 }},

        
        {'fadein', { duration = 900 }},

        
        -- Traseira Carro
        {'sleep', { duration = 3500 }},
        {'multiple', {
            {'cam_set', { position = Vector3(-1809.1640625,-1233.9166259766,1.8527510166168), look = Vector3(-1022.1698608398,-652.37707519531,157.14837646484), look_type = 'vehicles' }},
            {'cam_move', { position = Vector3(1693.4125976562,-1301.0659179688,1.3999602794647), look = Vector3(-1489.5959472656,-183.62634277344,154.97378540039), look_type = 'vehicles', duration = 10000 }}
        }},
    }
};
