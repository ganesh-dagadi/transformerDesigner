import { useNavigate } from "react-router-dom";
import logo from "../assets/plus.png";
import styles from "./NewDesign.module.css";
import { InputConsumer } from "../context/InputContext";
import backend from "../../backend/src/backend";

export default function NewDesign(){
   const { state, dispatch, projectName, setProjectName, output } = InputConsumer();
   const { general } = state;
   const navigate = useNavigate();

   function handleNextButton(){
      const model = {
         input: state,
         output
      };
      backend.createNewProject(projectName, model);
      navigate("/second");
   }

   return (
      <div className={styles.main}>
         <div className={styles.heading}>
            <img src={logo} alt="plus" className={styles.plusImage} />
            <h2>New Design</h2>
         </div>
         <div className={styles.form}>
            <div className={styles.single}>
               <span>Design Name: </span>
               <input 
               type="string" 
               placeholder="Enter design name" 
               className={styles.input} 
               value={projectName ? projectName : ""}
               onChange={(e) => setProjectName(e.target.value)}
               />
            </div>

            <div className={styles.single}>
               <span>Transformer Type</span>
               <select 
               className={styles.input}
               value={general.transformerType}
               onChange={(e) => dispatch({ type: "updateTransformerType", payload: e.target.value })}>
                  <option value={""}>Select transformer type</option>
                  <option value={"STEPUP"}>Step Up</option>
                  <option value={"STEPDOWN"}>Step Down</option>
               </select>
            </div>
         </div>
         <button className={styles.nextButton} onClick={() => handleNextButton()}>Next</button>
      </div>
   );
}
