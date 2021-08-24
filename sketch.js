var runner_3;
var path;
var  runner_3,pathimg;
var edges;
var leftBoundary,rightBoundary;

function preload()
{
  //pre-load images
  runner_3 = loadAnimation("Runner-1.png","Runner-2.png");
  pathimg = loadImage("path.png");
}

function setup()
{
  createCanvas(450,450);
  
  //create sprites here
  path = createSprite(200,200,20,20);
  path.addImage("running",pathimg);
 
  path.scale = 1.2;
 
  runner = createSprite(200,345,20,20);
  runner.addAnimation("running", runner_3);
  runner.scale = 0.05;

  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  //create right Boundary
  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
}

function draw() 
{
  background("black");
  runner.x = World.mouseX;
  path.velocityY = 1;
  
  if(path.y > 400){
    path.y = height/2;
  }

  edges= createEdgeSprites();
  runner.collide(edges[3]);
  runner.collide(leftBoundary);
  runner.collide(rightBoundary);
  
  drawSprites();
}
