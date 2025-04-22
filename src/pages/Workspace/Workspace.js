import React, { useState } from "react";
import "./Workspace.css";
import FlowCanvas from "../../components/core/Canvas/FlowCanvas";

export default function Workspace() {
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    console.log("Generate flowchart from:", prompt);
    // This is where you'd plug in logic to convert text to flowchart
  };

  return (
    <div className="workspace-container">
      <aside className="sidebar">
        <select className="input-select">
          <option>English</option>
        </select>

        <select className="input-select">
          <option>Flowchart</option>
        </select>

        <textarea
          className="input-textarea"
          placeholder="Generate a flowchart for making coffee"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
        ></textarea>

        <div className="sidebar-buttons">
          <button className="template-button">📁 Templates</button>
          <button className="generate-button" onClick={handleGenerate}>
            ⚡ Generate
          </button>
        </div>
      </aside>

      <section className="canvas-section">
        <FlowCanvas />
      </section>
    </div>
  );
}
