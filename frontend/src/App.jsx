import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import styles from "./App.module.css";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";

export default function App(){
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage />} />
          <Route path="/second" element={<SecondPage />} />
          <Route path="/third" element={<ThirdPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
