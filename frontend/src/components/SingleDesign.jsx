import styles from "./SingleDesign.module.css";
import logo from  "../assets/sketch.png";

export default function SingleDesign(props){
   const information = {...props};
   const data = information.single;
   console.log(data);

   return (
      <div className={styles.main}>
         <div>
            <img src={logo} alt="sketch" className={styles.logo} />
         </div>
         <div className={styles.container}>
            <div>{data.name}</div>
            <div>step-up {data.low}/{data.high}</div>
         </div>
         <div className={styles.timeContainer}>
            {data.date}
         </div>
         <div className={styles.timeContainer}>
            {data.time}
         </div>
      </div>
   );
}
