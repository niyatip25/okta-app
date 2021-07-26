import { useParams } from "react-router-dom";
import React from "react";

const NodeDetails = () => {
  const params = useParams();
  console.log("id: ", params.id);
  return <div>Here goes {params.id} mapping</div>;
};

export default NodeDetails;
