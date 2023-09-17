import Project from "./Project";
import addAllDomEvents from "./dom";

var projects = [];

addAllDomEvents();

function createProject(title){
  const project = new Project(title);
  projects.push(project);
}

function addProject(){
  const form = document.getElementById('project-form');
  
  form.addEventListener('submit', function(e){
    // Prevents default submit
    e.preventDefault();

    // Create project and push to projects
    const project_title = document.getElementById('project-title').value;
    createProject(project_title);

    refreshProjects()

    // Reset and hide project form after add.
    document.getElementById("project-title").value = '';
    form.style = 'none';
  })
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
    }
  })
}

// TODO: Display Tasks in Project.
function displayActiveProjectTasks(project){
  
}
createProject("Project 1Title");
addProject();
refreshProjects();