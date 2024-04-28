cars = {
    ["240"] = 602,
    ["911"] = 496,
    ["amggt"] = 401,
    ["bentayga"] = 518,
    ["camaro"] = 527,
    ["challenger"] = 419,
    ["charger"] = 587,
    ["chevelle"] = 533,
    ["civic"] = 474,
    ["corolla"] = 526,
    ["e36"] = 411,
    ["f150"] = 600,
    ["ferrarisf90"] = 445,
    ["fiesta"] = 604,
    ["golfmk8"] = 507,
    ["impala"] = 516,
    ["lamborghini"] = 491,
    ["lancer"] = 549,
    ["m3g80"] = 566,
    ["nsx"] = 517,
    ["panamera"] = 436,
    ["prelude"] = 529,
    ["r34"] = 540,
    ["rangerover"] = 479,
    ["rav4"] = 400,
    ["royce"] = 505,
    ["senna"] = 421,
    ["subaru"] = 402,
    ["tundra"] = 542,
    ["w223"] = 475,
    ["xc90"] = 603
}


if (localPlayer) then 
    setElementPosition(localPlayer, 432.92773, -1640.9434, 27.6)

    for k,v in pairs(cars) do 
        txd = engineLoadTXD( 'cars/'..k..'.txd' ) 
        engineImportTXD( txd, v ) 
        dff = engineLoadDFF('cars/'..k..'.dff', v) 
        engineReplaceModel( dff, v )
    end
end