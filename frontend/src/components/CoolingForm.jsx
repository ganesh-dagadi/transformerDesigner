import { useNavigate } from "react-router-dom";
import styles from "./CoolingForm.module.css";

export default function CoolingForm(){
   const navigate = useNavigate();
   return (
      <div className={styles.main}>
         <h1> Cooling</h1>
         <div className={styles.form}>
            <div className={styles.single}>
               <span>Wind Temp</span>
               <span><input className={styles.input} placeholder="Enter wind temp" />&deg;C</span>
            </div>
            <h2 className={styles.heading}>Core Wdg</h2>

            <div className={styles.single}>
               <span>am</span>
               <input type="text" className={styles.input} placeholder="Enter am" /> 
            </div>

            <div className={styles.single}>
               <span>S</span>
               <input type="text" className={styles.input} placeholder="Enter S" /> 
            </div>

            <div className={styles.single}>
               <span>W/D</span>
               <input type="text" className={styles.input} placeholder="Enter W/D" /> 
            </div>

            <div className={styles.single}>
               <span>Limb Plate</span>
               <input type="text" className={styles.input} /> 
            </div>

            <div className={styles.single}>
               <span>Gap</span>
               <input type="text" className={styles.input} /> 
            </div>
         </div>
         <button className={styles.saveButton} onClick={() => navigate("/third")}>Next</button>
      </div>
   );
}
