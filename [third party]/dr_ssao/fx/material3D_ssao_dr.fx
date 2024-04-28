//
// file: material3D_ssao_dr.fx
// version: v1.5
// author: Ren712
//

//--------------------------------------------------------------------------------------
// Settings
//--------------------------------------------------------------------------------------
float3 sElementPosition = float3(0, 0, 0);
float2 fViewportSize = float2(800, 600);
float2 fViewportScale = float2(1, 1);
float2 fViewportPos = float2(0, 0);
float2 fBlend = float2(1, 3);

float2 sPixelSize = float2(0.00125, 0.00166);
float sAspectRatio = 800 / 600;
#include "ssao_dr_settings.txt"

//--------------------------------------------------------------------------------------
// Textures
//--------------------------------------------------------------------------------------
// Secondary render target textures
texture sRTColor < string renderTarget = "yes"; >;
texture sRTNormal;

//--------------------------------------------------------------------------------------
// Variables set by MTA
//--------------------------------------------------------------------------------------
texture gDepthBuffer : DEPTHBUFFER;
float4x4 gProjection : PROJECTION;
float4x4 gView : VIEW;
float4x4 gViewInverse : VIEWINVERSE;
float3 gCameraPosition : CAMERAPOSITION;
int CUSTOMFLAGS < string skipUnusedParameters = "yes"; >;

//--------------------------------------------------------------------------------------
// Sampler 
//--------------------------------------------------------------------------------------
sampler2D SamplerColor = sampler_state
{
    Texture = (sRTColor);
    AddressU = Clamp;
    AddressV = Clamp;
    MinFilter = Linear;
    MagFilter = Linear;
    MipFilter = Linear;
};

sampler SamplerNormal = sampler_state
{
    Texture = (sRTNormal);
    AddressU = Clamp;
    AddressV = Clamp;
    MinFilter = Point;
    MagFilter = Point;
    MipFilter = None;
};

sampler SamplerDepth = sampler_state
{
    Texture = (gDepthBuffer);
    AddressU = Clamp;
    AddressV = Clamp;
    MinFilter = Point;
    MagFilter = Point;
    MipFilter = None;
};

//--------------------------------------------------------------------------------------
// Structures
//--------------------------------------------------------------------------------------
struct VSInput
{
    float3 Position : POSITION0;
    float2 TexCoord : TEXCOORD0;
    float4 Diffuse : COLOR0;
};

struct PSInput
{
    float4 Position : POSITION0;
    float2 TexCoord : TEXCOORD0;
    float2 PixPos : TEXCOORD1;
    float4 UvToView : TEXCOORD2;
    float4 Diffuse : COLOR0;
};

//--------------------------------------------------------------------------------------
// Returns a translation matrix
//--------------------------------------------------------------------------------------
float4x4 makeTranslation( float3 trans) 
{
    return float4x4(
     1,  0,  0,  0,
     0,  1,  0,  0,
     0,  0,  1,  0,
     trans.x, trans.y, trans.z, 1
    );
}

//--------------------------------------------------------------------------------------
// Creates projection matrix of a shadered dxDrawImage
//--------------------------------------------------------------------------------------
float4x4 createImageProjectionMatrix(float2 viewportPos, float2 viewportSize, float2 viewportScale, float adjustZFactor, float nearPlane, float farPlane)
{
    float Q = farPlane / ( farPlane - nearPlane );
    float rcpSizeX = 2.0f / viewportSize.x;
    float rcpSizeY = -2.0f / viewportSize.y;
    rcpSizeX *= adjustZFactor;
    rcpSizeY *= adjustZFactor;
    float viewportPosX = 2 * viewportPos.x;
    float viewportPosY = 2 * viewportPos.y;
	
    float4x4 sProjection = {
        float4(rcpSizeX * viewportScale.x, 0, 0,  0), float4(0, rcpSizeY * viewportScale.y, 0, 0), float4(viewportPosX, -viewportPosY, Q, 1),
        float4(( -viewportSize.x / 2.0f - 0.5f ) * rcpSizeX,( -viewportSize.y / 2.0f - 0.5f ) * rcpSizeY, -Q * nearPlane , 0)
    };

    return sProjection;
}

