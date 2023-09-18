import Project from "./Project";
import addAllDomEvents from "./dom";
import Task from "./task";

var projects = [];

addAllDomEvents();

function createProject(title){
  const project = new Project(title);
  projects.push(project);
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
    
    createProject(project_title);

    refreshProjects()

    // Reset and hide project form after add.
    document.getElementById("project-title").value = '';
    form.style = 'none';
  })

}

function projectTitleAlreadyExist(Title){
  let flag = false;
  projects.forEach((project)=>{
    if(project.title == Title){
      flag = true;
    }
  })
  return flag;
}

function fetchProject(Title){
  let fetch;
  projects.forEach((project)=>{
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
  projects.forEach(function(arrayItem){
    const project = document.createElement("button");
    project.classList.add("project-tab");

    const projectIcon = document.createElement("img");
    projectIcon.classList.add("nav-icon");
    projectIcon.src="../img/menu.svg";

    const projectTitle = document.createElement("h2");
    projectTitle.textContent = arrayItem.title;

    project.id = arrayItem.title;

    project.appendChild(projectIcon);
    project.appendChild(projectTitle);

    // Add active to active project
    project.addEventListener("click", function(){
      setProjectActive(project);
      displayActiveProjectTasks(project);
    })

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
  const tasksContainer = document.querySelector(".tasks-container");
  tasksContainer.innerHTML = "";

  const activeProject = fetchProject(project.id);
  displayActiveProjectTitle(activeProject.title);

  let activeTasks = activeProject.getTasks();
  console.log(activeTasks);
}

function displayActiveProjectTitle(title){
  const tasksContainer = document.querySelector(".tasks-container");
  const titleElement = document.createElement("h1");
  titleElement.textContent = title;

  tasksContainer.appendChild(titleElement);
}

function createTask(title, description, dueDate, priority, completed){
  const task = new Task(title, description, dueDate, priority, completed);
  console.log(task);
  return task;
}


// Pre-existing project with task
let existingProj = createProject("Project 1Title");
existingProj.addTask(createTask("Task1", "Task 1 Description", "Due Date", 3, false));
existingProj.addTask(createTask("Task2", "Task 2 Description", "Due Date", 2, false));

addProject();
refreshProjects();