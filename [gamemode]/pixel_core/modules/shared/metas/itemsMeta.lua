Metas.items = {
  ["phone"] = {
    title = 'Phone',
    price = 250,
    weight = 1000, 
    category = 'utilities',
    icon = '1',
    data = nil,
    useFlexAmount = false,
    network = "pixel_phone:onInventoryRequestUse",
    perishability = {
      days = 30,
      minutes = 1,
      seconds = 30,
      enabled = true
    },
    description = 'Um aparelho moderno de comunicação móvel.'
  },

  ["fish_grod_1"] = {
    title = 'Pesca Basica',
    price = 250,
    weight = 8000, 
    category = 'utilities',
    icon = '15',
    data = {
      level = "1"
    },
    useFlexAmount = false,
    network = "pixel_fisher:onInventoryRequestUse",
    perishability = {
      enabled = false
    },
    description = 'Uma vara de pesca simples para pescar peixes simples.'
  },

  ["money"] = {
    title = 'Dinheiro',
    price = 1,
    weight = 0, 
    category = 'utilities',
    icon = '10',
    data = nil,
    useFlexAmount = true,
    network = "pixel_inv:onInventoryRequestUse",
    perishability = {
      enabled = false
    },
    description = 'Uma nota de papel valiosa que serve para comprar itens na cidade.'
  },

  ["gas_gallon"] = {
    title = 'Gasolina 10L',
    price = 1,
    weight = 3000, 
    category = 'utilities',
    icon = '11',
    useFlexAmount = false,
    network = "pixel_gas:onInventoryRequestUse",
    props = {
      amount = 1000
    },
    perishability = {
      enabled = false
    },
    description = 'Uma nota de papel valiosa que serve para comprar itens na cidade.'
  },

  ["vonder"] = {
    title = 'Vonder Hidraulico',
    price = 1,
    weight = 4000, 
    category = 'utilities',
    icon = '13',
    useFlexAmount = false,
    network = "pixel_vehicles:onInventoryRequestUse",
    perishability = {
      enabled = false
    },
    description = 'Um macaco hidraulico que serve para erguer um veiculo.'
  },


  ["basic_repair"] = {
    title = 'Reparo Básico',
    price = 1,
    weight = 5000, 
    category = 'utilities',
    icon = '14',
    useFlexAmount = false,
    network = "pixel_mechanic:onInventoryRequestUse",
    perishability = {
      enabled = false
    },
    description = 'Um item para reparar o carro de forma simples.'
  },

  -- lp_cuntgun
  ["slr15"] = {
    title = 'SLR-15 Rifle',
    price = 250,
    weight = 5000, 
    category = 'utilities',
    network = "pixel_guns:useItem",
    icon = '4',
    useFlexAmount = false,
    settings = {
      gunId = 31
    },
    subItens = {
      slots = 1,
      whitelist = { "bullet_556" }
    },
    data = {
      amount = 1,
    },
    perishability = {
      days = 0,
      minutes = 0,
      seconds = 0,
      enabled = false
    },
    description = 'Uma bala de assalto'
  },

  ["cuntgun"] = {
    title = 'Carabina',
    price = 250,
    weight = 5000, 
    category = 'utilities',
    network = "pixel_guns:useItem",
    icon = 'lp_cuntgun',
    useFlexAmount = false,
    settings = {
      gunId = 34
    },
    subItens = {
      slots = 1,
      maxItems = 1,
      minItems = 1,
      whitelist = { "pellet_clip" }
    },
    data = {
      ammo = '5.56',
      amount = 1,
    },
    perishability = {
      days = 0,
      minutes = 0,
      seconds = 0,
      enabled = false
    },
    description = 'Uma bala de assalto'
  },

  ["pellet"] = {
    title = 'Chumbinho',
    price = 250,
    weight = 0.01, 
    category = 'utilities',
    network = "pixel_guns:useItem",
    icon = 'lp_pellet',
    useFlexAmount = false,
    data = {
      ammo = 'pellet'
    },
    perishability = {
      days = 0,
      minutes = 0,
      seconds = 0,
      enabled = false
    },
    description = 'Uma bala de assalto'
  },


  -- Mags
  ["pellet_clip"] = {
    title = 'Cartucho de Chumbinho',
    price = 250,
    weight = 0.01, 
    category = 'utilities',
    network = "pixel_guns:useItem",
    icon = 'lp_pellet_clip',
    useFlexAmount = false,
    data = {},
    subItens = {
      slots = 1,
      maxItems = 10,
      minItems = 10,
      whitelist = { "pellet" }
    },
    perishability = {
      days = 0,
      minutes = 0,
      seconds = 0,
      enabled = false
    },
    description = 'Uma bala de assalto'
  },


  ["bullet_556"] = {
    title = '5.56 Rifle Ammo',
    price = 250,
    weight = 200, 
    category = 'utilities',
    icon = '5',
    data = nil,
    useFlexAmount = false,
    network = nil,
    perishability = {
      enabled = false
    },
    description = 'Uma arma de assalto leve.'
  },


  ["backpack_23"] = {
    title = "Mochila",
    price = 50,
    weight = 0,
    category = "bag",
    icon = '6',
    useFlexAmount = false,
    network = "pixel_characters:onInventoryRefresh",
    data = {
      is = "clothing",
      genre = "masculine",
      part = "backpack",
      index = 23,
      level = 3,
      weight = 21000
    },
    perishability = {
      enabled = false
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },


  ["car_key"] = {
    title = "Chave de Carro",
    price = 0,
    weight = 0.1,
    category = "bag",
    icon = '12',
    useFlexAmount = false,
    network = "pixel_vehicles:onInventoryUseItem",
    data = {},
    perishability = {
      enabled = false
    },
    description = 'Chave de um carro simples'
  },


  -- PEIXES
  ["fish_corvina"] = {
    title = "Corvina",
    price = 50,
    weight = 0.1,
    useFlexAmount = true,
    category = "fish",
    icon = 'lp_fish_corvina',
    network = "pixel_characters:onInventoryRefresh",
    data = {},
    perishability = {
      enabled = false
    },
    description = 'Peixe 1'
  },

  ["fish_piau"] = {
    title = "Piau",
    price = 50,
    weight = 0.1,
    useFlexAmount =  true,
    category = "fish",
    icon = 'lp_fish_piau',
    network = "pixel_characters:onInventoryRefresh",
    data = {},
    perishability = {
      enabled = false
    },
    description = 'Peixe 1'
  },



  -- Roupas
  ["torso_base"] = {
    title = "torso_base",
    price = 50,
    weight = 0.1,
    useFlexAmount = false,
    category = "upper",
    icon = 'torso_base',
    network = "pixel_characters:onInventoryRefresh",
    data = {
    },
    perishability = {
      enabled = false
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },

  ["pants_base"] = {
    title = "pants_base",
    price = 50,
    weight = 0.1,
    useFlexAmount = false,
    category = "lower",
    icon = 'pants_base',
    network = "pixel_characters:onInventoryRefresh",
    data = {
    },
    perishability = {
      enabled = false
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },


  ["shoe_base"] = {
    title = "shoes_base",
    price = 50,
    weight = 0.1,
    useFlexAmount = false,
    category = "foot",
    icon = 'shoe_base',
    network = "pixel_characters:onInventoryRefresh",
    data = {
    },
    perishability = {
      enabled = false
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },



  -- Food
  ["apple"] = {
    title = "Maçã",
    price = 50,
    weight = 0.1,
    useFlexAmount = false,
    category = "food",
    icon = 'lp_apple',
    network = "pixel_characters:onInventoryUseItem",
    props = {
      eatTime = 10000,
      eatData = {
        thirst = 5,
        hunger = 10,
      },

      model = 902,
      boneId = 25,
      blockName = "FOOD",
      animation = "EAT_Pizza",
    },
    data = {},
    perishability = {
      days = 5,
      minutes = 0,
      seconds = 0,
      enabled = true
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },

  ["sandwich"] = {
    title = "Sanduiche",
    price = 50,
    weight = 0.1,
    useFlexAmount = false,
    category = "food",
    icon = 'lp_breakfast-sandwich',
    network = "pixel_characters:onInventoryUseItem",
    props = {
      eatTime = 10000,
      eatData = {
        thirst = 5,
        hunger = 10,
      },
      model = 1461,
      boneId = 25,
      blockName = "FOOD",
      animation = "EAT_Pizza",
    },
    data = {},
    perishability = {
      days = 5,
      minutes = 0,
      seconds = 0,
      enabled = true
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },


  ["burger"] = {
    title = "Hamburger",
    price = 50,
    weight = 0.1,
    useFlexAmount = false,
    category = "food",
    icon = 'lp_burger',
    network = "pixel_characters:onInventoryUseItem",
    props = {
      eatTime = 10000,
      eatData = {
        thirst = 5,
        hunger = 10,
      },
      model = 1637,
      boneId = 25,
      blockName = "FOOD",
      animation = "EAT_Pizza",
    },
    data = {},
    perishability = {
      days = 5,
      minutes = 0,
      seconds = 0,
      enabled = true
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },


  ["pizza"] = {
    title = "Pizza",
    price = 50,
    weight = 0.1,
    useFlexAmount = false,
    category = "food",
    icon = 'lp_pizza',
    network = "pixel_characters:onInventoryUseItem",
    props = {
      eatTime = 10000,
      eatData = {
        thirst = 5,
        hunger = 10,
      },
      model = 1602,
      boneId = 25,
      blockName = "FOOD",
      animation = "EAT_Pizza",
    },
    data = {},
    perishability = {
      days = 5,
      minutes = 0,
      seconds = 0,
      enabled = true
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },


  ["softdrink"] = {
    title = "Soft Drink",
    price = 50,
    weight = 0.1,
    useFlexAmount = false,
    category = "food",
    icon = 'lp_softdrink',
    network = "pixel_characters:onInventoryUseItem",
    props = {
      eatTime = 10000,
      eatData = {
        thirst = 5,
        hunger = 10,
      },
      model = 2647,
      boneId = 25,
      blockName = "BAR",
      animation = "dnk_stndM_loop",
    },
    data = {},
    perishability = {
      days = 5,
      minutes = 0,
      seconds = 0,
      enabled = true
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },


  -- Animals
  ["animal_meat"] = {
    title = "Animal Meat",
    price = 50,
    weight = 0.1,
    useFlexAmount = false,
    category = "animal_part",
    icon = 'lp_animal_meat',
    network = "pixel_hunter:onInventoryRefresh",
    data = {},
    perishability = {
      enabled = false
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },
  ["animal_bone"] = {
    title = "Animal Bone",
    price = 50,
    weight = 0.1,
    useFlexAmount = false,
    category = "animal_part",
    icon = 'lp_animal_bones',
    network = "pixel_hunter:onInventoryRefresh",
    data = {},
    perishability = {
      enabled = false
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },
  ["animal_leather"] = {
    title = "Animal Bone",
    price = 50,
    weight = 0.1,
    useFlexAmount = false,
    category = "animal_part",
    icon = 'lp_animal_leather',
    network = "pixel_hunter:onInventoryRefresh",
    data = {},
    perishability = {
      enabled = false
    },
    description = 'Mochila de pano simples para carregar coisas básicas'
  },
}