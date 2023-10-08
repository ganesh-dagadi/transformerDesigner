import { useNavigate } from "react-router-dom";
import styles from "./GeneralForm.module.css";
import { InputConsumer } from "../context/InputContext";

export default function GeneralForm(){
   const navigate = useNavigate();
   const { state, dispatch } = InputConsumer();
   const { general } = state;

   return (
      <div className={styles.main}>
         <h1>General</h1>
         <div className={styles.form}>
            <div className={styles.single}>
               <span>Power Rating</span>
               <span>
                  <input 
                  type="number" 
                  className={styles.input} 
                  value={parseFloat(general.power) ? parseFloat(general.power) : ""} 
                  onChange={(e) => dispatch({ type: "updatePower", payload: parseFloat(e.target.value) })}
                  placeholder="Power Rating"
                  />kVa
               </span>
            </div>

            <div className={styles.single}>
               <span>Frequency</span>
               <span>
                  <input 
                  type="number" 
                  className={styles.input} 
                  value={parseFloat(general.frequency) ? parseFloat(general.frequency) : ""} 
                  onChange={(e) => dispatch({ type: "updateFrequency", payload: parseFloat(e.target.value) })} 
                  placeholder="Freqency"
                  />Hz
               </span>
            </div>

            <div className={styles.single}>
               <span>Winding material</span>
               <select 
               className={styles.input} 
               value={general.windingMaterial} 
               onChange={(e) => dispatch({ type: "updateWindingMaterial", payload: e.target.value})}>
                  <option value={""}>Select winding material</option>
                  <option value="AL">Aluminium</option>
                  <option value="CU">Copper</option>
               </select>
            </div>

            <div className={styles.single}>
               <span>Vector</span>
               <select className={styles.input}>
                  <option value="ddoyn">DdoYn</option>
               </select>
            </div>

            <div className={styles.single}>
               <span>Flux Density</span>
               <input 
               className={styles.input} 
               type="number" 
               value={parseFloat(general.fluxDensity) ? parseFloat(general.fluxDensity): ""} 
               onChange={(e) => dispatch({ type: "updateFluxDensity", payload: parseFloat(e.target.value)})} 
               placeholder="Flux Density"
               />
            </div>

            <div className={styles.single}>
               <span>K</span>
               <input 
               type="number" 
               className={styles.input} 
               value={parseFloat(general.K) ? parseFloat(general.K) : ""} 
               onChange={(e) => dispatch({ type: "updateK", payload: parseFloat(e.target.value)})} 
               placeholder="K"
               />
            </div>
         </div>
         <button className={styles.saveButton} onClick={() => navigate("/")}>Previous</button>
      </div>
   )
}