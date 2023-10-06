import { useNavigate } from "react-router-dom";
import styles from "./Form.module.css";


export default function PrimaryForm(props){
   const information = {...props};
   const heading = information.heading;

   const navigate = useNavigate();

   return (
      <div className={styles.main}>
         <h1>{heading}</h1>
         <div className={styles.form}>
            <div className={styles.single}>
               <span>Voltage</span>
               <span><input type="text" className={styles.input} placeholder="Enter voltage" />V</span>
            </div>

            <div className={styles.single}>
               <span>Connection Type</span>
               <select className={styles.input}>
                  <option value="star">Star</option>
                  <option value="delta">Delta</option>
               </select>
            </div>

            <div className={styles.single}>
               <span>Insulation Type</span>
               <select className={styles.input}>
                  <option value="foil">Foil</option>
                  <option value="strip">Strip</option>
               </select>
            </div>


            <div className={styles.single}>
               <span>Wire Bare(mm)</span>
               <div className={styles.double}>
                  <input type="text" className={styles.input} />
                  <input type="text" className={styles.input} />
               </div>
            </div>

            <div className={styles.single}>
               <span>Insulation(mm)</span>
               <input type="text" className={styles.input} placeholder="Enter insulation" />
            </div>

            <div className={styles.single}>
               <span>Insulation between layers(mm)</span>
               <input type="text" placeholder="Enter insulation between layers" className={styles.input} />
            </div>


            <div className={styles.single}>
               <span>No in parallel RA</span>
               <div className={styles.double}>
                  <input type="text" className={styles.input} />
                  <input type="text" className={styles.input} />
               </div>
            </div>

            <div className={styles.single}>
               <span>Layers</span>
               <input type="text" className={styles.input} placeholder="Enter the number of layers" />
            </div>

            <div className={styles.single}>
               <span>End clearance</span>
               <input type="text" placeholder="Enter end clearance" className={styles.input} />
            </div>

            <div className={styles.single}>
               <span>Oil Duct</span>
               <div className={styles.double}>
                  <input type="text" className={styles.input} />
                  <input type="text" className={styles.input} />
               </div>
            </div>

         </div>
         {
            heading === "Secondary" ? <button className={styles.saveButton}>Calculate</button> : <button onClick={() => navigate("/second")} className={styles.saveButton}>Previous</button>
         }
      </div>
   );
}