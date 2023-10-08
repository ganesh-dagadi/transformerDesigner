import { useNavigate } from "react-router-dom";
import styles from "./CoolingForm.module.css";
import { InputConsumer } from "../context/InputContext";
import backend from "../../backend/src/backend";

export default function CoolingForm(){
   const { state, dispatch, projectName, output } = InputConsumer();
   const { cooling, coreWdg } = state;
   const navigate = useNavigate();

   function handleNextButton(){
      const model = {
         input: state,
         output
      };
      backend.saveIntoProject(projectName, model);
      navigate("/third")
   }
   
   return (
      <div className={styles.main}>
         <h1> Cooling</h1>

         <div className={styles.form}>
            <div className={styles.single}>
               <span>Wind Temp</span>
               <span>
                  <select 
                  value={Number(cooling.windingTemp)} 
                  onChange={(e) => dispatch({ type: "updateWindTemp", payload: Number(e.target.value)})} 
                  className={styles.input}>
                     <option value={0}>Select the wind temp</option>
                     <option value={90}>90</option>
                     <option value={115}>115</option>
                  </select>&deg;C</span>
            </div>

            <h2 className={styles.heading}>Core Wdg</h2>

            <div className={styles.single}>
               <span>am</span>
               <input 
               type="number" 
               className={styles.input} 
               placeholder="am" 
               value={parseFloat(coreWdg.am) ? parseFloat(coreWdg.am) : ""} 
               onChange={(e) => dispatch({type: "updateAm", payload: parseFloat(e.target.value)})} 
               /> 
            </div>

            <div className={styles.single}>
               <span>Rho</span>
               <input 
               type="number" 
               className={styles.input} 
               placeholder="S" 
               value={parseFloat(coreWdg.rho) ? parseFloat(coreWdg.rho) : ""} 
               onChange={(e) => dispatch({type: "updateRho", payload: parseFloat(e.target.value) })} 
               /> 
            </div>

            <div className={styles.single}>
               <span>W/D</span>
               <input 
               type="number" 
               className={styles.input} 
               placeholder="W/D" 
               value={parseFloat(coreWdg.w_d) ? parseFloat(coreWdg.w_d) : ""} 
               onChange={(e) => dispatch({ type: "updateWD", payload: parseFloat(e.target.value)})} 
               /> 
            </div>

            <div className={styles.single}>
               <span>Limb Plate</span>
               <div className={styles.double}>
                  <input 
                  type="number" 
                  className={styles.input} 
                  value={parseFloat(coreWdg.limbPlate1) ? parseFloat(coreWdg.limbPlate1) : ""} 
                  onChange={(e) => dispatch({ type: "updateLimbPlate1", payload: parseFloat(e.target.value) })}
                  placeholder="Limb Plate 1" 
                  /> 
                  <input 
                  type="number" 
                  className={styles.input} 
                  value={parseFloat(coreWdg.limbPlate2) ? parseFloat(coreWdg.limbPlate2): ""} 
                  onChange={(e) => dispatch({ type: "updateLimbPlate2", payload: parseFloat(e.target.value) })} 
                  placeholder="Limb Plate 2"
                  /> 
               </div>
            </div>

            <div className={styles.single}>
               <span>Gap</span>
               <input 
               type="number" 
               className={styles.input} 
               value={parseFloat(coreWdg.gap_bobin) ? parseFloat(coreWdg.gap_bobin) : ""} 
               onChange={(e) => dispatch({type: "updateGapBobin", payload: parseFloat(e.target.value)})} 
               placeholder="Gap"
               /> 
            </div>
         </div>
         <button className={styles.saveButton} onClick={() => handleNextButton()}>Next</button>
      </div>
   );
}
