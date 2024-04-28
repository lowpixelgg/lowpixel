local fem_torso = {
    {directory = 'assets/genders/fem/textures/body/body/ara/torso.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/bla/torso.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/chi/torso.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/lat/torso.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/pak/torso.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/whi/torso.png', color = {1, 1, 1, 1}},
}

local fem_feet = {
    {directory = 'assets/genders/fem/textures/body/body/ara/feet.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/bla/feet.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/chi/feet.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/lat/feet.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/pak/feet.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/whi/feet.png', color = {1, 1, 1, 1}},
}

local fem_legs = {
    {directory = 'assets/genders/fem/textures/body/body/ara/legs.png', name = "Head", icon = "icon_unknown", color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/bla/legs.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/chi/legs.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/lat/legs.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/pak/legs.png', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/fem/textures/body/body/whi/legs.png', color = {1, 1, 1, 1}},
}



local male_torso = {
    {directory = 'assets/genders/male/textures/body/ara/torso.jpeg', name = "Head", icon = "icon_unknown", color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/bla/torso.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/chi/torso.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/lat/torso.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/pak/torso.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/whi/torso.jpeg', color = {1, 1, 1, 1}},
}

local male_feet = {
    {directory = 'assets/genders/male/textures/body/ara/feet.jpeg', name = "Head", icon = "icon_unknown", color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/bla/feet.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/chi/feet.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/lat/feet.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/pak/feet.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/whi/feet.jpeg', color = {1, 1, 1, 1}},
}

local male_legs = {
    {directory = 'assets/genders/male/textures/body/ara/legs.jpeg', name = "Head", icon = "icon_unknown", color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/bla/legs.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/chi/legs.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/lat/legs.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/pak/legs.jpeg', color = {1, 1, 1, 1}},
    -- {directory = 'assets/genders/male/textures/body/whi/legs.jpeg', color = {1, 1, 1, 1}},
}

local Config = {
    masculine = {
        head = {
            body = {},
            bodyPartName = 'body_head_1',
            attachedTo = nil,
            textures = {
                {directory = 'assets/genders/male/textures/faces/ara/1.png', name = "Head", icon = "icon_unknown", color = {1, 1, 1, 1}},
            }
        },
        
        eye = {
            body = {},
            bodyPartName = 'body_eyes_1',
            attachedTo = nil,
            textures = {
             {directory = 'assets/genders/fem/textures/body/faces/ara/1.png', color = {1, 1, 1, 1}},
            }
        },


        torso = {
            body = {},
            bodyPartName = 'body_torso_1',
            attachedTo = nil,
            textures = male_torso
        },


        torso_2 = {
            body = {},
            bodyPartName = 'body_torso_2',
            attachedTo = nil,
            textures = male_torso
        },


        torso_3 = {
            body = {},
            bodyPartName = 'body_torso_3',
            attachedTo = nil,
            textures = male_torso
        },

        shoulder_l = {
            body = {},
            bodyPartName = 'body_shoulder_1',
            attachedTo = nil,
            textures = male_torso
        },

        shoulder_r = {
            body = {},
            bodyPartName = 'body_shoulder_2',
            attachedTo = nil,
            textures = male_torso
        },

        arm_l = {
            body = {},
            bodyPartName = 'body_arm_1',
            attachedTo = nil,
            textures = male_torso
        },

        arm_r = {
            body = {},
            bodyPartName = 'body_arm_2',
            attachedTo = nil,
            textures = male_torso
        },

        hand_l = {
            body = {},
            bodyPartName = 'body_hand_1',
            attachedTo = nil,
            textures = male_torso
        },

        hand_r = {
            body = {},
            bodyPartName = 'body_hand_2',
            attachedTo = nil,
            textures = male_torso
        },


        tight_l = {
            body = {},
            bodyPartName = 'body_tight_1',
            attachedTo = nil,
            textures = male_torso
        },
        
        tight_r = {
            body = {},
            bodyPartName = 'body_tight_2',
            attachedTo = nil,
            textures = male_torso
        },


        leg_l = {
            body = {},
            bodyPartName = 'body_leg_1',
            attachedTo = nil,
            textures = male_legs
        },

        leg_r = {
            body = {},
            bodyPartName = 'body_leg_2',
            attachedTo = nil,
            textures = male_legs
        },


        calf_l = {
            body = {},
            bodyPartName = 'body_calf_1',
            attachedTo = nil,
            textures = male_legs
        },

        calf_r = {
            body = {},
            bodyPartName = 'body_calf_2',
            attachedTo = nil,
            textures = male_legs
        },


        feet_body_l = {
            body = {},
            bodyPartName = 'body_feet_1',
            attachedTo = nil,
            textures = male_feet
        },


        feet_body_r = {
            body = {},
            bodyPartName = 'body_feet_2',
            attachedTo = nil,
            textures = male_feet
        },

        tshirt_1 = {
            body = {'torso', 'torso_2', 'torso_3'},
            bodyPartName = 'male_tshirt_1',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_1/1.png", name = 'Regata', icon = "icon_male_tshirt_1", color = {1, 1, 1, 1}},
            }
        },

        tshirt_2 = {
            body = {'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r'},
            bodyPartName = 'male_tshirt_2',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_2/1.png", name = 'Camisa Curta', icon = "icon_male_tshirt_2", color = {1, 1, 1, 1}},
            }
        },

        tshirt_3 = {
            body = {'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r'},
            bodyPartName = 'male_tshirt_3',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_3/1.png", name = 'Polo', icon = "icon_male_tshirt_3", color = {1, 1, 1, 1}},
            }
        },

        tshirt_4 = {
            body = {'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r'},
            bodyPartName = 'male_tshirt_4',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_4/1.png", name = 'Camiseta Larga', icon = "icon_male_tshirt_4", color = {1, 1, 1, 1}},
            }
        },

        tshirt_5 = {
            body = {'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r', 'arm_l', 'arm_r'},
            bodyPartName = 'male_tshirt_5',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_5/1.png", name = 'Sueter', icon = "icon_male_tshirt_5", color = {1, 1, 1, 1}},
            }
        },

        tshirt_6 = {
            body = {'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r', 'arm_l', 'arm_r'},
            bodyPartName = 'male_tshirt_6',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_6/1.png", name = 'Moletom Canguru', icon = "icon_male_tshirt_6", color = {1, 1, 1, 1}},
            }
        },

        tshirt_7 = {
            body = {'torso', 'torso_2', 'torso_3'},
            bodyPartName = 'male_tshirt_7',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_7/1.png", name = 'Moletom Capuz', icon = "icon_male_tshirt_7", color = {1, 1, 1, 1}},
            }
        },

        tshirt_8 = {
            body = {'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r', 'arm_l', 'arm_r'},
            bodyPartName = 'male_tshirt_8',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_8/1.png", name = 'Social', icon = "icon_male_tshirt_8", color = {1, 1, 1, 1}},
            }
        },

        tshirt_9 = {
            body = {'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r', 'arm_l', 'arm_r'},
            bodyPartName = 'male_tshirt_9',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_9/1.png", name = 'SoMilitarcial', icon = "icon_male_tshirt_9", color = {1, 1, 1, 1}},
            }
        },

        tshirt_10 = {
            body = {'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r', 'arm_l', 'arm_r'},
            bodyPartName = 'male_tshirt_10',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_10/1.png", name = 'SoMilitarcial', icon = "icon_male_tshirt_10", color = {1, 1, 1, 1}},
            }
        },

        tshirt_11 = {
            body = {'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r', 'arm_l', 'arm_r'},
            bodyPartName = 'male_tshirt_11',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_11/1.png", name = 'SoMilitarcial', icon = "icon_male_tshirt_11", color = {1, 1, 1, 1}},
            }
        },

        tshirt_12 = {
            body = {'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r', 'arm_l', 'arm_r'},
            bodyPartName = 'male_tshirt_12',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/male/textures/male_tshirt_12/1.png", name = 'SoMilitarcial', icon = "icon_male_tshirt_1", color = {1, 1, 1, 1}},
            }
        },

        pants_1 = {
            body = {},
            bodyPartName = 'male_pants_1',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/male/textures/male_pants_1/1.png", name = 'Cueca', icon = "icon_male_pants_1", color = {1, 1, 1, 1}},
            }
        },

        pants_2 = {
            body = {'tight_l', 'tight_r'},
            bodyPartName = 'male_pants_2',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/male/textures/male_pants_2/1.png", name = 'Tectel', icon = "icon_male_pants_2", color = {1, 1, 1, 1}},
            }
        },

        pants_3 = {
            body = {'tight_l', 'tight_r'},
            bodyPartName = 'male_pants_3',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/male/textures/male_pants_3/1.png", name = 'Cargo', icon = "icon_male_pants_3", color = {1, 1, 1, 1}},
            }
        },

        pants_4 = {
            body = {'tight_l', 'tight_r', 'leg_l', 'leg_r'},
            bodyPartName = 'male_pants_4',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/male/textures/male_pants_4/1.png", name = 'Jeans', icon = "icon_male_pants_4", color = {1, 1, 1, 1}},
            }
        },

        pants_5 = {
            body = {'tight_l', 'tight_r', 'leg_l', 'leg_r', 'calf_l', 'calf_r'},
            bodyPartName = 'male_pants_5',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/male/textures/male_pants_5/1.png", name = 'Jeans larga', icon = "icon_male_pants_5", color = {1, 1, 1, 1}},
            }
        },

        pants_6 = {
            body = {'tight_l', 'tight_r', 'leg_l', 'leg_r', 'calf_l', 'calf_r'},
            bodyPartName = 'male_pants_6',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/male/textures/male_pants_6/1.png", name = 'Calça Larga', icon = "icon_male_pants_6", color = {1, 1, 1, 1}},
            }
        },

        pants_7 = {
            body = {'tight_l', 'tight_r'},
            bodyPartName = 'male_pants_7',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/male/textures/male_pants_7/1.png", name = 'Calça Cargo', icon = "icon_male_pants_7", color = {1, 1, 1, 1}},
            }
        },

        pants_8 = {
            body = {'tight_l', 'tight_r', 'leg_l', 'leg_r'},
            bodyPartName = 'male_pants_8',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/male/textures/male_pants_8/1.png", name = 'Calça Social', icon = "icon_male_pants_8", color = {1, 1, 1, 1}},
            }
        },

        feet_1 = {
            body = {},
            bodyPartName = 'male_feet_1',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/male/textures/male_feet_1/1.png", name = 'Chinelo', icon = "icon_male_feet_1", color = {1, 1, 1, 1}},
            }
        },

        feet_2 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'male_feet_2',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/male/textures/male_feet_2/1.png", name = 'Tenis Skatista', icon = "icon_male_feet_2", color = {1, 1, 1, 1}},
            }
        },

        feet_3 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'male_feet_3',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/male/textures/male_feet_3/1.png", name = 'Tenis Corrida', icon = "icon_male_feet_3", color = {1, 1, 1, 1}},
            }
        },

        feet_4 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'male_feet_4',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/male/textures/male_feet_4/1.png", name = 'AirForce', icon = "icon_male_feet_4", color = {1, 1, 1, 1}},
            }
        },

        feet_5 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'male_feet_5',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/male/textures/male_feet_5/1.png", name = 'AirMax', icon = "icon_male_feet_5", color = {1, 1, 1, 1}},
            }
        },

        feet_6 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'male_feet_6',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/male/textures/male_feet_6/1.png", name = 'AirJordan', icon = "icon_male_feet_6", color = {1, 1, 1, 1}},
            }
        },

        feet_7 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'male_feet_7',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/male/textures/male_feet_7/1.png", name = '12 Molas', icon = "icon_male_feet_7", color = {1, 1, 1, 1}},
            }
        },

        feet_8 = {
            body = {'feet_body_l', 'feet_body_r', 'calf_l', 'calf_r'},
            bodyPartName = 'male_feet_8',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/male/textures/male_feet_8/1.png", name = 'Bota Militar', icon = "icon_male_feet_8", color = {1, 1, 1, 1}},
            }
        },
    
        glove = {
            body = {'hand_r', 'hand_l'},
            bodyPartName = 'male_upper_1',
            attachedTo = "gloves",
            textures = {
                {directory = "assets/genders/male/textures/male_upper_1/1.png", name = 'Luva', icon = "icon_unknown", color = {1, 1, 1, 1}},
            }
        },
    },

    feminine = {
        head = {
            body = {},
            bodyPartName = 'body_head_1',
            attachedTo = nil,
            textures = {
             {directory = 'assets/genders/fem/textures/body/faces/ara/1.png', color = {1, 1, 1, 1}},
            }
        },

        eye = {
            body = {},
            bodyPartName = 'body_eyes_1',
            attachedTo = nil,
            textures = {
             {directory = 'assets/genders/fem/textures/body/faces/ara/1.png', color = {1, 1, 1, 1}},
            }
        },


        torso = {
            body = {},
            bodyPartName = 'body_torso_1',
            attachedTo = nil,
            textures = fem_torso
        },


        torso_2 = {
            body = {},
            bodyPartName = 'body_torso_2',
            attachedTo = nil,
            textures = fem_torso
        },


        torso_3 = {
            body = {},
            bodyPartName = 'body_torso_3',
            attachedTo = nil,
            textures = fem_torso
        },

        shoulder_l = {
            body = {},
            bodyPartName = 'body_shoulder_1',
            attachedTo = nil,
            textures = fem_torso
        },

        shoulder_r = {
            body = {},
            bodyPartName = 'body_shoulder_2',
            attachedTo = nil,
            textures = fem_torso
        },

        arm_l = {
            body = {},
            bodyPartName = 'body_arm_1',
            attachedTo = nil,
            textures = fem_torso
        },

        arm_r = {
            body = {},
            bodyPartName = 'body_arm_2',
            attachedTo = nil,
            textures = fem_torso
        },

        hand_l = {
            body = {},
            bodyPartName = 'body_hand_1',
            attachedTo = nil,
            textures = fem_torso
        },

        hand_r = {
            body = {},
            bodyPartName = 'body_hand_2',
            attachedTo = nil,
            textures = fem_torso
        },


        tight_l = {
            body = {},
            bodyPartName = 'body_tight_1',
            attachedTo = nil,
            textures = fem_torso
        },
        
        tight_r = {
            body = {},
            bodyPartName = 'body_tight_2',
            attachedTo = nil,
            textures = fem_torso
        },


        leg_l = {
            body = {},
            bodyPartName = 'body_leg_1',
            attachedTo = nil,
            textures = fem_legs
        },

        leg_r = {
            body = {},
            bodyPartName = 'body_leg_2',
            attachedTo = nil,
            textures = fem_legs
        },


        calf_l = {
            body = {},
            bodyPartName = 'body_calf_1',
            attachedTo = nil,
            textures = fem_legs
        },

        calf_r = {
            body = {},
            bodyPartName = 'body_calf_2',
            attachedTo = nil,
            textures = fem_legs
        },


        feet_body_l = {
            body = {},
            bodyPartName = 'body_feet_1',
            attachedTo = nil,
            textures = fem_feet
        },


        feet_body_r = {
            body = {},
            bodyPartName = 'body_feet_2',
            attachedTo = nil,
            textures = fem_feet
        },

        tshirt_1 = {
            body = {},
            bodyPartName = 'female_tshirt_1',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_1/1.png", name = 'Biquini', icon = "icon_female_tshirt_1", color = {1, 1, 1, 1}},
            }
        },

        tshirt_2 = {
            body = {},
            bodyPartName = 'female_tshirt_2',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_2/1.png", name = 'Sutiã', icon = "icon_female_tshirt_2", color = {1, 1, 1, 1}},
            }
        },


        tshirt_3 = {
            body = {'tshirt_2'},
            bodyPartName = 'female_tshirt_3',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_3/1.png",  name = 'Cropped Curto', icon = "icon_female_tshirt_3", color = {1, 1, 1, 1}},
            }
        },

        tshirt_4 = {
            body = {'tshirt_2', 'torso', 'shoulder_l', 'shoulder_r'},
            bodyPartName = 'female_tshirt_4',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_4/1.png",  name = 'Cropped', icon = "icon_female_tshirt_4", color = {1, 1, 1, 1}},
            }
        },


        tshirt_5 = {
            body = {'tshirt_2', 'torso', 'shoulder_l', 'shoulder_r'},
            bodyPartName = 'female_tshirt_5',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_5/1.png",  name = 'Cropped Jeans', icon = "icon_female_tshirt_5", color = {1, 1, 1, 1}},
            }
        },


        tshirt_6 = {
            body = {'tshirt_2'},
            bodyPartName = 'female_tshirt_6',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_6/1.png",  name = 'Cropped Laço', icon = "icon_female_tshirt_6", color = {1, 1, 1, 1}},
            }
        },


        tshirt_7 = {
            body = {'tshirt_2', 'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r'},
            bodyPartName = 'female_tshirt_7',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_7/1.png", name = 'Camiseta', icon = "icon_female_tshirt_7", color = {1, 1, 1, 1}},
            }
        },

        tshirt_8 = {
            body = {'tshirt_2', 'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r'},
            bodyPartName = 'female_tshirt_8',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_8/1.png",  name = 'Polo', name = 'Polo', icon = "icon_female_tshirt_8", color = {1, 1, 1, 1}},
            }
        },


        tshirt_9 = {
            body = {'tshirt_2', 'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r', 'arm_l', 'arm_r'},
            bodyPartName = 'female_tshirt_9',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_9/1.png", name = 'Moletom', icon = "icon_female_tshirt_9", color = {1, 1, 1, 1}},
            }
        },


        tshirt_10 = {
            body = {'tshirt_2', 'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r', 'arm_l', 'arm_r'},
            bodyPartName = 'female_tshirt_10',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_10/1.png", name = 'Moletom E.', icon = "icon_female_tshirt_10", color = {1, 1, 1, 1}},
            }
        },


        tshirt_11 = {
            body = {'tshirt_2', 'torso', 'torso_2', 'torso_3', 'shoulder_l', 'shoulder_r', 'arm_l', 'arm_r'},
            bodyPartName = 'female_tshirt_11',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_11/1.png", name = 'Moletom Can.',  icon = "icon_female_tshirt_11", color = {1, 1, 1, 1}},
            }
        },


        tshirt_12 = {
            body = {'tshirt_2'},
            bodyPartName = 'female_tshirt_12',
            attachedTo = "torso",
            textures = {
                {directory = "assets/genders/fem/textures/female_tshirt_12/1.png", name = 'Vestido', icon = "icon_female_tshirt_12", color = {1, 1, 1, 1}},
            }
        },


        pants_1 = {
            body = {},
            bodyPartName = 'female_pants_1',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/fem/textures/female_pants_1/1.png", name = 'Biquini', icon = "icon_female_pants_1", color = {1, 1, 1, 1}},
            }
        },

        pants_2 = {
            body = {},
            bodyPartName = 'female_pants_2',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/fem/textures/female_pants_2/1.png", name = 'Calcinha', icon = "icon_female_pants_2", color = {1, 1, 1, 1}},
            }
        },

        pants_3 = {
            body = {'pants_2', 'tight_l', 'tight_r'},
            bodyPartName = 'female_pants_3',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/fem/textures/female_pants_3/1.png", name = 'Short', icon = "icon_female_pants_3", color = {1, 1, 1, 1}},
            }
        },

        pants_4 = {
            body = {'pants_2', 'tight_l', 'tight_r', 'leg_l', 'leg_r'},
            bodyPartName = 'female_pants_4',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/fem/textures/female_pants_4/1.png", name = 'Calça Jeans', icon = "icon_female_pants_4", color = {1, 1, 1, 1}},
            }
        },


        pants_5 = {
            body = {'pants_2', 'tight_l', 'tight_r', 'leg_l', 'leg_r'},
            bodyPartName = 'female_pants_5',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/fem/textures/female_pants_5/1.png", name = 'Legging', icon = "icon_female_pants_5", color = {1, 1, 1, 1}},
            }
        },

        pants_6 = {
            body = {'pants_2', 'tight_l', 'tight_r', 'leg_l', 'leg_r', 'calf_l', 'calf_r'},
            bodyPartName = 'female_pants_6',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/fem/textures/female_pants_6/1.png", name = 'Social', icon = "icon_female_pants_6", color = {1, 1, 1, 1}},
            }
        },

        pants_7 = {
            body = {'pants_2', 'tight_l', 'tight_r', 'leg_l', 'leg_r', 'calf_l', 'calf_r'},
            bodyPartName = 'female_pants_8',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/fem/textures/female_pants_8/1.png", name = 'Calça Larga', icon = "icon_female_pants_8", color = {1, 1, 1, 1}},
            }
        },

        pants_8 = {
            body = {'pants_2', 'tight_l', 'tight_r', 'leg_l', 'leg_r'},
            bodyPartName = 'female_pants_9',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/fem/textures/female_pants_9/1.png", name = 'Cargo', icon = "icon_female_pants_9", color = {1, 1, 1, 1}},
            }
        },

        pants_9 = {
            body = {'pants_2', 'tight_l', 'tight_r', 'leg_l', 'leg_r', 'torso_3'},
            bodyPartName = 'female_pants_10',
            attachedTo = "legs",
            textures = {
                {directory = "assets/genders/fem/textures/female_pants_10/1.png", name = 'Chino', icon = "icon_female_pants_10", color = {1, 1, 1, 1}},
            }
        },

        feet_1 = {
            body = {},
            bodyPartName = 'female_feet_1',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/fem/textures/female_feet_1/1.png", name = 'Chinelo', icon = "icon_female_feet_1", color = {1, 1, 1, 1}},
            }
        },

        feet_2 = {
            body = {},
            bodyPartName = 'female_feet_1',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/fem/textures/female_feet_1/1.png", name = 'Tenis Skate', icon = "icon_female_feet_2", color = {1, 1, 1, 1}},
            }
        },
        feet_3 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'female_feet_3',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/fem/textures/female_feet_3/1.png", name = 'Tenis Corrida', icon = "icon_female_feet_3", color = {1, 1, 1, 1}},
            }
        },
        feet_4 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'female_feet_4',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/fem/textures/female_feet_4/1.png", name = 'Airforce', icon = "icon_female_feet_4", color = {1, 1, 1, 1}},
            }
        },
        feet_5 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'female_feet_5',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/fem/textures/female_feet_5/1.png", name = 'AirMax', icon = "icon_female_feet_5", color = {1, 1, 1, 1}},
            }
        },
        feet_6 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'female_feet_6',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/fem/textures/female_feet_6/1.png", name = 'AirJordan', icon = "icon_female_feet_6", color = {1, 1, 1, 1}},
            }
        },
        feet_7 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'female_feet_7',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/fem/textures/female_feet_7/1.png", name = '12 molas', icon = "icon_female_feet_7", color = {1, 1, 1, 1}},
            }
        },
        feet_8 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'female_feet_8',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/fem/textures/female_feet_8/1.png", name = 'Bota Militar', icon = "icon_female_feet_8", color = {1, 1, 1, 1}},
            }
        },
        feet_9 = {
            body = {'feet_body_l', 'feet_body_r'},
            bodyPartName = 'female_feet_9',
            attachedTo = "shoes",
            textures = {
                {directory = "assets/genders/fem/textures/female_feet_9/1.png", name = 'Cano Alto', icon = "icon_female_feet_9", color = {1, 1, 1, 1}},
            }
        },
    }
}

local props = {
    hair_fem_1 = {
        type = 'object',
        modelId = 371,
        bone = '8',
        ox = -0.01,
        oy = 0,
        oz = 0,
        rx = 0,
        ry = 270,
        rz = 65
    }
}

function getConfig(genre, type)
    if Config[genre][type] ~= nil then
        if Config[genre][type] ~= nil then
            return Config[genre][type]
        end
    end

    return false
end

function getPropsConfig(propName)
    return props[propName]
end