//--------------------------------------------------------------------------------------
// Vertex Shader 
//--------------------------------------------------------------------------------------
PSInput VertexShaderFunction(VSInput VS)
{
    PSInput PS = (PSInput)0;

    VS.Position.xyz = float3(VS.TexCoord.xy, 0);
	
    // resize
    VS.Position.xy *= fViewportSize;

    // create projection matrix (as done for shadered dxDrawImage)
    float4x4 sProjection = createImageProjectionMatrix(fViewportPos, fViewportSize, fViewportScale, 1000, 100, 10000);
	
    // calculate screen position of the vertex
    float4 viewPos = mul(float4(VS.Position.xyz, 1), makeTranslation(float3(0,0, 1000.5)));
    PS.Position = mul(viewPos, sProjection);

    // pass texCoords
    PS.TexCoord = VS.TexCoord;
	
    // pass screen position to be used in PS
    PS.PixPos = VS.Position.xy;
	
    // pass vertex color to PS
    PS.Diffuse = VS.Diffuse;
	
    // calculations for perspective-correct position recontruction
    float2 uvToViewADD = - 1 / float2(gProjection[0][0], gProjection[1][1]);	
    float2 uvToViewMUL = -2.0 * uvToViewADD.xy;
    PS.UvToView = float4(uvToViewMUL, uvToViewADD);
	
    return PS;
}

//-----------------------------------------------------------------------------
//-- Get value from the depth buffer
//-- Uses define set at compile time to handle RAWZ special case (which will use up a few more slots)
//-----------------------------------------------------------------------------
float FetchDepthBufferValue( float2 uv )
{
    float4 texel = tex2D(SamplerDepth, uv);
#if IS_DEPTHBUFFER_RAWZ
    float3 rawval = floor(255.0 * texel.arg + 0.5);
    float3 valueScaler = float3(0.996093809371817670572857294849, 0.0038909914428586627756752238080039, 1.5199185323666651467481343000015e-5);
    return dot(rawval, valueScaler / 255.0);
#else
    return texel.r;
#endif
}

//--------------------------------------------------------------------------------------
//-- Use the last scene projecion matrix to linearize the depth (to world units)
//--------------------------------------------------------------------------------------
float Linearize(float posZ)
{
    return gProjection[3][2] / (posZ - gProjection[2][2]);
}

//--------------------------------------------------------------------------------------
//-- Use the last scene projecion matrix to transform linear depth to logarithmic
//--------------------------------------------------------------------------------------
float InvLinearize(float posZ)
{
    return (gProjection[3][2] / posZ) + gProjection[2][2];
}

//--------------------------------------------------------------------------------------
//-- Use the last scene projecion matrix to linearize the depth (0-1)
//--------------------------------------------------------------------------------------
float LinearizeToFloat(float posZ)
{
    return (1 - gProjection[2][2])/ (posZ - gProjection[2][2]);
}

//--------------------------------------------------------------------------------------
// GetPositionFromDepth
//--------------------------------------------------------------------------------------
float3 GetPositionFromDepth(float2 coords, float4 uvToView)
{
    return float3(coords.x * uvToView.x + uvToView.z, (1 - coords.y) * uvToView.y + uvToView.w, 1.0) 
        * Linearize(FetchDepthBufferValue(coords.xy));
}

//--------------------------------------------------------------------------------------
//  Calculates normals based on partial depth buffer derivatives.
//--------------------------------------------------------------------------------------
float3 GetNormalFromDepth(float2 coords, float4 uvToView)
{
    float3 offs = float3(sPixelSize.xy, 0);

    float3 f = GetPositionFromDepth(coords.xy, uvToView);
    float3 d_dx1 = - f + GetPositionFromDepth(coords.xy + offs.xz, uvToView);
    float3 d_dx2 =   f - GetPositionFromDepth(coords.xy - offs.xz, uvToView);
    float3 d_dy1 = - f + GetPositionFromDepth(coords.xy + offs.zy, uvToView);
    float3 d_dy2 =   f - GetPositionFromDepth(coords.xy - offs.zy, uvToView);

    d_dx1 = lerp(d_dx1, d_dx2, abs(d_dx1.z) > abs(d_dx2.z));
    d_dy1 = lerp(d_dy1, d_dy2, abs(d_dy1.z) > abs(d_dy2.z));

    return (- normalize(cross(d_dy1, d_dx1)));
}

