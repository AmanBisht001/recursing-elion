import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Workspace from "./pages/Workspace/Workspace";
import NavBar from "./components/ui/NavBar/NavBar";
import "./styles/App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app ${darkMode ? "dark" : "light"}`}>
      <Router>
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/workspace" element={<Workspace />} />
        </Routes>
      </Router>
    </div>
  );
}
