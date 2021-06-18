class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smoke = loadImage("sprites/smoke.png")
    this.t=[];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>3&&this.body.position.x>200){
      var pos = [this.body.position.x,this.body.position.y]
    this.t.push(pos)
    for(var i=0;i<this.t.length;i++){
      image (this.smoke,this.t[i][0],this.t[i][1])
    }
    }

    
  }
}