//------------------------------------------------------------------------------------------
//  Calculates the bayer dither pattern that's used to jitter
//  the direction of the AO samples per pixel.
//------------------------------------------------------------------------------------------
float GetBayerFromCoordLevel(float2 pixelpos)
{
    float finalBayer = 0.0;

    for(float i = 1-iMXAOBayerDitherLevel; i<= 0; i++)
    {
        float bayerSize = exp2(i);
        float2 bayerCoord = floor(pixelpos * bayerSize) % 2.0;
        float bayer = 2.0 * bayerCoord.x - 4.0 * bayerCoord.x * bayerCoord.y + 3.0 * bayerCoord.y;
        finalBayer += exp2(2.0*(i+iMXAOBayerDitherLevel))* bayer;
    }

    float finalDivisor = 4.0 * exp2(2.0 * iMXAOBayerDitherLevel)- 4.0;
    //raising all values by increment is false but in AO pass it makes sense. Can you see it?
    return finalBayer/ finalDivisor + 1.0/exp2(2.0 * iMXAOBayerDitherLevel);
}

//------------------------------------------------------------------------------------------
// Structure of color data sent to the renderer ( from the pixel shader  )
//------------------------------------------------------------------------------------------
struct Pixel
{
    float4 World : COLOR0;      // Render target #0
    float4 Color : COLOR1;      // Render target #1
};

//--------------------------------------------------------------------------------------
// Pixel shaders 
//--------------------------------------------------------------------------------------
Pixel PixelShaderFunctionAO(PSInput PS)
{
    Pixel output;
	
    float3 viewPos = GetPositionFromDepth(PS.TexCoord, PS.UvToView);

    float3 normalTex = tex2D(SamplerNormal, PS.TexCoord.xy).xyz;
    float3 worldNormal = (normalTex - 0.5) * 2;
    float3 viewNormal = mul(worldNormal.xyz, (float3x3)gView);
	
    float radiusJitter	= GetBayerFromCoordLevel(PS.PixPos.xy);

    float scenedepth = LinearizeToFloat(FetchDepthBufferValue(PS.TexCoord));
    viewPos += viewNormal * scenedepth;

    float SampleRadiusScaled  = 0.2 * fMXAOSampleRadius * fMXAOSampleRadius / (iMXAOSampleCount * viewPos.z);
    float mipFactor = SampleRadiusScaled * 3200.0;

    float2 currentVector;
    sincos(2.0*3.14159274*radiusJitter, currentVector.y, currentVector.x);
    static const float fNegInvR2 = -1.0 / (fMXAOSampleRadius * fMXAOSampleRadius);
    currentVector *= SampleRadiusScaled;			  
			  
    float AO = 0.0;
    float2 currentOffset;

    for(int iSample=0; iSample < iMXAOSampleCount; iSample++)
    {
        currentVector = mul(currentVector.xy, float2x2(0.575, 0.81815, -0.81815, 0.575));
        currentOffset = PS.TexCoord.xy + currentVector.xy * float2(1.0, sAspectRatio) * (iSample + radiusJitter);

        float mipLevel = saturate(log2(mipFactor * iSample) * 0.2 - 0.6) * 5.0;
		
        float3 posLod = GetPositionFromDepth(currentOffset.xy, PS.UvToView);
		
        float3 occlVec = -viewPos + posLod;

        float  occlDistanceRcp 	= rsqrt(dot(occlVec, occlVec));
        float  occlAngle = dot(occlVec, viewNormal) * occlDistanceRcp;

        float fAO = saturate(1.0 + fNegInvR2 / occlDistanceRcp)  * saturate(occlAngle - fMXAONormalBias);

        AO += fAO;
    }

    float res = saturate(AO/(0.4 * (1.0 - fMXAONormalBias)*iMXAOSampleCount * sqrt(fMXAOSampleRadius)));			  
		  
    res = pow(abs(res), 1.0 / AO_BLUR_GAMMA);

    viewNormal = float3(viewNormal.xyz * 0.5) + 0.5;	
    output.Color = float4(viewNormal.xy, res, 1);
    output.World = 0;
    return output;
}

