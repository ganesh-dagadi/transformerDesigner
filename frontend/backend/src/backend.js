import store from "./store"
import modelFactory from "./model"
import calculations from "./calculations"
const backend = {
    createNewProject : function(projectName , model){
        store.createNewProject(model , projectName)
    },
    generateNewModel : function(){
        return new modelFactory.createModel();
    },
    getProjectData : function(projectName){
        return store.readProjectByName(projectName);
    },
    saveIntoProject(projectName , model){
        store.updateByProjectName(projectName , model)
    },
    calculate(projectName){
        let model = store.readProjectByName(projectName);
        calculations.performCalculations(model)
        store.updateByProjectName(projectName , model)
    }
}

export default backend