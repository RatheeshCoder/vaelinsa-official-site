
import "./App.css";
import "./style/style.css";
import './style/Tamil/tamil.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./page/HomeMain";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
