var car 
var wall
var speed
var weight
var thick
function setup() {
  createCanvas(1600,400);
  speed = random(55,90)
  weight = random(400, 1500)
  wall = createSprite(1500, 200, 50, height/2)
  car = createSprite(50, 200, 50, 50)
  car.velocityX = speed 
}

function draw() {
  background("black"); 
  if(wall.x - car.x < wall.width/2 + car.width/2 
    && car.x  - wall.x < wall.width/2 + car.width/2 
    && wall.y - car.y < wall.height/2 +car.height/2 
    && car.y  - wall.y < car.height/2 + car.height/2 ){
      car.velocityX =0
      if (0.5*weight*speed*speed/22500< 100){
      car.shapeColor = "green";
    }
    if (0.5*weight*speed*speed/22500> 99  && 0.5*weight*speed*speed/22500< 181){
      car.shapeColor = "yellow";
    }
    if (0.5*weight*speed*speed/22500> 180){
      car.shapeColor = "red";
    }
  drawSprites();
}