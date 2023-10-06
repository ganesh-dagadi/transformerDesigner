import { useNavigate } from "react-router-dom";
import logo from "../assets/plus.png";
import styles from "./NewDesign.module.css";

export default function NewDesign(){
   const navigate = useNavigate();

   return (
      <div className={styles.main}>
         <div className={styles.heading}>
            <img src={logo} alt="plus" className={styles.plusImage} />
            <h2>New Design</h2>
         </div>
         <div className={styles.form}>
            <div className={styles.single}>
               <span>Design Name: </span>
               <input type="string" placeholder="Enter design name" className={styles.input} />
            </div>
            <div className={styles.single}>
               <span>Transformer Type: </span>
               <input type="string" placeholder="Enter transformer type" className={styles.input} />
            </div>
         </div>
         <button className={styles.nextButton} onClick={() => navigate("/second")}>Next</button>
      </div>
   );
}
