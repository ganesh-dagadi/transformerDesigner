import styles from "./ThirdPage.module.css";
import Form from "../components/Form";

export default function ThirdPage(){
   return (
      <div className={styles.main}>
         <Form heading="Primary" />
         <Form heading="Secondary" />
      </div>
   )
}