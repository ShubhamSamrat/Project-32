class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.body1 = Bodies.rectangle(x+455,y-177,width-990,height,options);
      this.body2 = Bodies.rectangle(x+12,y-437,width-970,height,options);
      this.width = width;
      this.height = height;
      
      this.image1 = loadImage("boy.png");
      World.add(world, this.body);
      World.add(world, this.body1);
      World.add(world, this.body2);
    }
    display(){
      var pos =this.body.position;
      var pos1 =this.body1.position;
      var pos2 =this.body2.position;
      rectMode(CENTER);
      fill("red");
      
      
      
      image(this.image1,pos.x-550,pos.y-310,300,400);
      rect(pos.x, pos.y, this.width, this.height);
      fill("#DDA66C");
      
      strokeWeight(0);
      rect(pos1.x, pos1.y, this.width-990, this.height);
      rect(pos2.x, pos2.y, this.width-970, this.height);
    }
  };

