class TODO{
  constructor(){
    this.projects = [];
  }



  addProject(){
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
      
      this.projects.push(createProject(project_title));
  
      refreshProjects()
      
  
      // Reset and hide project form after add.
      document.getElementById("project-title").value = '';
      form.style = 'none';
    })
  
  }
}