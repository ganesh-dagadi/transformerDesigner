import backend from "../src/backend"
function testNewProject(){
    let model =backend.generateNewModel()
    backend.createNewProject("testProject1" , model)
    model.input.general = {
        transformerType : "steup",
        power : 342, //in KVA
        frequency : 50,
        K : 85,
        windingMaterial : "COPPER",
        fluxDensity : 1.5 //in T
    }
    backend.saveIntoProject("testProject1" , model)
    backend.calculate("testProject1");
    model = backend.getProjectData("testProject1");
    console.log(model)
    
}

export default testNewProject