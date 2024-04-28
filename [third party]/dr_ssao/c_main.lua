--
-- c_main.lua
--
-- shader settings in fx/ssao_dr_settings.txt

local isAOMaterialPrimitive = true
local isDebugMode = false

local scx, scy = guiGetScreenSize()
local renderTarget = {RTNormal = nil, isOn = false}
aoShader = {shader = nil, colorRT = nil, enabled = false}

function enableAO()
	if aoShader.enabled then return end
	if renderTarget.isOn then
		if isAOMaterialPrimitive then
			aoShader.shader, tec = dxCreateShader( "fx/primitive3D_ssao_dr.fx" )
		else
			aoShader.shader, tec = dxCreateShader( "fx/material3D_ssao_dr.fx" )		
		end
		if aoShader.shader and renderTarget.RTNormal then
			dxSetShaderValue( aoShader.shader, "sRTNormal", renderTarget.RTNormal )
		end
	else
		if isAOMaterialPrimitive then 
			aoShader.shader, tec = dxCreateShader( "fx/primitive3D_ssao.fx" )
		else
			aoShader.shader, tec = dxCreateShader( "fx/material3D_ssao.fx" )		
		end
	end
	outputDebugString('dr_ssao: Using technique '..tec)
	aoShader.colorRT = dxCreateRenderTarget(scx, scy, false)
	isAllValid = true

		isAllValid = aoShader.shader and aoShader.colorRT
		if isAllValid then
			dxSetShaderValue( aoShader.shader, "fViewportSize", scx, scy )
			dxSetShaderValue( aoShader.shader, "sPixelSize", 1 / scx, 1 / scy )
			dxSetShaderValue( aoShader.shader, "sAspectRatio", scx / scy )
			dxSetShaderValue( aoShader.shader, "sRTColor", aoShader.colorRT )
			if isDebugMode then
				dxSetShaderValue( aoShader.shader, "fBlend", 5, 6 )
			else
				dxSetShaderValue( aoShader.shader, "fBlend", 1, 3 )	
			end
		end
    aoShader.enabled = isAllValid
end

function disableAO()
	if not aoShader.enabled then return end
	aoShader.enabled = false
	destroyElement(aoShader.shader)
	aoShader.shader = nil
	destroyElement(aoShader.colorRT)
	aoShader.colorRT = nil
end

local trianglestrip_quad = {{-1, -1, 0, 0, 0}, {-1, 1, 0, 0, 1}, {1, -1, 0, 1, 0}, {1, 1, 0, 1, 1}}

local cPosX, cPosY, cPosZ = getCameraMatrix()
addEventHandler("onClientPreRender", root, function()
	if aoShader.enabled then
		dxSetRenderTarget(aoShader.colorRT)
		dxSetRenderTarget()
		if isAOMaterialPrimitive then
			dxDrawMaterialPrimitive3D( "trianglestrip", aoShader.shader, false, unpack( trianglestrip_quad ) )
		else
			cPosX, cPosY, cPosZ = getCameraMatrix()
			dxDrawMaterialLine3D( cPosX + 0.5, cPosY + 1, cPosZ, cPosX + 0.5, cPosY , cPosZ, aoShader.shader, 1, tocolor(255,255,255,255), cPosX + 0.5,cPosY + 0.5, cPosZ + 1 )
		end
	end
end, true, "high+9" )

----------------------------------------------------------------------------------------------------------------------------
-- onClientResourceStart/Stop
----------------------------------------------------------------------------------------------------------------------------
addEventHandler ( "onClientResourceStart", root, function(startedRes)
	switchDREffect(getResourceName(startedRes), true)
end
)

addEventHandler ( "onClientResourceStop", root, function(stoppedRes)
	switchDREffect(getResourceName(stoppedRes), false)
end
)

function switchDREffect(resName, isStarted)
	if isStarted then
		if resName == "dr_rendertarget" then
			renderTarget.isOn = getElementData ( localPlayer, "dr_renderTarget.on", false )
			if renderTarget.isOn then
				_, _, renderTarget.RTNormal = exports.dr_rendertarget:getRenderTargets()
			end
			if renderTarget.RTNormal then
				if aoShader.enabled then
					disableAO()
					enableAO()
				end
				renderTarget.isOn = true
			end
		end	
	else
		if not renderTarget.isOn then return end
		if resName == "dr_rendertarget" then
			if aoShader.enabled then
				disableAO()
				renderTarget.isOn = false
				enableAO()
			end
		end	
	end
end

addEventHandler ( "onClientResourceStart", resourceRoot, function()
	renderTarget.isOn = getElementData ( localPlayer, "dr_renderTarget.on", false )
	if renderTarget.isOn then 
		_, _, renderTarget.RTNormal = exports.dr_rendertarget:getRenderTargets()
		if renderTarget.RTColor and renderTarget.RTDepth and renderTarget.RTNormal then
			renderTarget.isOn = true
		end
	end
	triggerEvent( "onClientSwitchDetail", resourceRoot, true )
end
)

addEvent( "switchDR_renderTarget", true )
addEventHandler( "switchDR_renderTarget", root, function(isOn) switchDREffect("dr_rendertarget", isOn) end)

