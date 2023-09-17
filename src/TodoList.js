export default class TodoList{
  constructor() {
    this.projects = []
    this.all = []
    this.completed = []
  }

  addProject(Project){
    this.projects.append(Project);
  }

  displayProjects(){
    
  }
}