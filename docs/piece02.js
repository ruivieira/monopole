const a0_0x3a82=['textFont','u_time','pop','clear','shaders/blank.vert','setUniform','fonts/8bit.ttf','u_tex0','electricity','background','shaders/glitch2.frag','text','u_resolution','rect','shaders/glitch.frag','pixels/t8rgdz0sxut31.jpg','textSize','shader','push'];(function(_0x3deb10,_0x3a82da){const _0x33efd4=function(_0x1ac1e5){while(--_0x1ac1e5){_0x3deb10['push'](_0x3deb10['shift']());}};_0x33efd4(++_0x3a82da);}(a0_0x3a82,0x168));const a0_0x33ef=function(_0x3deb10,_0x3a82da){_0x3deb10=_0x3deb10-0x0;let _0x33efd4=a0_0x3a82[_0x3deb10];return _0x33efd4;};let uniformsShader;let glitch2Shader;let cactiImg;let tex;let w;let h;let myFont;function preload(){uniformsShader=loadShader(a0_0x33ef('0x5'),a0_0x33ef('0xf'));glitch2Shader=loadShader(a0_0x33ef('0x5'),a0_0x33ef('0xb'));cactiImg=loadImage(a0_0x33ef('0x10'));myFont=loadFont(a0_0x33ef('0x7'));}function setup(){w=windowWidth;h=windowHeight;createCanvas(w,h,WEBGL);tex=createGraphics(w,h);tex2=createGraphics(w,h,WEBGL);tex2[a0_0x33ef('0x12')](uniformsShader);tex3=createGraphics(w,h,WEBGL);tex3['shader'](glitch2Shader);noStroke();}function draw(){tex['push']();tex[a0_0x33ef('0x4')]();tex[a0_0x33ef('0xa')](cactiImg);tex[a0_0x33ef('0x1')](myFont);tex[a0_0x33ef('0x11')](w/0x32);tex['fill'](0x7f);tex[a0_0x33ef('0xc')](a0_0x33ef('0x9'),0x80,0xc8);tex[a0_0x33ef('0x3')]();tex2[a0_0x33ef('0x0')]();tex2['rect'](0x0,0x0,w,h);tex2[a0_0x33ef('0x3')]();tex3[a0_0x33ef('0x0')]();tex3[a0_0x33ef('0xe')](0x0,0x0,w,h);tex3[a0_0x33ef('0x3')]();uniformsShader[a0_0x33ef('0x6')](a0_0x33ef('0x8'),tex);uniformsShader[a0_0x33ef('0x6')](a0_0x33ef('0x2'),millis()/0xa);uniformsShader[a0_0x33ef('0x6')](a0_0x33ef('0xd'),[w*0x2,h*0x2]);glitch2Shader['setUniform'](a0_0x33ef('0x8'),tex2);glitch2Shader['setUniform'](a0_0x33ef('0x2'),millis()/0xa);glitch2Shader['setUniform'](a0_0x33ef('0xd'),[w*0x2,h*0x2]);scale(0x1,-0x1);translate(-width/0x2,-height/0x2);image(tex3,0x0,0x0);}