precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_center;
uniform float u_rate;

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/u_resolution.xy;
    uv -= .5; // -0.5 <> 0.5
    uv.x *= u_resolution.x / u_resolution.y;
	
    int N = 2; // SIDES OF SHAPE
    
    // angle
    float a = atan(uv.y, uv.x); // radians(180.); // ROTATE SHAPE
    
    // extension of Baldwin's shape: transforming to a spiral
    float spiral_step = 2.; // SET TO 0 FOR SIMPLE GEOMETRIC SHAPE (removes spiral)
    a += spiral_step * u_time * length(uv);
    
    // slice of circle
    float f = radians(360.)/float(N);
    
    // distance function
    // float d = floor(0.5 + a/f) * f -a ; // UNCOMMENT TO UNDERSTAND CONSTRUCTION
    float d = cos(floor(0.5 + a/f) * f - a) * length(uv);

    // vec3 col = vec3(d); // UNCOMMENT TO SEE SMOTH VERSION AND UNDERSTAND CONSTRUCTION
    vec3 col = vec3(1. - smoothstep(.24,.34,d)); // UNCOMMENT TO CUT
    
    // Output to screen
    fragColor = vec4(col,1.0);
}

void main() {
    mainImage(gl_FragColor, gl_FragCoord.xy);
}