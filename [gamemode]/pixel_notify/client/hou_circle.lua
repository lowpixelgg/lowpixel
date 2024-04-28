local circleShader = dxCreateShader ( "assets/hou_circle.fx" )
local pos_start = {}
local pos_stop = {}

local sx, sy = guiGetScreenSize()
local px, py = sx/1920, sy/1080

local maskShader = dxCreateShader ( "assets/hud_mask.fx" )

local circle = dxCreateTexture ( "assets/aw_ui_notify_circle.png" )
local renders = dxCreateRenderTarget (300*px, 300*px, true)

function hou_circle( x, y, width, height, color, angleStart, angleSweep, borderWidth )
	height = height or width
	color = color or tocolor(255,255,255)
	borderWidth = borderWidth or 1e9
	angleStart = angleStart or 0
	angleSweep = math.floor(angleSweep)
	angleSweep = angleSweep or 360 - angleStart
	if ( angleSweep < 360 ) then
		angleEnd = math.fmod( angleStart + angleSweep, 360 ) + 0
	else
		angleStart = 0
		angleEnd = 360
	end
	dxSetShaderValue ( circleShader, "sCircleWidthInPixel", width );
	dxSetShaderValue ( circleShader, "sCircleHeightInPixel", height );
	dxSetShaderValue ( circleShader, "sBorderWidthInPixel", borderWidth );
	dxSetShaderValue ( circleShader, "sAngleStart", math.rad(angleStart) - math.pi );
	dxSetShaderValue ( circleShader, "sAngleEnd", math.rad(angleSweep) - math.pi );
	dxSetRenderTarget (renders, true)
		dxDrawImage( 0, 0, 300*px, 300*px, circleShader )
	dxSetRenderTarget ()
	dxSetShaderValue ( maskShader, "sMaskTexture", circle)
	dxSetShaderValue ( maskShader, "sPicTexture", renders)
	dxDrawImage (x, y, width, height, maskShader, 0, 0, 0, color )
end
