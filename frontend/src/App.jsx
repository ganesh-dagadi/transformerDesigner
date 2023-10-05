import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import styles from "./App.module.css";

export default function App(){
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
