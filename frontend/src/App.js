import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioHome from "./components/PortfolioHome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioHome />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;