const a0_0x506d=['pixelDensity','shader','u_time','setUniform','u_mouse','tex','u_center','../shaders/mh01.frag','u_rate','../shaders/blank.vert'];(function(_0x2c2abf,_0x506dfd){const _0x44b54f=function(_0xcba915){while(--_0xcba915){_0x2c2abf['push'](_0x2c2abf['shift']());}};_0x44b54f(++_0x506dfd);}(a0_0x506d,0x11d));const a0_0x44b5=function(_0x2c2abf,_0x506dfd){_0x2c2abf=_0x2c2abf-0x0;let _0x44b54f=a0_0x506d[_0x2c2abf];return _0x44b54f;};let canvas;let myShader;let pg,pg2;function preload(){myShader=loadShader(a0_0x44b5('0x4'),a0_0x44b5('0x2'));}function setup(){canvas=createCanvas(windowWidth,windowHeight);pixelDensity(0x1);noStroke();background(0x0);fill('red');ellipse(width/0x2,height/0x2,0x1);pg=createGraphics(width,height,WEBGL);pg[a0_0x44b5('0x5')](0x1);pg[a0_0x44b5('0x6')](myShader);myShader[a0_0x44b5('0x8')](a0_0x44b5('0x0'),canvas);myShader[a0_0x44b5('0x8')]('u_resolution',[width,height]);myShader['setUniform'](a0_0x44b5('0x1'),0.7);myShader[a0_0x44b5('0x8')](a0_0x44b5('0x3'),0.1);frameRate(0x14);}function draw(){myShader[a0_0x44b5('0x8')](a0_0x44b5('0x7'),millis()/0xa);myShader[a0_0x44b5('0x8')](a0_0x44b5('0x9'),[map(sin(frameCount/0xa),-0x1,0x1,0x0,width),map(sin(frameCount/0xa),-0x1,0x1,0x0,height)]);myShader['setUniform'](a0_0x44b5('0x1'),map(sin(frameCount/0x64),-0x1,0x1,0.1,0x2));myShader[a0_0x44b5('0x8')](a0_0x44b5('0x3'),map(sin(frameCount/0x3e8),-0x1,0x1,0.1,0x4));pg[a0_0x44b5('0x6')](myShader);pg['quad'](-0x1,-0x1,-0x1,0x1,0x1,0x1,0x1,-0x1);image(pg,0x0,0x0);}let isPlaying=!![];function keyPressed(){isPlaying=!isPlaying;if(isPlaying)loop();else noLoop();}function windowResized(){resizeCanvas(windowWidth,windowHeight);myShader[a0_0x44b5('0x8')]('u_resolution',[width,height]);}