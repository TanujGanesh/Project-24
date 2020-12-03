class Paper{
    constructor(x,y,rd){
        var opt={
           isStatic:false, 
           restitution:0.3,
           friction:0.5,
           density:1.2
        }
        
        this.rd = rd;
        this.x=x;
        this.y=y;
        this.body = Bodies.circle(x,y,rd,opt);
        World.add(world,this.body);   
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill("magenta");
        ellipse(pos.x,pos.y,this.rd,this.rd);
    }
}