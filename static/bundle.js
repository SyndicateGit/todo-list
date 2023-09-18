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
/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ "./src/Project.js");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");



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
    this.completed = false;
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
  const task = new _task__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, dueDate, priority, completed);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCa0M7QUFDTDtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZSxlQUFlLEVBQUM7QUFDL0I7Ozs7Ozs7Ozs7Ozs7OztBQ3RDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNJO0FBQ1Y7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsZ0RBQWU7QUFDZjtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3R7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRpdGxlID0gXCJcIil7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRhc2tzID0gW11cclxuICB9XHJcblxyXG4gIHNldFRpdGxlKHRpdGxlKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCl7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZVxyXG4gIH1cclxuXHJcbiAgYWRkVGFzayhUYXNrKXtcclxuICAgIHRoaXMudGFza3MucHVzaChUYXNrKTtcclxuICB9XHJcblxyXG4gIGdldFRhc2tzKCl7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICB9XHJcbn0iLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0LmpzXCJcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFzay5qc1wiO1xyXG5cclxuLy8gT3BlbnMgZm9ybSB0byBhZGQgcHJvamVjdFxyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0Rm9ybSgpe1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaWNvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyBQcmV2ZW50IENyZWF0aW5nIG5ldyBwcm9qZWN0IGZvcm0gd2hlbiBmb3JtIGFscmVhZHkgZXhpc3RcclxuICAgIGNvbnN0IGV4aXN0aW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgZXhpc3RpbmdGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsUHJvamVjdEZvcm0oKXtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc3QgZXhpc3RpbmdGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbiAgICBleGlzdGluZ0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gJyc7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVByb2plY3ROYXYoKXtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGNvbnN0IHByb2plY3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG4gICAgaWYocHJvamVjdE5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2dnbGVkXCIpKXtcclxuICAgICAgcHJvamVjdE5hdi5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlZFwiKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgcHJvamVjdE5hdi5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlZFwiKVxyXG4gICAgfVxyXG4gIH0pXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBhZGRBbGxEb21FdmVudHMoKXtcclxuICBhZGROZXdQcm9qZWN0Rm9ybSgpO1xyXG4gIGNhbmNlbFByb2plY3RGb3JtKCk7XHJcbiAgdG9nZ2xlUHJvamVjdE5hdigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRBbGxEb21FdmVudHM7XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlID0gXCJcIiwgZGVzY3JpcHRpb249IFwiXCIsIGR1ZURhdGUgPSBcIlwiLCBwcmlvcml0eSA9IDAsIGNvbXBsZXRlZCA9IGZhbHNlKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgYWRkQWxsRG9tRXZlbnRzIGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG52YXIgcHJvamVjdHMgPSBbXTtcclxuXHJcbmFkZEFsbERvbUV2ZW50cygpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSl7XHJcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcclxuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCl7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcclxuICBcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gUHJldmVudHMgZGVmYXVsdCBzdWJtaXRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgcHJvamVjdCBhbmQgcHVzaCB0byBwcm9qZWN0c1xyXG4gICAgY29uc3QgcHJvamVjdF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWU7XHJcblxyXG4gICAgaWYocHJvamVjdFRpdGxlQWxyZWFkeUV4aXN0KHByb2plY3RfdGl0bGUpKXtcclxuICAgICAgYWxlcnQoXCJQcm9qZWN0IFRpdGxlIEFscmVhZHkgRXhpc3QuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZVByb2plY3QocHJvamVjdF90aXRsZSk7XHJcblxyXG4gICAgcmVmcmVzaFByb2plY3RzKClcclxuXHJcbiAgICAvLyBSZXNldCBhbmQgaGlkZSBwcm9qZWN0IGZvcm0gYWZ0ZXIgYWRkLlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gJyc7XHJcbiAgICBmb3JtLnN0eWxlID0gJ25vbmUnO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0VGl0bGVBbHJlYWR5RXhpc3QoVGl0bGUpe1xyXG4gIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgIGlmKHByb2plY3QudGl0bGUgPT0gVGl0bGUpe1xyXG4gICAgICBmbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBmbGFnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFByb2plY3QoVGl0bGUpe1xyXG4gIGxldCBmZXRjaDtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgaWYocHJvamVjdC50aXRsZSA9PSBUaXRsZSl7XHJcbiAgICAgIGZldGNoID0gcHJvamVjdDtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBmZXRjaDtcclxufVxyXG5mdW5jdGlvbiByZWZyZXNoUHJvamVjdHMoKXtcclxuICAvLyBEZWxldGVzIHByb2plY3RzXHJcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XHJcbiAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIC8vIFJlbG9hZHMgcHJvamVjdHNcclxuICBwcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKGFycmF5SXRlbSl7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGFiXCIpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJuYXYtaWNvblwiKTtcclxuICAgIHByb2plY3RJY29uLnNyYz1cIi4uL2ltZy9tZW51LnN2Z1wiO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFycmF5SXRlbS50aXRsZTtcclxuXHJcbiAgICBwcm9qZWN0LmlkID0gYXJyYXlJdGVtLnRpdGxlO1xyXG5cclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG5cclxuICAgIC8vIEFkZCBhY3RpdmUgdG8gYWN0aXZlIHByb2plY3RcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHNldFByb2plY3RBY3RpdmUocHJvamVjdCk7XHJcbiAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3MocHJvamVjdCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG4vLyBTZXRzIGFjdGl2ZSBwcm9qZWN0IGNsYXNzIGFjdGl2ZS5cclxuZnVuY3Rpb24gc2V0UHJvamVjdEFjdGl2ZShwcm9qZWN0KXtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LXRhYlwiKTtcclxuXHJcbiAgYnV0dG9ucy5mb3JFYWNoKChlKT0+e1xyXG4gICAgaWYoZSAhPT0gcHJvamVjdCl7XHJcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcm9qZWN0XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XHJcbiAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3MocHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy8gVE9ETzogRGlzcGxheSBUYXNrcyBpbiBQcm9qZWN0LlxyXG5mdW5jdGlvbiBkaXNwbGF5QWN0aXZlUHJvamVjdFRhc2tzKHByb2plY3Qpe1xyXG4gIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XHJcbiAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGZldGNoUHJvamVjdChwcm9qZWN0LmlkKTtcclxuICBkaXNwbGF5QWN0aXZlUHJvamVjdFRpdGxlKGFjdGl2ZVByb2plY3QudGl0bGUpO1xyXG5cclxuICBsZXQgYWN0aXZlVGFza3MgPSBhY3RpdmVQcm9qZWN0LmdldFRhc2tzKCk7XHJcbiAgY29uc29sZS5sb2coYWN0aXZlVGFza3MpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QWN0aXZlUHJvamVjdFRpdGxlKHRpdGxlKXtcclxuICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpe1xyXG4gIGNvbnN0IHRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb21wbGV0ZWQpO1xyXG4gIGNvbnNvbGUubG9nKHRhc2spO1xyXG4gIHJldHVybiB0YXNrO1xyXG59XHJcblxyXG5cclxuLy8gUHJlLWV4aXN0aW5nIHByb2plY3Qgd2l0aCB0YXNrXHJcbmxldCBleGlzdGluZ1Byb2ogPSBjcmVhdGVQcm9qZWN0KFwiUHJvamVjdCAxVGl0bGVcIik7XHJcbmV4aXN0aW5nUHJvai5hZGRUYXNrKGNyZWF0ZVRhc2soXCJUYXNrMVwiLCBcIlRhc2sgMSBEZXNjcmlwdGlvblwiLCBcIkR1ZSBEYXRlXCIsIDMsIGZhbHNlKSk7XHJcbmV4aXN0aW5nUHJvai5hZGRUYXNrKGNyZWF0ZVRhc2soXCJUYXNrMlwiLCBcIlRhc2sgMiBEZXNjcmlwdGlvblwiLCBcIkR1ZSBEYXRlXCIsIDIsIGZhbHNlKSk7XHJcblxyXG5hZGRQcm9qZWN0KCk7XHJcbnJlZnJlc2hQcm9qZWN0cygpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==