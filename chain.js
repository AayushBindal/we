class Chain {
    constructor(bodyA,bodyB){
        var options = {
            bodyA: stone.body,
            bodyB: inVisible.body,
            stiffness: 0.04,
            length: 100
        }
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var pointA = this.chain.bodyA.position;
        var pointB = this.chain.bodyB.position;
        strokeWeight(3);
        fill("red");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}