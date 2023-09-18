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

  addTask(Task){
    this.tasks.push(Task);
  }

  getTasks(){
    return this.tasks;
  }
}