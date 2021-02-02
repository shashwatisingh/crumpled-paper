class Paper {
    constructor(x, y) {

      
      s
      var options = {
        'density':0.3,
        'friction': 0.5,
        'restitution':1.2
      };
      
      //overriding an existing property
      this.image = loadImage("paper.png");
      
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      
    };
  };
  