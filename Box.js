class Box extends BaseClass{constructor(x,y,width,height){super(x,y,width,height);
this.image=loadImage("wood1.png");}
display(){if (this.body.speed<5.5){super.display();}else{World.remove(world, this.body);
push();
this.visibility=this.visibility-1;
tint(255,this.visibility);
image(this.image,this,this.body.position.x,this.body.position.y,50,50);
pop();}}};