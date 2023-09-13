import Project from "./Project.js"
import TodoList from "./TodoList.js"
import Task from "./task.js";

// Opens form to add project
function addNewProjectEventListener(){
  document.getElementById("new-project-icon").addEventListener("click", function(e){
    // Prevent Creating new project form when form already exist
    const existingForm = document.getElementById("new-project-form");
    //TODO: Make form visible when +, not when cancel
  });
}

function addAllDomEvents(){
  addNewProjectEventListener();
}

export default addAllDomEvents;

