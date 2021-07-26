import { useParams } from "react-router-dom";
import React from "react";
import ReactFlow, { Controls } from "react-flow-renderer";
import { flowElements } from "./App1Elements";
const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const NodeDetails = () => {
  const params = useParams();

  console.log("id: ", params.id);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <ReactFlow onLoad={onLoad} elements={flowElements}>
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default NodeDetails;
