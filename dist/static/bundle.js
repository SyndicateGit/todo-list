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



/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
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
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");






(0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();

class Todo{
  constructor(){
    this.projects = [];
    this.activeProject; // Remembers which project is active
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
      deleteProject(arrayItem.title);
      refreshProjects();
      displayActiveProjectTitle("Select A Project")
      hideTasksIfNoActiveProject();
    });

    project.id = arrayItem.title;

    project.appendChild(projectIcon);
    project.appendChild(projectTitle);
    project.appendChild(deleteIcon);

    // Add active to active project
    project.addEventListener("click", function(){
      todo.activeProject = project.id;
      setProjectActive(project);
      displayActiveProjectTasks(project.id);
    })

    setProjectActive(document.getElementById(todo.activeProject));

    projectList.appendChild(project);
  })
}

function deleteProject(projectTitle){
  todo.projects = todo.projects.filter(function(project){
    return project.title !== projectTitle;
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
  showTasksIfActiveProject();

  if(activeProject.tasks.length==0){
    return;
  }

  let activeTasks = activeProject.getTasks();
  
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

  showTasksIfActiveProject();
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
    deleteTask(task.title);
    displayActiveProjectTasks(todo.activeProject);
  }); // Without function wrapping it gets triggered upon page load instead of click.

  taskRight.appendChild(due);
  taskRight.appendChild(date);
  taskRight.appendChild(deleteBtn);

  return taskRight;
}

function deleteTask(taskTitle){
  todo.projects.forEach((project)=>{
    if(project.title == todo.activeProject){
      project.tasks = project.tasks.filter(function(task){
        return task.title !== taskTitle;
      })
    }
  })
}

function clearTasks(){
  document.querySelector(".tasks").innerHTML="";
}


function displayActiveProjectTitle(title){
  const projectTitle = document.querySelector(".project-title"); 
  projectTitle.textContent = title;
}

function createTask(title, description, dueDate, priority, color, completed){
  const task = new _task__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, dueDate, priority, color, completed);
  return task;
}


