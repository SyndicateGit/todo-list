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

  deleteTask(taskTitle){
    todo.projects.forEach((project)=>{
      if(project.title == todo.activeProject){
        project.tasks = project.tasks.filter(function(task){
          return task.title !== taskTitle;
        })
      }
    })
  }

  deleteProject(projectTitle){
    todo.projects = todo.projects.filter(function(project){
      return project.title !== projectTitle;
    })
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

  let activeTasks = activeProject.getTasks();
  
  //Todo: sort by date:

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
  const task = new _task__WEBPACK_IMPORTED_MODULE_2__["default"](title, description, dueDate, priority, color, completed);
  return task;
}


function submitTaskForm(){
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


// Pre-existing project with task
let existingProj = createProject("Project 1Title");
existingProj.addTask(createTask("Task1", "Task 1 Description", "Due Date", 3, false));
existingProj.addTask(createTask("Task2", "Task 2 Description", "Due Date", 2, false));

todo.projects.push(existingProj);
todo.activeProject=existingProj.title;

// Load up projects, hide task form, and hide task div.
addProject();
refreshProjects();
submitTaskForm();
hideTasksDiv();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQztBQUMvQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkRlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNJO0FBQ1Y7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsZ0RBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLEdBQUc7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLDZDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0e1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0aXRsZSA9IFwiXCIpe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy50YXNrcyA9IFtdXHJcbiAgfVxyXG5cclxuICBzZXRUaXRsZSh0aXRsZSl7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgfVxyXG5cclxuICBnZXRUaXRsZSgpe1xyXG4gICAgcmV0dXJuIHRoaXMudGl0bGVcclxuICB9XHJcblxyXG4gIGFkZFRhc2soVGFzayl7XHJcbiAgICB0aGlzLnRhc2tzLnB1c2goVGFzayk7XHJcbiAgfVxyXG5cclxuICBnZXRUYXNrcygpe1xyXG4gICAgcmV0dXJuIHRoaXMudGFza3M7XHJcbiAgfVxyXG59IiwiLy8gT3BlbnMgZm9ybSB0byBhZGQgcHJvamVjdFxyXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0Rm9ybSgpe1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3LXByb2plY3QtaWNvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyBQcmV2ZW50IENyZWF0aW5nIG5ldyBwcm9qZWN0IGZvcm0gd2hlbiBmb3JtIGFscmVhZHkgZXhpc3RcclxuICAgIGNvbnN0IGV4aXN0aW5nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpO1xyXG4gICAgZXhpc3RpbmdGb3JtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2FuY2VsUHJvamVjdEZvcm0oKXtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbmNlbC1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc3QgZXhpc3RpbmdGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbiAgICBleGlzdGluZ0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gJyc7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRvZ2dsZVByb2plY3ROYXYoKXtcclxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnUtYnV0dG9uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIGNvbnN0IHByb2plY3ROYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibmF2XCIpO1xyXG4gICAgaWYocHJvamVjdE5hdi5jbGFzc0xpc3QuY29udGFpbnMoXCJ0b2dnbGVkXCIpKXtcclxuICAgICAgcHJvamVjdE5hdi5jbGFzc0xpc3QucmVtb3ZlKFwidG9nZ2xlZFwiKTtcclxuICAgIH0gZWxzZXtcclxuICAgICAgcHJvamVjdE5hdi5jbGFzc0xpc3QuYWRkKFwidG9nZ2xlZFwiKVxyXG4gICAgfVxyXG4gIH0pXHJcbn0gXHJcblxyXG5mdW5jdGlvbiBvcGVuQWRkVGFza3NGb3JtKCl7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtdGFza3NcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc3QgYWRkVGFza3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFzay1mb3JtXCIpXHJcbiAgICBhZGRUYXNrc0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlVGFza3NGb3JtKCl7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYW5jZWwtYWRkLXRhc2tcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc3QgYWRkVGFza3NGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFzay1mb3JtXCIpXHJcbiAgICBhZGRUYXNrc0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZEFsbERvbUV2ZW50cygpe1xyXG4gIGFkZE5ld1Byb2plY3RGb3JtKCk7XHJcbiAgY2FuY2VsUHJvamVjdEZvcm0oKTtcclxuICB0b2dnbGVQcm9qZWN0TmF2KCk7XHJcbiAgb3BlbkFkZFRhc2tzRm9ybSgpO1xyXG4gIGNsb3NlVGFza3NGb3JtKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFkZEFsbERvbUV2ZW50cztcclxuXHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2t7XHJcbiAgY29uc3RydWN0b3IodGl0bGUgPSBcIlwiLCBkZXNjcmlwdGlvbj0gXCJcIiwgZHVlRGF0ZSA9IFwiXCIsIHByaW9yaXR5ID0gMCwgY29sb3IgPSBcIlwiLGNvbXBsZXRlZCA9IGZhbHNlKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XHJcbiAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlOyAvLyBCdXR0b24gdG8gZmFkZSBvdXQgYm94IChjaGFuZ2UgY29sb3IpIGFuZCBjcm9zcyBvdXQgZm9udC4gV2l0aCBjaXJjdWxhciBib3ggdGhhdCB0aWNrcy5cclxuICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBQcm9qZWN0IGZyb20gXCIuL1Byb2plY3RcIjtcclxuaW1wb3J0IGFkZEFsbERvbUV2ZW50cyBmcm9tIFwiLi9kb21cIjtcclxuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xyXG5cclxuXHJcblxyXG5hZGRBbGxEb21FdmVudHMoKTtcclxuXHJcbmNsYXNzIFRvZG97XHJcbiAgY29uc3RydWN0b3IoKXtcclxuICAgIHRoaXMucHJvamVjdHMgPSBbXTtcclxuICAgIHRoaXMuYWN0aXZlUHJvamVjdDsgLy8gUmVtZW1iZXJzIHdoaWNoIHByb2plY3QgaXMgYWN0aXZlXHJcbiAgfVxyXG5cclxuICBkZWxldGVUYXNrKHRhc2tUaXRsZSl7XHJcbiAgICB0b2RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICAgIGlmKHByb2plY3QudGl0bGUgPT0gdG9kby5hY3RpdmVQcm9qZWN0KXtcclxuICAgICAgICBwcm9qZWN0LnRhc2tzID0gcHJvamVjdC50YXNrcy5maWx0ZXIoZnVuY3Rpb24odGFzayl7XHJcbiAgICAgICAgICByZXR1cm4gdGFzay50aXRsZSAhPT0gdGFza1RpdGxlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBkZWxldGVQcm9qZWN0KHByb2plY3RUaXRsZSl7XHJcbiAgICB0b2RvLnByb2plY3RzID0gdG9kby5wcm9qZWN0cy5maWx0ZXIoZnVuY3Rpb24ocHJvamVjdCl7XHJcbiAgICAgIHJldHVybiBwcm9qZWN0LnRpdGxlICE9PSBwcm9qZWN0VGl0bGU7XHJcbiAgICB9KVxyXG4gIH1cclxuICBcclxufVxyXG5cclxuY29uc3QgdG9kbyA9IG5ldyBUb2RvKCk7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKXtcclxuICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QodGl0bGUpO1xyXG4gIHJldHVybiBwcm9qZWN0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRQcm9qZWN0KCl7XHJcbiAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZvcm0nKTtcclxuICBcclxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xyXG4gICAgLy8gUHJldmVudHMgZGVmYXVsdCBzdWJtaXRcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgcHJvamVjdCBhbmQgcHVzaCB0byBwcm9qZWN0c1xyXG4gICAgY29uc3QgcHJvamVjdF90aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LXRpdGxlJykudmFsdWU7XHJcblxyXG4gICAgaWYocHJvamVjdFRpdGxlQWxyZWFkeUV4aXN0KHByb2plY3RfdGl0bGUpKXtcclxuICAgICAgYWxlcnQoXCJQcm9qZWN0IFRpdGxlIEFscmVhZHkgRXhpc3QuXCIpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdQcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0X3RpdGxlKTtcclxuICAgIHRvZG8ucHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcclxuXHJcbiAgICByZWZyZXNoUHJvamVjdHMoKVxyXG4gXHJcbiAgICAvLyBSZXNldCBhbmQgaGlkZSBwcm9qZWN0IGZvcm0gYWZ0ZXIgYWRkLlxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlID0gJyc7XHJcbiAgICBmb3JtLnN0eWxlID0gJ25vbmUnO1xyXG4gIH0pXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBwcm9qZWN0VGl0bGVBbHJlYWR5RXhpc3QoVGl0bGUpeyAvLyBBZGRlZCB0byBUb2RvUGFnZSBDbGFzc1xyXG4gIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgaWYocHJvamVjdC50aXRsZSA9PSBUaXRsZSl7XHJcbiAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGZsYWc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZldGNoUHJvamVjdChUaXRsZSl7IC8vIEFkZGVkIHRvIFRvZG9QYWdlIENsYXNzIFxyXG4gIGxldCBmZXRjaDtcclxuICB0b2RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICBpZihwcm9qZWN0LnRpdGxlID09IFRpdGxlKXtcclxuICAgICAgZmV0Y2ggPSBwcm9qZWN0O1xyXG4gICAgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIGZldGNoO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hQcm9qZWN0cygpe1xyXG4gIC8vIERlbGV0ZXMgcHJvamVjdHNcclxuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHMtbGlzdFwiKTtcclxuICBwcm9qZWN0TGlzdC5pbm5lckhUTUwgPSAnJztcclxuXHJcbiAgaWYgKHRvZG8ucHJvamVjdHMubGVuZ3RoID09IDApe1xyXG4gICAgY29uc29sZS5sb2coXCJlbXB0eVwiKTtcclxuICAgIHJldHVybiBudWxsO1xyXG4gIH1cclxuXHJcbiAgLy8gUmVsb2FkcyBwcm9qZWN0c1xyXG4gIHRvZG8ucHJvamVjdHMuZm9yRWFjaChmdW5jdGlvbihhcnJheUl0ZW0pe1xyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRhYlwiKTtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICBwcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWljb25cIik7XHJcbiAgICBwcm9qZWN0SWNvbi5zcmM9XCIuLi9pbWcvbWVudS5zdmdcIjtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XHJcbiAgICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBhcnJheUl0ZW0udGl0bGU7XHJcblxyXG4gICAgY29uc3QgZGVsZXRlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwibmF2LWljb25cIik7XHJcbiAgICBkZWxldGVJY29uLnNyYz1cIi4uL2ltZy9kZWxldGUtaWNvbi5zdmdcIjtcclxuICAgIGRlbGV0ZUljb24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0XCIpOyBcclxuICAgIGRlbGV0ZUljb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsZnVuY3Rpb24oKXtcclxuICAgICAgdG9kby5kZWxldGVQcm9qZWN0KGFycmF5SXRlbS50aXRsZSk7XHJcbiAgICAgIHJlZnJlc2hQcm9qZWN0cygpO1xyXG4gICAgICBkaXNwbGF5QWN0aXZlUHJvamVjdFRpdGxlKFwiU2VsZWN0IEEgUHJvamVjdFwiKVxyXG4gICAgICBoaWRlVGFza3NEaXYoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHByb2plY3QuaWQgPSBhcnJheUl0ZW0udGl0bGU7XHJcblxyXG4gICAgcHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0SWNvbik7XHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKGRlbGV0ZUljb24pO1xyXG5cclxuICAgIC8vIEFkZCBhY3RpdmUgdG8gYWN0aXZlIHByb2plY3RcclxuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgIHRvZG8uYWN0aXZlUHJvamVjdCA9IHByb2plY3QuaWQ7XHJcbiAgICAgIHNldFByb2plY3RBY3RpdmUocHJvamVjdCk7XHJcbiAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3MocHJvamVjdC5pZCk7XHJcbiAgICB9KVxyXG5cclxuICAgIHNldFByb2plY3RBY3RpdmUoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodG9kby5hY3RpdmVQcm9qZWN0KSk7XHJcblxyXG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdCk7XHJcbiAgfSlcclxufVxyXG5cclxuXHJcbi8vIFNldHMgYWN0aXZlIHByb2plY3QgY2xhc3MgYWN0aXZlLlxyXG5mdW5jdGlvbiBzZXRQcm9qZWN0QWN0aXZlKHByb2plY3QpeyBcclxuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5wcm9qZWN0LXRhYlwiKTtcclxuXHJcbiAgYnV0dG9ucy5mb3JFYWNoKChlKT0+e1xyXG4gICAgaWYoZSAhPT0gcHJvamVjdCl7XHJcbiAgICAgIGUuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZS1wcm9qZWN0XCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlLXByb2plY3RcIik7XHJcbiAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3MocHJvamVjdC5pZCk7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUFjdGl2ZVByb2plY3RUYXNrcyhwcm9qZWN0VGl0bGUpe1xyXG4gIGlmKHRvZG8ucHJvamVjdHMubGVuZ3RoID09IDApe1xyXG4gICAgY2xlYXJUYXNrcygpO1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgYWN0aXZlUHJvamVjdCA9IGZldGNoUHJvamVjdChwcm9qZWN0VGl0bGUpO1xyXG5cclxuICBkaXNwbGF5QWN0aXZlUHJvamVjdFRpdGxlKHByb2plY3RUaXRsZSk7XHJcbiAgY2xlYXJUYXNrcygpO1xyXG4gIHNob3dUYXNrc0RpdigpO1xyXG5cclxuICBpZihhY3RpdmVQcm9qZWN0LnRhc2tzLmxlbmd0aD09MCl7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBsZXQgYWN0aXZlVGFza3MgPSBhY3RpdmVQcm9qZWN0LmdldFRhc2tzKCk7XHJcbiAgXHJcbiAgLy9Ub2RvOiBzb3J0IGJ5IGRhdGU6XHJcblxyXG4gIGFjdGl2ZVRhc2tzLnNvcnQoZnVuY3Rpb24oYSwgYil7XHJcbiAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XHJcbiAgfSlcclxuXHJcbiAgYWN0aXZlVGFza3Muc29ydChmdW5jdGlvbihhLGIpe1xyXG4gICAgcmV0dXJuKGEuY29tcGxldGVkID09PSBiLmNvbXBsZXRlZCk/IDA6IGEuY29tcGxldGVkPyAxOi0xO1xyXG4gIH0pXHJcblxyXG4gIGFjdGl2ZVRhc2tzLmZvckVhY2goKHRhc2spPT57XHJcbiAgICBjb25zdCB0YXNrRGl2ID0gY3JlYXRlVGFza0Rpdih0YXNrKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIikuYXBwZW5kQ2hpbGQodGFza0Rpdik7XHJcbiAgfSlcclxuXHJcbiAgc2hvd1Rhc2tzRGl2KCk7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QWN0aXZlUHJvamVjdFRpdGxlKHRpdGxlKXtcclxuICBjb25zdCBwcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGVcIik7IFxyXG4gIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrRGl2KHRhc2speyBcclxuICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrRGl2LmNsYXNzTGlzdC5hZGQoXCJ0YXNrXCIpXHJcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwicHJpb3JpdHlcIiArdGFzay5wcmlvcml0eSk7XHJcbiAgdGFza0Rpdi5pZCA9IHRhc2sudGl0bGU7XHJcblxyXG4gIGNvbnN0IHRhc2tMZWZ0ID0gY3JlYXRlVGFza0xlZnQodGFzayk7XHJcbiAgY29uc3QgdGFza1JpZ2h0ID0gY3JlYXRlVGFza1JpZ2h0KHRhc2spO1xyXG5cclxuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tMZWZ0KTtcclxuICB0YXNrRGl2LmFwcGVuZENoaWxkKHRhc2tSaWdodCk7XHJcbiAgcmV0dXJuIHRhc2tEaXY7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tMZWZ0KHRhc2speyBcclxuICBjb25zdCB0YXNrTGVmdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza0xlZnQuY2xhc3NMaXN0LmFkZChcInRhc2stbGVmdFwiKTtcclxuXHJcbiAgY29uc3QgdGFza0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIHRhc2tDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKTsgXHJcbiAgdGFza0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoXCJjb21wbGV0ZVwiKTsgXHJcbiAgdGFza0NvbXBsZXRlLnR5cGUgPSBcImltYWdlXCI7XHJcbiAgdGFza0NvbXBsZXRlLmlkID0gdGFzay50aXRsZTtcclxuXHJcbiAgaWYodGFzay5jb21wbGV0ZWQpe1xyXG4gICAgdGFza0NvbXBsZXRlLnNyYyA9IFwiLi4vaW1nL2NoZWNrLWNpcmNsZS1vdXRsaW5lLnN2Z1wiXHJcbiAgfSBlbHNle1xyXG4gICAgdGFza0NvbXBsZXRlLnNyYyA9IFwiLi4vaW1nL2NpcmNsZS1vdXRsaW5lLnN2Z1wiXHJcbiAgfVxyXG5cclxuICB0YXNrQ29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgdXBkYXRlVGFza0NvbXBsZXRlZCh0YXNrQ29tcGxldGUuaWQpO1xyXG4gICAgZGlzcGxheUFjdGl2ZVByb2plY3RUYXNrcyh0b2RvLmFjdGl2ZVByb2plY3QpO1xyXG4gIH0pO1xyXG4gIFxyXG4gIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLXRpdGxlXCIpXHJcbiAgdGFza1RpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcclxuXHJcbiAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGFza0NvbXBsZXRlKTtcclxuICB0YXNrTGVmdC5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xyXG5cclxuICByZXR1cm4gdGFza0xlZnQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2tSaWdodCh0YXNrKXtcclxuICBjb25zdCB0YXNrUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tSaWdodC5jbGFzc0xpc3QuYWRkKFwidGFzay1yaWdodFwiKTtcclxuXHJcbiAgY29uc3QgZHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgZHVlLnRleHRDb250ZW50ID0gXCJEdWU6XCI7XHJcblxyXG4gIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhdGVcIilcclxuICBkYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xyXG5cclxuICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJpY29uXCIpXHJcbiAgZGVsZXRlQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGVcIik7XHJcbiAgZGVsZXRlQnRuLnR5cGUgPSBcImltYWdlXCI7XHJcbiAgZGVsZXRlQnRuLnNyYyA9IFwiLi4vaW1nL2RlbGV0ZS1pY29uLnN2Z1wiO1xyXG4gIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgIHRvZG8uZGVsZXRlVGFzayh0YXNrLnRpdGxlKTtcclxuICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3ModG9kby5hY3RpdmVQcm9qZWN0KTtcclxuICB9KTsgLy8gV2l0aG91dCBmdW5jdGlvbiB3cmFwcGluZyBpdCBnZXRzIHRyaWdnZXJlZCB1cG9uIHBhZ2UgbG9hZCBpbnN0ZWFkIG9mIGNsaWNrLlxyXG5cclxuICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZHVlKTtcclxuICB0YXNrUmlnaHQuYXBwZW5kQ2hpbGQoZGF0ZSk7XHJcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XHJcblxyXG4gIHJldHVybiB0YXNrUmlnaHQ7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjbGVhclRhc2tzKCl7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKS5pbm5lckhUTUw9XCJcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBjb2xvciwgY29tcGxldGVkKXtcclxuICBjb25zdCB0YXNrID0gbmV3IFRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29sb3IsIGNvbXBsZXRlZCk7XHJcbiAgcmV0dXJuIHRhc2s7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzdWJtaXRUYXNrRm9ybSgpe1xyXG4gIGNvbnN0IHN1Ym1pdFRhc2tGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcmVhdGUtdGFzay1mb3JtXCIpXHJcbiAgc3VibWl0VGFza0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBmdW5jdGlvbihlKXtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrLXRpdGxlXCIpLnZhbHVlO1xyXG5cclxuICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGF0ZVwiKS52YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb2xvci1wcmlvcml0eVwiKS52YWx1ZVxyXG5cclxuICAgICAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PntcclxuICAgICAgICBpZihwcm9qZWN0LnRpdGxlID09IHRvZG8uYWN0aXZlUHJvamVjdCl7XHJcbiAgICAgICAgICBwcm9qZWN0LmFkZFRhc2soY3JlYXRlVGFzayh0YXNrVGl0bGUsIFwiXCIsIGR1ZURhdGUsIHByaW9yaXR5LCBcIlwiLCBmYWxzZSkpO1xyXG4gICAgICAgICAgZGlzcGxheUFjdGl2ZVByb2plY3RUYXNrcyh0b2RvLmFjdGl2ZVByb2plY3QpXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgICBjbG9zZVRhc2tGb3JtKCk7XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VUYXNrRm9ybSgpe1xyXG4gIGNvbnN0IGFkZFRhc2tzRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stZm9ybVwiKVxyXG4gIGFkZFRhc2tzRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tDb21wbGV0ZWQodGFza1RpdGxlKXtcclxuICB0b2RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICBpZihwcm9qZWN0LnRpdGxlID09IHRvZG8uYWN0aXZlUHJvamVjdCl7XHJcbiAgICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzayk9PntcclxuICAgICAgICBpZih0YXNrLnRpdGxlID09IHRhc2tUaXRsZSl7XHJcbiAgICAgICAgICBpZih0YXNrLmNvbXBsZXRlZCl7XHJcbiAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGFzay5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBoaWRlVGFza3NEaXYoKXtcclxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XHJcbiAgdGFza3NEaXYuc3R5bGUuZGlzcGxheT1cIm5vbmVcIjtcclxuICBjb25zdCB0YXNrc0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1oZWFkZXInKTtcclxuICB0YXNrc0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dUYXNrc0Rpdigpe1xyXG4gIGNvbnN0IHRhc2tzRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50YXNrc1wiKTtcclxuICB0YXNrc0Rpdi5zdHlsZS5kaXNwbGF5PVwiZmxleFwiO1xyXG4gIGNvbnN0IHRhc2tzSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tzLWhlYWRlcicpO1xyXG4gIHRhc2tzSGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxufVxyXG5cclxuXHJcbi8vIFByZS1leGlzdGluZyBwcm9qZWN0IHdpdGggdGFza1xyXG5sZXQgZXhpc3RpbmdQcm9qID0gY3JlYXRlUHJvamVjdChcIlByb2plY3QgMVRpdGxlXCIpO1xyXG5leGlzdGluZ1Byb2ouYWRkVGFzayhjcmVhdGVUYXNrKFwiVGFzazFcIiwgXCJUYXNrIDEgRGVzY3JpcHRpb25cIiwgXCJEdWUgRGF0ZVwiLCAzLCBmYWxzZSkpO1xyXG5leGlzdGluZ1Byb2ouYWRkVGFzayhjcmVhdGVUYXNrKFwiVGFzazJcIiwgXCJUYXNrIDIgRGVzY3JpcHRpb25cIiwgXCJEdWUgRGF0ZVwiLCAyLCBmYWxzZSkpO1xyXG5cclxudG9kby5wcm9qZWN0cy5wdXNoKGV4aXN0aW5nUHJvaik7XHJcbnRvZG8uYWN0aXZlUHJvamVjdD1leGlzdGluZ1Byb2oudGl0bGU7XHJcblxyXG4vLyBMb2FkIHVwIHByb2plY3RzLCBoaWRlIHRhc2sgZm9ybSwgYW5kIGhpZGUgdGFzayBkaXYuXHJcbmFkZFByb2plY3QoKTtcclxucmVmcmVzaFByb2plY3RzKCk7XHJcbnN1Ym1pdFRhc2tGb3JtKCk7XHJcbmhpZGVUYXNrc0RpdigpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==