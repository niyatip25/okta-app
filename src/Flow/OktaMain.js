import React from "react";
import ReactFlow, { Controls } from "react-flow-renderer";
import { useHistory } from "react-router-dom";
import Elements from "./Elements";

const onLoad = (reactFlowInstance) => {
  console.log("flow loaded:", reactFlowInstance);
  // reactFlowInstance.fitView();
  reactFlowInstance.setTransform({ x: 0, y: 100, zoom: 1.5 });
};

const OktaMain = () => {
  const history = useHistory();

  const onElementClick = (event, element) => {
    if (element.id !== "O1") {
      history.push(`/okta/${element.id}`);
      window.location.reload();
    }
  };

  const style = {
    background: "#282C35",
    width: "100%",
    height: "100vh",
  };
  return (
    <div>
      <ReactFlow
        onElementClick={onElementClick}
        onLoad={onLoad}
        elements={Elements}
        style={style}
      >
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default OktaMain;
