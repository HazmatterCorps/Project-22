const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine, world;

var night, nightImage;
var star, starImage;
var fairy, fairyImage; 

function preload()
{
   //preload the images here
  nightImage=loadImage("starnight.png");
  starImage=loadImage("star.png")
  fairyImage=loadImage("fairy2.png")

}

function setup() {
  createCanvas(800,750);

  engine=Engine.create();
  world=engine.world;


  night=createSprite(400,375);
  night.addImage(nightImage);
  
  star=createSprite(650,20);
  star.addImage(starImage);
  star.scale=0.2;

  fairy=createSprite(100,575);
  fairy.addImage(fairyImage);
  fairy.scale=0.2;


}


function draw() {
  background("black");

  Engine.update(engine);

  if((star.position.y >530)&&(fairy.position.x > 530)&&(fairy.position.x < 580)){
    star.velocityY=0;
  }


  drawSprites();

}


 function keyPressed(){
  
  if(keyCode === LEFT_ARROW){
    fairy.x=fairy.x-20;
  }

  if(keyCode === RIGHT_ARROW){
    fairy.x=fairy.x+20;
  }

  if(keyCode === DOWN_ARROW){
    star.velocityY=5;
  }






 }
