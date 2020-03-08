precision mediump float;

uniform sampler2D u_tex0;
uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_center;
uniform float u_rate;

const float pi = 3.14159265359;

vec3 hsv2rgb(vec3 c)
{
    float s = c.y * c.z;
    float s_n = c.z - s * .5;
    return vec3(s_n) + vec3(s) * cos(2.0 * pi * (c.x + vec3(1.0, 0.6666, .3333)));
}

vec3 GetSpiralColor(float a, float i, float t)
{
    
    a += 2.0*pi*floor(i);
    // apply color
    float h = a;
    h *= 1.004*t;
    h = 0.5*(sin(h) + 1.0);
    h = pow(h, 3.0);
    h += 1.222*t + 0.4;
    
    float s = a;
    s *= 1.01*t;
    s = 0.1*(sin(s) + 1.0);
    s = pow(s, 2.0);
    
    float v = a;
    v *= t;
    v = sin(v);
    v = 0.5*(v + 1.0);
    v = pow(v, 3.0);
    // v *= pow(sin(fract(i)*pi), 0.4);
    
    return vec3(h, s, v);
}       
        
void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
	vec2 uv = fragCoord.xy;
    uv -= u_resolution.xy / 2.0;
    uv /= u_resolution.x;

    vec4 mousePos = 0.01*(u_mouse.xyxy / u_resolution.xyxy);
 	  uv *= 40.0;
    if (mousePos.y > 0.0)
    	uv *= 4.0 * mousePos.y;
    
    float a = atan(uv.y, uv.x);
    float d = length(uv);
    
    // apply slight pow so center is smaller
    d = pow(10.0*d, u_center); // 0.7
    
    // make spiral
    float i = d;
    i -= a/(2.0*pi) + 0.5;
    
    // change over time
    float t = u_rate*(u_time + 200.0*mousePos.x);
    
    vec3 c1 = hsv2rgb(GetSpiralColor(a, i, t));
    vec3 c2 = hsv2rgb(GetSpiralColor(a, i+1.0, t));
    
    float p = fract(i);
    vec3 c3 = mix(c1, c2, p);
    
	fragColor = vec4(c3, 1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}