const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper, dustbin;
var ground;

function preload(){
	background(225);
	
paper = loadImage("paper.png");
dustbin = loadImage("dustbin.png");



}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

	paper = new Paper(700,320,70,70);
    dustbin = new Dustbin(920,320,70,);

}

function draw(){
    background("white");
	Engine.update(engine);
	
	console.log(paper.body.position.x);
	
	console.log(dustbin.body.position.y);
	
	console.log(ground.body.angle);
	
    paper.display();
    disdustbin.play();
    ground.display();
    
    

}


