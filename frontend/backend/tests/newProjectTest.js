import backend from "../src/backend"
function testNewProject(){
    let model =backend.generateNewModel()
    backend.createNewProject("testProject1" , model)
    model.input.general = {
        transformerType : "steup",
        power : 260.2, //in KVA
        frequency : 50,
        K : 85,
        windingMaterial : "AL",
        fluxDensity : 1.64 //in T
    }
    model.input.coreWdg = {
        am : 13,
        rho : 16,
        w_d : 120,
        limbPlate1 : 0,
        limbPlate2 : 4,
        gap_bobin: 16,
        steelgradeThick : "CRNO35",
        core2 : 120
    }

    model.input.winding.lv = {
        voltage : 114.3,
        insulation : 0.11,
        insulationBwLayers : 0.13,
        wireBare1 : 400,
        wireBare2 : 2.30,
        noParallelRA1 : 1,
        noParallelRA2 : 1,
        layers : 8,
        endClearance : 40,
        oilDucts1 : 3,
        oilDucts2 : 10,
        connectionType : "STAR",
        insulationType : "FOIL"
    }

    model.input.winding.hv = {
        voltage : 346.4,
        insulation : 0.11,
        insulationBwLayers : 0.13,
        wireBare1 : 11,
        wireBare2 : 5,
        noParallelRA1 : 1,
        noParallelRA2 : 4,
        layers : 4,
        endClearance : 40,
        oilDucts1 : 1,
        oilDucts2 : 10,
        connectionType : "STAR",
        insulationType : "STRIP"
    }
    backend.saveIntoProject("testProject1" , model)
    backend.calculate("testProject1");
    model = backend.getProjectData("testProject1");
    console.log(model)
    
}

export default testNewProject