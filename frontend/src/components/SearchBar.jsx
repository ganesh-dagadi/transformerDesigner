import { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(){
   const [search, setSearch] = useState("");

   function  handleSearch(e){
      setSearch(e.target.value);
   }

   return (
      <div>
         <input type="text" placeholder="Search Design" value={search} onChange={(e) => handleSearch(e)} className={styles.input} />
      </div>
   );
}
