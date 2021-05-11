var wall,thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);

  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);

  bullet=createSprite(50, 200, 50, 5);
  bullet.shapeColor=color("white");

  bullet.velocityX=speed;

  //wall=createSprite(1200,200,60,100);
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=color(230,230,230);
  wall.shapeColor=color(80,80,80)




}

function draw() {
  background("black");
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);
  
    if(damage>10){
      wall.shapeColor=color("red");
    }
    if(damage<10){
      wall.shapeColor=color("blue");
    }
  }
  



  drawSprites();
}

function hasCollided(lbullet,lwall){
bulletRightEdge=(lbullet.width+lbullet.width)/2
wallLeftEdge=lwall.x-lbullet.x;
if(bulletRightEdge>=wallLeftEdge){
  return true
}
else{
  return false;
}
}