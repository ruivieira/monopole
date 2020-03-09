precision mediump float;

uniform sampler2D u_tex0;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_center;
uniform float u_rate; // 0.1111

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 g = fragCoord.xy;    
    g*=sin(length(g)*u_rate+u_time*0.01)/10.0 + 1.0;

    
    vec2 uv = g/u_resolution.xy;
	fragColor = vec4(texture2D(u_tex0,uv).rgb,1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}