import store from "./store"

const backend = {
    createNewProject : function(projectName , model){
        store.createNewProject(model , projectName)
    }
}

export default backend