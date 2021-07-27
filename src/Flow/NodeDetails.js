import React from "react";
import ReactFlow, { MiniMap, Controls } from "react-flow-renderer";
import { flowElements } from "./App1Elements";
const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const NodeDetails = () => {
  return (
    <div
      style={{
        background: "#282C35",
        width: "100%",
        height: "100vh",
      }}
    >
      <ReactFlow onLoad={onLoad} elements={flowElements}>
        <MiniMap
          nodeStrokeColor={(n) => {
            if (n.style?.background) return n.style.background;
            if (n.type === "input") return "#0041d0";
            if (n.type === "output") return "#ff0072";
            if (n.type === "default") return "#1a192b";

            return "#eee";
          }}
          nodeColor={(n) => {
            if (n.style?.background) return n.style.background;
            return "#fff";
          }}
          nodeBorderRadius={2}
        />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default NodeDetails;
