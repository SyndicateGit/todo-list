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

function addAllDomEvents(){
  addNewProjectForm();
  cancelProjectForm();
  toggleProjectNav();
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
  constructor(title = "", description= "", dueDate = "", priority = 0, completed = false){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
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




var projects = [];
var activeProject; // Remembers which project is actively displayed

(0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();

function createProject(title){
  const project = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](title);
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

function projectTitleAlreadyExist(Title){ // Added to TodoPage Class
  let flag = false;
  projects.forEach((project)=>{
    if(project.title == Title){
      flag = true;
    }
  })
  return flag;
}

function fetchProject(Title){ // Added to TodoPage Class 
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
      activeProject = project.id;
      setProjectActive(project);
      displayActiveProjectTasks(project);
    })

    setProjectActive(document.getElementById(activeProject));

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





// Pre-existing project with task
let existingProj = createProject("Project 1Title");
existingProj.addTask(createTask("Task1", "Task 1 Description", "Due Date", 3, false));
existingProj.addTask(createTask("Task2", "Task 2 Description", "Due Date", 2, false));

addProject();
refreshProjects();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQztBQUMvQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNOZ0M7QUFDSTtBQUNWO0FBQzFCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQSxnREFBZTtBQUNmO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvdGFzay5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdHtcclxuXHJcbiAgY29uc3RydWN0b3IodGl0bGUgPSBcIlwiKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMudGFza3MgPSBbXVxyXG4gIH1cclxuXHJcbiAgc2V0VGl0bGUodGl0bGUpe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGl0bGUoKXtcclxuICAgIHJldHVybiB0aGlzLnRpdGxlXHJcbiAgfVxyXG5cclxuICBhZGRUYXNrKFRhc2spe1xyXG4gICAgdGhpcy50YXNrcy5wdXNoKFRhc2spO1xyXG4gIH1cclxuXHJcbiAgZ2V0VGFza3MoKXtcclxuICAgIHJldHVybiB0aGlzLnRhc2tzO1xyXG4gIH1cclxufSIsIi8vIE9wZW5zIGZvcm0gdG8gYWRkIHByb2plY3RcclxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdEZvcm0oKXtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWljb25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gUHJldmVudCBDcmVhdGluZyBuZXcgcHJvamVjdCBmb3JtIHdoZW4gZm9ybSBhbHJlYWR5IGV4aXN0XHJcbiAgICBjb25zdCBleGlzdGluZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuICAgIGV4aXN0aW5nRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbmNlbFByb2plY3RGb3JtKCl7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW5jZWwtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGNvbnN0IGV4aXN0aW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgZXhpc3RpbmdGb3JtLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKS52YWx1ZSA9ICcnO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0b2dnbGVQcm9qZWN0TmF2KCl7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51LWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICBjb25zdCBwcm9qZWN0TmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm5hdlwiKTtcclxuICAgIGlmKHByb2plY3ROYXYuY2xhc3NMaXN0LmNvbnRhaW5zKFwidG9nZ2xlZFwiKSl7XHJcbiAgICAgIHByb2plY3ROYXYuY2xhc3NMaXN0LnJlbW92ZShcInRvZ2dsZWRcIik7XHJcbiAgICB9IGVsc2V7XHJcbiAgICAgIHByb2plY3ROYXYuY2xhc3NMaXN0LmFkZChcInRvZ2dsZWRcIilcclxuICAgIH1cclxuICB9KVxyXG59IFxyXG5cclxuZnVuY3Rpb24gYWRkQWxsRG9tRXZlbnRzKCl7XHJcbiAgYWRkTmV3UHJvamVjdEZvcm0oKTtcclxuICBjYW5jZWxQcm9qZWN0Rm9ybSgpO1xyXG4gIHRvZ2dsZVByb2plY3ROYXYoKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQWxsRG9tRXZlbnRzO1xyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3tcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSA9IFwiXCIsIGRlc2NyaXB0aW9uPSBcIlwiLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHkgPSAwLCBjb21wbGV0ZWQgPSBmYWxzZSl7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTsgLy8gQnV0dG9uIHRvIGZhZGUgb3V0IGJveCAoY2hhbmdlIGNvbG9yKSBhbmQgY3Jvc3Mgb3V0IGZvbnQuIFdpdGggY2lyY3VsYXIgYm94IHRoYXQgdGlja3MuXHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCBhZGRBbGxEb21FdmVudHMgZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcbnZhciBwcm9qZWN0cyA9IFtdO1xyXG52YXIgYWN0aXZlUHJvamVjdDsgLy8gUmVtZW1iZXJzIHdoaWNoIHByb2plY3QgaXMgYWN0aXZlbHkgZGlzcGxheWVkXHJcblxyXG5hZGRBbGxEb21FdmVudHMoKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpe1xyXG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XHJcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICByZXR1cm4gcHJvamVjdDtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkUHJvamVjdCgpe1xyXG4gIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1mb3JtJyk7XHJcbiAgXHJcbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKXtcclxuICAgIC8vIFByZXZlbnRzIGRlZmF1bHQgc3VibWl0XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgLy8gQ3JlYXRlIHByb2plY3QgYW5kIHB1c2ggdG8gcHJvamVjdHNcclxuICAgIGNvbnN0IHByb2plY3RfdGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC10aXRsZScpLnZhbHVlO1xyXG5cclxuICAgIGlmKHByb2plY3RUaXRsZUFscmVhZHlFeGlzdChwcm9qZWN0X3RpdGxlKSl7XHJcbiAgICAgIGFsZXJ0KFwiUHJvamVjdCBUaXRsZSBBbHJlYWR5IEV4aXN0LlwiKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3RfdGl0bGUpO1xyXG5cclxuICAgIHJlZnJlc2hQcm9qZWN0cygpXHJcbiAgICBcclxuXHJcbiAgICAvLyBSZXNldCBhbmQgaGlkZSBwcm9qZWN0IGZvcm0gYWZ0ZXIgYWRkLlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gJyc7XHJcbiAgICBmb3JtLnN0eWxlID0gJ25vbmUnO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0VGl0bGVBbHJlYWR5RXhpc3QoVGl0bGUpeyAvLyBBZGRlZCB0byBUb2RvUGFnZSBDbGFzc1xyXG4gIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgIGlmKHByb2plY3QudGl0bGUgPT0gVGl0bGUpe1xyXG4gICAgICBmbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBmbGFnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFByb2plY3QoVGl0bGUpeyAvLyBBZGRlZCB0byBUb2RvUGFnZSBDbGFzcyBcclxuICBsZXQgZmV0Y2g7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgIGlmKHByb2plY3QudGl0bGUgPT0gVGl0bGUpe1xyXG4gICAgICBmZXRjaCA9IHByb2plY3Q7XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gZmV0Y2g7XHJcbn1cclxuZnVuY3Rpb24gcmVmcmVzaFByb2plY3RzKCl7XHJcbiAgLy8gRGVsZXRlcyBwcm9qZWN0c1xyXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xyXG4gIHByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAvLyBSZWxvYWRzIHByb2plY3RzXHJcbiAgcHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihhcnJheUl0ZW0pe1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhYlwiKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWljb25cIik7XHJcbiAgICBwcm9qZWN0SWNvbi5zcmM9XCIuLi9pbWcvbWVudS5zdmdcIjtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhcnJheUl0ZW0udGl0bGU7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWljb25cIik7XHJcbiAgICBkZWxldGVJY29uLnNyYz1cIi4uL2ltZy9kZWxldGUtaWNvbi5zdmdcIjtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpOyAvLyBUT0RPOiBBZGQgZGVsZXRlIHByb2plY3QgZXZlbnQgbGlzdGVuZXIuXHJcblxyXG4gICAgcHJvamVjdC5pZCA9IGFycmF5SXRlbS50aXRsZTtcclxuXHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcblxyXG4gICAgLy8gQWRkIGFjdGl2ZSB0byBhY3RpdmUgcHJvamVjdFxyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgYWN0aXZlUHJvamVjdCA9IHByb2plY3QuaWQ7XHJcbiAgICAgIHNldFByb2plY3RBY3RpdmUocHJvamVjdCk7XHJcbiAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3MocHJvamVjdCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHNldFByb2plY3RBY3RpdmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYWN0aXZlUHJvamVjdCkpO1xyXG5cclxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG4vLyBTZXRzIGFjdGl2ZSBwcm9qZWN0IGNsYXNzIGFjdGl2ZS5cclxuZnVuY3Rpb24gc2V0UHJvamVjdEFjdGl2ZShwcm9qZWN0KXsgXHJcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdC10YWJcIik7XHJcblxyXG4gIGJ1dHRvbnMuZm9yRWFjaCgoZSk9PntcclxuICAgIGlmKGUgIT09IHByb2plY3Qpe1xyXG4gICAgICBlLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmUtcHJvamVjdFwiKTtcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIGUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZS1wcm9qZWN0XCIpO1xyXG4gICAgICBkaXNwbGF5QWN0aXZlUHJvamVjdFRhc2tzKHByb2plY3QpO1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIFRPRE86IERpc3BsYXkgVGFza3MgaW4gUHJvamVjdC5cclxuZnVuY3Rpb24gZGlzcGxheUFjdGl2ZVByb2plY3RUYXNrcyhwcm9qZWN0KXtcclxuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZmV0Y2hQcm9qZWN0KHByb2plY3QuaWQpO1xyXG4gIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGl0bGUoYWN0aXZlUHJvamVjdC50aXRsZSk7XHJcblxyXG4gIGxldCBhY3RpdmVUYXNrcyA9IGFjdGl2ZVByb2plY3QuZ2V0VGFza3MoKTtcclxuICBjb25zb2xlLmxvZyhhY3RpdmVUYXNrcyk7IC8vIFRPRE86IGRpc3BsYXkgdGFza3NcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGl0bGUodGl0bGUpe1xyXG4gIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZVwiKTsgXHJcbiAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gdGl0bGU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29sb3IsIGNvbXBsZXRlZCl7XHJcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbG9yLCBjb21wbGV0ZWQpO1xyXG4gIGNvbnNvbGUubG9nKHRhc2spO1xyXG4gIHJldHVybiB0YXNrO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gUHJlLWV4aXN0aW5nIHByb2plY3Qgd2l0aCB0YXNrXHJcbmxldCBleGlzdGluZ1Byb2ogPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCAxVGl0bGVcIik7XHJcbmV4aXN0aW5nUHJvai5hZGRUYXNrKGNyZWF0ZVRhc2soXCJUYXNrMVwiLCBcIlRhc2sgMSBEZXNjcmlwdGlvblwiLCBcIkR1ZSBEYXRlXCIsIDMsIGZhbHNlKSk7XHJcbmV4aXN0aW5nUHJvai5hZGRUYXNrKGNyZWF0ZVRhc2soXCJUYXNrMlwiLCBcIlRhc2sgMiBEZXNjcmlwdGlvblwiLCBcIkR1ZSBEYXRlXCIsIDIsIGZhbHNlKSk7XHJcblxyXG5hZGRQcm9qZWN0KCk7XHJcbnJlZnJlc2hQcm9qZWN0cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==