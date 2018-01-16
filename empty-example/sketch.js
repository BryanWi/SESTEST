var ship;

var c= 0;

function setup() {
 

createCanvas(windowWidth, windowHeight);
  
ship= new Ship();


}






function draw() {
 
background(color(0,255-c,c));
c++;

if(c>=255){c=0;}
 fill(50);
 rect(windowWidth/2,windowHeight/2, 55, 55);
ship.render}




function Ship(){
  this.r=100;
  

this.render= function(){

   
fill(color(0,100,100));
    triangle(-this.r, this.r, this.r, this.r, 0, -this.r);
  }


}
