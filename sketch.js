
var play, sea, ship, ship_flare, edges, ship_float
function preload(){
play = loadImage("sea.png");
ship_light = loadAnimation("ship-1.png", "ship-2.png");
ship_float = loadAnimation("ship-3.png", "ship-4.png");


  
}

function setup(){
createCanvas(400,400);
sea = createSprite (850, 200, 400, 400); 
sea.addImage(play); 
sea.velocityX = -4; 
ship = createSprite (200, 210, 10, 80); 
ship.addAnimation("float", ship_float); 
if (keyDown("space")){
  ship.addAnimation("ship", ship_light); }

  
  
 
ship.scale = 0.25; 
sea.scale = 0.4;

  
}

function draw() {
  
  console.log(sea.x)
  
  if (sea.x<0)
{
  sea.x = 200;
}  background("white");
 edges = createEdgeSprites();
  drawSprites();
 
}