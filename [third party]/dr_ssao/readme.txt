Resource: dr_ssao v0.0.3
Author: Ren712
Contact: knoblauch700@o2.pl

Description:
Screen space ambient occlusion (SSAO) is a computer graphics technique for efficiently 
approximating the ambient occlusion effect in real time. This implementation is heavily based
on reshade mxao shader (1.5.7-2.0) by Marty McFly.
https://reshade.me/forum/shader-presentation/1874-marty-mcfly-s-ambient-obscurance-mxao-with-il
The effect is applied before gtasa effects (smoke, fire etc) are drawn. 

Uses (but does not require) dr_rendertarget in order to provide interpolated normals 
for peds and vehicles.
https://community.multitheftauto.com/index.php?p=resources&s=details&id=15965

You can customise the effects by editing fx/ssao_dr_settings.txt



