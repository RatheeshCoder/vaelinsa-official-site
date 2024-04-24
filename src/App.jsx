import React from "react";
import "./App.css";
import "./style/style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeMain from "./page/HomeMain";
import Video from "./component/Video";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomeMain />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
