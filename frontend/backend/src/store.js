//Handles CRUD of projects

//localStorage
const store = {
    createNewProject : function(model , projectName){
        //get projects
        let projectsList = JSON.parse(localStorage.getItem("backend_projectsList"));
        if(projectsList != null){
            projectsList.forEach(element => {
                if(element == projectName) throw new Error("Project name is already taken")
            });
        projectsList.push(projectName);
        localStorage.setItem("backend_projectsList" , JSON.stringify(projectsList))
        }else{
            projectsList = [];
            projectsList.push(projectName);
            localStorage.setItem("backend_projectsList" , JSON.stringify(projectsList))
        }
      
        localStorage.setItem(`backend_${projectName}` , JSON.stringify(model))
    },

    readProjectByName : function(projectName){
        let projectModel = JSON.parse(localStorage.getItem(`backend_${projectName}`));
        console.log(projectModel);
        if(!projectModel) throw new Error("Project not found")
        return projectModel
    },

    updateByProjectName : function(projectName , model){
        localStorage.setItem(`backend_${projectName}` , JSON.stringify(model));
    },

    getAllProjects : function(){
        return JSON.parse(localStorage.getItem("backend_projectsList"));
    }
}

export default store