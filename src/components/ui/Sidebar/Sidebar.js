import { useFlowStore } from "../../../state/store";
import "./Sidebar.css";

export default function Sidebar({ isOpen, onClose }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        ×
      </button>

      <div className="sidebar-content">
        <h3>Advanced Features</h3>

        <div className="sidebar-section">
          <h4>Node Templates</h4>
          <button className="sidebar-btn">Add Template</button>
        </div>

        <div className="sidebar-section">
          <h4>Flowchart Conversion</h4>
          <button className="sidebar-btn">Flowchart to Code</button>
          <button className="sidebar-btn">Code to Flowchart</button>
        </div>

        <div className="sidebar-section">
          <h4>Prebuilt Templates</h4>
          <button className="sidebar-btn">Merge Sort</button>
          <button className="sidebar-btn">Quick Sort</button>
        </div>

        <div className="sidebar-section">
          <h4>Voice Commands</h4>
          <button className="sidebar-btn">Enable Voice</button>
        </div>
      </div>
    </div>
  );
}
