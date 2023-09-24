/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
class Project{

  constructor(title = ""){
    this.title = title;
    this.tasks = []
  }

}

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task{
  constructor(title = "", description= "", dueDate = "", priority = 0, color = "",completed = false){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.color = color;
    this.completed = false; // Button to fade out box (change color) and cross out font. With circular box that ticks.
  }
}

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// Opens form to add project
function addNewProjectForm(){
  document.getElementById("new-project-icon").addEventListener("click", function(e){
    // Prevent Creating new project form when form already exist
    const existingForm = document.querySelector(".project-form");
    existingForm.style.display = "flex";
  });
}

function cancelProjectForm(){
  document.getElementById("cancel-button").addEventListener("click", function(e){
    const existingForm = document.querySelector(".project-form");
    existingForm.style.display = "none";
    document.getElementById("project-title").value = '';
  });
}

function toggleProjectNav(){
  document.getElementById("menu-button").addEventListener("click", function(e){
    const projectNav = document.querySelector("nav");
    if(projectNav.classList.contains("toggled")){
      projectNav.classList.remove("toggled");
    } else{
      projectNav.classList.add("toggled")
    }
  })
} 

function openAddTasksForm(){
  document.querySelector(".add-tasks").addEventListener("click", function(e){
    const addTasksForm = document.querySelector(".create-task-form")
    addTasksForm.style.display = "flex";
  })
}

function closeTasksForm(){
  document.querySelector(".cancel-add-task").addEventListener("click", function(e){
    const addTasksForm = document.querySelector(".create-task-form")
    addTasksForm.style.display = "none";
  })
}

function addAllDomEvents(){
  addNewProjectForm();
  cancelProjectForm();
  toggleProjectNav();
  openAddTasksForm();
  closeTasksForm();
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addAllDomEvents);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/Task.js");






(0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();

class Todo{
  constructor(){
    this.projects = [];
    this.activeProject; // Remembers which project is active
  }

  deleteTask(taskTitle){
    todo.projects.forEach((project)=>{
      if(project.title == todo.activeProject){
        project.tasks = project.tasks.filter(function(task){
          return task.title !== taskTitle;
        })
      }
    })
    updateProjectsLocalStorage()
  }

  deleteProject(projectTitle){
    todo.projects = todo.projects.filter(function(project){
      return project.title !== projectTitle;
    })
    updateProjectsLocalStorage()
  }
  
}

const todo = new Todo();

function createProject(title){
  const project = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](title);
  return project;
}

