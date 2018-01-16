var ship;

var c= 0;
var x=0, y=0;

function setup() {
 

createCanvas(windowWidth, windowHeight);
  
ship= new Ship();


}






function draw() {
 
background(color(0,255-c,c));
c++;

if(c>=255){c=0;}
 fill(50);
 rect((windowWidth/2)+x,(windowHeight/2)+y, 55, 55);
ship.render
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

}




function Ship(){
  this.r=100;
  

this.render= function(){

   
fill(color(0,100,100));
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
  }


}
