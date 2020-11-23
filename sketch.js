var backIMG
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render
const Constraint = Matter.Constraint


function preload()
{
backIMG = loadImage("backIMG.jpg")
}

function setup() {
  createCanvas(800, 700);


  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  rocket = new Rocket(400,630,20,20)  
ground = new Ground(400,675,800,20)
 

Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(backIMG);

 

  rocket.display()
  ground.display()


  drawSprites();
 
}


// function keyPressed(){
//   if(keyCode === 32){
//       slingshot.attach(biden.body);
//   }
// }
