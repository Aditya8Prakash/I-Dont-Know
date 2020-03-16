class Ground{constructor(x,y,width,height){var options = {isStatic:true}
this.body=Bodies.rectangle(x,y,width,height,options);
this.width=width;
this.height=height;
this.image=loadImage("ground.png");
World.add(world,this.body);}
display(){var posx=this.body.position.x;
var posy=this.body.position.y;
push();
imageMode(CENTER);
image(this.image,posx,posy,this.width,this.height);
pop();}}