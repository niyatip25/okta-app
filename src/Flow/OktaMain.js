import React from "react";
import ReactFlow, { Controls } from "react-flow-renderer";
import { useHistory } from "react-router-dom";
import Elements from "./Elements";

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  reactFlowInstance.fitView();
};

const OktaMain = () => {
  const history = useHistory();

  const onElementClick = (event, element) => {
    if (element.data.label === "Okta") {
      history.push("/okta");
    } else {
      history.push(`/okta/${element.data.label}`);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <ReactFlow
        onElementClick={onElementClick}
        onLoad={onLoad}
        elements={Elements}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default OktaMain;
