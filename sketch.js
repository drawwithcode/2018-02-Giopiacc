function preload(){
  // put preload code here
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
  frameRate(60);

}

function draw() {

  //altsx
  push();
  translate(width/2-500,height/2-50-101);
  rotate(frameCount);
  stroke(lerpColor( color('#E91E63'),color('#FFF59D'), frameCount/10));
  strokeWeight(1);
  line(sin(frameCount)*200,cos(frameCount)*200,sin(0)*100,cos(0)*100);
  pop();
  if (frameCount == 360) {
    noLoop();
  }

  push();
  translate(width/2-500,height/2+101-50);
  rotate(frameCount);
  stroke(lerpColor(color('#FDAA27'), color('#1A237E'), frameCount/10));
  strokeWeight(1);
  line(-sin(frameCount)*200,-cos(frameCount)*200,-sin(0)*100,-cos(0)*100);
  pop();
  if (frameCount == 360) {
    noLoop();
  }
//altodx
  push();
  translate(width/2+500,height/2-50-101);
  rotate(frameCount);
  stroke(lerpColor(color('#AED581'), color('#1A237E'), frameCount/10));
  strokeWeight(1);
  line(sin(frameCount)*200,cos(frameCount)*200,sin(0)*100,cos(0)*100);
  pop();
  if (frameCount == 360) {
    noLoop();
  }
  push();
  translate(width/2+500,height/2+101-50);
  rotate(frameCount);
  stroke(lerpColor( color('#E91E63'),color('#FFF59D'), frameCount/10));
  strokeWeight(1);
  line(-sin(frameCount)*200,-cos(frameCount)*200,-sin(0)*100,-cos(0)*100);
  pop();
  if (frameCount == 360) {
    noLoop();
  }
  //centro


  translate(width/2, height/2);
   rotate(frameCount*4);
  line(300,0,cos(frameCount*3)*300,sin(frameCount*3)*300);

   stroke(lerpColor(color('#FFF176'), color('#F44336'),frameCount/50));
   noFill();

   ellipse(60,10,50,50);
   ellipse(-60,-10,50,50);
   ellipse(30,50,100,100);
   ellipse(-60,-10,100,100);
   ellipse(120,20,50,50);
   if (frameCount == 360) {
     noLoop();
   }

   // rotate(frameCount*2);
   // stroke(lerpColor(color('#ea0043'), color('#0fefca'),frameCount/120));

   // //sopra
   // line(0,height,cos(frameCount*3)*width,sin(frameCount*3)*width);
   //
   //









}
