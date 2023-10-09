import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import styles from "./App.module.css";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import Display from "./pages/Display";
import { InputContext } from "./context/InputContext";
import logo1 from "./assets/dyna.jpg";
import logo2 from "./assets/college.jpg";

export default function App(){
  return (
    <div className={styles.app}>
      <div className={styles.heading}>
        <img src={logo1} alt="DynaElectric" className={styles.image} />
        <h1>Transformer</h1>
        <img src={logo2} alt="College" className={styles.image} />
      </div>
      <InputContext>
        <div className={styles.app}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<FirstPage />} />
              <Route path="/second" element={<SecondPage />} />
              <Route path="/third" element={<ThirdPage />} />
              <Route path="/display" element={<Display />} />
            </Routes>
          </BrowserRouter>
        </div>
      </InputContext>
    </div>
  );
}
