addEventHandler("onClientResourceStart", resourceRoot, function () 
  local id = 1339;

  if (id) then 
    txd = engineLoadTXD("assets/leveldev.txd");
    engineImportTXD(txd, id);
    dff = engineLoadDFF("assets/leveldev.dff");
    engineReplaceModel(dff, id);
    coll = engineLoadCOL("assets/leveldev.col");
    engineReplaceCOL(coll, id);

    local startX, startY, startZ = 745.68860, -866.01282, 1425.28906
    local spacingX, spacingY = 82.83, 95.05

    for i = 1, 5 do
      for j = 1, 5 do
          local x = startX + (i - 1) * spacingX
          local y = startY + (j - 1) * spacingY
          local ped = createObject(id, x, y, startZ)
      end
  end
  end
end)