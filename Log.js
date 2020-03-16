class Log extends BaseClass{constructor(x,y,height,angle){super(x,y,20,height,angle);
this.image=loadImage("wood2.png");
Matter.Body.setAngle(this.body,angle);}
display(){if (this.body.speed<8){super.display();}else{World.remove(world, this.body);
push();
this.visibility=this.visibility-1;
tint(255,this.visibility);
image(this.image,this,this.body.position.x,this.body.position.y,50,50);
pop();}}}