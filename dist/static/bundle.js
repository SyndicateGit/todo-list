/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/

let Projects = []




function addTaskSubmit(e){
  e.preventDefault(); // Prevent submit from requesting http post

}

function getTaskFromInput(){
  const title = document.getElementById('title').value 
  const description = document.getElementById('description').value
  const dueDate = document.getElementById('dueDate').value
  const priority = document.getElementById('priority').value

  return new Task(title, description, dueDate, priority, check);
}
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxyXG5sZXQgUHJvamVjdHMgPSBbXVxyXG5cclxuXHJcblxyXG5cclxuZnVuY3Rpb24gYWRkVGFza1N1Ym1pdChlKXtcclxuICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgc3VibWl0IGZyb20gcmVxdWVzdGluZyBodHRwIHBvc3RcclxuXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFRhc2tGcm9tSW5wdXQoKXtcclxuICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlIFxyXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWVcclxuICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZVxyXG4gIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWVcclxuXHJcbiAgcmV0dXJuIG5ldyBUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGNoZWNrKTtcclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==