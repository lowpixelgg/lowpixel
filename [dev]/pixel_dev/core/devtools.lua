local imports = {
  ui = exports.pixel_ui,
  assets = exports.pixel_assets,
};

local resStat = false
local serverStats = nil
local serverColumns, serverRows = {}, {}


local fonts = {
  robotoRegular5 = imports.assets:useCreateFont("roboto.Medium", 8);
}


local show = false;



addEventHandler ("onClientRender", root, function ()
  if (show) then 
    local startX, startY = imports.ui:createLayoutBox("pixel_dev:fps", 160, 24, 10, 10, "right", "top", true)
    
    dxDrawRectangle(startX, startY, 160, 24, tocolor(0, 0, 0, 150), true);
    dxDrawText("FPS", startX + 10, startY, 160, startY+24, tocolor(255,255,255, 150), 1.0, fonts.robotoRegular5, "left", "center", false, false, true);
    dxDrawText(getCurrentFPS(), startX + 10, startY, startX+150, startY+24, tocolor(255,255,255, 150), 1.0, fonts.robotoRegular5, "right", "center", false, false, true);
    
    
    local columns, rows = getPerformanceStats("Lua timing");
    
    local cStatsX, cStatsY = imports.ui:createLayoutBox("pixel_dev:stats_client", 160, 24, 10, 100, "left", "center", true)
    dxDrawText("Lua Timing - Client", cStatsX, cStatsY - 20, 160, 24, tocolor(255,255,255, 150), 1.0, fonts.robotoRegular5, "left", "top", false, false, true);
    
    local totalHeight = 0
    
    for i, row in ipairs(rows) do
      local rowY = cStatsY + (i - 1) * (24 + 1)
      dxDrawRectangle(cStatsX, rowY, 160, 24, tocolor(0, 0, 0, 150), true)
      dxDrawText(row[1], cStatsX + 10, rowY, 160, rowY + 24, tocolor(255, 255, 255, 150), 1.0, fonts.robotoRegular5, "left", "center", false, false, true)
      dxDrawText(row[2], cStatsX + 10, rowY, cStatsX + 150, rowY + 24, tocolor(255, 255, 255, 150), 1.0, fonts.robotoRegular5, "right", "center", false, false, true)
      
      totalHeight = totalHeight + 24 
    end
    
    
    if (#serverRows ~= 0) then
      local sStatsX, sStatsY = imports.ui:createLayoutBox("pixel_dev:stats_server", 160, 24, 10, totalHeight + 200, "right", "top", false)
      dxDrawText("Lua Timing - Server", sStatsX, sStatsY - 20, 160, 24, tocolor(255,255,255, 150), 1.0, fonts.robotoRegular5, "left", "top", false, false, true);
      
      for i, row in ipairs(serverRows) do
        local rowY = sStatsY + (i - 1) * (24 + 1)
        dxDrawRectangle(sStatsX, rowY, 160, 24, tocolor(0, 0, 0, 150), true)
        dxDrawText(row[1], sStatsX + 10, rowY, 160, rowY + 24, tocolor(255, 255, 255, 150), 1.0, fonts.robotoRegular5, "left", "center", false, false, true)
        dxDrawText(row[2], sStatsX + 10, rowY, sStatsX + 150, rowY + 24, tocolor(255, 255, 255, 150), 1.0, fonts.robotoRegular5, "right", "center", false, false, true)
      end
    end
  end
end);


addCommandHandler("stats", function () 
  show = not show
end)

triggerServerEvent("getServerStat", localPlayer)

addEvent("receiveServerStat", true)
addEventHandler("receiveServerStat", root, function(stat1,stat2)
  serverStats = true
  serverColumns, serverRows = stat1,stat2
end)



