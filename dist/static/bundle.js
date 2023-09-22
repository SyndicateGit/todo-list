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
      displayActiveProjectTasks(project.id);
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
  const activeProject = fetchProject(projectTitle);
  displayActiveProjectTitle(projectTitle);


  let activeTasks = activeProject.getTasks();

  
  clearTasks();

  activeTasks.forEach((task)=>{
    const taskDiv = createTaskDiv(task);
    document.querySelector(".tasks").appendChild(taskDiv);
  })

  showTasksIfActiveProject();
}

function createTaskDiv(task){ 
  const taskDiv = document.createElement("div");
  taskDiv.classList.add("task")
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
  taskComplete.src = "../img/circle-outline.svg";
  //TODO: Add complete task function

  const taskTitle = document.createElement("div");
  taskTitle.classList.add("task-title")
  taskTitle.textContent = task.title;

  taskLeft.appendChild(taskComplete);
  taskLeft.appendChild(taskTitle);

  return taskLeft
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
  //TODO: delete task function

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
  const task = new _task__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, dueDate, priority, color, completed);
  console.log(task);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQztBQUMvQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkRlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNJO0FBQ1Y7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsZ0RBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsOEJBQThCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRDtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQiw2Q0FBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0e1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0aXRsZSA9IFwiXCIpe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdXHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZSh0aXRsZSl7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGVcclxuICB9XHJcblxyXG4gIGFkZFRhc2soVGFzayl7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2goVGFzayk7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpe1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgfVxyXG59IiwiLy8gT3BlbnMgZm9ybSB0byBhZGQgcHJvamVjdFxyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0Rm9ybSgpe1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaWNvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyBQcmV2ZW50IENyZWF0aW5nIG5ldyBwcm9qZWN0IGZvcm0gd2hlbiBmb3JtIGFscmVhZHkgZXhpc3RcclxuICAgIGNvbnN0IGV4aXN0aW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgZXhpc3RpbmdGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsUHJvamVjdEZvcm0oKXtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc3QgZXhpc3RpbmdGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbiAgICBleGlzdGluZ0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gJyc7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVByb2plY3ROYXYoKXtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGNvbnN0IHByb2plY3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG4gICAgaWYocHJvamVjdE5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2dnbGVkXCIpKXtcclxuICAgICAgcHJvamVjdE5hdi5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlZFwiKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgcHJvamVjdE5hdi5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlZFwiKVxyXG4gICAgfVxyXG4gIH0pXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBvcGVuQWRkVGFza3NGb3JtKCl7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc3QgYWRkVGFza3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFzay1mb3JtXCIpXHJcbiAgICBhZGRUYXNrc0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlVGFza3NGb3JtKCl7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtYWRkLXRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc3QgYWRkVGFza3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFzay1mb3JtXCIpXHJcbiAgICBhZGRUYXNrc0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEFsbERvbUV2ZW50cygpe1xyXG4gIGFkZE5ld1Byb2plY3RGb3JtKCk7XHJcbiAgY2FuY2VsUHJvamVjdEZvcm0oKTtcclxuICB0b2dnbGVQcm9qZWN0TmF2KCk7XHJcbiAgb3BlbkFkZFRhc2tzRm9ybSgpO1xyXG4gIGNsb3NlVGFza3NGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEFsbERvbUV2ZW50cztcclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XHJcbiAgY29uc3RydWN0b3IodGl0bGUgPSBcIlwiLCBkZXNjcmlwdGlvbj0gXCJcIiwgZHVlRGF0ZSA9IFwiXCIsIHByaW9yaXR5ID0gMCwgY29sb3IgPSBcIlwiLGNvbXBsZXRlZCA9IGZhbHNlKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlOyAvLyBCdXR0b24gdG8gZmFkZSBvdXQgYm94IChjaGFuZ2UgY29sb3IpIGFuZCBjcm9zcyBvdXQgZm9udC4gV2l0aCBjaXJjdWxhciBib3ggdGhhdCB0aWNrcy5cclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcclxuaW1wb3J0IGFkZEFsbERvbUV2ZW50cyBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuXHJcblxyXG5hZGRBbGxEb21FdmVudHMoKTtcclxuXHJcbmNsYXNzIFRvZG97XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICAgIHRoaXMuYWN0aXZlUHJvamVjdDsgLy8gUmVtZW1iZXJzIHdoaWNoIHByb2plY3QgaXMgYWN0aXZlXHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB0b2RvID0gbmV3IFRvZG8oKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpe1xyXG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XHJcbiAgcmV0dXJuIHByb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKXtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpO1xyXG4gIFxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyBQcmV2ZW50cyBkZWZhdWx0IHN1Ym1pdFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBwcm9qZWN0IGFuZCBwdXNoIHRvIHByb2plY3RzXHJcbiAgICBjb25zdCBwcm9qZWN0X3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnKS52YWx1ZTtcclxuXHJcbiAgICBpZihwcm9qZWN0VGl0bGVBbHJlYWR5RXhpc3QocHJvamVjdF90aXRsZSkpe1xyXG4gICAgICBhbGVydChcIlByb2plY3QgVGl0bGUgQWxyZWFkeSBFeGlzdC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3RfdGl0bGUpO1xyXG4gICAgdG9kby5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cclxuICAgIHJlZnJlc2hQcm9qZWN0cygpXHJcbiBcclxuICAgIC8vIFJlc2V0IGFuZCBoaWRlIHByb2plY3QgZm9ybSBhZnRlciBhZGQuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIikudmFsdWUgPSAnJztcclxuICAgIGZvcm0uc3R5bGUgPSAnbm9uZSc7XHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RUaXRsZUFscmVhZHlFeGlzdChUaXRsZSl7IC8vIEFkZGVkIHRvIFRvZG9QYWdlIENsYXNzXHJcbiAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICB0b2RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICBpZihwcm9qZWN0LnRpdGxlID09IFRpdGxlKXtcclxuICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gZmxhZztcclxufVxyXG5cclxuZnVuY3Rpb24gZmV0Y2hQcm9qZWN0KFRpdGxlKXsgLy8gQWRkZWQgdG8gVG9kb1BhZ2UgQ2xhc3MgXHJcbiAgbGV0IGZldGNoO1xyXG4gIHRvZG8ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgIGlmKHByb2plY3QudGl0bGUgPT0gVGl0bGUpe1xyXG4gICAgICBmZXRjaCA9IHByb2plY3Q7XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gZmV0Y2g7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hQcm9qZWN0cygpe1xyXG4gIC8vIERlbGV0ZXMgcHJvamVjdHNcclxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtbGlzdFwiKTtcclxuICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgLy8gUmVsb2FkcyBwcm9qZWN0c1xyXG4gIHRvZG8ucHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihhcnJheUl0ZW0pe1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhYlwiKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWljb25cIik7XHJcbiAgICBwcm9qZWN0SWNvbi5zcmM9XCIuLi9pbWcvbWVudS5zdmdcIjtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhcnJheUl0ZW0udGl0bGU7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWljb25cIik7XHJcbiAgICBkZWxldGVJY29uLnNyYz1cIi4uL2ltZy9kZWxldGUtaWNvbi5zdmdcIjtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpOyAvLyBUT0RPOiBBZGQgZGVsZXRlIHByb2plY3QgZXZlbnQgbGlzdGVuZXIuXHJcblxyXG4gICAgcHJvamVjdC5pZCA9IGFycmF5SXRlbS50aXRsZTtcclxuXHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcblxyXG4gICAgLy8gQWRkIGFjdGl2ZSB0byBhY3RpdmUgcHJvamVjdFxyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgdG9kby5hY3RpdmVQcm9qZWN0ID0gcHJvamVjdC5pZDtcclxuICAgICAgc2V0UHJvamVjdEFjdGl2ZShwcm9qZWN0KTtcclxuICAgICAgZGlzcGxheUFjdGl2ZVByb2plY3RUYXNrcyhwcm9qZWN0LmlkKTtcclxuICAgIH0pXHJcblxyXG4gICAgc2V0UHJvamVjdEFjdGl2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvLmFjdGl2ZVByb2plY3QpKTtcclxuXHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuICB9KVxyXG59XHJcblxyXG4vLyBTZXRzIGFjdGl2ZSBwcm9qZWN0IGNsYXNzIGFjdGl2ZS5cclxuZnVuY3Rpb24gc2V0UHJvamVjdEFjdGl2ZShwcm9qZWN0KXsgXHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC10YWJcIik7XHJcblxyXG4gIGJ1dHRvbnMuZm9yRWFjaCgoZSk9PntcclxuICAgIGlmKGUgIT09IHByb2plY3Qpe1xyXG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcHJvamVjdFwiKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcm9qZWN0XCIpO1xyXG4gICAgICBkaXNwbGF5QWN0aXZlUHJvamVjdFRhc2tzKHByb2plY3QuaWQpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3MocHJvamVjdFRpdGxlKXtcclxuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZmV0Y2hQcm9qZWN0KHByb2plY3RUaXRsZSk7XHJcbiAgZGlzcGxheUFjdGl2ZVByb2plY3RUaXRsZShwcm9qZWN0VGl0bGUpO1xyXG5cclxuXHJcbiAgbGV0IGFjdGl2ZVRhc2tzID0gYWN0aXZlUHJvamVjdC5nZXRUYXNrcygpO1xyXG5cclxuICBcclxuICBjbGVhclRhc2tzKCk7XHJcblxyXG4gIGFjdGl2ZVRhc2tzLmZvckVhY2goKHRhc2spPT57XHJcbiAgICBjb25zdCB0YXNrRGl2ID0gY3JlYXRlVGFza0Rpdih0YXNrKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIikuYXBwZW5kQ2hpbGQodGFza0Rpdik7XHJcbiAgfSlcclxuXHJcbiAgc2hvd1Rhc2tzSWZBY3RpdmVQcm9qZWN0KCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tEaXYodGFzayl7IFxyXG4gIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tcIilcclxuICB0YXNrRGl2LmlkID0gdGFzay50aXRsZTtcclxuXHJcbiAgY29uc3QgdGFza0xlZnQgPSBjcmVhdGVUYXNrTGVmdCh0YXNrKTtcclxuICBjb25zdCB0YXNrUmlnaHQgPSBjcmVhdGVUYXNrUmlnaHQodGFzayk7XHJcblxyXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza0xlZnQpO1xyXG4gIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza1JpZ2h0KTtcclxuICByZXR1cm4gdGFza0RpdjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0xlZnQodGFzayl7IFxyXG4gIGNvbnN0IHRhc2tMZWZ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrTGVmdC5jbGFzc0xpc3QuYWRkKFwidGFzay1sZWZ0XCIpO1xyXG5cclxuICBjb25zdCB0YXNrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgdGFza0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpOyBcclxuICB0YXNrQ29tcGxldGUuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpOyBcclxuICB0YXNrQ29tcGxldGUudHlwZSA9IFwiaW1hZ2VcIjtcclxuICB0YXNrQ29tcGxldGUuc3JjID0gXCIuLi9pbWcvY2lyY2xlLW91dGxpbmUuc3ZnXCI7XHJcbiAgLy9UT0RPOiBBZGQgY29tcGxldGUgdGFzayBmdW5jdGlvblxyXG5cclxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKVxyXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcblxyXG4gIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZSk7XHJcbiAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuXHJcbiAgcmV0dXJuIHRhc2tMZWZ0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tSaWdodCh0YXNrKXtcclxuICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tSaWdodC5jbGFzc0xpc3QuYWRkKFwidGFzay1yaWdodFwiKTtcclxuXHJcbiAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZHVlLnRleHRDb250ZW50ID0gXCJEdWU6XCI7XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIilcclxuICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xyXG5cclxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpXHJcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XHJcbiAgZGVsZXRlQnRuLnR5cGUgPSBcImltYWdlXCI7XHJcbiAgZGVsZXRlQnRuLnNyYyA9IFwiLi4vaW1nL2RlbGV0ZS1pY29uLnN2Z1wiO1xyXG4gIC8vVE9ETzogZGVsZXRlIHRhc2sgZnVuY3Rpb25cclxuXHJcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGR1ZSk7XHJcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gIHRhc2tSaWdodC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cclxuICByZXR1cm4gdGFza1JpZ2h0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbGVhclRhc2tzKCl7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKS5pbm5lckhUTUw9XCJcIjtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGl0bGUodGl0bGUpe1xyXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTsgXHJcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29sb3IsIGNvbXBsZXRlZCl7XHJcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbG9yLCBjb21wbGV0ZWQpO1xyXG4gIGNvbnNvbGUubG9nKHRhc2spO1xyXG4gIHJldHVybiB0YXNrO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc3VibWl0VGFza0Zvcm0oKXsgLy9UT0RPOiBGaW5pc2hcclxuICBjb25zdCBzdWJtaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stZm9ybVwiKVxyXG4gIHN1Ym1pdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKS52YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XHJcblxyXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3ItcHJpb3JpdHlcIikudmFsdWVcclxuXHJcbiAgICAgIHRvZG8ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT57XHJcbiAgICAgICAgaWYocHJvamVjdC50aXRsZSA9PSB0b2RvLmFjdGl2ZVByb2plY3Qpe1xyXG4gICAgICAgICAgcHJvamVjdC5hZGRUYXNrKGNyZWF0ZVRhc2sodGFza1RpdGxlLCBcIlwiLCBkdWVEYXRlLCBwcmlvcml0eSwgXCJcIiwgZmFsc2UpKTtcclxuICAgICAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3ModG9kby5hY3RpdmVQcm9qZWN0KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgY2xvc2VUYXNrRm9ybSgpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKXtcclxuICBjb25zdCBhZGRUYXNrc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS10YXNrLWZvcm1cIilcclxuICBhZGRUYXNrc0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVGFza3NJZk5vQWN0aXZlUHJvamVjdCgpe1xyXG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcclxuICB0YXNrc0Rpdi5zdHlsZS5kaXNwbGF5PVwibm9uZVwiO1xyXG4gIGNvbnN0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWhlYWRlcicpO1xyXG4gIHRhc2tzSGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd1Rhc2tzSWZBY3RpdmVQcm9qZWN0KCl7XHJcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xyXG4gIHRhc2tzRGl2LnN0eWxlLmRpc3BsYXk9XCJmbGV4XCI7XHJcbiAgY29uc3QgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtaGVhZGVyJyk7XHJcbiAgdGFza3NIZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG59XHJcblxyXG4vLyBQcmUtZXhpc3RpbmcgcHJvamVjdCB3aXRoIHRhc2tcclxubGV0IGV4aXN0aW5nUHJvaiA9IGNyZWF0ZVByb2plY3QoXCJQcm9qZWN0IDFUaXRsZVwiKTtcclxuZXhpc3RpbmdQcm9qLmFkZFRhc2soY3JlYXRlVGFzayhcIlRhc2sxXCIsIFwiVGFzayAxIERlc2NyaXB0aW9uXCIsIFwiRHVlIERhdGVcIiwgMywgZmFsc2UpKTtcclxuZXhpc3RpbmdQcm9qLmFkZFRhc2soY3JlYXRlVGFzayhcIlRhc2syXCIsIFwiVGFzayAyIERlc2NyaXB0aW9uXCIsIFwiRHVlIERhdGVcIiwgMiwgZmFsc2UpKTtcclxuXHJcbnRvZG8ucHJvamVjdHMucHVzaChleGlzdGluZ1Byb2opO1xyXG50b2RvLmFjdGl2ZVByb2plY3Q9ZXhpc3RpbmdQcm9qLnRpdGxlO1xyXG5cclxuYWRkUHJvamVjdCgpO1xyXG5yZWZyZXNoUHJvamVjdHMoKTtcclxuc3VibWl0VGFza0Zvcm0oKTtcclxuaGlkZVRhc2tzSWZOb0FjdGl2ZVByb2plY3QoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=