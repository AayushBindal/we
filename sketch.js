const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg;
var ground;
var boy;
var tree;
var stone1;
var inVisible;
var chain;
var mango;
var mango1;
var mango1,mango2, mongo3, mango4 , mango5, mango6;

function preload(){
	bg = loadImage("background.jfif");
}

function setup() {
	createCanvas(windowWidth,windowHeight-4);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2,height/2+300,width,60);
	boy = new Boy(width/2-300,height/2+160,200,270);
	tree = new Tree(width/2+width/4,height/2-30,500,600);
	stone1 = new Stone(mouseX,mouseY,40);
	inVisible = new Ground(width/2-380,height/2+130,10,10);
	mango6 = new Mango(width/2+500,350,200,200);
	mango1 = new Mango1(width/2+360,270,150,150);
	mango2 = new Mango2(width/2+220,250,130,130);
	mango3 = new Mango2(width/2+500,230,100,100);
	mango4 = new Mango1(width/2+230,360,100,100);
	mango5 = new Mango(width/2+360,150,130,130);

}


function draw() {
  Engine.update(engine);
  
  background(bg);

  ground.display();
  boy.display();
  tree.display();
  inVisible.display();
  mango6.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();

  detectollision(stone1, mango1);
  detectollision(stone1, mango2);
  detectollision(stone1, mango3);
  detectollision(stone1, mango4);
  detectollision(stone1, mango5);
  detectollision(stone1, mango6);

  textSize(20);
  stroke("white");
  fill("white");
  text("press space to get second chance to play",width/2-110,height/2+309);
}

function detectollision(stone, mango){
	mangoBodyPosition = mango.body.position
	stoneBodyPosition = stone.body.position
	var distance = dist(mangoBodyPosition.x, mangoBodyPosition.y, stoneBodyPosition.x, stoneBodyPosition.y);
	if(distance<= mango.r + stone.r){
			Matter.Body.setStatic(mango,false);
	}
}