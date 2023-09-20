export default class Task{
  constructor(title = "", description= "", dueDate = "", priority = 0, color = "",completed = false){
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.color = color;
    this.completed = false; // Button to fade out box (change color) and cross out font. With circular box that ticks.
  }
}