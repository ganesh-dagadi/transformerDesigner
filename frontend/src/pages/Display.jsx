import styles from "./Display.module.css";
import backend from "../../backend/src/backend";
import { useEffect, useState } from "react";
import { InputConsumer } from "../context/InputContext";

export default function Display(){
   const [lv, setLv] = useState([]);
   const [hv, setHv] = useState([]);
   const [keys, setKeys] = useState([]);
   const { projectName } = InputConsumer();

   useEffect(function(){
      async function fetch(){
         backend.calculate(projectName);
         const model = backend.getProjectData(projectName);
         const data = model.output;

         setLv(data?.winding?.lv);
         setHv(data?.winding?.hv);

         const temp = []
         for(const key in data?.winding?.lv){
            if(temp.includes(key) === false){
               temp.push(key);
            }
         }
         setKeys(temp);
      }
      fetch();
   }, [projectName]);


   return (
      <div className={styles.main}>
         <h1>Winding Data</h1>
            <div className={styles.display}>
               <div className={styles.data}>
                  <h3>Properties</h3>
                  {
                     keys.map((key) => (<div key={key}>{key}</div>))
                  }
               </div>   
               <div className={styles.data}>
                  <h3>LV</h3>
                  {
                     keys.map((key) => (<div key={key}>{lv[key].toFixed(3)}</div>))
                  }
               </div>
               <div className={styles.data}>
                  <h3>HV</h3>
                  {
                     keys.map((key) => (<div key={key}>{hv[key].toFixed(3)}</div>))
                  }
               </div>
            </div>
      </div>
   );
}
