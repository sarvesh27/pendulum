class Bob{

constructor(x,y,radius){

var options={

    isStatic:false,
    restitution:1,
    friction:0.5,
    density:1.2
}

this.body=Bodies.circle(x,y,radius,options)
this.radius=radius

World.add(world,this.body)

}

display(){
var v=this.body.position;

ellipseMode(RADIUS)
ellipse(v.x,v.y,this.radius,this.radius)

}






}