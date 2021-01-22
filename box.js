class box {
    constructor (x,y,w,h){
    this.width=w;
    this.height=h;
    /*var properties={
        friction:1000
    }*/
    this.body=Matter.Bodies.rectangle(x,y,this.width,this.height,/*properties*/)
    Matter.World.add(world,this.body)
    }
    display(){
        push()
    rectMode(CENTER)
      //translate(this.body.position.x,this.body.position.y)
     //rotate(this.body.angle)
     var star =this.body.position
rect(star.x,star.y,this.width,this.height)
pop()
}
}