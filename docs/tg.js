const a0_0x1e17=['image','pixels/genesis.jpg','fill','clear','pixels/peter-christopherson.jpg','blue'];(function(_0x223aef,_0x1e1766){const _0x29a4b3=function(_0x291e7f){while(--_0x291e7f){_0x223aef['push'](_0x223aef['shift']());}};_0x29a4b3(++_0x1e1766);}(a0_0x1e17,0xf3));const a0_0x29a4=function(_0x223aef,_0x1e1766){_0x223aef=_0x223aef-0x0;let _0x29a4b3=a0_0x1e17[_0x223aef];return _0x29a4b3;};var img_url=a0_0x29a4('0x4');let img;let orange;let blue;let nx;let ny;let step=0xc8;function preload(){genesis=loadImage(img_url);peter=loadImage(a0_0x29a4('0x1'));}function setup(){createCanvas(displayWidth,displayHeight);nx=displayWidth/step;ny=displayHeight/step;orange=new Riso(a0_0x29a4('0x2'));blue=new Riso('orange');}function draw(){clear();orange[a0_0x29a4('0x0')]();blue['clear']();for(var _0x386d75=0x0;_0x386d75<nx;_0x386d75++){for(var _0x1f442a=0x0;_0x1f442a<ny;_0x1f442a++){orange[a0_0x29a4('0x5')](random(0x64,0xff));orange[a0_0x29a4('0x3')](genesis,_0x386d75*step,_0x1f442a*step,step,step);blue[a0_0x29a4('0x5')](random(0x0,0x9b));blue[a0_0x29a4('0x3')](peter,_0x386d75*step,_0x1f442a*step,step,step);orange['cutout'](blue);}}drawRiso();}