class GameObject{

  components = []

  constructor(name){
    this.name = name;
  }

  addComponent(component){
    this.components.push(component);
    component.parent = this;
  }

  draw(ctx){
    for(let component of this.components){
      if(component.draw){
        component.draw(ctx);
      }
    }
  }
  update(ctx){

  }
}