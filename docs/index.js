class FixedQueue{constructor(t){this.size=t,this.t=[]}add(t){this.t.length>this.size&&(this.t.shift(),console.log("shifting")),console.log(`Added ${t}`),this.t.push(t)}}class Orb{constructor(t,i,s){this.i=t,this.x=i,this.y=s,this.s=100*Math.random(),this.h=this.s,this.o=125+120*Math.random(),this.l=46+20*Math.random(),this.p=206+30*Math.random(),this.u=0,this.red=this.o,this.green=this.l,this.blue=this.p,this.rate=25+50*Math.random()}m(t,i,s,h){let a=color(t,i,s,2.5);this.i.stroke(a),this.i.g(),this.i.M(5),this.i.ellipse(this.x,this.y,h,h)}v(){this.m(this.red,this.green,this.blue,this.h)}C(){this.red=this.o*Math.sin(this.u/this.rate),this.green=this.l*Math.sin(this.u/this.rate),this.blue=this.p*Math.sin(this.u/this.rate),this.u+=1}S(){this.h=map(Math.sin(this.u/20),-1,1,50,this.s+60)}}let orbs=[];var bg;const num=6;var prevPos;let g,fontSize,bounds,points,inkArray=[],maxSize=[];var string="monopole";function preload(){font=loadFont("fonts/JetBrainsMono-Regular.ttf"),bg=loadImage("pixels/david_small.png")}function setup(){createCanvas(displayWidth,displayHeight),g=createGraphics(displayWidth,displayHeight),background(52,235,64);for(var t=0;t<150;t++)orbs.push(new Orb(g,Math.random()*displayWidth,Math.random()*displayHeight));fontSize=displayWidth/10.625,bust=createGraphics(343,639),bounds=font.W(string,0,0,fontSize),console.log(bounds),points=font.k(string,0,0,fontSize,{F:.2,O:0}),console.log(`text ratio: ${displayWidth/fontSize}`)}function draw(){clear(),background(52,235,64),tint(255,75),image(bg,300,100),noTint(),orbs.map(t=>{t.v(),t.C(),t.S()}),image(g,0,0),translate((width-bounds.w)/2,(height-bounds.H)/2+bounds.H);var t=map(Math.sin(frameCount/50),-1,1,0,200),i=map(Math.cos(frameCount/50),-1,1,0,.006);noFill();let s=color(map(Math.sin(frameCount/40),-1,1,50,105),map(Math.sin(frameCount/60),-1,1,0,105),map(Math.sin(frameCount/40),-1,1,0,155),100);stroke(s),strokeWeight(16),beginShape(POINTS);for(let s=0;s<points.length;s++){let n=points[s];var h=noise((frameCount+n.x)*i,n.y*i),a=noise(n.x*i,(frameCount+n.y)*i),o=n.x+map(h,0,1,-1,1)*t,e=n.y+map(a,0,1,-1,1)*t;vertex(o,e)}endShape(CLOSE)}