function addProject(){
  const form = document.getElementById('project-form');
  
  form.addEventListener('submit', function(e){
    // Prevents default submit
    e.preventDefault();

    // Create project and push to projects
    const project_title = document.getElementById('project-title').value;

    if(project_title == ""){
      alert("Please input a project title.");
      return;
    }

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
  updateProjectsLocalStorage()
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

  if (todo.projects.length == 0){
    console.log("empty");
    return null;
  }

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
    deleteIcon.classList.add("delete-project"); 
    deleteIcon.addEventListener("click",function(){
      todo.deleteProject(arrayItem.title);
      refreshProjects();
      displayActiveProjectTitle("Select A Project")
      if(todo.projects.length != 0){
        todo.activeProject = todo.projects[0];
      }
      hideTasksDiv();
    });

    project.id = arrayItem.title;

    project.appendChild(projectIcon);
    project.appendChild(projectTitle);
    project.appendChild(deleteIcon);

    // Add active to active project
    project.addEventListener("click", function(){
      todo.activeProject = project.id;
      setProjectActive(project);
      displayActiveProjectTasks(todo.activeProject);
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
      displayActiveProjectTasks(project.id);
    }
  })
}

function displayActiveProjectTasks(projectTitle){
  if(todo.projects.length == 0){
    clearTasks();
    return;
  }

  const activeProject = fetchProject(projectTitle);

  displayActiveProjectTitle(projectTitle);
  clearTasks();
  showTasksDiv();

  if(activeProject.tasks.length==0){
    return;
  }

  let activeTasks = activeProject.tasks;
  

  activeTasks.sort(function(a, b){
    return a.priority - b.priority;
  })

  activeTasks.sort(function(a,b){
    return(a.completed === b.completed)? 0: a.completed? 1:-1;
  })

  activeTasks.forEach((task)=>{
    const taskDiv = createTaskDiv(task);
    document.querySelector(".tasks").appendChild(taskDiv);
  })

  showTasksDiv();
  
}


function displayActiveProjectTitle(title){
  const projectTitle = document.querySelector(".project-title"); 
  projectTitle.textContent = title;
}

function createTaskDiv(task){ 
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task")
  taskDiv.classList.add("priority" +task.priority);
  taskDiv.id = task.title;

  const taskLeft = createTaskLeft(task);
  const taskRight = createTaskRight(task);

  taskDiv.appendChild(taskLeft);
  taskDiv.appendChild(taskRight);
  return taskDiv;
}

function createTaskLeft(task){ 
  const taskLeft = document.createElement("div");
  taskLeft.classList.add("task-left");

  const taskComplete = document.createElement("input");
  taskComplete.classList.add("icon"); 
  taskComplete.classList.add("complete"); 
  taskComplete.type = "image";
  taskComplete.id = task.title;

  if(task.completed){
    taskComplete.src = "../img/check-circle-outline.svg"
  } else{
    taskComplete.src = "../img/circle-outline.svg"
  }

  taskComplete.addEventListener("click", function(e){
    updateTaskCompleted(taskComplete.id);
    displayActiveProjectTasks(todo.activeProject);
  });
  
  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task-title")
  taskTitle.textContent = task.title;

  taskLeft.appendChild(taskComplete);
  taskLeft.appendChild(taskTitle);

  return taskLeft;
}

function createTaskRight(task){
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
  deleteBtn.addEventListener("click", function(){
    todo.deleteTask(task.title);
    displayActiveProjectTasks(todo.activeProject);
  }); // Without function wrapping it gets triggered upon page load instead of click.

  taskRight.appendChild(due);
  taskRight.appendChild(date);
  taskRight.appendChild(deleteBtn);

  return taskRight;
}


function clearTasks(){
  document.querySelector(".tasks").innerHTML="";
}

function createTask(title, description, dueDate, priority, color, completed){
  const task = new _Task__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, dueDate, priority, color, completed);
  return task;
}


function submitTaskForm(){
  const submitTaskForm = document.querySelector(".create-task-form")
  submitTaskForm.addEventListener("submit", function(e){
      e.preventDefault();

      const taskTitle = document.getElementById("task-title").value;

      if(taskTitle == ""){
        alert("Please Enter A Task Title.");
        return;
      }

      const dueDate = document.getElementById("date").value;

      if(dueDate == ""){
        alert("Please Select A Due Date.");
        return;
      }

      const priority = document.getElementById("color-priority").value

      todo.projects.forEach((project) =>{
        if(project.title == todo.activeProject){
          project.tasks.push(createTask(taskTitle, "", dueDate, priority, "", false));
          updateProjectsLocalStorage()
          displayActiveProjectTasks(todo.activeProject)
        }
      })
      closeTaskForm();
  })

}

function closeTaskForm(){
  const addTasksForm = document.querySelector(".create-task-form")
  addTasksForm.style.display = "none";
}

function updateTaskCompleted(taskTitle){
  todo.projects.forEach((project)=>{
    if(project.title == todo.activeProject){
      project.tasks.forEach((task)=>{
        if(task.title == taskTitle){
          if(task.completed){
            task.completed = false;
          }else{
            task.completed = true;
          }
        }
      })
    }
  })
  updateProjectsLocalStorage()
}

function hideTasksDiv(){
  const tasksDiv = document.querySelector(".tasks");
  tasksDiv.style.display="none";
  const tasksHeader = document.querySelector('.tasks-header');
  tasksHeader.style.display = "none";
}

