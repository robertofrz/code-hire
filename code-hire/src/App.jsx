import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CVPage from "./components/CVPage/CVPage";
import TipsPage from "./components/TipsPage/TipsPage";

function App() {
  return (
    <Router basename="/code-hire">
      {" "}
      {/* Adicionando basename */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/edit" element={<CVPage />} />
        <Route path="/tips" element={<TipsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
