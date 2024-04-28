local business = {
  Mercedes = {
      title = "Mercedes",
      logo = "mercedes",
  },

  Toyota = {
      title = "Toyota",
      logo = "toyota"
  },

  Nissan = {
      title = "Nissan",
      logo = "nissan"
  },

  Honda = {
      title = "Honda",
      logo = "nissan"
  }
}

Metas.vehicles = {
  [411] = {
      name = "PRELUDE",
      business = business.Mercedes,
      category = "TOUR",
      price = 625451,
      icon = "amg",
      desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumIt has survived not only five centuries.",
      settings = {
          maxSpeed = 80,
          acceleration = 10,
          brakePower = 30,
          gears = 8,
          traction = 100,
          fuel = 100,
          storage = 50
      },

      cockpit = {
          bz = 0.60,
          bx = -0.40,
          by = -0.45,
          ay = 1,
          ax = -10,
          az = 0.30,
      },

      components = {
          wheel = {
              component = "movsteer_1.7",
              wheel_attach = "wheel_lf_dummy",
          },
          speedometer = {
              maxAngle = 130,
              component = "speedook",
          },

          windshield = {
              left = "dvorleft",
              right = "dvorright",
              angleMaxY = -60,
              angleMaxZ = -10,
          },


          fuel = {
              component = "rpetrolok",
              maxAngle = 85,
          },
      },
  },

  [426] = {
      name = "AMG S2",
      business = business.Mercedes,
      category = "SPORT",
      price = 625451,
      icon = "amg-s2",
      desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumIt has survived not only five centuries.",
      settings = {
          maxSpeed = 90,
          acceleration = 60,
          brakePower = 30,
          gears = 5,
          traction = 100,
          fuel = 60,
          storage = 100
      }
  },

  [422] = {
      name = "CAMRY",
      business = business.Toyota,
      category = "SUV",
      price = 625451,
      icon = "camry",
      desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumIt has survived not only five centuries.",
      settings = {
          maxSpeed = 100,
          acceleration = 50,
          brakePower = 20,
          gears = 6,
          traction = 1,
          fuel = 59,
          storage = 50
      }
  },

  [587] = {
      name = "Corola",
      business = business.Toyota,
      category = "SPORT",
      price = 625451,
      icon = "corola",
      desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumIt has survived not only five centuries.",
      settings = {
          maxSpeed = 200,
          acceleration = 20,
          brakePower = 25,
          gears = 5,
          traction = 1,
          fuel = 60,
          storage = 60
      }
  },


  [507] = {
      name = "Evolution 3",
      business = business.Nissan,
      category = "SPORT",
      price = 625451,
      icon = "evol3",
      desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumIt has survived not only five centuries.",
      settings = {
          maxSpeed = 170,
          acceleration = 20,
          brakePower = 10,
          gears = 7,
          traction = 100,
          fuel = 60,
          storage = 60
      }
  },

  [404] = {
      name = "GLS 450",
      business = business.Mercedes,
      category = "SPORT",
      price = 625451,
      icon = "gls450",
      desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumIt has survived not only five centuries.",
      settings = {
          maxSpeed = 100,
          acceleration = 50,
          brakePower = 20,
          gears = 6,
          traction = 1,
          fuel = 59,
          storage = 50
      }
  },


  [400] = {
      name = "Toventor",
      business = business.Mercedes,
      category = "SUV",
      price = 625451,
      icon = "toventor",
      desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dumIt has survived not only five centuries.",
      settings = {
          maxSpeed = 150,
          acceleration = 50,
          brakePower = 20,
          gears = 6,
          traction = 1,
          fuel = 59,
          storage = 50
      }
  }
}