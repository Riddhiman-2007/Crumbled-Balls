class Paper extends BaseClass{
    constructor(x, y) {
    super(x,y,60,60);
    this.image = loadImage("paper.png")
    }
    display(){
    super.display(); 
    }
  }