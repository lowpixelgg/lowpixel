local genders = {
  ["fem"] = {
    path = "assets/genders/fem/",
    variants = {
      [12] = "mp_fem_1.dff",
      [11] = "mp_fem_2.dff",
      [13] = "mp_fem_3.dff",
      [40] = "mp_fem_4.dff",
      [41] = "mp_fem_5.dff",
      [54] = "mp_fem_6.dff",
      [53] = "mp_fem_7.dff",
      [56] = "mp_fem_8.dff",
      [55] = "mp_fem_9.dff",
      [69] = "mp_fem_10.dff",
    },
    txd = "mp_fem_texture.txd"
  },
  ["male"] = {
    path = "assets/genders/male/",
    variants = {
      [7] = "mp_male_1.dff",
      [17] = "mp_male_2.dff",
      [15] = "mp_male_3.dff",
      [16] = "mp_male_4.dff",
      [18] = "mp_male_5.dff",
      [19] = "mp_male_6.dff",
      [20] = "mp_male_7.dff",
      [21] = "mp_male_8.dff",
      [22] = "mp_male_9.dff",
      [24] = "mp_male_10.dff",
    },
    txd = "mp_male_texture.txd",
  }
}



addEventHandler("onClientResourceStart", resourceRoot, function ()
  for _, gender in pairs(genders) do 
    local txd = engineLoadTXD(gender.path..""..gender.txd);

    for id, variant in pairs(gender.variants) do 
      local dff = engineLoadDFF(gender.path..""..variant);
      engineImportTXD(txd, id);
      engineReplaceModel(dff, id);
    end

    collectgarbage();
  end


  local hairTxd = engineLoadTXD("assets/genders/fem/hair/sailor_hair_1.txd");
  engineImportTXD(hairTxd, 371);
  local hairDff = engineLoadDFF("assets/genders/fem/hair/sailor_hair_1.dff");
  engineReplaceModel(hairDff, 371);


  local propsTxd = engineLoadTXD("assets/props/foods.txd");

  -- foods
  local apple = engineLoadDFF("assets/props/apple.dff");
  engineReplaceModel(apple, 902);
  local appleC = engineLoadCOL("assets/props/apple.col");
  engineReplaceCOL(appleC, 902);

  local sandwich = engineLoadDFF("assets/props/sandwich.dff");
  engineReplaceModel(sandwich, 1461);
  local sandwichC = engineLoadCOL("assets/props/sandwich.col");
  engineReplaceCOL(sandwichC, 1461);


  local burger = engineLoadDFF("assets/props/burger.dff");
  engineReplaceModel(burger, 1637);
  local burgerC = engineLoadCOL("assets/props/burger.col");
  engineReplaceCOL(burgerC, 1637);

  local pizza = engineLoadDFF("assets/props/pizza.dff");
  engineReplaceModel(pizza, 1602);
  local pizzaC = engineLoadCOL("assets/props/pizza.col");
  engineReplaceCOL(pizzaC, 1602);

  engineImportTXD(propsTxd, 902);
  engineImportTXD(propsTxd, 1461);
  engineImportTXD(propsTxd, 1637);
  engineImportTXD(propsTxd, 1602);
end);