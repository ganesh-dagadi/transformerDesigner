import styles from "./Display.module.css";
import backend from "../../backend/src/backend";
import { useEffect, useState } from "react";
import { InputConsumer } from "../context/InputContext";

export default function Display(){
   const [lv, setLv] = useState([]);
   const [hv, setHv] = useState([]);
   const [keys, setKeys] = useState([]);
   const { projectName } = InputConsumer();
   const [correctKey, setCorrectKey] = useState([]);
   const [unit, setUnit] = useState([]);

   useEffect(function(){
      async function fetch(){
         backend.calculate(projectName);
         const model = backend.getProjectData(projectName);
         const data = model.output;

         setLv(data?.winding?.lv);
         setHv(data?.winding?.hv);

         const temp = [];
         const newTemp = [];
         for(const key in data?.winding?.lv){
            if(temp.includes(key) === false){
               const newKey = key.replace(/([A-Z])/g, " $1");
               newTemp.push(newKey);
               temp.push(key);
            }
         }
         setKeys(temp);
         setCorrectKey(newTemp);
         const unitArray = ['V', 'A', 'mm', 'mm', 'sq.mm', 'no.', 'mm', 'A/sq. mm', 'm', 'no.', '', '', 'ohm', '%',
                              'Kg', '', 'mm', 'Watt', '', '', `degree C`];
         setUnit(unitArray);
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
                     correctKey.map((key) => (<div key={key} className={styles.singleData}>{key}</div>))
                  }
               </div>   
               <div className={styles.data}>
                  <h3>LV</h3>
                  {
                     keys.map((key, index) => (<div key={key} className={styles.singleData}>{lv[key].toFixed(5)} <strong>{unit[index]}</strong></div>))
                  }
               </div>
               <div className={styles.data}>
                  <h3>HV</h3>
                  {
                     keys.map((key, index) => (<div key={key} className={styles.singleData}>{hv[key].toFixed(5)} <strong>{unit[index]}</strong></div>))
                  }
               </div>
            </div>
      </div>
   );
}
