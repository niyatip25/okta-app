import React from "react";
import ReactFlow, { Controls } from "react-flow-renderer";
import initialElements from "./initial-elements";

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const OverviewFlow = () => {
  return (
    <ReactFlow onLoad={onLoad} elements={initialElements}>
      <Controls />
    </ReactFlow>
  );
};

export default OverviewFlow;
