class slingshot{

    constructor(b1,b2){
   var options={
       bodyA:b1,
       pointB:b2,
       length:20,
       stiffness:0.04
   }
   this.pointb=b2
   this.sling=Matter.Constraint.create(options);
   World.add(world,this.sling);
   
    }
show(){
if(this.sling.bodyA){
var pointA=this.sling.bodyA.position;
var pointB=this.pointb;

push();
strokeWeight(10),
line(pointA.x,pointA.y,pointB.x,pointB.y);
pop();
}

}
fly(){
this.sling.bodyA=null;
}
}