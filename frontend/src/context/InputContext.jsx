import { createContext, useContext, useEffect, useReducer, useState } from "react";
import backend from "../../backend/src/backend";

let initialState = {...backend.generateNewModel().input};
initialState = {...initialState};
let output = {...backend.generateNewModel().output};


function reducer(state, action){
   switch(action.type){
      case "updateState":
         return action.payload;

      // Cooling
      case "updateWindTemp":
         return {...state, cooling: {windingTemp: action.payload}};

      // coreWdg
      case "updateAm":
         return {...state, coreWdg: {...state.coreWdg, am: action.payload}};
      case "updateGapBobin":
         return {...state, coreWdg: {...state.coreWdg, gap_bobin: action.payload}};
      case "updateLimbPlate1":
         return {...state, coreWdg: {...state.coreWdg, limbPlate1: action.payload}};
      case "updateLimbPlate2":
         return {...state, coreWdg: {...state.coreWdg, limbPlate2: action.payload}};
      case "updateRho":
         return {...state, coreWdg: {...state.coreWdg, rho: action.payload}};
      case "updateWD":
         return {...state, coreWdg: {...state.coreWdg, w_d: action.payload}};

      // general
      case "updateK":
         return {...state, general: {...state.general, K: action.payload}};
      case "updateFluxDensity":
         return {...state, general: {...state.general, fluxDensity: action.payload}};
      case "updateFrequency":
         return {...state, general: {...state.general, frequency: action.payload}};
      case "updatePower":
         return {...state, general: {...state.general, power: action.payload}};
      case "updateTransformerType":
         return {...state, general: {...state.general, transformerType: action.payload}};
      case "updateWindingMaterial":
         return {...state, general: {...state.general, windingMaterial: action.payload}};

      // hv
      case "updateHVConnectionType":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, connectionType: action.payload}}};
      case "updateHVEndClearance":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, endClearance: action.payload}}};
      case "updateHVInsulation":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, insulation: action.payload}}};
      case "updateHVInsulationBwLayers":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, insulationBwLayers: action.payload}}};
      case "updateHVInsulationType":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, insulationType: action.payload}}};
      case "updateHVLayers":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, layers: action.payload}}};
      case "updateHVNoParallelRA1":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, noParallelRA1: action.payload}}};
      case "updateHVNoParallelRA2":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, noParallelRA2: action.payload}}};
      case "updateHVOilDucts1":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, oilDucts1: action.payload}}};
      case "updateHVOilDucts2":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, oilDucts2: action.payload}}};
      case "updateHVVoltage":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, voltage: action.payload}}};
      case "updateHVWireBare1":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, wireBare1: action.payload}}};
      case "updateHVWireBare2":
         return {...state, winding: {...state.winding, hv: {...state.winding.hv, wireBare2: action.payload}}};

      //lv
      case "updateLVConnectionType":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, connectionType: action.payload}}};
      case "updateLVEndClearance":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, endClearance: action.payload}}};
      case "updateLVInsulation":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, insulation: action.payload}}};
      case "updateLVInsulationBwLayers":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, insulationBwLayers: action.payload}}};
      case "updateLVInsulationType":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, insulationType: action.payload}}};
      case "updateLVLayers":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, layers: action.payload}}};
      case "updateLVNoParallelRA1":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, noParallelRA1: action.payload}}};
      case "updateLVNoParallelRA2":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, noParallelRA2: action.payload}}};
      case "updateLVOilDucts1":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, oilDucts1: action.payload}}};
      case "updateLVOilDucts2":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, oilDucts2: action.payload}}};
      case "updateLVVoltage":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, voltage: action.payload}}};
      case "updateLVWireBare1":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, wireBare1: action.payload}}};
      case "updateLVWireBare2":
         return {...state, winding: {...state.winding, lv: {...state.winding.lv, wireBare2: action.payload}}};
   }
}

const InputProvider = createContext();

function InputContext(props){
   const [state, dispatch] = useReducer(reducer, initialState);
   const information = {...props};
   const children = information.children;

   const [projectName, setProjectName] = useState(function(){
      let storedValue = localStorage.getItem("projectName");
      if(!storedValue){
         return;
      }
      return JSON.parse(storedValue);
   });

   useEffect(function(){
      if(!projectName){
         return;
      }
      localStorage.setItem("projectName", JSON.stringify(projectName));
   }, [projectName]);

   useEffect(function(){
      const storedValue = JSON.parse(localStorage.getItem(`backend_${projectName}`));
      if(!storedValue || !storedValue.input){
         return;
      }
      initialState = storedValue.input;
      dispatch({ type: "updateState", payload: initialState });
   }, [projectName]);

   return (
      <InputProvider.Provider value={{state, dispatch, projectName, setProjectName, output}}>
         {children}
      </InputProvider.Provider>
   );
}

function InputConsumer(){
   const context = useContext(InputProvider);
   return context;
}

export { InputContext, InputConsumer };

