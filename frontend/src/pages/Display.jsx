import styles from "./Display.module.css";
import backend from "../../backend/src/backend";
import { useEffect, useRef } from "react";
import { InputConsumer } from "../context/InputContext";

export default function Display(){
   const { projectName } = InputConsumer();
   const data = useRef(null);

   useEffect(function(){
      backend.calculate(projectName);
      const model = backend.getProjectData(projectName);
      data.current = model.output;
   }, [projectName]);

   const lv = data?.current?.winding?.lv;
   const hv = data?.current?.winding?.hv;

   const keys = [];

   for(const key in lv){
      keys.push(key);
   }

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
