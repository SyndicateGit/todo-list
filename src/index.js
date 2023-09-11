
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