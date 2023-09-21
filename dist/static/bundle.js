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
    
    todo.projects.push(createProject(project_title));

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

todo.projects.push(existingProj);

addProject();
refreshProjects();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQztBQUMvQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkNlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNJO0FBQ1Y7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsZ0RBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsZ0RBQU87QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0e1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0aXRsZSA9IFwiXCIpe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdXHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZSh0aXRsZSl7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGVcclxuICB9XHJcblxyXG4gIGFkZFRhc2soVGFzayl7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2goVGFzayk7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpe1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgfVxyXG59IiwiLy8gT3BlbnMgZm9ybSB0byBhZGQgcHJvamVjdFxyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0Rm9ybSgpe1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaWNvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyBQcmV2ZW50IENyZWF0aW5nIG5ldyBwcm9qZWN0IGZvcm0gd2hlbiBmb3JtIGFscmVhZHkgZXhpc3RcclxuICAgIGNvbnN0IGV4aXN0aW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgZXhpc3RpbmdGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsUHJvamVjdEZvcm0oKXtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc3QgZXhpc3RpbmdGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbiAgICBleGlzdGluZ0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gJyc7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVByb2plY3ROYXYoKXtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGNvbnN0IHByb2plY3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG4gICAgaWYocHJvamVjdE5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2dnbGVkXCIpKXtcclxuICAgICAgcHJvamVjdE5hdi5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlZFwiKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgcHJvamVjdE5hdi5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlZFwiKVxyXG4gICAgfVxyXG4gIH0pXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBhZGRBbGxEb21FdmVudHMoKXtcclxuICBhZGROZXdQcm9qZWN0Rm9ybSgpO1xyXG4gIGNhbmNlbFByb2plY3RGb3JtKCk7XHJcbiAgdG9nZ2xlUHJvamVjdE5hdigpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhZGRBbGxEb21FdmVudHM7XHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUYXNre1xyXG4gIGNvbnN0cnVjdG9yKHRpdGxlID0gXCJcIiwgZGVzY3JpcHRpb249IFwiXCIsIGR1ZURhdGUgPSBcIlwiLCBwcmlvcml0eSA9IDAsIGNvbG9yID0gXCJcIixjb21wbGV0ZWQgPSBmYWxzZSl7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XHJcbiAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgdGhpcy5wcmlvcml0eSA9IHByaW9yaXR5O1xyXG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTsgLy8gQnV0dG9uIHRvIGZhZGUgb3V0IGJveCAoY2hhbmdlIGNvbG9yKSBhbmQgY3Jvc3Mgb3V0IGZvbnQuIFdpdGggY2lyY3VsYXIgYm94IHRoYXQgdGlja3MuXHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCBhZGRBbGxEb21FdmVudHMgZnJvbSBcIi4vZG9tXCI7XHJcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcclxuXHJcblxyXG5cclxuYWRkQWxsRG9tRXZlbnRzKCk7XHJcblxyXG5jbGFzcyBUb2Rve1xyXG4gIGNvbnN0cnVjdG9yKCl7XHJcbiAgICB0aGlzLnByb2plY3RzID0gW107XHJcbiAgICB0aGlzLmFjdGl2ZVByb2plY3Q7IC8vIFJlbWVtYmVycyB3aGljaCBwcm9qZWN0IGlzIGFjdGl2ZVxyXG4gIH1cclxufVxyXG5cclxuY29uc3QgdG9kbyA9IG5ldyBUb2RvKCk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcclxuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCl7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcclxuICBcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gUHJldmVudHMgZGVmYXVsdCBzdWJtaXRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgcHJvamVjdCBhbmQgcHVzaCB0byBwcm9qZWN0c1xyXG4gICAgY29uc3QgcHJvamVjdF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWU7XHJcblxyXG4gICAgaWYocHJvamVjdFRpdGxlQWxyZWFkeUV4aXN0KHByb2plY3RfdGl0bGUpKXtcclxuICAgICAgYWxlcnQoXCJQcm9qZWN0IFRpdGxlIEFscmVhZHkgRXhpc3QuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRvZG8ucHJvamVjdHMucHVzaChjcmVhdGVQcm9qZWN0KHByb2plY3RfdGl0bGUpKTtcclxuXHJcbiAgICByZWZyZXNoUHJvamVjdHMoKVxyXG4gICAgXHJcblxyXG4gICAgLy8gUmVzZXQgYW5kIGhpZGUgcHJvamVjdCBmb3JtIGFmdGVyIGFkZC5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKS52YWx1ZSA9ICcnO1xyXG4gICAgZm9ybS5zdHlsZSA9ICdub25lJztcclxuICB9KVxyXG5cclxufVxyXG5cclxuZnVuY3Rpb24gcHJvamVjdFRpdGxlQWxyZWFkeUV4aXN0KFRpdGxlKXsgLy8gQWRkZWQgdG8gVG9kb1BhZ2UgQ2xhc3NcclxuICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gIHRvZG8ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgIGlmKHByb2plY3QudGl0bGUgPT0gVGl0bGUpe1xyXG4gICAgICBmbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBmbGFnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFByb2plY3QoVGl0bGUpeyAvLyBBZGRlZCB0byBUb2RvUGFnZSBDbGFzcyBcclxuICBsZXQgZmV0Y2g7XHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgaWYocHJvamVjdC50aXRsZSA9PSBUaXRsZSl7XHJcbiAgICAgIGZldGNoID0gcHJvamVjdDtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBmZXRjaDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaFByb2plY3RzKCl7XHJcbiAgLy8gRGVsZXRlcyBwcm9qZWN0c1xyXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xyXG4gIHByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAvLyBSZWxvYWRzIHByb2plY3RzXHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKGFycmF5SXRlbSl7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGFiXCIpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJuYXYtaWNvblwiKTtcclxuICAgIHByb2plY3RJY29uLnNyYz1cIi4uL2ltZy9tZW51LnN2Z1wiO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFycmF5SXRlbS50aXRsZTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJuYXYtaWNvblwiKTtcclxuICAgIGRlbGV0ZUljb24uc3JjPVwiLi4vaW1nL2RlbGV0ZS1pY29uLnN2Z1wiO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIik7IC8vIFRPRE86IEFkZCBkZWxldGUgcHJvamVjdCBldmVudCBsaXN0ZW5lci5cclxuXHJcbiAgICBwcm9qZWN0LmlkID0gYXJyYXlJdGVtLnRpdGxlO1xyXG5cclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChkZWxldGVJY29uKTtcclxuXHJcbiAgICAvLyBBZGQgYWN0aXZlIHRvIGFjdGl2ZSBwcm9qZWN0XHJcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpe1xyXG4gICAgICB0b2RvLmFjdGl2ZVByb2plY3QgPSBwcm9qZWN0LmlkO1xyXG4gICAgICBzZXRQcm9qZWN0QWN0aXZlKHByb2plY3QpO1xyXG4gICAgICBkaXNwbGF5QWN0aXZlUHJvamVjdFRhc2tzKHByb2plY3QpO1xyXG4gICAgfSlcclxuXHJcbiAgICBzZXRQcm9qZWN0QWN0aXZlKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRvZG8uYWN0aXZlUHJvamVjdCkpO1xyXG5cclxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG4gIH0pXHJcbn1cclxuXHJcbi8vIFNldHMgYWN0aXZlIHByb2plY3QgY2xhc3MgYWN0aXZlLlxyXG5mdW5jdGlvbiBzZXRQcm9qZWN0QWN0aXZlKHByb2plY3QpeyBcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LXRhYlwiKTtcclxuXHJcbiAgYnV0dG9ucy5mb3JFYWNoKChlKT0+e1xyXG4gICAgaWYoZSAhPT0gcHJvamVjdCl7XHJcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcm9qZWN0XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XHJcbiAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3MocHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy8gVE9ETzogRGlzcGxheSBUYXNrcyBpbiBQcm9qZWN0LlxyXG5mdW5jdGlvbiBkaXNwbGF5QWN0aXZlUHJvamVjdFRhc2tzKHByb2plY3Qpe1xyXG4gIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBmZXRjaFByb2plY3QocHJvamVjdC5pZCk7XHJcbiAgZGlzcGxheUFjdGl2ZVByb2plY3RUaXRsZShhY3RpdmVQcm9qZWN0LnRpdGxlKTtcclxuXHJcbiAgbGV0IGFjdGl2ZVRhc2tzID0gYWN0aXZlUHJvamVjdC5nZXRUYXNrcygpO1xyXG4gIGNvbnNvbGUubG9nKGFjdGl2ZVRhc2tzKTsgLy8gVE9ETzogZGlzcGxheSB0YXNrc1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUFjdGl2ZVByb2plY3RUaXRsZSh0aXRsZSl7XHJcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpOyBcclxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb2xvciwgY29tcGxldGVkKXtcclxuICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29sb3IsIGNvbXBsZXRlZCk7XHJcbiAgY29uc29sZS5sb2codGFzayk7XHJcbiAgcmV0dXJuIHRhc2s7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyBQcmUtZXhpc3RpbmcgcHJvamVjdCB3aXRoIHRhc2tcclxubGV0IGV4aXN0aW5nUHJvaiA9IGNyZWF0ZVByb2plY3QoXCJQcm9qZWN0IDFUaXRsZVwiKTtcclxuZXhpc3RpbmdQcm9qLmFkZFRhc2soY3JlYXRlVGFzayhcIlRhc2sxXCIsIFwiVGFzayAxIERlc2NyaXB0aW9uXCIsIFwiRHVlIERhdGVcIiwgMywgZmFsc2UpKTtcclxuZXhpc3RpbmdQcm9qLmFkZFRhc2soY3JlYXRlVGFzayhcIlRhc2syXCIsIFwiVGFzayAyIERlc2NyaXB0aW9uXCIsIFwiRHVlIERhdGVcIiwgMiwgZmFsc2UpKTtcclxuXHJcbnRvZG8ucHJvamVjdHMucHVzaChleGlzdGluZ1Byb2opO1xyXG5cclxuYWRkUHJvamVjdCgpO1xyXG5yZWZyZXNoUHJvamVjdHMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=