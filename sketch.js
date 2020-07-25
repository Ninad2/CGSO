var wall1,wall2,wall3;
var car1,car2,car3;

function setup() {
  createCanvas(700,700);
  wall1 = createSprite(650,75, 50,100);
  wall2 = createSprite(650,200,50,100);
  wall3 = createSprite(650,325,50,100);
  car1 = createSprite(30,75,40,40);
  car2 = createSprite(30,200,40,40);
  car3 = createSprite(30,325,40,40);
}

function draw() {
  background(0,0,0);


  car1.velocityX = 5;
  if(car1.x - wall1.x < wall1.width/2 + car1.width/2
    && wall1.x - car1.x < wall1.width/2 + car1.width/2
    && car1.y - wall1.y < wall1.height/2 + car1.height/2
    && wall1.y - car1.y < wall1.height/2 + car1.height/2){
      car1.shapeColor = "red";
      car1.velocityX = 0;
  }

  car2.velocityX = 5;
  if(car2.x - wall2.x < wall2.width/2 + car2.width/2
    && wall2.x - car2.x < wall2.width/2 + car2.width/2
    && car2.y - wall2.y < wall2.height/2 + car2.height/2
    && wall2.y - car2.y < wall2.height/2 + car2.height/2){
      car2.shapeColor = "yellow";
      car2.velocityX = 0;
  }

  car3.velocityX = 5;
  if(car3.x - wall3.x < wall3.width/2 + car3.width/2
    && wall3.x - car3.x < wall3.width/2 + car3.width/2
    && car3.y - wall3.y < wall3.height/2 + car3.height/2
    && wall3.y - car3.y < wall3.height/2 + car3.height/2){
      car3.shapeColor = "green";
      car3.velocityX = 0;
  }
  drawSprites();
}