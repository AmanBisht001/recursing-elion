import { useEffect } from "react";
import FlowCanvas from "../../components/core/Canvas/FlowCanvas";
import NodeToolbar from "../../components/core/Toolbar/NodeToolbar";
import { useStore } from "../../state/store";
import { loadFromLocal } from "../../utils/storage";
import "./Workspace.css";

export default function Workspace() {
  const { setNodes, setEdges } = useStore();

  useEffect(() => {
    // Load any saved flowchart if ID exists in URL
    const params = new URLSearchParams(window.location.search);
    const flowchartId = params.get("id");

    if (flowchartId) {
      const savedFlowchart = loadFromLocal(flowchartId);
      if (savedFlowchart) {
        setNodes(savedFlowchart.nodes);
        setEdges(savedFlowchart.edges);
      }
    }
  }, [setNodes, setEdges]);

  return (
    <div className="workspace-container">
      <NodeToolbar />
      <FlowCanvas />
    </div>
  );
}
