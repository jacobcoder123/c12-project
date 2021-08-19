var garden,rabbit;
var gardenImg,rabbitImg;
var apple,apple_Img
var leaf,leaf_Img
function preload()
{
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple_Img = loadImage ('apple.png');
  leaf_Img = loadImage("leaf.png");
}

function setup()
{
  
  createCanvas(400,400);
  
  // Moving background
  garden=createSprite(200,200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() 
{
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
spawnApples()
spawnLeaf()
  drawSprites();
}
function spawnApples()
{
  // write your code here 
  if(frameCount%80===0)
  {
   apple= createSprite (400,10,40,10);
   apple.addImage(apple_Img)
   apple.velocityY = 3;
   apple.scale = 0.1   
   apple.x=Math.round(random(10,100))
 }
}
function spawnLeaf()
{
  if(frameCount%80===0)
  {
   leaf= createSprite (400,90,40,10);
   leaf.addImage(leaf_Img)
   leaf.velocityY = 3;
   leaf.scale = 0.1   
   leaf.x=Math.round(random(100,360))
 }
}
