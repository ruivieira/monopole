const a0_0x8d44=['cutout','image','pixels/peter-christopherson.jpg','blue','orange','clear','fill','pixels/genesis.jpg'];(function(_0x3069d1,_0x8d4488){const _0x4fef4e=function(_0x10f2dc){while(--_0x10f2dc){_0x3069d1['push'](_0x3069d1['shift']());}};_0x4fef4e(++_0x8d4488);}(a0_0x8d44,0x12f));const a0_0x4fef=function(_0x3069d1,_0x8d4488){_0x3069d1=_0x3069d1-0x0;let _0x4fef4e=a0_0x8d44[_0x3069d1];return _0x4fef4e;};var img_url=a0_0x4fef('0x0');let img;let orange;let blue;let nx;let ny;let step=0xc8;function preload(){genesis=loadImage(img_url);peter=loadImage(a0_0x4fef('0x3'));}function setup(){createCanvas(displayWidth,displayHeight);nx=displayWidth/step;ny=displayHeight/step;orange=new Riso(a0_0x4fef('0x4'));blue=new Riso(a0_0x4fef('0x5'));}function draw(){clear();orange[a0_0x4fef('0x6')]();blue[a0_0x4fef('0x6')]();for(var _0x37b0da=0x0;_0x37b0da<nx;_0x37b0da++){for(var _0x16cc57=0x0;_0x16cc57<ny;_0x16cc57++){orange[a0_0x4fef('0x7')](random(0x64,0xff));orange[a0_0x4fef('0x2')](genesis,_0x37b0da*step,_0x16cc57*step,step,step);blue[a0_0x4fef('0x7')](random(0x0,0x9b));blue['image'](peter,_0x37b0da*step,_0x16cc57*step,step,step);orange[a0_0x4fef('0x1')](blue);}}drawRiso();}