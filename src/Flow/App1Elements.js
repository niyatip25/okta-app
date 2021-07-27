/* eslint-disable import/no-anonymous-default-export */
import { jsonAPI } from "./jsonAPI";

var dataLabels = jsonAPI[0].propertyMappings;
console.log("dataLabels: ", dataLabels);

const typeInput = "input";
const typeOutput = "output";
const sourcePosLeft = "left";
const sourcePosRight = "right";

var LeftNodes = [];
var RightNodes = [];
var MindMaps = [];

dataLabels.forEach((data, index) => {
  var data1 = { label: dataLabels[index].sourceExpression };
  var data2 = { label: dataLabels[index].targetField };

  LeftNodes.push({
    id: index,
    data: data1,
    type: typeInput,
    sourcePosition: sourcePosRight,
    position: { x: 250, y: index * 60 },
    style: {
      overflowWrap: "break-word",
    },
  });

  RightNodes.push({
    id: index + dataLabels.length,
    data: data2,
    type: typeOutput,
    targetPosition: sourcePosLeft,
    position: { x: 750, y: index * 60 },
    style: {
      overflowWrap: "break-word",
    },
  });

  MindMaps.push({
    id: "e1-" + index,
    source: index,
    target: dataLabels.length + index,
    animated: true,
  });
});

console.log("LeftNodes: ", LeftNodes);
console.log("RightNodes: ", RightNodes);
console.log("MindMaps: ", MindMaps);

var a = LeftNodes.concat(RightNodes);
var finalArray = a.concat(MindMaps);
console.log("finalArray: ", finalArray);

export const flowElements = finalArray;
