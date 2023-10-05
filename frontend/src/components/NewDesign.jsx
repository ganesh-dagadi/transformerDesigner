import logo from "../assets/plus.png";
import styles from "./NewDesign.module.css";

export default function NewDesign(){
   return (
      <div className={styles.main}>
         <div className={styles.heading}>
            <img src={logo} alt="plus" className={styles.plusImage} />
            <h2>New Design</h2>
         </div>
         <div className={styles.inputContainer}>
            <span>Design Name: </span>
            <input type="string" placeholder="Enter design name" className={styles.input} />
         </div>
         <div className={styles.inputContainer}>
            <span>Transformer Type: </span>
            <input type="string" placeholder="Enter transformer type" className={styles.input} />
         </div>
         <button className={styles.nextButton}>Next</button>
      </div>
   );
}