/* Calculates weights for bilateral AO blur. Using only
   depth is surely faster but it doesn't really cut it, also
   areas with a flat angle to the camera will have high depth
   differences, hence blur will cause stripes as seen in many
   AO implementations, even HBAO+. Taking view angle into
   account greatly helps to reduce these problems. */
float GetBlurWeight(float4 tempKey, float4 centerKey, float surfacealignment)
{
    float depthdiff = abs(tempKey.w-centerKey.w);
    float normaldiff = 1 - saturate(dot(normalize(tempKey.xyz),normalize(centerKey.xyz)));

    float depthweight = saturate(rcp(fMXAOBlurSharpness*depthdiff*5.0*surfacealignment));
    float normalweight = saturate(rcp(fMXAOBlurSharpness*normaldiff*10.0));
	
    return min(normalweight,depthweight);
}

Pixel PixelShaderFunctionBlur1(PSInput PS)
{
    Pixel output;

    float4 tempsample;
    float4 centerkey , tempkey;
    float  centerweight, tempweight;
    float surfacealignment;
    float4 blurcoord = 0.0;
    float AO = 0.0;
	
    float2 normalTex = tex2D(SamplerColor, PS.TexCoord.xy).xy;
    
    float3 viewNormal = float3((normalTex.xy - 0.5) * 2, 0);
    viewNormal.z =  1 - length(viewNormal.xy);
    viewNormal = normalize(viewNormal);	

    float LinearDepth = LinearizeToFloat(FetchDepthBufferValue(PS.TexCoord.xy));

    centerkey = float4(viewNormal, LinearDepth);
    centerweight  = 0.5;
    AO = tex2D(SamplerColor, PS.TexCoord.xy).z * 0.5;
    surfacealignment = saturate(-dot(centerkey.xyz, normalize(float3(PS.TexCoord.xy * 2.0 - 1.0, 1.0) * centerkey.w)));

    for(int orientation=-1; orientation<=1; orientation+=1)
    {
        for(float iStep = 1.0; iStep <= fMXAOBlurSteps; iStep++)
        {
            blurcoord.xy = (2.0 * iStep - 0.5) * orientation * float2(1.0,0.0) * sPixelSize + PS.TexCoord.xy;
					
            tempsample.xy = (tex2D(SamplerColor, blurcoord.xy).xy - 0.5) * 2;
            tempsample.z =  1 - length(tempsample.xy);
			tempsample.xyz = normalize(tempsample.xyz);

            tempsample.w = tex2D(SamplerColor, blurcoord.xy).z;
            float blurDepth = LinearizeToFloat(FetchDepthBufferValue(blurcoord.xy));
            tempkey = float4(tempsample.xyz, blurDepth);
            tempweight = GetBlurWeight(tempkey, centerkey, surfacealignment);
            AO += tempsample.w * tempweight;
            centerweight   += tempweight;
        }
    }

    output.Color = saturate(float4(normalTex.xy, AO / centerweight, 1));
    output.World = 0;

    return output;
}


