import styles from "./ThirdPage.module.css";
import Form from "../components/Form";
import { InputConsumer } from "../context/InputContext";

export default function ThirdPage(){
   const { state, dispatch, projectName, output } = InputConsumer();
   const { hv, lv } = state.winding;

   return (
      <div className={styles.main}>
         <Form heading="LV" context={lv} dispatch={dispatch} />
         <Form state={state} heading="HV" context={hv} dispatch={dispatch} projectName={projectName} output={output} />
      </div>
   )
}