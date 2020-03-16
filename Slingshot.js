class Slingshot{constructor(bodyA,pointB){var options={bodyA:bodyA,pointB:pointB,stiffness:0.05,length:12}
this.sling1=loadImage("sling1.png");
this.sling2=loadImage("sling2.png");
this.sling3=loadImage("sling3.png");
this.pointB=pointB;
this.sling=Constraint.create(options);
World.add(world,this.sling);}
fly(){this.sling.bodyA=null;}
attach(body){this.sling.bodyA=body;}
display(){if(this.sling.bodyA){var pointA=this.sling.bodyA.position;
var pointB=this.pointB;
push();
stroke(48,22,8);
if(pointA.x<220){strokeWeight(4);
line(pointA.x-20,pointA.y,pointB.x-10,pointB.y);
line(pointA.x-20,pointA.y,pointB.x+30,pointB.y);
image(this.sling3,pointA.x-30,pointA.y-10,15,30);}else{strokeWeight(7);
line(pointA.x+25,pointA.y,pointB.x-10,pointB.y);
line(pointA.x+25,pointA.y,pointB.x+30,pointB.y);
image(this.sling3,pointA.x+25,pointA.y-10,15,30);}}
image(this.sling1,200,160);image(this.sling2,170,160);
pop();}}