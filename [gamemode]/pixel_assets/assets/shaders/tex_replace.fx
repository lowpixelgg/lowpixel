texture Tex0;
texture Tex1;

#include "mta-helper.fx"

float4 sColor = float4(1, 1, 1, 1);




sampler2D Sampler0 = sampler_state
{
    Texture = <Tex0>;
    AddressU = Clamp;
    AddressV = Clamp;
};

sampler2D Sampler1 = sampler_state
{
    Texture = <Tex1>;
    AddressU = Clamp;
    AddressV = Clamp;
};


struct VSInput
{
    float3 Position : POSITION0;
    float3 Normal : NORMAL0;
    float4 Diffuse : COLOR0;
    float2 TexCoord0 : TEXCOORD0;
    float2 TexCoord1 : TEXCOORD1;
};


struct PSInput
{
    float4 Position : POSITION0;
    float4 Diffuse : COLOR0;
    float2 TexCoord0 : TEXCOORD0;
    float2 TexCoord1 : TEXCOORD1;
};


PSInput VertexShaderFunction(VSInput VS)
{
    PSInput PS = (PSInput)0;
    PS.Position = mul(float4(VS.Position, 1), gWorldViewProjection);
    PS.TexCoord0 = VS.TexCoord0;
    PS.TexCoord1 = VS.TexCoord1;
    PS.Diffuse = MTACalcGTABuildingDiffuse( VS.Diffuse );

    return PS;
}


float4 PixelShaderFunction0(PSInput PS) : COLOR0
{
    float4 texel0 = tex2D(Sampler0, PS.TexCoord0);

    float4 skinTone = sColor;

    //-- Add uniform color value for ambient light
    float4 ambientLight = float4(0.1, 0.1, 0.1, 1.0);

    //-- Apply diffuse and ambient lighting to texel0 with skinTone
    float4 finalColor = (texel0 * (PS.Diffuse + ambientLight) * skinTone);

    return finalColor;
}

float4 PixelShaderFunction1(PSInput PS) : COLOR0
{
   
    float4 texel0 = tex2D(Sampler1, PS.TexCoord0);

    float4 skinTone = sColor;
    float4 ambientLight = float4(0.1, 0.1, 0.1, 1.0);
    float4 finalColor = (texel0 * (PS.Diffuse + ambientLight) * skinTone);

    if (texel0.r == 0 && texel0.g == 0 && texel0.b == 0) 
    {
        finalColor = float4(0, 0, 0, 0);
    }

    return finalColor;
}


float4 PS_Main(float2 texCoord : TEXCOORD0) : COLOR
{
    float2 uv = texCoord;

    float4 color0 = tex2D(Sampler0, uv);
    float4 color1 = tex2D(Sampler1, uv);

    // Combine as cores das duas texturas (exemplo: adição)
    float4 finalColor = color0 + color1;

    // Normalizar a cor final para evitar estourar os valores de cor
    finalColor = saturate(finalColor);

    return finalColor;
}


technique fallback
{
    pass P0
    {
        PixelShader = compile ps_2_0 PS_Main();
    }

    pass P1
    {
        PixelShader = compile ps_2_0 PixelShaderFunction0();
    }

    pass P2
    {
        PixelShader = compile ps_2_0 PixelShaderFunction1();
    }
}
