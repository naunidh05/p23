class Box{
    constructor(x,y,width,height) {

var opt={
    isStatic:true
}
   this.body=Bodies.rectangle(x,y,width,height,opt);
   this.width=width;
   this.height=height;
   World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    var angle=this.body.angle;
    
    fill(220);
   rect(pos.x,pos.y,this.width,this.height);
   //ellipse(pos.x,pos.y,this.r,this.r);
}
}
