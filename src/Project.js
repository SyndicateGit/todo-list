export default class Project{

  constructor(title = ""){
    this.title = title;
    this.tasks = []
  }

  setTitle(title){
    this.title = title;
  }

  getTitle(){
    return this.title
  }

  setColor(color){
    this.color = color;
  }

  getColor(){
    return this.color;
  }
}