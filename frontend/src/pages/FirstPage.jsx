import styles from "./FirstPage.module.css";
import SearchBar from "../components/SearchBar";
import RecentDesign from "../components/RecentDesign";
import NewDesign from "../components/NewDesign";

export default function FirstPage(){
   return (
      <div className={styles.mainContainer}>
         <h1>Transformer Design</h1>
         <div className={styles.container}>
            <div className={styles.container1}>
               <SearchBar />
               <RecentDesign />
            </div>
            <div className={styles.container1}>
               <NewDesign />
            </div>
         </div>
      </div>
   );
}