float4 PixelShaderFunctionBlur2(PSInput PS) : COLOR0
{
    float4 tempsample;
    float4 centerkey , tempkey;
    float  centerweight, tempweight;
    float surfacealignment;
    float4 blurcoord = 0.0;
    float AO  = 0.0;
	
    float2 normalTex = tex2D(SamplerColor, PS.TexCoord.xy).xy;
    
    float3 viewNormal = float3((normalTex.xy - 0.5) * 2, 0);
    viewNormal.z = 1 - length(viewNormal.xy);
    viewNormal = normalize(viewNormal);	

    float LinearDepth = LinearizeToFloat(FetchDepthBufferValue(PS.TexCoord.xy));

    centerkey = float4(viewNormal, LinearDepth);
    centerweight  = 0.5;
    AO = tex2D(SamplerColor,PS.TexCoord.xy).z * 0.5;
    surfacealignment = saturate(-dot(centerkey.xyz, normalize(float3(PS.TexCoord.xy * 2.0 - 1.0, 1.0)*centerkey.w)));

    for(int orientation=-1; orientation<=1; orientation+=1)
    {
        for(float iStep = 1.0; iStep <= fMXAOBlurSteps; iStep++)
        {
            blurcoord.xy = (2.0 * iStep - 0.5) * orientation * float2(0.0,1.0) * sPixelSize + PS.TexCoord.xy;

            tempsample.xy = (tex2D(SamplerColor, blurcoord.xy).xy - 0.5) * 2;
            tempsample.z =  1 - length(tempsample.xy);
			tempsample.xyz = normalize(tempsample.xyz);

            tempsample.w = tex2D(SamplerColor, blurcoord.xy).z;
            float blurDepth = LinearizeToFloat(FetchDepthBufferValue(blurcoord.xy));
            tempkey = float4(tempsample.xyz, blurDepth);
            tempweight = GetBlurWeight(tempkey, centerkey, surfacealignment);
            AO += tempsample.w * tempweight;
            centerweight += tempweight;
        }
    }

    AO = pow(AO / centerweight, AO_BLUR_GAMMA);

    AO = 1.0-pow(1.0-AO, fMXAOAmbientOcclusionAmount * 4.0);

    AO = lerp(AO, 0.0, smoothstep(fMXAOFadeoutStart, fMXAOFadeoutEnd, LinearDepth));

    float GI = AO;
	
    float3 outColor = saturate(1 - GI);
    return float4(outColor.rgb, PS.Diffuse.a);
}

//--------------------------------------------------------------------------------------
// Techniques
//--------------------------------------------------------------------------------------
technique dxDrawMaterial3D_ssao_dr
{
  pass P0
  {
    ZEnable = false;
    ZWriteEnable = false;
    CullMode = 1;
    ShadeMode = Gouraud;
    AlphaBlendEnable = true;
    SrcBlend = SrcAlpha;
    DestBlend = InvSrcAlpha;
    AlphaTestEnable = false;
    AlphaRef = 1;
    AlphaFunc = GreaterEqual;
    Lighting = false;
    FogEnable = false;
    VertexShader = compile vs_3_0 VertexShaderFunction();
    PixelShader  = compile ps_3_0 PixelShaderFunctionAO();
  }
  pass P1
  {
    ZEnable = false;
    ZWriteEnable = false;
    CullMode = 1;
    ShadeMode = Gouraud;
    AlphaBlendEnable = true;
    SrcBlend = SrcAlpha;
    DestBlend = InvSrcAlpha;
    AlphaTestEnable = false;
    AlphaRef = 1;
    AlphaFunc = GreaterEqual;
    Lighting = false;
    FogEnable = false;
    VertexShader = compile vs_3_0 VertexShaderFunction();
    PixelShader  = compile ps_3_0 PixelShaderFunctionBlur1();
  }
  pass P2
  {
    ZEnable = false;
    ZWriteEnable = false;
    CullMode = 1;
    ShadeMode = Gouraud;
    AlphaBlendEnable = true;
    SrcBlend = fBlend.x;
    DestBlend = fBlend.y;
    AlphaTestEnable = false;
    AlphaRef = 1;
    AlphaFunc = GreaterEqual;
    Lighting = false;
    FogEnable = false;
    VertexShader = compile vs_3_0 VertexShaderFunction();
    PixelShader  = compile ps_3_0 PixelShaderFunctionBlur2();
  }
} 

// Fallback
technique fallback
{
  pass P0
  {
    // Just draw normally
  }
}
	
