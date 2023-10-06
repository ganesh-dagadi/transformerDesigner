import modelFactory from '../src/model'
import backend from "../src/backend"
function testNewProject(){
    const model = new modelFactory.createModel()
    model.input.general ={
        transformerType : "Stepup",
        power : 342, //in KVA
        frequency : 50,
        K : 85,
        windingMaterial : "Foil"
    }
    backend.createNewProject("testProject1" , model)

}

export default testNewProject