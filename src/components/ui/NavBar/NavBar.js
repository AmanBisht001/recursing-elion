import { useState } from "react";
import { Link } from "react-router-dom";
import SaveModal from "../../modals/SaveModal";
import "./NavBar.css";

export default function NavBar({ darkMode, setDarkMode }) {
  const [showSaveModal, setShowSaveModal] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="logo">
          <span className="logo-icon">⟁</span>
          <span className="logo-text">FlowCraft</span>
        </Link>
      </div>

      <div className="navbar-right">
        <button className="nav-btn" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          className="nav-btn save-btn"
          onClick={() => setShowSaveModal(true)}
        >
          Save
        </button>

        <Link to="/workspace" className="nav-btn new-btn">
          New
        </Link>
      </div>

      {showSaveModal && <SaveModal onClose={() => setShowSaveModal(false)} />}
    </nav>
  );
}
