import styles from "./RecentDesign.module.css";
import SingleDesign from "./SingleDesign";

const data = [
   {
      name: "Project Name 1",
      low: "144V",
      high: "440V",
      date: "11/5/23",
      time: "12:00pm",
      id: 1,
   },
   {
      name: "Project Name 1",
      low: "144V",
      high: "440V",
      date: "11/5/23",
      time: "12:00pm",
      id: 2,
   },
   {
      name: "Project Name 1",
      low: "144V",
      high: "440V",
      date: "11/5/23",
      time: "12:00pm",
      id: 3,
   }
];

export default function RecentDesign(){
   return (
      <div className={styles.main}>
         <h3>Recent Design</h3>
         {
            data.map((single) => (<SingleDesign single={single} key={single.id} />))
         }
      </div>
   );
}
