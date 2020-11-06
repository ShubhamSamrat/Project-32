class Block{
	constructor(x,y)
	{
		var options={
			isStatic:false,
			restitution :0,
			friction :0.5,
			density:0.3
			}
		this.x=x;
		this.y=y;
		this.visiblity = 255;
		
		this.image=loadImage("cube.png")
		this.body=Bodies.rectangle(this.x, this.y, 80,80, options)
		World.add(world, this.body);
	}

	display()
	{
		var blockPos=this.body.position;
		//console.log(this.body.speed);
		
		if(this.body.speed < 5){
			push()
				translate(blockPos.x, blockPos.y);
				// rectMode(CENTER);
				rotate(this.body.angle)
				imageMode(CENTER);
				image(this.image, 0,0,80,80)
			pop()

		} else{
			World.remove(world,this.body);
			

			push();
			
			
			tint(255,this.visiblity);
			this.visiblity = this.visiblity - 10;
			image(this.image,this.body.position.x,this.body.position.y,80,80);
			pop();
		  }
		}

		score(){
			if (this.visiblity < 0 && this.visiblity > -505 ){
				score++;
			}
			
		}
		
}