class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.transparency = 255
  }

  display(){
    console.log(this.body.speed);
    if(this.body.speed < 3){
      super.display();
    }
    else {
      //remove the pig
    World.remove(world,this.body)
    push()
    this.transparency = this.transparency - 5 
    tint(255, this.transparency)
    image (this.image, this.body.position.x, this.body.position.y, 50, 50)
    pop()
    }
    
  }

};