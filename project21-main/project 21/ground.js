class ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    var groundpos = this.body.position;
    push();
    translate(groundpos.x,groundpos.y)
    rectMode(CENTER);
    strokeWeight(4); 
    fill(255,255,0)
    rect(0, 0, this.w, this.h);
    pop();
  }
  
}