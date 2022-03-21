var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var score=0;
var PLAY=1;
var END=0;
var gamestate=PLAY;






function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
 cloud7 = loadImage("cloud.png") ;
 Obstacle1=loadImage("obstacle1.png");
Obstacle2=loadImage("obstacle2.png") ;
Obstacle3=loadImage("obstacle3.png");
Obstacle4=loadImage("obstacle4.png") ;
Obstacle5=loadImage("obstacle5.png") ;
Obstacle6=loadImage("obstacle6.png");
}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  

  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
 var rand=Math.round(random(1,100))
 console.log(rand)
}

function draw() {
  //set background color
  background(0);
  console.log(gamestate);
  text("score:"+score,500,50);
 

  if(gamestate==PLAY){
    ground.velocityX = -4;
    if(keyDown("space")&& trex.y >= 100) {
      trex.velocityY = -10;
    }
    trex.velocityY = trex.velocityY + 0.8
    score=score+Math.round(frameCount/60)

  }
    if (ground.x < 0){
      ground.x = ground.width/2;
    }
    
    //stop trex from falling down
    trex.collide(invisibleGround);
  spawnClouds();
    spawnObstacle();
  }
  else if(gamestate==END){
   ground.velocityX=0;
  
  }
  
  // jump when the space key is pressed
 
  drawSprites();
  
}

function spawnClouds(){

if(frameCount%60==0){
 Cloud=createSprite(600,100,40,10);
Cloud.velocityX=-3
Cloud.y=Math.round(random(10,60));
Cloud.addImage(cloud7)
Cloud.lifetime=200;
}

}
function spawnObstacle(){
  if(frameCount%60==0){
    Obstacle=createSprite(600,165,10,10);
    Obstacle.velocityX=-3
    Obstacle.scale=0.5;
    Obstacle.lifetime=200;
var rand=Math.round(random(1,6));
switch(rand){
  case 1: Obstacle.addImage(Obstacle1);
          break;
  case 2: Obstacle.addImage(Obstacle2);
          break;
  case 3: Obstacle.addImage(Obstacle3);
          break;
  case 4: Obstacle.addImage(Obstacle4);
          break;
 case 5: Obstacle.addImage(Obstacle5);
          break;
 case 6: Obstacle.addImage(Obstacle6);
          break;
default: break;
}


  }
}
