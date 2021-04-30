class Paper {
    constructor(x, y) {
      var options = {
          'isStatic':false,
          'restitution':0.2,
          'friction':0.5,
          'density':1.2
      }

      this.image=loadImage("paper.png")
      this.body = Bodies.circle(x, y, 15, options);
      this.radius = 60;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(RADIUS);
      image(this.image,pos.x,pos.y, this.radius,this.radius);
      pop();
    }
  };
  