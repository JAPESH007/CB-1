class paper{
constructor(x,y,r){
var options= {
isStatic:false,
"restitution":0.3,
"friction":0.3,
"density":1.2
    
}


this.image=loadImage("paper.png")
this.x =x
this.y=y
this.r =r
this.body =Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body)
}
display(){
var pos=this.body.position
push()
translate(pos.x,pos.y)
fill(255,0,255)
imageMode(CENTER)
image(this.image,0,0,this.r,this.r)
pop()
    fill("red")
   // circle(this.body.position.x,this.body.position.y,this.r)
}



}