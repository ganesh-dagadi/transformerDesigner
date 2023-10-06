import styles from "./SearchBar.module.css";

export default function SearchBar(){
   return (
      <div>
         <input type="text" placeholder="Search Design"  className={styles.input} />
      </div>
   );
}