function showTasksDiv(){
  const tasksDiv = document.querySelector(".tasks");
  tasksDiv.style.display="flex";
  const tasksHeader = document.querySelector('.tasks-header');
  tasksHeader.style.display = "flex";
}

// Pre-existing project with tasks if no local storage
//Todo Local Storage:
if(localStorage.getItem("projects") == null){
  let existingProj = createProject("Project 1Title");
  existingProj.tasks.push(createTask("Task1", "Task 1 Description", "Due Date", 3, false));
  existingProj.tasks.push(createTask("Task2", "Task 2 Description", "Due Date", 2, false));
  
  todo.projects.push(existingProj);
  todo.activeProject=existingProj.title;

  const serlializedTodoProjects = JSON.stringify(todo.projects);

  localStorage.setItem("projects", serlializedTodoProjects);
} else{
  const projectsFromStorage = JSON.parse(localStorage.getItem("projects"));
  todo.projects = projectsFromStorage;
  console.log(projectsFromStorage);
}

function updateProjectsLocalStorage(){
  const serlializedTodoProjects = JSON.stringify(todo.projects);
  localStorage.setItem("projects", serlializedTodoProjects);
}

// Load up projects, hide task form, and hide task div.
addProject();
refreshProjects();
submitTaskForm();
hideTasksDiv();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNQZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxlQUFlLEVBQUM7QUFDL0I7Ozs7Ozs7VUNuREE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTmdDO0FBQ0k7QUFDVjtBQUMxQjtBQUNBO0FBQ0E7QUFDQSxnREFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRyxHQUFHO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3R7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRpdGxlID0gXCJcIil7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRhc2tzID0gW11cclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3tcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSA9IFwiXCIsIGRlc2NyaXB0aW9uPSBcIlwiLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHkgPSAwLCBjb2xvciA9IFwiXCIsY29tcGxldGVkID0gZmFsc2Upe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7IC8vIEJ1dHRvbiB0byBmYWRlIG91dCBib3ggKGNoYW5nZSBjb2xvcikgYW5kIGNyb3NzIG91dCBmb250LiBXaXRoIGNpcmN1bGFyIGJveCB0aGF0IHRpY2tzLlxyXG4gIH1cclxufSIsIi8vIE9wZW5zIGZvcm0gdG8gYWRkIHByb2plY3RcclxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdEZvcm0oKXtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWljb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gUHJldmVudCBDcmVhdGluZyBuZXcgcHJvamVjdCBmb3JtIHdoZW4gZm9ybSBhbHJlYWR5IGV4aXN0XHJcbiAgICBjb25zdCBleGlzdGluZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuICAgIGV4aXN0aW5nRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbFByb2plY3RGb3JtKCl7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGNvbnN0IGV4aXN0aW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgZXhpc3RpbmdGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKS52YWx1ZSA9ICcnO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0TmF2KCl7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICBjb25zdCBwcm9qZWN0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcclxuICAgIGlmKHByb2plY3ROYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9nZ2xlZFwiKSl7XHJcbiAgICAgIHByb2plY3ROYXYuY2xhc3NMaXN0LnJlbW92ZShcInRvZ2dsZWRcIik7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHByb2plY3ROYXYuY2xhc3NMaXN0LmFkZChcInRvZ2dsZWRcIilcclxuICAgIH1cclxuICB9KVxyXG59IFxyXG5cclxuZnVuY3Rpb24gb3BlbkFkZFRhc2tzRm9ybSgpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGNvbnN0IGFkZFRhc2tzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stZm9ybVwiKVxyXG4gICAgYWRkVGFza3NGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZVRhc2tzRm9ybSgpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWFkZC10YXNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGNvbnN0IGFkZFRhc2tzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stZm9ybVwiKVxyXG4gICAgYWRkVGFza3NGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRBbGxEb21FdmVudHMoKXtcclxuICBhZGROZXdQcm9qZWN0Rm9ybSgpO1xyXG4gIGNhbmNlbFByb2plY3RGb3JtKCk7XHJcbiAgdG9nZ2xlUHJvamVjdE5hdigpO1xyXG4gIG9wZW5BZGRUYXNrc0Zvcm0oKTtcclxuICBjbG9zZVRhc2tzRm9ybSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRBbGxEb21FdmVudHM7XHJcblxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcclxuaW1wb3J0IGFkZEFsbERvbUV2ZW50cyBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vVGFza1wiO1xyXG5cclxuXHJcblxyXG5hZGRBbGxEb21FdmVudHMoKTtcclxuXHJcbmNsYXNzIFRvZG97XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICAgIHRoaXMuYWN0aXZlUHJvamVjdDsgLy8gUmVtZW1iZXJzIHdoaWNoIHByb2plY3QgaXMgYWN0aXZlXHJcbiAgfVxyXG5cclxuICBkZWxldGVUYXNrKHRhc2tUaXRsZSl7XHJcbiAgICB0b2RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICAgIGlmKHByb2plY3QudGl0bGUgPT0gdG9kby5hY3RpdmVQcm9qZWN0KXtcclxuICAgICAgICBwcm9qZWN0LnRhc2tzID0gcHJvamVjdC50YXNrcy5maWx0ZXIoZnVuY3Rpb24odGFzayl7XHJcbiAgICAgICAgICByZXR1cm4gdGFzay50aXRsZSAhPT0gdGFza1RpdGxlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgICB1cGRhdGVQcm9qZWN0c0xvY2FsU3RvcmFnZSgpXHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSl7XHJcbiAgICB0b2RvLnByb2plY3RzID0gdG9kby5wcm9qZWN0cy5maWx0ZXIoZnVuY3Rpb24ocHJvamVjdCl7XHJcbiAgICAgIHJldHVybiBwcm9qZWN0LnRpdGxlICE9PSBwcm9qZWN0VGl0bGU7XHJcbiAgICB9KVxyXG4gICAgdXBkYXRlUHJvamVjdHNMb2NhbFN0b3JhZ2UoKVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuY29uc3QgdG9kbyA9IG5ldyBUb2RvKCk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcclxuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCl7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcclxuICBcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gUHJldmVudHMgZGVmYXVsdCBzdWJtaXRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgcHJvamVjdCBhbmQgcHVzaCB0byBwcm9qZWN0c1xyXG4gICAgY29uc3QgcHJvamVjdF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWU7XHJcblxyXG4gICAgaWYocHJvamVjdF90aXRsZSA9PSBcIlwiKXtcclxuICAgICAgYWxlcnQoXCJQbGVhc2UgaW5wdXQgYSBwcm9qZWN0IHRpdGxlLlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmKHByb2plY3RUaXRsZUFscmVhZHlFeGlzdChwcm9qZWN0X3RpdGxlKSl7XHJcbiAgICAgIGFsZXJ0KFwiUHJvamVjdCBUaXRsZSBBbHJlYWR5IEV4aXN0LlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdF90aXRsZSk7XHJcbiAgICB0b2RvLnByb2plY3RzLnB1c2gobmV3UHJvamVjdCk7XHJcblxyXG4gICAgcmVmcmVzaFByb2plY3RzKClcclxuIFxyXG4gICAgLy8gUmVzZXQgYW5kIGhpZGUgcHJvamVjdCBmb3JtIGFmdGVyIGFkZC5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKS52YWx1ZSA9ICcnO1xyXG4gICAgZm9ybS5zdHlsZSA9ICdub25lJztcclxuICB9KVxyXG4gIHVwZGF0ZVByb2plY3RzTG9jYWxTdG9yYWdlKClcclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdFRpdGxlQWxyZWFkeUV4aXN0KFRpdGxlKXsgLy8gQWRkZWQgdG8gVG9kb1BhZ2UgQ2xhc3NcclxuICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gIHRvZG8ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgIGlmKHByb2plY3QudGl0bGUgPT0gVGl0bGUpe1xyXG4gICAgICBmbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBmbGFnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFByb2plY3QoVGl0bGUpeyAvLyBBZGRlZCB0byBUb2RvUGFnZSBDbGFzcyBcclxuICBsZXQgZmV0Y2g7XHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgaWYocHJvamVjdC50aXRsZSA9PSBUaXRsZSl7XHJcbiAgICAgIGZldGNoID0gcHJvamVjdDtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBmZXRjaDtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiByZWZyZXNoUHJvamVjdHMoKXtcclxuICAvLyBEZWxldGVzIHByb2plY3RzXHJcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XHJcbiAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIGlmICh0b2RvLnByb2plY3RzLmxlbmd0aCA9PSAwKXtcclxuICAgIGNvbnNvbGUubG9nKFwiZW1wdHlcIik7XHJcbiAgICByZXR1cm4gbnVsbDtcclxuICB9XHJcblxyXG4gIC8vIFJlbG9hZHMgcHJvamVjdHNcclxuICB0b2RvLnByb2plY3RzLmZvckVhY2goZnVuY3Rpb24oYXJyYXlJdGVtKXtcclxuICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10YWJcIik7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgcHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcIm5hdi1pY29uXCIpO1xyXG4gICAgcHJvamVjdEljb24uc3JjPVwiLi4vaW1nL21lbnUuc3ZnXCI7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xyXG4gICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gYXJyYXlJdGVtLnRpdGxlO1xyXG5cclxuICAgIGNvbnN0IGRlbGV0ZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcIm5hdi1pY29uXCIpO1xyXG4gICAgZGVsZXRlSWNvbi5zcmM9XCIuLi9pbWcvZGVsZXRlLWljb24uc3ZnXCI7XHJcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdFwiKTsgXHJcbiAgICBkZWxldGVJY29uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRvZG8uZGVsZXRlUHJvamVjdChhcnJheUl0ZW0udGl0bGUpO1xyXG4gICAgICByZWZyZXNoUHJvamVjdHMoKTtcclxuICAgICAgZGlzcGxheUFjdGl2ZVByb2plY3RUaXRsZShcIlNlbGVjdCBBIFByb2plY3RcIilcclxuICAgICAgaWYodG9kby5wcm9qZWN0cy5sZW5ndGggIT0gMCl7XHJcbiAgICAgICAgdG9kby5hY3RpdmVQcm9qZWN0ID0gdG9kby5wcm9qZWN0c1swXTtcclxuICAgICAgfVxyXG4gICAgICBoaWRlVGFza3NEaXYoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3QuaWQgPSBhcnJheUl0ZW0udGl0bGU7XHJcblxyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xyXG5cclxuICAgIC8vIEFkZCBhY3RpdmUgdG8gYWN0aXZlIHByb2plY3RcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRvZG8uYWN0aXZlUHJvamVjdCA9IHByb2plY3QuaWQ7XHJcbiAgICAgIHNldFByb2plY3RBY3RpdmUocHJvamVjdCk7XHJcbiAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3ModG9kby5hY3RpdmVQcm9qZWN0KTtcclxuICAgIH0pXHJcblxyXG4gICAgc2V0UHJvamVjdEFjdGl2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvLmFjdGl2ZVByb2plY3QpKTtcclxuXHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuICB9KVxyXG59XHJcblxyXG5cclxuLy8gU2V0cyBhY3RpdmUgcHJvamVjdCBjbGFzcyBhY3RpdmUuXHJcbmZ1bmN0aW9uIHNldFByb2plY3RBY3RpdmUocHJvamVjdCl7IFxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtdGFiXCIpO1xyXG5cclxuICBidXR0b25zLmZvckVhY2goKGUpPT57XHJcbiAgICBpZihlICE9PSBwcm9qZWN0KXtcclxuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXByb2plY3RcIik7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcclxuICAgICAgZGlzcGxheUFjdGl2ZVByb2plY3RUYXNrcyhwcm9qZWN0LmlkKTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QWN0aXZlUHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSl7XHJcbiAgaWYodG9kby5wcm9qZWN0cy5sZW5ndGggPT0gMCl7XHJcbiAgICBjbGVhclRhc2tzKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZmV0Y2hQcm9qZWN0KHByb2plY3RUaXRsZSk7XHJcblxyXG4gIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGl0bGUocHJvamVjdFRpdGxlKTtcclxuICBjbGVhclRhc2tzKCk7XHJcbiAgc2hvd1Rhc2tzRGl2KCk7XHJcblxyXG4gIGlmKGFjdGl2ZVByb2plY3QudGFza3MubGVuZ3RoPT0wKXtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBhY3RpdmVUYXNrcyA9IGFjdGl2ZVByb2plY3QudGFza3M7XHJcbiAgXHJcblxyXG4gIGFjdGl2ZVRhc2tzLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XHJcbiAgfSlcclxuXHJcbiAgYWN0aXZlVGFza3Muc29ydChmdW5jdGlvbihhLGIpe1xyXG4gICAgcmV0dXJuKGEuY29tcGxldGVkID09PSBiLmNvbXBsZXRlZCk/IDA6IGEuY29tcGxldGVkPyAxOi0xO1xyXG4gIH0pXHJcblxyXG4gIGFjdGl2ZVRhc2tzLmZvckVhY2goKHRhc2spPT57XHJcbiAgICBjb25zdCB0YXNrRGl2ID0gY3JlYXRlVGFza0Rpdih0YXNrKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIikuYXBwZW5kQ2hpbGQodGFza0Rpdik7XHJcbiAgfSlcclxuXHJcbiAgc2hvd1Rhc2tzRGl2KCk7XHJcbiAgXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QWN0aXZlUHJvamVjdFRpdGxlKHRpdGxlKXtcclxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7IFxyXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGl2KHRhc2speyBcclxuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpXHJcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIiArdGFzay5wcmlvcml0eSk7XHJcbiAgdGFza0Rpdi5pZCA9IHRhc2sudGl0bGU7XHJcblxyXG4gIGNvbnN0IHRhc2tMZWZ0ID0gY3JlYXRlVGFza0xlZnQodGFzayk7XHJcbiAgY29uc3QgdGFza1JpZ2h0ID0gY3JlYXRlVGFza1JpZ2h0KHRhc2spO1xyXG5cclxuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tMZWZ0KTtcclxuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tSaWdodCk7XHJcbiAgcmV0dXJuIHRhc2tEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tMZWZ0KHRhc2speyBcclxuICBjb25zdCB0YXNrTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza0xlZnQuY2xhc3NMaXN0LmFkZChcInRhc2stbGVmdFwiKTtcclxuXHJcbiAgY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRhc2tDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTsgXHJcbiAgdGFza0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTsgXHJcbiAgdGFza0NvbXBsZXRlLnR5cGUgPSBcImltYWdlXCI7XHJcbiAgdGFza0NvbXBsZXRlLmlkID0gdGFzay50aXRsZTtcclxuXHJcbiAgaWYodGFzay5jb21wbGV0ZWQpe1xyXG4gICAgdGFza0NvbXBsZXRlLnNyYyA9IFwiLi4vaW1nL2NoZWNrLWNpcmNsZS1vdXRsaW5lLnN2Z1wiXHJcbiAgfSBlbHNle1xyXG4gICAgdGFza0NvbXBsZXRlLnNyYyA9IFwiLi4vaW1nL2NpcmNsZS1vdXRsaW5lLnN2Z1wiXHJcbiAgfVxyXG5cclxuICB0YXNrQ29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgdXBkYXRlVGFza0NvbXBsZXRlZCh0YXNrQ29tcGxldGUuaWQpO1xyXG4gICAgZGlzcGxheUFjdGl2ZVByb2plY3RUYXNrcyh0b2RvLmFjdGl2ZVByb2plY3QpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpXHJcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuXHJcbiAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlKTtcclxuICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG5cclxuICByZXR1cm4gdGFza0xlZnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tSaWdodCh0YXNrKXtcclxuICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tSaWdodC5jbGFzc0xpc3QuYWRkKFwidGFzay1yaWdodFwiKTtcclxuXHJcbiAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZHVlLnRleHRDb250ZW50ID0gXCJEdWU6XCI7XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIilcclxuICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xyXG5cclxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpXHJcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XHJcbiAgZGVsZXRlQnRuLnR5cGUgPSBcImltYWdlXCI7XHJcbiAgZGVsZXRlQnRuLnNyYyA9IFwiLi4vaW1nL2RlbGV0ZS1pY29uLnN2Z1wiO1xyXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIHRvZG8uZGVsZXRlVGFzayh0YXNrLnRpdGxlKTtcclxuICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3ModG9kby5hY3RpdmVQcm9qZWN0KTtcclxuICB9KTsgLy8gV2l0aG91dCBmdW5jdGlvbiB3cmFwcGluZyBpdCBnZXRzIHRyaWdnZXJlZCB1cG9uIHBhZ2UgbG9hZCBpbnN0ZWFkIG9mIGNsaWNrLlxyXG5cclxuICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZHVlKTtcclxuICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcblxyXG4gIHJldHVybiB0YXNrUmlnaHQ7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhclRhc2tzKCl7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKS5pbm5lckhUTUw9XCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb2xvciwgY29tcGxldGVkKXtcclxuICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29sb3IsIGNvbXBsZXRlZCk7XHJcbiAgcmV0dXJuIHRhc2s7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzdWJtaXRUYXNrRm9ybSgpe1xyXG4gIGNvbnN0IHN1Ym1pdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFzay1mb3JtXCIpXHJcbiAgc3VibWl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICAgICAgaWYodGFza1RpdGxlID09IFwiXCIpe1xyXG4gICAgICAgIGFsZXJ0KFwiUGxlYXNlIEVudGVyIEEgVGFzayBUaXRsZS5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkYXRlXCIpLnZhbHVlO1xyXG5cclxuICAgICAgaWYoZHVlRGF0ZSA9PSBcIlwiKXtcclxuICAgICAgICBhbGVydChcIlBsZWFzZSBTZWxlY3QgQSBEdWUgRGF0ZS5cIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3ItcHJpb3JpdHlcIikudmFsdWVcclxuXHJcbiAgICAgIHRvZG8ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT57XHJcbiAgICAgICAgaWYocHJvamVjdC50aXRsZSA9PSB0b2RvLmFjdGl2ZVByb2plY3Qpe1xyXG4gICAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKGNyZWF0ZVRhc2sodGFza1RpdGxlLCBcIlwiLCBkdWVEYXRlLCBwcmlvcml0eSwgXCJcIiwgZmFsc2UpKTtcclxuICAgICAgICAgIHVwZGF0ZVByb2plY3RzTG9jYWxTdG9yYWdlKClcclxuICAgICAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3ModG9kby5hY3RpdmVQcm9qZWN0KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgY2xvc2VUYXNrRm9ybSgpO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZVRhc2tGb3JtKCl7XHJcbiAgY29uc3QgYWRkVGFza3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFzay1mb3JtXCIpXHJcbiAgYWRkVGFza3NGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVGFza0NvbXBsZXRlZCh0YXNrVGl0bGUpe1xyXG4gIHRvZG8ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgIGlmKHByb2plY3QudGl0bGUgPT0gdG9kby5hY3RpdmVQcm9qZWN0KXtcclxuICAgICAgcHJvamVjdC50YXNrcy5mb3JFYWNoKCh0YXNrKT0+e1xyXG4gICAgICAgIGlmKHRhc2sudGl0bGUgPT0gdGFza1RpdGxlKXtcclxuICAgICAgICAgIGlmKHRhc2suY29tcGxldGVkKXtcclxuICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pXHJcbiAgdXBkYXRlUHJvamVjdHNMb2NhbFN0b3JhZ2UoKVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVGFza3NEaXYoKXtcclxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XHJcbiAgdGFza3NEaXYuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICBjb25zdCB0YXNrc0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1oZWFkZXInKTtcclxuICB0YXNrc0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUYXNrc0Rpdigpe1xyXG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcclxuICB0YXNrc0Rpdi5zdHlsZS5kaXNwbGF5PVwiZmxleFwiO1xyXG4gIGNvbnN0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWhlYWRlcicpO1xyXG4gIHRhc2tzSGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufVxyXG5cclxuLy8gUHJlLWV4aXN0aW5nIHByb2plY3Qgd2l0aCB0YXNrcyBpZiBubyBsb2NhbCBzdG9yYWdlXHJcbi8vVG9kbyBMb2NhbCBTdG9yYWdlOlxyXG5pZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpID09IG51bGwpe1xyXG4gIGxldCBleGlzdGluZ1Byb2ogPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCAxVGl0bGVcIik7XHJcbiAgZXhpc3RpbmdQcm9qLnRhc2tzLnB1c2goY3JlYXRlVGFzayhcIlRhc2sxXCIsIFwiVGFzayAxIERlc2NyaXB0aW9uXCIsIFwiRHVlIERhdGVcIiwgMywgZmFsc2UpKTtcclxuICBleGlzdGluZ1Byb2oudGFza3MucHVzaChjcmVhdGVUYXNrKFwiVGFzazJcIiwgXCJUYXNrIDIgRGVzY3JpcHRpb25cIiwgXCJEdWUgRGF0ZVwiLCAyLCBmYWxzZSkpO1xyXG4gIFxyXG4gIHRvZG8ucHJvamVjdHMucHVzaChleGlzdGluZ1Byb2opO1xyXG4gIHRvZG8uYWN0aXZlUHJvamVjdD1leGlzdGluZ1Byb2oudGl0bGU7XHJcblxyXG4gIGNvbnN0IHNlcmxpYWxpemVkVG9kb1Byb2plY3RzID0gSlNPTi5zdHJpbmdpZnkodG9kby5wcm9qZWN0cyk7XHJcblxyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgc2VybGlhbGl6ZWRUb2RvUHJvamVjdHMpO1xyXG59IGVsc2V7XHJcbiAgY29uc3QgcHJvamVjdHNGcm9tU3RvcmFnZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XHJcbiAgdG9kby5wcm9qZWN0cyA9IHByb2plY3RzRnJvbVN0b3JhZ2U7XHJcbiAgY29uc29sZS5sb2cocHJvamVjdHNGcm9tU3RvcmFnZSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RzTG9jYWxTdG9yYWdlKCl7XHJcbiAgY29uc3Qgc2VybGlhbGl6ZWRUb2RvUHJvamVjdHMgPSBKU09OLnN0cmluZ2lmeSh0b2RvLnByb2plY3RzKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIHNlcmxpYWxpemVkVG9kb1Byb2plY3RzKTtcclxufVxyXG5cclxuLy8gTG9hZCB1cCBwcm9qZWN0cywgaGlkZSB0YXNrIGZvcm0sIGFuZCBoaWRlIHRhc2sgZGl2LlxyXG5hZGRQcm9qZWN0KCk7XHJcbnJlZnJlc2hQcm9qZWN0cygpO1xyXG5zdWJtaXRUYXNrRm9ybSgpO1xyXG5oaWRlVGFza3NEaXYoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=