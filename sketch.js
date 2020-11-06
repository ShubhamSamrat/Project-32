
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Events = Matter.Events;

var Boy,Tree,polygon;
var cons,backgroundImg,scoreColour = "Black";
var slingshot,score = 0,main;

function preload()
{

  getBackgroundImg();
  main =  loadImage("bg.png");
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	Ground1 = new Ground(700,660,1400,20);
	polygon = new Polygon(200,400,30);

	block1 = new Block(990,430);
	block2 = new Block(1070,430);
	block3 = new Block(1150,430);
	block4 = new Block(1230,430);
  block5 = new Block(1310,430);
	block6 = new Block(1020,325);
	block7 = new Block(1100,325);
	block8 = new Block(1180,325);
	block9 = new Block(1260,325);
  block10 = new Block(1140,240);
  

  block11 = new Block(550,170);
  block12 = new Block(630,170);
	block13 = new Block(710,170);
	block14 = new Block(790,170);
  block15 = new Block(870,170);
  block16 = new Block(590,80);
	block17 = new Block(670,80);
	block18 = new Block(750,80);
	block19 = new Block(830,80);
	/*block20 = new Block(1140,240);*/
  
  




	Engine.run(engine);

	slingshot = new SlingShot(polygon.body,{x:210,y:455});
  
}


function draw() {
  rectMode(CENTER);
  if(backgroundImg){
      background(backgroundImg);

  }  else {background(main);}


  /*etectCollision(polygon,mango1);
  detectCollision(polygon,mango2);
  detectCollision(polygon,mango3);
  detectCollision(polygon,mango4);
  detectCollision(polygon,mango5);*/






  Ground1.display();
  slingshot.display();
  polygon.display();
  
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();

  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();
  block17.score();
  block18.score();
  block19.score();
  


  

  textSize(20);
  fill("White");
  text("Press Space To Retry",1000,600);
 
  textSize(35);
  fill(scoreColour);
  text("Score : " + score,100,100);

  
  
  
  drawSprites();
 
}



function mouseDragged(){
    Events.on(engine,"afterUpdate",function(){ 
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
	})
	
	

    
   
}


function mouseReleased(){

    engine.events = {};
    slingshot.fly();
}





function keyPressed(){
	if(keyCode === 32){
		
		Matter.Body.setPosition(polygon.body, {x: 200 , y: 400});
		slingshot.attach(polygon.body);
	}
  
  }

  async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var extract = await response.json();
    var dateTime = extract.datetime;
    var hour = dateTime.slice(11,13);
    
    if(hour >5 && hour <18){
        backgroundImg = loadImage("bg.png");
    } else {
        backgroundImg = loadImage("bg1.png");
        scoreColour = "White"
    }
    

    
}
