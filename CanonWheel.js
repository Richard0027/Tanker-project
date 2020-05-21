class CanonWheel {
 constructor(x,y,r){
 var options = {
 isStatic: true
 }
 this.body = Bodies.rectangle(x,y,width,height,options);
 this.x;
 this.y = y;
 this.r = r;
World.add(world, this,body);

}
display(){
strokeWeight(2);
fill("brown");
ellipse(this.x,this.y,this.r * 4);

}
};