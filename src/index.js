import Project from "./Project";
import addAllDomEvents from "./dom";
import Task from "./task";



addAllDomEvents();

class Todo{
  constructor(){
    this.projects = [];
    this.activeProject; // Remembers which project is active
  }
}

const todo = new Todo();

function createProject(title){
  const project = new Project(title);
  return project;
}

function addProject(){
  const form = document.getElementById('project-form');
  
  form.addEventListener('submit', function(e){
    // Prevents default submit
    e.preventDefault();

    // Create project and push to projects
    const project_title = document.getElementById('project-title').value;

    if(projectTitleAlreadyExist(project_title)){
      alert("Project Title Already Exist.");
      return;
    }
    const newProject = createProject(project_title);
    todo.projects.push(newProject);

    refreshProjects()
 
    // Reset and hide project form after add.
    document.getElementById("project-title").value = '';
    form.style = 'none';
  })

}

function projectTitleAlreadyExist(Title){ // Added to TodoPage Class
  let flag = false;
  todo.projects.forEach((project)=>{
    if(project.title == Title){
      flag = true;
    }
  })
  return flag;
}

function fetchProject(Title){ // Added to TodoPage Class 
  let fetch;
  todo.projects.forEach((project)=>{
    if(project.title == Title){
      fetch = project;
    }
  })
  return fetch;
}

function refreshProjects(){
  // Deletes projects
  const projectList = document.querySelector(".projects-list");
  projectList.innerHTML = '';

  // Reloads projects
  todo.projects.forEach(function(arrayItem){
    const project = document.createElement("button");
    project.classList.add("project-tab");

    const projectIcon = document.createElement("img");
    projectIcon.classList.add("nav-icon");
    projectIcon.src="../img/menu.svg";

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = arrayItem.title;

    const deleteIcon = document.createElement('img');
    deleteIcon.classList.add("nav-icon");
    deleteIcon.src="../img/delete-icon.svg";
    deleteIcon.classList.add("delete-project"); // TODO: Add delete project event listener.

    project.id = arrayItem.title;

    project.appendChild(projectIcon);
    project.appendChild(projectTitle);
    project.appendChild(deleteIcon);

    // Add active to active project
    project.addEventListener("click", function(){
      todo.activeProject = project.id;
      setProjectActive(project);
      displayActiveProjectTasks(project);
    })

    setProjectActive(document.getElementById(todo.activeProject));

    projectList.appendChild(project);
  })
}

// Sets active project class active.
function setProjectActive(project){ 
  const buttons = document.querySelectorAll(".project-tab");

  buttons.forEach((e)=>{
    if(e !== project){
      e.classList.remove("active-project");
    }
    else{
      e.classList.add("active-project");
      displayActiveProjectTasks(project);
    }
  })
}

// TODO: Display Tasks in Project.
function displayActiveProjectTasks(project){
  const activeProject = fetchProject(project.id);
  displayActiveProjectTitle(activeProject.title);

  let activeTasks = activeProject.getTasks();

  console.log(activeTasks); // TODO: display tasks
  
  clearTasks();

  activeTasks.forEach((task)=>{
    const taskDiv = createTaskDiv(task);
    document.querySelector(".tasks").appendChild(taskDiv);
  })
}

function createTaskDiv(task){ //TODO
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task")
  taskDiv.id = task.title;

  const taskLeft = createTaskLeft(task);
  const taskRight = createTaskRight(task);

  taskDiv.appendChild(taskLeft);
  taskDiv.appendChild(taskRight);
  return taskDiv;
}

function createTaskLeft(task){ //TODO
  const taskLeft = document.createElement("div");
  taskLeft.classList.add("task-left");

  const taskComplete = document.createElement("input");
  taskComplete.classList.add("icon"); 
  taskComplete.classList.add("complete"); 
  taskComplete.type = "image";
  taskComplete.src = "../img/circle-outline.svg";

  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task-title")
  taskTitle.textContent = task.title;

  taskLeft.appendChild(taskComplete);
  taskLeft.appendChild(taskTitle);

  return taskLeft
}

function createTaskRight(task){// TODO
  const taskRight = document.createElement("div");
  taskRight.classList.add("task-right");

  const due = document.createElement("p");
  due.textContent = "Due:";

  const date = document.createElement("div");
  date.classList.add("date")
  date.textContent = task.dueDate;

  const deleteBtn = document.createElement("input");
  deleteBtn.classList.add("icon")
  deleteBtn.classList.add("delete");
  deleteBtn.type = "image";
  deleteBtn.src = "../img/delete-icon.svg";

  taskRight.appendChild(due);
  taskRight.appendChild(date);
  taskRight.appendChild(deleteBtn);

  return taskRight;
}

function clearTasks(){
  document.querySelector(".tasks").innerHTML="";
}

function displayActiveProjectTitle(title){
  const projectTitle = document.querySelector(".project-title"); 
  projectTitle.textContent = title;
}

function createTask(title, description, dueDate, priority, color, completed){
  const task = new Task(title, description, dueDate, priority, color, completed);
  console.log(task);
  return task;
}





// Pre-existing project with task
let existingProj = createProject("Project 1Title");
existingProj.addTask(createTask("Task1", "Task 1 Description", "Due Date", 3, false));
existingProj.addTask(createTask("Task2", "Task 2 Description", "Due Date", 2, false));

todo.projects.push(existingProj);

todo.activeProject=existingProj.title;

addProject();
refreshProjects();