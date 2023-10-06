import { useNavigate } from "react-router-dom";
import styles from "./GeneralForm.module.css";

export default function GeneralForm(){
   const navigate = useNavigate();

   return (
      <div className={styles.main}>
         <h1>General</h1>
         <div className={styles.form}>
            <div className={styles.single}>
               <span>Power Rating</span>
               <span><input className={styles.input} placeholder="Enter the power rating" />kVa</span>
            </div>

            <div className={styles.single}>
               <span>Frequency</span>
               <span><input className={styles.input} placeholder="Enter the frequency" />Hz</span>
            </div>

            <div className={styles.single}>
               <span>Winding material</span>
               <select className={styles.input}>
                  <option value="aluminium">Aluminium</option>
                  <option value="copper">Copper</option>
               </select>
            </div>

            <div className={styles.single}>
               <span>Vector</span>
               <select className={styles.input}>
                  <option value="ddoyn">DdoYn</option>
               </select>
            </div>

            <div className={styles.single}>
               <span>Phase</span>
               <input className={styles.input} placeholder="Enter phase value" />
            </div>

            <div className={styles.single}>
               <span>K</span>
               <input className={styles.input} placeholder="Enter K value" />
            </div>
         </div>
         <button className={styles.saveButton} onClick={() => navigate("/")}>Previous</button>
      </div>
   )
}