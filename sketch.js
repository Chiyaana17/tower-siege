const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
poly = loadImage("polygon.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
    world = engine.world;
    polygon = Bodies.circle(150,200,20)
    World.add(world,this.polygon)
    ground1 = new ground(width/2,height-15,width,30) 
	ground2 = new ground(width/2-3,height-70,280,20)
    thread1=new thread({x:150,y:200},polygon)
    fill("#E29AB0")
    box1= new box(516,600,40,40)
    box2= new box(476,600,40,40)
    box3= new box(436,600,40,40)
    box4= new box(396,600,40,40)
    box5= new box(356,600,40,40)
    box6= new box(316,600,40,40)
    box7= new box(276,600,40,40)
    box8= new box(296,554,40,40)
    box9= new box(336,554,40,40)
    box10= new box(376,554,40,40)
    box11= new box(416,554,40,40)
    box12= new box(456,554,40,40)
    box13= new box(496,554,40,40)
    box14= new box(319,514,40,40)
    box15= new box(359,514,40,40)
    box16= new box(399,514,40,40)
    box17= new box(439,514,40,40)
    box18= new box(479,514,40,40)
    box19= new box(459,474,40,40)
    box20= new box(419,474,40,40)
    box21= new box(379,474,40,40)
    box22= new box(339,474,40,40)
    box23= new box(359,434,40,40)
    box24= new box(399,434,40,40)
    box25= new box(439,434,40,40)
    box26= new box(379,394,40,40)
    box27= new box(419,394,40,40)
    box28= new box(399,354,40,40)
    flag=0
	Engine.run(engine);
  
}
function keyPressed(){
    if (keyCode==32){
      thread1.bodyB=polygon.body
      thread1.pointA={x:150,y:200}
      flag=0
    }
  }

function draw() {
  background(0);
  imageMode(CENTER)
  image(poly,polygon.position.x,polygon.position.y,40,40)
 ground1.display()
 ground2.display()
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box13.display()
 box14.display()
 box15.display()
 box16.display()
 box17.display()
 box18.display()
 box19.display()
 box20.display()
 box21.display()
 box22.display()
 box23.display()
 box24.display()
 box25.display()
 box26.display()
 box27.display()
 box28.display()
 drawSprites()
 textSize(20)
 fill(255)
 text("Aim and drag the hexagon and then release the mouse to knock down the tower",50,50)
}
function mouseDragged(){
    if(flag==0){
Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})  
}}
function mouseReleased(){
thread1.release()
flag=1
}



