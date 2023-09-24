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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlFQUFlLGVBQWUsRUFBQztBQUMvQjs7Ozs7Ozs7Ozs7Ozs7O0FDbkRlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCO0FBQ0E7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7OztBQ05nQztBQUNJO0FBQ1Y7QUFDMUI7QUFDQTtBQUNBO0FBQ0EsZ0RBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGdEQUFPO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsR0FBRztBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsNkNBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3R7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRpdGxlID0gXCJcIil7XHJcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XHJcbiAgICB0aGlzLnRhc2tzID0gW11cclxuICB9XHJcblxyXG4gIHNldFRpdGxlKHRpdGxlKXtcclxuICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcclxuICB9XHJcblxyXG4gIGdldFRpdGxlKCl7XHJcbiAgICByZXR1cm4gdGhpcy50aXRsZVxyXG4gIH1cclxuXHJcbiAgYWRkVGFzayhUYXNrKXtcclxuICAgIHRoaXMudGFza3MucHVzaChUYXNrKTtcclxuICB9XHJcblxyXG4gIGdldFRhc2tzKCl7XHJcbiAgICByZXR1cm4gdGhpcy50YXNrcztcclxuICB9XHJcbn0iLCIvLyBPcGVucyBmb3JtIHRvIGFkZCBwcm9qZWN0XHJcbmZ1bmN0aW9uIGFkZE5ld1Byb2plY3RGb3JtKCl7XHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctcHJvamVjdC1pY29uXCIpLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIC8vIFByZXZlbnQgQ3JlYXRpbmcgbmV3IHByb2plY3QgZm9ybSB3aGVuIGZvcm0gYWxyZWFkeSBleGlzdFxyXG4gICAgY29uc3QgZXhpc3RpbmdGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIik7XHJcbiAgICBleGlzdGluZ0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjYW5jZWxQcm9qZWN0Rm9ybSgpe1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FuY2VsLWJ1dHRvblwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICBjb25zdCBleGlzdGluZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtZm9ybVwiKTtcclxuICAgIGV4aXN0aW5nRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIikudmFsdWUgPSAnJztcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gdG9nZ2xlUHJvamVjdE5hdigpe1xyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudS1idXR0b25cIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKGUpe1xyXG4gICAgY29uc3QgcHJvamVjdE5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJuYXZcIik7XHJcbiAgICBpZihwcm9qZWN0TmF2LmNsYXNzTGlzdC5jb250YWlucyhcInRvZ2dsZWRcIikpe1xyXG4gICAgICBwcm9qZWN0TmF2LmNsYXNzTGlzdC5yZW1vdmUoXCJ0b2dnbGVkXCIpO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICBwcm9qZWN0TmF2LmNsYXNzTGlzdC5hZGQoXCJ0b2dnbGVkXCIpXHJcbiAgICB9XHJcbiAgfSlcclxufSBcclxuXHJcbmZ1bmN0aW9uIG9wZW5BZGRUYXNrc0Zvcm0oKXtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC10YXNrc1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICBjb25zdCBhZGRUYXNrc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS10YXNrLWZvcm1cIilcclxuICAgIGFkZFRhc2tzRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VUYXNrc0Zvcm0oKXtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhbmNlbC1hZGQtdGFza1wiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICBjb25zdCBhZGRUYXNrc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS10YXNrLWZvcm1cIilcclxuICAgIGFkZFRhc2tzRm9ybS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkQWxsRG9tRXZlbnRzKCl7XHJcbiAgYWRkTmV3UHJvamVjdEZvcm0oKTtcclxuICBjYW5jZWxQcm9qZWN0Rm9ybSgpO1xyXG4gIHRvZ2dsZVByb2plY3ROYXYoKTtcclxuICBvcGVuQWRkVGFza3NGb3JtKCk7XHJcbiAgY2xvc2VUYXNrc0Zvcm0oKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYWRkQWxsRG9tRXZlbnRzO1xyXG5cclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFza3tcclxuICBjb25zdHJ1Y3Rvcih0aXRsZSA9IFwiXCIsIGRlc2NyaXB0aW9uPSBcIlwiLCBkdWVEYXRlID0gXCJcIiwgcHJpb3JpdHkgPSAwLCBjb2xvciA9IFwiXCIsY29tcGxldGVkID0gZmFsc2Upe1xyXG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xyXG4gICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcclxuICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7IC8vIEJ1dHRvbiB0byBmYWRlIG91dCBib3ggKGNoYW5nZSBjb2xvcikgYW5kIGNyb3NzIG91dCBmb250LiBXaXRoIGNpcmN1bGFyIGJveCB0aGF0IHRpY2tzLlxyXG4gIH1cclxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFByb2plY3QgZnJvbSBcIi4vUHJvamVjdFwiO1xyXG5pbXBvcnQgYWRkQWxsRG9tRXZlbnRzIGZyb20gXCIuL2RvbVwiO1xyXG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5cclxuXHJcbmFkZEFsbERvbUV2ZW50cygpO1xyXG5cclxuY2xhc3MgVG9kb3tcclxuICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xyXG4gICAgdGhpcy5hY3RpdmVQcm9qZWN0OyAvLyBSZW1lbWJlcnMgd2hpY2ggcHJvamVjdCBpcyBhY3RpdmVcclxuICB9XHJcblxyXG4gIGRlbGV0ZVRhc2sodGFza1RpdGxlKXtcclxuICAgIHRvZG8ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgICAgaWYocHJvamVjdC50aXRsZSA9PSB0b2RvLmFjdGl2ZVByb2plY3Qpe1xyXG4gICAgICAgIHByb2plY3QudGFza3MgPSBwcm9qZWN0LnRhc2tzLmZpbHRlcihmdW5jdGlvbih0YXNrKXtcclxuICAgICAgICAgIHJldHVybiB0YXNrLnRpdGxlICE9PSB0YXNrVGl0bGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGRlbGV0ZVByb2plY3QocHJvamVjdFRpdGxlKXtcclxuICAgIHRvZG8ucHJvamVjdHMgPSB0b2RvLnByb2plY3RzLmZpbHRlcihmdW5jdGlvbihwcm9qZWN0KXtcclxuICAgICAgcmV0dXJuIHByb2plY3QudGl0bGUgIT09IHByb2plY3RUaXRsZTtcclxuICAgIH0pXHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5jb25zdCB0b2RvID0gbmV3IFRvZG8oKTtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3QodGl0bGUpe1xyXG4gIGNvbnN0IHByb2plY3QgPSBuZXcgUHJvamVjdCh0aXRsZSk7XHJcbiAgcmV0dXJuIHByb2plY3Q7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZFByb2plY3QoKXtcclxuICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZm9ybScpO1xyXG4gIFxyXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSl7XHJcbiAgICAvLyBQcmV2ZW50cyBkZWZhdWx0IHN1Ym1pdFxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBwcm9qZWN0IGFuZCBwdXNoIHRvIHByb2plY3RzXHJcbiAgICBjb25zdCBwcm9qZWN0X3RpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtdGl0bGUnKS52YWx1ZTtcclxuXHJcbiAgICBpZihwcm9qZWN0VGl0bGVBbHJlYWR5RXhpc3QocHJvamVjdF90aXRsZSkpe1xyXG4gICAgICBhbGVydChcIlByb2plY3QgVGl0bGUgQWxyZWFkeSBFeGlzdC5cIik7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3RfdGl0bGUpO1xyXG4gICAgdG9kby5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xyXG5cclxuICAgIHJlZnJlc2hQcm9qZWN0cygpXHJcbiBcclxuICAgIC8vIFJlc2V0IGFuZCBoaWRlIHByb2plY3QgZm9ybSBhZnRlciBhZGQuXHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3QtdGl0bGVcIikudmFsdWUgPSAnJztcclxuICAgIGZvcm0uc3R5bGUgPSAnbm9uZSc7XHJcbiAgfSlcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHByb2plY3RUaXRsZUFscmVhZHlFeGlzdChUaXRsZSl7IC8vIEFkZGVkIHRvIFRvZG9QYWdlIENsYXNzXHJcbiAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICB0b2RvLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpPT57XHJcbiAgICBpZihwcm9qZWN0LnRpdGxlID09IFRpdGxlKXtcclxuICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gZmxhZztcclxufVxyXG5cclxuZnVuY3Rpb24gZmV0Y2hQcm9qZWN0KFRpdGxlKXsgLy8gQWRkZWQgdG8gVG9kb1BhZ2UgQ2xhc3MgXHJcbiAgbGV0IGZldGNoO1xyXG4gIHRvZG8ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCk9PntcclxuICAgIGlmKHByb2plY3QudGl0bGUgPT0gVGl0bGUpe1xyXG4gICAgICBmZXRjaCA9IHByb2plY3Q7XHJcbiAgICB9XHJcbiAgfSlcclxuICByZXR1cm4gZmV0Y2g7XHJcbn1cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaFByb2plY3RzKCl7XHJcbiAgLy8gRGVsZXRlcyBwcm9qZWN0c1xyXG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0cy1saXN0XCIpO1xyXG4gIHByb2plY3RMaXN0LmlubmVySFRNTCA9ICcnO1xyXG5cclxuICBpZiAodG9kby5wcm9qZWN0cy5sZW5ndGggPT0gMCl7XHJcbiAgICBjb25zb2xlLmxvZyhcImVtcHR5XCIpO1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbiAgfVxyXG5cclxuICAvLyBSZWxvYWRzIHByb2plY3RzXHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKGZ1bmN0aW9uKGFycmF5SXRlbSl7XHJcbiAgICBjb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIHByb2plY3QuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGFiXCIpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgIHByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJuYXYtaWNvblwiKTtcclxuICAgIHByb2plY3RJY29uLnNyYz1cIi4uL2ltZy9tZW51LnN2Z1wiO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcclxuICAgIHByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IGFycmF5SXRlbS50aXRsZTtcclxuXHJcbiAgICBjb25zdCBkZWxldGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBkZWxldGVJY29uLmNsYXNzTGlzdC5hZGQoXCJuYXYtaWNvblwiKTtcclxuICAgIGRlbGV0ZUljb24uc3JjPVwiLi4vaW1nL2RlbGV0ZS1pY29uLnN2Z1wiO1xyXG4gICAgZGVsZXRlSWNvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3RcIik7IFxyXG4gICAgZGVsZXRlSWNvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbigpe1xyXG4gICAgICB0b2RvLmRlbGV0ZVByb2plY3QoYXJyYXlJdGVtLnRpdGxlKTtcclxuICAgICAgcmVmcmVzaFByb2plY3RzKCk7XHJcbiAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGl0bGUoXCJTZWxlY3QgQSBQcm9qZWN0XCIpXHJcbiAgICAgIGhpZGVUYXNrc0RpdigpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcHJvamVjdC5pZCA9IGFycmF5SXRlbS50aXRsZTtcclxuXHJcbiAgICBwcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RJY29uKTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcclxuICAgIHByb2plY3QuYXBwZW5kQ2hpbGQoZGVsZXRlSWNvbik7XHJcblxyXG4gICAgLy8gQWRkIGFjdGl2ZSB0byBhY3RpdmUgcHJvamVjdFxyXG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgdG9kby5hY3RpdmVQcm9qZWN0ID0gcHJvamVjdC5pZDtcclxuICAgICAgc2V0UHJvamVjdEFjdGl2ZShwcm9qZWN0KTtcclxuICAgICAgZGlzcGxheUFjdGl2ZVByb2plY3RUYXNrcyhwcm9qZWN0LmlkKTtcclxuICAgIH0pXHJcblxyXG4gICAgc2V0UHJvamVjdEFjdGl2ZShkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0b2RvLmFjdGl2ZVByb2plY3QpKTtcclxuXHJcbiAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0KTtcclxuICB9KVxyXG59XHJcblxyXG5cclxuLy8gU2V0cyBhY3RpdmUgcHJvamVjdCBjbGFzcyBhY3RpdmUuXHJcbmZ1bmN0aW9uIHNldFByb2plY3RBY3RpdmUocHJvamVjdCl7IFxyXG4gIGNvbnN0IGJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnByb2plY3QtdGFiXCIpO1xyXG5cclxuICBidXR0b25zLmZvckVhY2goKGUpPT57XHJcbiAgICBpZihlICE9PSBwcm9qZWN0KXtcclxuICAgICAgZS5jbGFzc0xpc3QucmVtb3ZlKFwiYWN0aXZlLXByb2plY3RcIik7XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBlLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmUtcHJvamVjdFwiKTtcclxuICAgICAgZGlzcGxheUFjdGl2ZVByb2plY3RUYXNrcyhwcm9qZWN0LmlkKTtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBkaXNwbGF5QWN0aXZlUHJvamVjdFRhc2tzKHByb2plY3RUaXRsZSl7XHJcbiAgaWYodG9kby5wcm9qZWN0cy5sZW5ndGggPT0gMCl7XHJcbiAgICBjbGVhclRhc2tzKCk7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gZmV0Y2hQcm9qZWN0KHByb2plY3RUaXRsZSk7XHJcblxyXG4gIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGl0bGUocHJvamVjdFRpdGxlKTtcclxuICBjbGVhclRhc2tzKCk7XHJcbiAgc2hvd1Rhc2tzRGl2KCk7XHJcblxyXG4gIGlmKGFjdGl2ZVByb2plY3QudGFza3MubGVuZ3RoPT0wKXtcclxuICAgIHJldHVybjtcclxuICB9XHJcblxyXG4gIGxldCBhY3RpdmVUYXNrcyA9IGFjdGl2ZVByb2plY3QuZ2V0VGFza3MoKTtcclxuICBcclxuICBhY3RpdmVUYXNrcy5zb3J0KGZ1bmN0aW9uKGEsIGIpe1xyXG4gICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xyXG4gIH0pXHJcblxyXG4gIGFjdGl2ZVRhc2tzLnNvcnQoZnVuY3Rpb24oYSxiKXtcclxuICAgIHJldHVybihhLmNvbXBsZXRlZCA9PT0gYi5jb21wbGV0ZWQpPyAwOiBhLmNvbXBsZXRlZD8gMTotMTtcclxuICB9KVxyXG5cclxuICBhY3RpdmVUYXNrcy5mb3JFYWNoKCh0YXNrKT0+e1xyXG4gICAgY29uc3QgdGFza0RpdiA9IGNyZWF0ZVRhc2tEaXYodGFzayk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xyXG4gIH0pXHJcblxyXG4gIHNob3dUYXNrc0RpdigpO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZGlzcGxheUFjdGl2ZVByb2plY3RUaXRsZSh0aXRsZSl7XHJcbiAgY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlXCIpOyBcclxuICBwcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSB0aXRsZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFza0Rpdih0YXNrKXsgXHJcbiAgY29uc3QgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgdGFza0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza1wiKVxyXG4gIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5XCIgK3Rhc2sucHJpb3JpdHkpO1xyXG4gIHRhc2tEaXYuaWQgPSB0YXNrLnRpdGxlO1xyXG5cclxuICBjb25zdCB0YXNrTGVmdCA9IGNyZWF0ZVRhc2tMZWZ0KHRhc2spO1xyXG4gIGNvbnN0IHRhc2tSaWdodCA9IGNyZWF0ZVRhc2tSaWdodCh0YXNrKTtcclxuXHJcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrTGVmdCk7XHJcbiAgdGFza0Rpdi5hcHBlbmRDaGlsZCh0YXNrUmlnaHQpO1xyXG4gIHJldHVybiB0YXNrRGl2O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrTGVmdCh0YXNrKXsgXHJcbiAgY29uc3QgdGFza0xlZnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tMZWZ0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxlZnRcIik7XHJcblxyXG4gIGNvbnN0IHRhc2tDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICB0YXNrQ29tcGxldGUuY2xhc3NMaXN0LmFkZChcImljb25cIik7IFxyXG4gIHRhc2tDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKFwiY29tcGxldGVcIik7IFxyXG4gIHRhc2tDb21wbGV0ZS50eXBlID0gXCJpbWFnZVwiO1xyXG4gIHRhc2tDb21wbGV0ZS5pZCA9IHRhc2sudGl0bGU7XHJcblxyXG4gIGlmKHRhc2suY29tcGxldGVkKXtcclxuICAgIHRhc2tDb21wbGV0ZS5zcmMgPSBcIi4uL2ltZy9jaGVjay1jaXJjbGUtb3V0bGluZS5zdmdcIlxyXG4gIH0gZWxzZXtcclxuICAgIHRhc2tDb21wbGV0ZS5zcmMgPSBcIi4uL2ltZy9jaXJjbGUtb3V0bGluZS5zdmdcIlxyXG4gIH1cclxuXHJcbiAgdGFza0NvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbihlKXtcclxuICAgIHVwZGF0ZVRhc2tDb21wbGV0ZWQodGFza0NvbXBsZXRlLmlkKTtcclxuICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3ModG9kby5hY3RpdmVQcm9qZWN0KTtcclxuICB9KTtcclxuICBcclxuICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKFwidGFzay10aXRsZVwiKVxyXG4gIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XHJcblxyXG4gIHRhc2tMZWZ0LmFwcGVuZENoaWxkKHRhc2tDb21wbGV0ZSk7XHJcbiAgdGFza0xlZnQuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcclxuXHJcbiAgcmV0dXJuIHRhc2tMZWZ0O1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYXNrUmlnaHQodGFzayl7XHJcbiAgY29uc3QgdGFza1JpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICB0YXNrUmlnaHQuY2xhc3NMaXN0LmFkZChcInRhc2stcmlnaHRcIik7XHJcblxyXG4gIGNvbnN0IGR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gIGR1ZS50ZXh0Q29udGVudCA9IFwiRHVlOlwiO1xyXG5cclxuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpXHJcbiAgZGF0ZS50ZXh0Q29udGVudCA9IHRhc2suZHVlRGF0ZTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiaWNvblwiKVxyXG4gIGRlbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlXCIpO1xyXG4gIGRlbGV0ZUJ0bi50eXBlID0gXCJpbWFnZVwiO1xyXG4gIGRlbGV0ZUJ0bi5zcmMgPSBcIi4uL2ltZy9kZWxldGUtaWNvbi5zdmdcIjtcclxuICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICB0b2RvLmRlbGV0ZVRhc2sodGFzay50aXRsZSk7XHJcbiAgICBkaXNwbGF5QWN0aXZlUHJvamVjdFRhc2tzKHRvZG8uYWN0aXZlUHJvamVjdCk7XHJcbiAgfSk7IC8vIFdpdGhvdXQgZnVuY3Rpb24gd3JhcHBpbmcgaXQgZ2V0cyB0cmlnZ2VyZWQgdXBvbiBwYWdlIGxvYWQgaW5zdGVhZCBvZiBjbGljay5cclxuXHJcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGR1ZSk7XHJcbiAgdGFza1JpZ2h0LmFwcGVuZENoaWxkKGRhdGUpO1xyXG4gIHRhc2tSaWdodC5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xyXG5cclxuICByZXR1cm4gdGFza1JpZ2h0O1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gY2xlYXJUYXNrcygpe1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIikuaW5uZXJIVE1MPVwiXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgY29sb3IsIGNvbXBsZXRlZCl7XHJcbiAgY29uc3QgdGFzayA9IG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNvbG9yLCBjb21wbGV0ZWQpO1xyXG4gIHJldHVybiB0YXNrO1xyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc3VibWl0VGFza0Zvcm0oKXtcclxuICBjb25zdCBzdWJtaXRUYXNrRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JlYXRlLXRhc2stZm9ybVwiKVxyXG4gIHN1Ym1pdFRhc2tGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgZnVuY3Rpb24oZSl7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFzay10aXRsZVwiKS52YWx1ZTtcclxuXHJcbiAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRhdGVcIikudmFsdWU7XHJcblxyXG4gICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29sb3ItcHJpb3JpdHlcIikudmFsdWVcclxuXHJcbiAgICAgIHRvZG8ucHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT57XHJcbiAgICAgICAgaWYocHJvamVjdC50aXRsZSA9PSB0b2RvLmFjdGl2ZVByb2plY3Qpe1xyXG4gICAgICAgICAgcHJvamVjdC5hZGRUYXNrKGNyZWF0ZVRhc2sodGFza1RpdGxlLCBcIlwiLCBkdWVEYXRlLCBwcmlvcml0eSwgXCJcIiwgZmFsc2UpKTtcclxuICAgICAgICAgIGRpc3BsYXlBY3RpdmVQcm9qZWN0VGFza3ModG9kby5hY3RpdmVQcm9qZWN0KVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgICAgY2xvc2VUYXNrRm9ybSgpO1xyXG4gIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNsb3NlVGFza0Zvcm0oKXtcclxuICBjb25zdCBhZGRUYXNrc0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNyZWF0ZS10YXNrLWZvcm1cIilcclxuICBhZGRUYXNrc0Zvcm0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVUYXNrQ29tcGxldGVkKHRhc2tUaXRsZSl7XHJcbiAgdG9kby5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KT0+e1xyXG4gICAgaWYocHJvamVjdC50aXRsZSA9PSB0b2RvLmFjdGl2ZVByb2plY3Qpe1xyXG4gICAgICBwcm9qZWN0LnRhc2tzLmZvckVhY2goKHRhc2spPT57XHJcbiAgICAgICAgaWYodGFzay50aXRsZSA9PSB0YXNrVGl0bGUpe1xyXG4gICAgICAgICAgaWYodGFzay5jb21wbGV0ZWQpe1xyXG4gICAgICAgICAgICB0YXNrLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRhc2suY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gaGlkZVRhc2tzRGl2KCl7XHJcbiAgY29uc3QgdGFza3NEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzXCIpO1xyXG4gIHRhc2tzRGl2LnN0eWxlLmRpc3BsYXk9XCJub25lXCI7XHJcbiAgY29uc3QgdGFza3NIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza3MtaGVhZGVyJyk7XHJcbiAgdGFza3NIZWFkZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzaG93VGFza3NEaXYoKXtcclxuICBjb25zdCB0YXNrc0RpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGFza3NcIik7XHJcbiAgdGFza3NEaXYuc3R5bGUuZGlzcGxheT1cImZsZXhcIjtcclxuICBjb25zdCB0YXNrc0hlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrcy1oZWFkZXInKTtcclxuICB0YXNrc0hlYWRlci5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbn1cclxuXHJcblxyXG4vLyBQcmUtZXhpc3RpbmcgcHJvamVjdCB3aXRoIHRhc2tcclxubGV0IGV4aXN0aW5nUHJvaiA9IGNyZWF0ZVByb2plY3QoXCJQcm9qZWN0IDFUaXRsZVwiKTtcclxuZXhpc3RpbmdQcm9qLmFkZFRhc2soY3JlYXRlVGFzayhcIlRhc2sxXCIsIFwiVGFzayAxIERlc2NyaXB0aW9uXCIsIFwiRHVlIERhdGVcIiwgMywgZmFsc2UpKTtcclxuZXhpc3RpbmdQcm9qLmFkZFRhc2soY3JlYXRlVGFzayhcIlRhc2syXCIsIFwiVGFzayAyIERlc2NyaXB0aW9uXCIsIFwiRHVlIERhdGVcIiwgMiwgZmFsc2UpKTtcclxuXHJcbnRvZG8ucHJvamVjdHMucHVzaChleGlzdGluZ1Byb2opO1xyXG50b2RvLmFjdGl2ZVByb2plY3Q9ZXhpc3RpbmdQcm9qLnRpdGxlO1xyXG5cclxuLy8gTG9hZCB1cCBwcm9qZWN0cywgaGlkZSB0YXNrIGZvcm0sIGFuZCBoaWRlIHRhc2sgZGl2LlxyXG5hZGRQcm9qZWN0KCk7XHJcbnJlZnJlc2hQcm9qZWN0cygpO1xyXG5zdWJtaXRUYXNrRm9ybSgpO1xyXG5oaWRlVGFza3NEaXYoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=