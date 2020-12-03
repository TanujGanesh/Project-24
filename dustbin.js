class bin{
    constructor(x,y,w,h,a){
        var opt={
            isStatic: true,
            friction: 0.5,
            restitution: 0.5,
            density:2.0
        }
        this.w=w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h,opt);
        Matter.Body.setAngle(this.body,a);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var an = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(an);
        rectMode(CENTER);
        fill("white");
        noStroke;
        rect(0,0,this.w,this.h);
        pop();
    }
}