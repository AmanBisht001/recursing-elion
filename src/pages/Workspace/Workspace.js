import React, { useState, useEffect } from "react";
import { useFlowStore } from "../../state/store";
import FlowCanvas from "../../components/core/Canvas/FlowCanvas";
import "./Workspace.css";

const AI_FLOWCHART_API = "https://your-ai-api-endpoint.com/generate"; // Replace with actual API

const Workspace = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const { nodes, edges, setNodes, setEdges } = useFlowStore();

  const generateFlowchartFromAI = async (textPrompt) => {
    setIsGenerating(true);
    try {
      // Simulated API call - replace with actual API implementation
      const mockResponse = {
        nodes: [
          { id: "start", type: "start", x: 100, y: 50, label: "Start" },
          {
            id: "process1",
            type: "process",
            x: 100,
            y: 150,
            label: "First Step",
          },
          {
            id: "decision1",
            type: "decision",
            x: 100,
            y: 250,
            label: "Decision",
          },
          { id: "end", type: "end", x: 100, y: 400, label: "End" },
        ],
        edges: [
          { from: "start", to: "process1", label: "Begin" },
          { from: "process1", to: "decision1", label: "Next" },
          { from: "decision1", to: "end", label: "Yes" },
        ],
      };

      // Actual implementation would use:
      // const response = await fetch(AI_FLOWCHART_API, {
      //   method: 'POST',
      //   body: JSON.stringify({ prompt: textPrompt })
      // });
      // const data = await response.json();

      await new Promise((resolve) => setTimeout(resolve, 1500)); // Simulate delay

      setNodes(mockResponse.nodes);
      setEdges(mockResponse.edges);
    } catch (error) {
      console.error("AI generation error:", error);
    } finally {
      setIsGenerating(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleGenerate();
    }
  };

  const handleGenerate = () => {
    if (prompt.trim()) {
      generateFlowchartFromAI(prompt);
    }
  };

  return (
    <div className="workspace-container">
      <div className="ai-header">
        <h1>AI Flowchart Generator</h1>
        <p>Transform your ideas into professional flowcharts instantly</p>
      </div>

      <div className="main-content">
        <div className="control-panel">
          <div className="input-section">
            <div className="input-header">
              <h3>Create New Flowchart</h3>
              <div className="badge">AI Powered</div>
            </div>

            <div className="input-group">
              <label>Describe your flowchart</label>
              <textarea
                className="ai-prompt-input"
                placeholder="Example: Create a flowchart for an e-commerce checkout process..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyPress}
                rows={5}
              />
              <div className="input-footer">
                <span className="hint">Shift + Enter for new line</span>
                <span className="char-count">{prompt.length}/2000</span>
              </div>
            </div>

            <div className="action-buttons">
              <button
                className="generate-button"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <div className="spinner"></div>
                    Generating...
                  </>
                ) : (
                  <>
                    <span className="icon">⚡</span>
                    Generate Flowchart
                  </>
                )}
              </button>
            </div>

            <div className="features-list">
              <div className="feature-item">
                <span className="icon">🤖</span>
                AI-Powered Generation
              </div>
              <div className="feature-item">
                <span className="icon">🎨</span>
                Automatic Formatting
              </div>
              <div className="feature-item">
                <span className="icon">💾</span>
                Instant Save
              </div>
            </div>
          </div>
        </div>

        <div className="canvas-wrapper">
          <FlowCanvas nodes={nodes} edges={edges} />
          {!nodes.length && (
            <div className="empty-state">
              <div className="placeholder-text">
                <h3>Your AI-Generated Flowchart</h3>
                <p>Start by describing your process above</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Workspace;
