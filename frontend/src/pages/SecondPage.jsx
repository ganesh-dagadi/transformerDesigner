import styles from "./SecondPage.module.css";
import CoolingForm from "../components/CoolingForm";
import GeneralForm from "../components/GeneralForm";

export default function SecondPage(){
   return (
      <div className={styles.main}>
         <GeneralForm />
         <CoolingForm />
      </div>
   )
}