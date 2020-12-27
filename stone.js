class Stone {
    constructor(x,y,radius) {
      var options = {
          'restitution': 0.4,
          'friction': 0.1 ,
          'density': 20
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      image(this.image,windowWidth/2+250, 100, this.radius, this.radius);
    }
  }