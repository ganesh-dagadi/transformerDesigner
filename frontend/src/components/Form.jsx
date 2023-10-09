import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";
import backend from "../../backend/src/backend";

export default function PrimaryForm(props){
   const information = {...props};
   const heading = information.heading;
   const context = information.context;
   const dispatch = information.dispatch;
   const projectName = information.projectName;
   const output = information.output;
   const state = information.state;

   const navigate = useNavigate();

   function handleNextButton(){
      const model = {
         input: state,
         output
      };
      backend.saveIntoProject(projectName, model);
      navigate("/display");
   }

   return (
      <div className={styles.main}>
         <h1>{heading}</h1>
         <div className={styles.form}>

            <div className={styles.single}>
               <span>Voltage</span>
               <input
               type="number" 
               className={styles.input} 
               placeholder="Voltage"
               value={parseFloat(context.voltage) ? parseFloat(context.voltage) : ""}
               onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVVoltage": "updateHVVoltage", 
               payload: parseFloat(e.target.value) })}
               />
            </div>

            <div className={styles.single}>
               <span>Connection Type</span>
               <select 
               className={styles.input}
               value={context.connectionType ? context.connectionType : ""}
               onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVConnectionType": "updateHVConnectionType",
               payload: e.target.value })}
               >
                  <option value={""}>Select Connection Type</option>
                  <option value="STAR">Star</option>
                  <option value="DELTA">Delta</option>
               </select>
            </div>

            <div className={styles.single}>
               <span>Insulation Type</span>
               <select 
               className={styles.input}
               value={context.insulationType ? context.insulationType : ""}
               onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVInsulationType": "updateHVInsulationType",
               payload: e.target.value })}
               >
                  <option value={""}>Select Insulation Type</option>
                  <option value="FOIL">Foil</option>
                  <option value="STRIP">Strip</option>
               </select>
            </div>


            <div className={styles.single}>
               <span>Wire Bare(mm)</span>
               <div className={styles.double}>
                  <input 
                  type="number" 
                  className={styles.input} 
                  placeholder="Wire Bare 1"
                  value={parseFloat(context.wireBare1) ? parseFloat(context.wireBare1) : ""}
                  onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVWireBare1": "updateHVWireBare1",
                  payload: parseFloat(e.target.value) })}
                  />
                  <input 
                  type="number" 
                  className={styles.input} 
                  placeholder="Wire Bare 2"
                  value={parseFloat(context.wireBare2) ? parseFloat(context.wireBare2) : ""}
                  onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVWireBare2": "updateHVWireBare2",
                  payload: parseFloat(e.target.value) })}
                  />
               </div>
            </div>

            <div className={styles.single}>
               <span>Insulation(mm)</span>
               <input 
               type="number" 
               className={styles.input} 
               placeholder="Insulation" 
               value={parseFloat(context.insulation) ? parseFloat(context.insulation) : ""}
               onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVInsulation": "updateHVInsulation",
               payload: parseFloat(e.target.value) })}   
               />
            </div>

            <div className={styles.single}>
               <span>Insulation between layers(mm)</span>
               <input 
               type="number" 
               placeholder="Insulation between layers" 
               className={styles.input} 
               value={parseFloat(context.insulationBwLayers) ? parseFloat(context.insulationBwLayers) : ""}
               onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVInsulationBwLayers" : "updateHVInsulationBwLayers",
               payload: parseFloat(e.target.value) })}
               />
            </div>


            <div className={styles.single}>
               <span>No in parallel RA</span>
               <div className={styles.double}>
                  <input 
                  type="number" 
                  className={styles.input} 
                  placeholder="No in parallel RA 1"
                  value={parseFloat(context.noParallelRA1) ? parseFloat(context.noParallelRA1) : ""}
                  onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVNoParallelRA1": "updateHVNoParallelRA1",
                  payload: parseFloat(e.target.value) })}
                  />
                  <input 
                  type="number" 
                  className={styles.input} 
                  placeholder="No in parallel RA 2"
                  value={parseFloat(context.noParallelRA2) ? parseFloat(context.noParallelRA2) : ""}
                  onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVNoParallelRA2": "updateHVNoParallelRA2",
                  payload: parseFloat(e.target.value) })}
                  />
               </div>
            </div>

            <div className={styles.single}>
               <span>Layers</span>
               <input 
               type="number" 
               className={styles.input} 
               placeholder="Layers"
               value={parseFloat(context.layers) ? parseFloat(context.layers) : ""} 
               onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVLayers" : "updateHVLayers",
               payload: parseFloat(e.target.value) })}
               />
            </div>

            <div className={styles.single}>
               <span>End clearance</span>
               <input 
               type="number" 
               placeholder="End clearance" 
               className={styles.input} 
               value={parseFloat(context.endClearance) ? parseFloat(context.endClearance) : ""}
               onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVEndClearance" : "updateHVEndClearance",
               payload: parseFloat(e.target.value) })}
               />
            </div>

            <div className={styles.single}>
               <span>Oil Duct</span>
               <div className={styles.double}>
                  <input 
                  type="number" 
                  className={styles.input} 
                  placeholder="Oil duct 1"
                  value={parseFloat(context.oilDucts1) ? parseFloat(context.oilDucts1) : ""}
                  onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVOilDucts1" : "updateHVOilDucts1",
                  payload: parseFloat(e.target.value) })}
                  />
                  <input 
                  type="number" 
                  className={styles.input} 
                  placeholder="Oil duct 2"
                  value={parseFloat(context.oilDucts2) ? parseFloat(context.oilDucts2) : ""}
                  onChange={(e) => dispatch({ type: heading === "LV" ? "updateLVOilDucts2" : "updateHVOilDucts2",
                  payload: parseFloat(e.target.value) })}
                  />
               </div>
            </div>

         </div>
         {
            heading === "HV" ? 
            <button className={styles.saveButton} onClick={() => handleNextButton()}>Calculate</button> : 
            <button className={styles.saveButton} onClick={() => navigate("/second")}>Previous</button>
         }
      </div>
   );
}
