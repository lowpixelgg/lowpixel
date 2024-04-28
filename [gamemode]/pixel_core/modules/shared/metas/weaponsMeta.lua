Metas.weapons = {
    -- [22] = {
    --     sound = "glock",
    --     sound_far = "glock_far",
    --     maxInterval = 250,
    --     far = {
    --         [50] = 0.7,
    --         [70] = 0.7,
    --         [80] = 0.9,
    --         [90] = 0.8,
    --         [100] = 0.7,
    --         [150] = 0.6,
    --         [200] = 0.5,
    --         [250] = 0.9,
    --         [300] = 0.9,
    --         [350] = 0.9
    --     },
    --     sequence = {
    --         {
    --             range = 7,
    --             y = { type = "random", min = 3, max = 5 }
    --         }
    --     }
    -- },
    [34] = {
        model_id = 358,
        sound = "glock",
        sound_far = "glock_far",
        maxInterval = 250,
        dff = 'cuntgun',
        txd = 'cuntgun',
        skins_folder = 'cuntgun',
        ammoForClip = 10,
        skins = {
            ['default'] = false,
        },
        far = {
            [50] = 0.7,
            [70] = 0.7,
            [80] = 0.9,
            [90] = 0.8,
            [100] = 0.7,
            [150] = 0.6,
            [200] = 0.5,
            [250] = 0.9,
            [300] = 0.9,
            [350] = 0.9
        },
        sequence = {
            {
                range = 7,
                y = { type = "random", min = 3, max = 5 }
            }
        }
    },
    -- [23] = {
    --     sound = "usp",
    --     sound_far = "usp_far",
    --     maxInterval = 250,
    --     far = {
    --         [50] = 0.7,
    --         [70] = 0.7,
    --         [80] = 0.9,
    --         [90] = 0.8,
    --         [100] = 0.7,
    --         [150] = 0.6,
    --         [200] = 0.5,
    --         [250] = 0.9,
    --         [300] = 0.9,
    --         [350] = 0.9
    --     },
    --     sequence = {
    --         {
    --             range = 7,
    --             y = { type = "random", min = 3, max = 5 }
    --         }
    --     }
    -- },
    -- [29] = {
    --     sound = "mp5",
    --     sound_far = "mp5_far",
    --     maxInterval = 250,
    --     far = {
    --         [50] = 0.7,
    --         [70] = 0.7,
    --         [80] = 0.9,
    --         [90] = 0.8,
    --         [100] = 0.7,
    --         [150] = 0.6,
    --         [200] = 0.5,
    --         [250] = 0.9,
    --         [300] = 0.9,
    --         [350] = 0.9
    --     },
    --     sequence = {
    --         {
    --             range = 7,
    --             y = { type = "random", min = 3, max = 5 }
    --         },
    --         {
    --             range = 14,
    --             x = { type = "random", min = 0, max = 5 },
    --             y = { type = "random", min = 3, max = 5 }
    --         },
    --         {
    --             range = 30,
    --             x = { type = "random", min = -5, max = 0 },
    --             y = { type = "static", value = 2 }
    --         }
    --     }
    -- },
    -- [30] = {
    --     sound = "ak",
    --     sound_far = "ak_far",
    --     maxInterval = 250,
    --     far = {
    --         [50] = 0.7,
    --         [70] = 0.7,
    --         [80] = 0.9,
    --         [90] = 0.8,
    --         [100] = 0.7,
    --         [150] = 0.6,
    --         [200] = 0.5,
    --         [250] = 0.9,
    --         [300] = 0.9,
    --         [350] = 0.9
    --     },
    --     sequence = {
    --         {
    --             range = 10,
    --             y = { type = "random", min = 6, max = 8 }
    --         },
    --         {
    --             range = 15,
    --             x = { type = "random", min = 0, max = 5 },
    --             y = { type = "random", min = 6, max = 8 }
    --         },
    --         {
    --             range = 25,
    --             x = { type = "random", min = -3, max = -2 },
    --             y = { type = "random", min = 6, max = 8 }
    --         },
    --         {
    --             range = 50,
    --             x = { type = "random", min = -15, max = 15 },
    --             y = { type = "random", min = 6, max = 8 }
    --         }
    --     }
    -- },
    -- [31] = {
    --     model_id = 356,
    --     dff = 'srl15',
    --     txd = 'srl15',
    --     sound = "m4",
    --     sound_far = "m4_far",
    --     maxInterval = 250,
    --     skins_folder = 'srl15',
    --     skins = {
    --         ['default'] = true,
    --         ['red'] = true,
    --         ['purple'] = true
    --     },
    --     textures = {
    --         'lower_receiver_d', 'mag_d', 'coronha', 'upper_receiver_d'
    --     },
    --     far = {
    --         [50] = 0.7,
    --         [70] = 0.7,
    --         [80] = 0.9,
    --         [90] = 0.8,
    --         [100] = 0.7,
    --         [150] = 0.6,
    --         [200] = 0.5,
    --         [250] = 0.9,
    --         [300] = 0.9,
    --         [350] = 0.9
    --     },
    --     sequence = {
    --         {
    --             range = 10,
    --             y = { type = "random", min = 6, max = 8 }
    --         },
    --         {
    --             range = 15,
    --             x = { type = "random", min = 0, max = 5 },
    --             y = { type = "random", min = 6, max = 8 }
    --         },
    --         {
    --             range = 25,
    --             x = { type = "random", min = -3, max = -2 },
    --             y = { type = "random", min = 6, max = 8 }
    --         },
    --         {
    --             range = 50,
    --             x = { type = "random", min = -15, max = 15 },
    --             y = { type = "random", min = 6, max = 8 }
    --         }
    --     }
    -- }
};