function submitTaskForm(){ //TODO: Finish
  const submitTaskForm = document.querySelector(".create-task-form")
  submitTaskForm.addEventListener("submit", function(e){
      e.preventDefault();

      const taskTitle = document.getElementById("task-title").value;

      const dueDate = document.getElementById("date").value;

      const priority = document.getElementById("color-priority").value

      todo.projects.forEach((project) =>{
        if(project.title == todo.activeProject){
          project.addTask(createTask(taskTitle, "", dueDate, priority, "", false));
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

function hideTasksIfNoActiveProject(){
  const tasksDiv = document.querySelector(".tasks");
  tasksDiv.style.display="none";
  const tasksHeader = document.querySelector('.tasks-header');
  tasksHeader.style.display = "none";
}

function showTasksIfActiveProject(){
  const tasksDiv = document.querySelector(".tasks");
  tasksDiv.style.display="flex";
  const tasksHeader = document.querySelector('.tasks-header');
  tasksHeader.style.display = "flex";
}

//TODO: add delete project button function


//TODO: prevent form submission if missing info.

// Pre-existing project with task
let existingProj = createProject("Project 1Title");
existingProj.addTask(createTask("Task1", "Task 1 Description", "Due Date", 3, false));
existingProj.addTask(createTask("Task2", "Task 2 Description", "Due Date", 2, false));

todo.projects.push(existingProj);
todo.activeProject=existingProj.title;

addProject();
refreshProjects();
submitTaskForm();
hideTasksIfNoActiveProject();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQztBQUMvQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkRlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNJO0FBQ1Y7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsZ0RBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHtcclxuXHJcbiAgY29uc3RydWN0b3IodGl0bGUgPSBcIlwiKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMudGFza3MgPSBbXVxyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUodGl0bGUpe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKXtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlXHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKFRhc2spe1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKFRhc2spO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFza3MoKXtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gIH1cclxufSIsIi8vIE9wZW5zIGZvcm0gdG8gYWRkIHByb2plY3RcclxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdEZvcm0oKXtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWljb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gUHJldmVudCBDcmVhdGluZyBuZXcgcHJvamVjdCBmb3JtIHdoZW4gZm9ybSBhbHJlYWR5IGV4aXN0XHJcbiAgICBjb25zdCBleGlzdGluZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuICAgIGV4aXN0aW5nRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbFByb2plY3RGb3JtKCl7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGNvbnN0IGV4aXN0aW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgZXhpc3RpbmdGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKS52YWx1ZSA9ICcnO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0TmF2KCl7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICBjb25zdCBwcm9qZWN0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcclxuICAgIGlmKHByb2plY3ROYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9nZ2xlZFwiKSl7XHJcbiAgICAgIHByb2plY3ROYXYuY2xhc3NMaXN0LnJlbW92ZShcInRvZ2dsZWRcIik7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHByb2plY3ROYXYuY2xhc3NMaXN0LmFkZChcInRvZ2dsZWRcIilcclxuICAgIH1cclxuICB9KVxyXG59IFxyXG5cclxuZnVuY3Rpb24gb3BlbkFkZFRhc2tzRm9ybSgpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkLXRhc2tzXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGNvbnN0IGFkZFRhc2tzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stZm9ybVwiKVxyXG4gICAgYWRkVGFza3NGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZVRhc2tzRm9ybSgpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FuY2VsLWFkZC10YXNrXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGNvbnN0IGFkZFRhc2tzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stZm9ybVwiKVxyXG4gICAgYWRkVGFza3NGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRBbGxEb21FdmVudHMoKXtcclxuICBhZGROZXdQcm9qZWN0Rm9ybSgpO1xyXG4gIGNhbmNlbFByb2plY3RGb3JtKCk7XHJcbiAgdG9nZ2xlUHJvamVjdE5hdigpO1xyXG4gIG9wZW5BZGRUYXNrc0Zvcm0oKTtcclxuICBjbG9zZVRhc2tzRm9ybSgpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRBbGxEb21FdmVudHM7XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlID0gXCJcIiwgZGVzY3JpcHRpb249IFwiXCIsIGR1ZURhdGUgPSBcIlwiLCBwcmlvcml0eSA9IDAsIGNvbG9yID0gXCJcIixjb21wbGV0ZWQgPSBmYWxzZSl7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTsgLy8gQnV0dG9uIHRvIGZhZGUgb3V0IGJveCAoY2hhbmdlIGNvbG9yKSBhbmQgY3Jvc3Mgb3V0IGZvbnQuIFdpdGggY2lyY3VsYXIgYm94IHRoYXQgdGlja3MuXHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCBhZGRBbGxEb21FdmVudHMgZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcblxyXG5cclxuYWRkQWxsRG9tRXZlbnRzKCk7XHJcblxyXG5jbGFzcyBUb2Rve1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB0aGlzLmFjdGl2ZVByb2plY3Q7IC8vIFJlbWVtYmVycyB3aGljaCBwcm9qZWN0IGlzIGFjdGl2ZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdG9kbyA9IG5ldyBUb2RvKCk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcclxuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCl7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcclxuICBcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gUHJldmVudHMgZGVmYXVsdCBzdWJtaXRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgcHJvamVjdCBhbmQgcHVzaCB0byBwcm9qZWN0c1xyXG4gICAgY29uc3QgcHJvamVjdF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWU7XHJcblxyXG4gICAgaWYocHJvamVjdFRpdGxlQWxyZWFkeUV4aXN0KHByb2plY3RfdGl0bGUpKXtcclxuICAgICAgYWxlcnQoXCJQcm9qZWN0IFRpdGxlIEFscmVhZHkgRXhpc3QuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0X3RpdGxlKTtcclxuICAgIHRvZG8ucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICByZWZyZXNoUHJvamVjdHMoKVxyXG4gXHJcbiAgICAvLyBSZXNldCBhbmQgaGlkZSBwcm9qZWN0IGZvcm0gYWZ0ZXIgYWRkLlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gJyc7XHJcbiAgICBmb3JtLnN0eWxlID0gJ25vbmUnO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0VGl0bGVBbHJlYWR5RXhpc3QoVGl0bGUpeyAvLyBBZGRlZCB0byBUb2RvUGFnZSBDbGFzc1xyXG4gIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgaWYocHJvamVjdC50aXRsZSA9PSBUaXRsZSl7XHJcbiAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGZsYWc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZldGNoUHJvamVjdChUaXRsZSl7IC8vIEFkZGVkIHRvIFRvZG9QYWdlIENsYXNzIFxyXG4gIGxldCBmZXRjaDtcclxuICB0b2RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICBpZihwcm9qZWN0LnRpdGxlID09IFRpdGxlKXtcclxuICAgICAgZmV0Y2ggPSBwcm9qZWN0O1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGZldGNoO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYXNrQ29tcGxldGVkKHRhc2tUaXRsZSl7XHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgaWYocHJvamVjdC50aXRsZSA9PSB0b2RvLmFjdGl2ZVByb2plY3Qpe1xyXG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spPT57XHJcbiAgICAgICAgaWYodGFzay50aXRsZSA9PSB0YXNrVGl0bGUpe1xyXG4gICAgICAgICAgaWYodGFzay5jb21wbGV0ZWQpe1xyXG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaFByb2plY3RzKCl7XHJcbiAgLy8gRGVsZXRlcyBwcm9qZWN0c1xyXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xyXG4gIHByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBpZiAodG9kby5wcm9qZWN0cy5sZW5ndGggPT0gMCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImVtcHR5XCIpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBSZWxvYWRzIHByb2plY3RzXHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKGFycmF5SXRlbSl7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGFiXCIpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJuYXYtaWNvblwiKTtcclxuICAgIHByb2plY3RJY29uLnNyYz1cIi4uL2ltZy9tZW51LnN2Z1wiO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFycmF5SXRlbS50aXRsZTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJuYXYtaWNvblwiKTtcclxuICAgIGRlbGV0ZUljb24uc3JjPVwiLi4vaW1nL2RlbGV0ZS1pY29uLnN2Z1wiO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIik7IFxyXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gICAgICBkZWxldGVQcm9qZWN0KGFycmF5SXRlbS50aXRsZSk7XHJcbiAgICAgIHJlZnJlc2hQcm9qZWN0cygpO1xyXG4gICAgICBkaXNwbGF5QWN0aXZlUHJvamVjdFRpdGxlKFwiU2VsZWN0IEEgUHJvamVjdFwiKVxyXG4gICAgICBoaWRlVGFza3NJZk5vQWN0aXZlUHJvamVjdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvamVjdC5pZCA9IGFycmF5SXRlbS50aXRsZTtcclxuXHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcblxyXG4gICAgLy8gQWRkIGFjdGl2ZSB0byBhY3RpdmUgcHJvamVjdFxyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgdG9kby5hY3RpdmVQcm9qZWN0ID0gcHJvamVjdC5pZDtcclxuICAgICAgc2V0UHJvamVjdEFjdGl2ZShwcm9qZWN0KTtcclxuICAgICAgZGlzcGxheUFjdGl2ZVByb2plY3RUYXNrcyhwcm9qZWN0LmlkKTtcclxuICAgIH0pXHJcblxyXG4gICAgc2V0UHJvamVjdEFjdGl2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvLmFjdGl2ZVByb2plY3QpKTtcclxuXHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSl7XHJcbiAgdG9kby5wcm9qZWN0cyA9IHRvZG8ucHJvamVjdHMuZmlsdGVyKGZ1bmN0aW9uKHByb2plY3Qpe1xyXG4gICAgcmV0dXJuIHByb2plY3QudGl0bGUgIT09IHByb2plY3RUaXRsZTtcclxuICB9KVxyXG59XHJcblxyXG4vLyBTZXRzIGFjdGl2ZSBwcm9qZWN0IGNsYXNzIGFjdGl2ZS5cclxuZnVuY3Rpb24gc2V0UHJvamVjdEFjdGl2ZShwcm9qZWN0KXsgXHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC10YWJcIik7XHJcblxyXG4gIGJ1dHRvbnMuZm9yRWFjaCgoZSk9PntcclxuICAgIGlmKGUgIT09IHByb2plY3Qpe1xyXG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcHJvamVjdFwiKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcm9qZWN0XCIpO1xyXG4gICAgICBkaXNwbGF5QWN0aXZlUHJvamVjdFRhc2tzKHByb2plY3QuaWQpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3MocHJvamVjdFRpdGxlKXtcclxuICBpZih0b2RvLnByb2plY3RzLmxlbmd0aCA9PSAwKXtcclxuICAgIGNsZWFyVGFza3MoKTtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBmZXRjaFByb2plY3QocHJvamVjdFRpdGxlKTtcclxuXHJcbiAgZGlzcGxheUFjdGl2ZVByb2plY3RUaXRsZShwcm9qZWN0VGl0bGUpO1xyXG4gIGNsZWFyVGFza3MoKTtcclxuICBzaG93VGFza3NJZkFjdGl2ZVByb2plY3QoKTtcclxuXHJcbiAgaWYoYWN0aXZlUHJvamVjdC50YXNrcy5sZW5ndGg9PTApe1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgbGV0IGFjdGl2ZVRhc2tzID0gYWN0aXZlUHJvamVjdC5nZXRUYXNrcygpO1xyXG4gIFxyXG4gIGFjdGl2ZVRhc2tzLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XHJcbiAgfSlcclxuXHJcbiAgYWN0aXZlVGFza3Muc29ydChmdW5jdGlvbihhLGIpe1xyXG4gICAgcmV0dXJuKGEuY29tcGxldGVkID09PSBiLmNvbXBsZXRlZCk/IDA6IGEuY29tcGxldGVkPyAxOi0xO1xyXG4gIH0pXHJcblxyXG4gIGFjdGl2ZVRhc2tzLmZvckVhY2goKHRhc2spPT57XHJcbiAgICBjb25zdCB0YXNrRGl2ID0gY3JlYXRlVGFza0Rpdih0YXNrKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIikuYXBwZW5kQ2hpbGQodGFza0Rpdik7XHJcbiAgfSlcclxuXHJcbiAgc2hvd1Rhc2tzSWZBY3RpdmVQcm9qZWN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEaXYodGFzayl7IFxyXG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIilcclxuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eVwiICt0YXNrLnByaW9yaXR5KTtcclxuICB0YXNrRGl2LmlkID0gdGFzay50aXRsZTtcclxuXHJcbiAgY29uc3QgdGFza0xlZnQgPSBjcmVhdGVUYXNrTGVmdCh0YXNrKTtcclxuICBjb25zdCB0YXNrUmlnaHQgPSBjcmVhdGVUYXNrUmlnaHQodGFzayk7XHJcblxyXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0xlZnQpO1xyXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1JpZ2h0KTtcclxuICByZXR1cm4gdGFza0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0xlZnQodGFzayl7IFxyXG4gIGNvbnN0IHRhc2tMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrTGVmdC5jbGFzc0xpc3QuYWRkKFwidGFzay1sZWZ0XCIpO1xyXG5cclxuICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGFza0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpOyBcclxuICB0YXNrQ29tcGxldGUuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpOyBcclxuICB0YXNrQ29tcGxldGUudHlwZSA9IFwiaW1hZ2VcIjtcclxuICB0YXNrQ29tcGxldGUuaWQgPSB0YXNrLnRpdGxlO1xyXG5cclxuICBpZih0YXNrLmNvbXBsZXRlZCl7XHJcbiAgICB0YXNrQ29tcGxldGUuc3JjID0gXCIuLi9pbWcvY2hlY2stY2lyY2xlLW91dGxpbmUuc3ZnXCJcclxuICB9IGVsc2V7XHJcbiAgICB0YXNrQ29tcGxldGUuc3JjID0gXCIuLi9pbWcvY2lyY2xlLW91dGxpbmUuc3ZnXCJcclxuICB9XHJcblxyXG4gIHRhc2tDb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICB1cGRhdGVUYXNrQ29tcGxldGVkKHRhc2tDb21wbGV0ZS5pZCk7XHJcbiAgICBkaXNwbGF5QWN0aXZlUHJvamVjdFRhc2tzKHRvZG8uYWN0aXZlUHJvamVjdCk7XHJcbiAgfSk7XHJcbiAgXHJcbiAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZChcInRhc2stdGl0bGVcIilcclxuICB0YXNrVGl0bGUudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xyXG5cclxuICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrQ29tcGxldGUpO1xyXG4gIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRhc2tUaXRsZSk7XHJcblxyXG4gIHJldHVybiB0YXNrTGVmdDtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza1JpZ2h0KHRhc2spe1xyXG4gIGNvbnN0IHRhc2tSaWdodCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza1JpZ2h0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXJpZ2h0XCIpO1xyXG5cclxuICBjb25zdCBkdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICBkdWUudGV4dENvbnRlbnQgPSBcIkR1ZTpcIjtcclxuXHJcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgZGF0ZS5jbGFzc0xpc3QuYWRkKFwiZGF0ZVwiKVxyXG4gIGRhdGUudGV4dENvbnRlbnQgPSB0YXNrLmR1ZURhdGU7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImljb25cIilcclxuICBkZWxldGVCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZVwiKTtcclxuICBkZWxldGVCdG4udHlwZSA9IFwiaW1hZ2VcIjtcclxuICBkZWxldGVCdG4uc3JjID0gXCIuLi9pbWcvZGVsZXRlLWljb24uc3ZnXCI7XHJcbiAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgZGVsZXRlVGFzayh0YXNrLnRpdGxlKTtcclxuICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3ModG9kby5hY3RpdmVQcm9qZWN0KTtcclxuICB9KTsgLy8gV2l0aG91dCBmdW5jdGlvbiB3cmFwcGluZyBpdCBnZXRzIHRyaWdnZXJlZCB1cG9uIHBhZ2UgbG9hZCBpbnN0ZWFkIG9mIGNsaWNrLlxyXG5cclxuICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZHVlKTtcclxuICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcblxyXG4gIHJldHVybiB0YXNrUmlnaHQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza1RpdGxlKXtcclxuICB0b2RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICBpZihwcm9qZWN0LnRpdGxlID09IHRvZG8uYWN0aXZlUHJvamVjdCl7XHJcbiAgICAgIHByb2plY3QudGFza3MgPSBwcm9qZWN0LnRhc2tzLmZpbHRlcihmdW5jdGlvbih0YXNrKXtcclxuICAgICAgICByZXR1cm4gdGFzay50aXRsZSAhPT0gdGFza1RpdGxlO1xyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsZWFyVGFza3MoKXtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpLmlubmVySFRNTD1cIlwiO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUFjdGl2ZVByb2plY3RUaXRsZSh0aXRsZSl7XHJcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpOyBcclxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb2xvciwgY29tcGxldGVkKXtcclxuICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29sb3IsIGNvbXBsZXRlZCk7XHJcbiAgcmV0dXJuIHRhc2s7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzdWJtaXRUYXNrRm9ybSgpeyAvL1RPRE86IEZpbmlzaFxyXG4gIGNvbnN0IHN1Ym1pdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFzay1mb3JtXCIpXHJcbiAgc3VibWl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvci1wcmlvcml0eVwiKS52YWx1ZVxyXG5cclxuICAgICAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PntcclxuICAgICAgICBpZihwcm9qZWN0LnRpdGxlID09IHRvZG8uYWN0aXZlUHJvamVjdCl7XHJcbiAgICAgICAgICBwcm9qZWN0LmFkZFRhc2soY3JlYXRlVGFzayh0YXNrVGl0bGUsIFwiXCIsIGR1ZURhdGUsIHByaW9yaXR5LCBcIlwiLCBmYWxzZSkpO1xyXG4gICAgICAgICAgZGlzcGxheUFjdGl2ZVByb2plY3RUYXNrcyh0b2RvLmFjdGl2ZVByb2plY3QpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBjbG9zZVRhc2tGb3JtKCk7XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpe1xyXG4gIGNvbnN0IGFkZFRhc2tzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stZm9ybVwiKVxyXG4gIGFkZFRhc2tzRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhpZGVUYXNrc0lmTm9BY3RpdmVQcm9qZWN0KCl7XHJcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xyXG4gIHRhc2tzRGl2LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbiAgY29uc3QgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtaGVhZGVyJyk7XHJcbiAgdGFza3NIZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VGFza3NJZkFjdGl2ZVByb2plY3QoKXtcclxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XHJcbiAgdGFza3NEaXYuc3R5bGUuZGlzcGxheT1cImZsZXhcIjtcclxuICBjb25zdCB0YXNrc0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1oZWFkZXInKTtcclxuICB0YXNrc0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn1cclxuXHJcbi8vVE9ETzogYWRkIGRlbGV0ZSBwcm9qZWN0IGJ1dHRvbiBmdW5jdGlvblxyXG5cclxuXHJcbi8vVE9ETzogcHJldmVudCBmb3JtIHN1Ym1pc3Npb24gaWYgbWlzc2luZyBpbmZvLlxyXG5cclxuLy8gUHJlLWV4aXN0aW5nIHByb2plY3Qgd2l0aCB0YXNrXHJcbmxldCBleGlzdGluZ1Byb2ogPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCAxVGl0bGVcIik7XHJcbmV4aXN0aW5nUHJvai5hZGRUYXNrKGNyZWF0ZVRhc2soXCJUYXNrMVwiLCBcIlRhc2sgMSBEZXNjcmlwdGlvblwiLCBcIkR1ZSBEYXRlXCIsIDMsIGZhbHNlKSk7XHJcbmV4aXN0aW5nUHJvai5hZGRUYXNrKGNyZWF0ZVRhc2soXCJUYXNrMlwiLCBcIlRhc2sgMiBEZXNjcmlwdGlvblwiLCBcIkR1ZSBEYXRlXCIsIDIsIGZhbHNlKSk7XHJcblxyXG50b2RvLnByb2plY3RzLnB1c2goZXhpc3RpbmdQcm9qKTtcclxudG9kby5hY3RpdmVQcm9qZWN0PWV4aXN0aW5nUHJvai50aXRsZTtcclxuXHJcbmFkZFByb2plY3QoKTtcclxucmVmcmVzaFByb2plY3RzKCk7XHJcbnN1Ym1pdFRhc2tGb3JtKCk7XHJcbmhpZGVUYXNrc0lmTm9BY3RpdmVQcm9qZWN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9