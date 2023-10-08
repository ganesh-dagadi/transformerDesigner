import { BrowserRouter, Route, Routes } from "react-router-dom";
import FirstPage from "./pages/FirstPage";
import styles from "./App.module.css";
import SecondPage from "./pages/SecondPage";
import ThirdPage from "./pages/ThirdPage";
import Display from "./pages/Display";
import { InputContext } from "./context/InputContext";

export default function App(){
  return (
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
  );
}
