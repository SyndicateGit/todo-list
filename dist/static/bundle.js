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
    this.tasks.append(Task);
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



var projects = [];

(0,_dom__WEBPACK_IMPORTED_MODULE_1__["default"])();

function createProject(title){
  const project = new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](title);
  projects.push(project);
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
}

function displayActiveProjectTitle(title){
  const tasksContainer = document.querySelector(".tasks-container");
  const titleElement = document.createElement("h1");
  titleElement.textContent = title;

  tasksContainer.appendChild(titleElement);
}
createProject("Project 1Title");
addProject();
refreshProjects();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmtDO0FBQ0w7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsZUFBZSxFQUFDO0FBQy9COzs7Ozs7Ozs7Ozs7Ozs7QUN0Q2U7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNJO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLGdEQUFlO0FBQ2Y7QUFDQTtBQUNBLHNCQUFzQixnREFBTztBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3R7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRpdGxlID0gXCJcIil7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRhc2tzID0gW11cclxuICB9XHJcblxyXG4gIHNldFRpdGxlKHRpdGxlKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCl7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZVxyXG4gIH1cclxuXHJcbiAgYWRkVGFzayhUYXNrKXtcclxuICAgIHRoaXMudGFza3MuYXBwZW5kKFRhc2spO1xyXG4gIH1cclxufSIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3QuanNcIlxyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrLmpzXCI7XHJcblxyXG4vLyBPcGVucyBmb3JtIHRvIGFkZCBwcm9qZWN0XHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RGb3JtKCl7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1pY29uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIC8vIFByZXZlbnQgQ3JlYXRpbmcgbmV3IHByb2plY3QgZm9ybSB3aGVuIGZvcm0gYWxyZWFkeSBleGlzdFxyXG4gICAgY29uc3QgZXhpc3RpbmdGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbiAgICBleGlzdGluZ0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxQcm9qZWN0Rm9ybSgpe1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICBjb25zdCBleGlzdGluZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuICAgIGV4aXN0aW5nRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIikudmFsdWUgPSAnJztcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdE5hdigpe1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc3QgcHJvamVjdE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XHJcbiAgICBpZihwcm9qZWN0TmF2LmNsYXNzTGlzdC5jb250YWlucyhcInRvZ2dsZWRcIikpe1xyXG4gICAgICBwcm9qZWN0TmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2dnbGVkXCIpO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICBwcm9qZWN0TmF2LmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGVkXCIpXHJcbiAgICB9XHJcbiAgfSlcclxufSBcclxuXHJcbmZ1bmN0aW9uIGFkZEFsbERvbUV2ZW50cygpe1xyXG4gIGFkZE5ld1Byb2plY3RGb3JtKCk7XHJcbiAgY2FuY2VsUHJvamVjdEZvcm0oKTtcclxuICB0b2dnbGVQcm9qZWN0TmF2KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEFsbERvbUV2ZW50cztcclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XHJcbiAgY29uc3RydWN0b3IodGl0bGUgPSBcIlwiLCBkZXNjcmlwdGlvbj0gXCJcIiwgZHVlRGF0ZSA9IFwiXCIsIHByaW9yaXR5ID0gMCwgY29tcGxldGVkID0gZmFsc2Upe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9Qcm9qZWN0XCI7XHJcbmltcG9ydCBhZGRBbGxEb21FdmVudHMgZnJvbSBcIi4vZG9tXCI7XHJcblxyXG52YXIgcHJvamVjdHMgPSBbXTtcclxuXHJcbmFkZEFsbERvbUV2ZW50cygpO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSl7XHJcbiAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KHRpdGxlKTtcclxuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCl7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcclxuICBcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gUHJldmVudHMgZGVmYXVsdCBzdWJtaXRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgcHJvamVjdCBhbmQgcHVzaCB0byBwcm9qZWN0c1xyXG4gICAgY29uc3QgcHJvamVjdF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWU7XHJcblxyXG4gICAgaWYocHJvamVjdFRpdGxlQWxyZWFkeUV4aXN0KHByb2plY3RfdGl0bGUpKXtcclxuICAgICAgYWxlcnQoXCJQcm9qZWN0IFRpdGxlIEFscmVhZHkgRXhpc3QuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZVByb2plY3QocHJvamVjdF90aXRsZSk7XHJcblxyXG4gICAgcmVmcmVzaFByb2plY3RzKClcclxuXHJcbiAgICAvLyBSZXNldCBhbmQgaGlkZSBwcm9qZWN0IGZvcm0gYWZ0ZXIgYWRkLlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gJyc7XHJcbiAgICBmb3JtLnN0eWxlID0gJ25vbmUnO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0VGl0bGVBbHJlYWR5RXhpc3QoVGl0bGUpe1xyXG4gIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgIGlmKHByb2plY3QudGl0bGUgPT0gVGl0bGUpe1xyXG4gICAgICBmbGFnID0gdHJ1ZTtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBmbGFnO1xyXG59XHJcblxyXG5mdW5jdGlvbiBmZXRjaFByb2plY3QoVGl0bGUpe1xyXG4gIGxldCBmZXRjaDtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgaWYocHJvamVjdC50aXRsZSA9PSBUaXRsZSl7XHJcbiAgICAgIGZldGNoID0gcHJvamVjdDtcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBmZXRjaDtcclxufVxyXG5mdW5jdGlvbiByZWZyZXNoUHJvamVjdHMoKXtcclxuICAvLyBEZWxldGVzIHByb2plY3RzXHJcbiAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3RzLWxpc3RcIik7XHJcbiAgcHJvamVjdExpc3QuaW5uZXJIVE1MID0gJyc7XHJcblxyXG4gIC8vIFJlbG9hZHMgcHJvamVjdHNcclxuICBwcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKGFycmF5SXRlbSl7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGFiXCIpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJuYXYtaWNvblwiKTtcclxuICAgIHByb2plY3RJY29uLnNyYz1cIi4uL2ltZy9tZW51LnN2Z1wiO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFycmF5SXRlbS50aXRsZTtcclxuXHJcbiAgICBwcm9qZWN0LmlkID0gYXJyYXlJdGVtLnRpdGxlO1xyXG5cclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdEljb24pO1xyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xyXG5cclxuICAgIC8vIEFkZCBhY3RpdmUgdG8gYWN0aXZlIHByb2plY3RcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHNldFByb2plY3RBY3RpdmUocHJvamVjdCk7XHJcbiAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3MocHJvamVjdCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3QpO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG4vLyBTZXRzIGFjdGl2ZSBwcm9qZWN0IGNsYXNzIGFjdGl2ZS5cclxuZnVuY3Rpb24gc2V0UHJvamVjdEFjdGl2ZShwcm9qZWN0KXtcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LXRhYlwiKTtcclxuXHJcbiAgYnV0dG9ucy5mb3JFYWNoKChlKT0+e1xyXG4gICAgaWYoZSAhPT0gcHJvamVjdCl7XHJcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcm9qZWN0XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XHJcbiAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3MocHJvamVjdCk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy8gVE9ETzogRGlzcGxheSBUYXNrcyBpbiBQcm9qZWN0LlxyXG5mdW5jdGlvbiBkaXNwbGF5QWN0aXZlUHJvamVjdFRhc2tzKHByb2plY3Qpe1xyXG4gIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrcy1jb250YWluZXJcIik7XHJcbiAgdGFza3NDb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcclxuXHJcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGZldGNoUHJvamVjdChwcm9qZWN0LmlkKTtcclxuICBkaXNwbGF5QWN0aXZlUHJvamVjdFRpdGxlKGFjdGl2ZVByb2plY3QudGl0bGUpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QWN0aXZlUHJvamVjdFRpdGxlKHRpdGxlKXtcclxuICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3MtY29udGFpbmVyXCIpO1xyXG4gIGNvbnN0IHRpdGxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcclxuICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0aXRsZTtcclxuXHJcbiAgdGFza3NDb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcclxufVxyXG5jcmVhdGVQcm9qZWN0KFwiUHJvamVjdCAxVGl0bGVcIik7XHJcbmFkZFByb2plY3QoKTtcclxucmVmcmVzaFByb2plY3RzKCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9