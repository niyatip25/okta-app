/* eslint-disable import/no-anonymous-default-export */
import { jsonAPI } from "./jsonAPI";

var dataLabels = jsonAPI[0].propertyMappings;
console.log("type of dataLabels: ", typeof dataLabels);
console.log("dataLabels: ", dataLabels);

// const getLabel = (index, fieldType) => {
//   if (fieldType === "targetField") {
//     return dataLabels[index].targetField;
//   } else if (fieldType === "sourceExpression") {
//     return dataLabels[index].sourceExpression;
//   }
// };

const typeInput = "input";
const typeOutput = "output";
const sourcePosLeft = "left";
const sourcePosRight = "right";

var flowInputElementsArray = [];
var flowOutputElementsArray = [];
var mindmapArray = [];

flowInputElementsArray = dataLabels.map(function (dataLabel, index) {
  var data1 = { label: dataLabels[index].sourceExpression };
  var flowElement = {
    id: index,
    data: data1,
    type: typeInput,
    sourcePosition: sourcePosRight,
    position: { x: 250, y: index * 60 },
    style: {
      overflowWrap: "break-word",
    },
  };
  return flowElement;
});

flowOutputElementsArray = dataLabels.map(function (dataLabel, index) {
  var data2 = { label: dataLabels[index].targetField };
  var flowElement = {
    id: index + dataLabels.length + 1,
    data: data2,
    type: typeOutput,
    targetPosition: sourcePosLeft,
    position: { x: 750, y: index * 60 },
    style: {
      overflowWrap: "break-word",
    },
  };
  return flowElement;
});

mindmapArray = dataLabels.map(function (dataLabel, index) {
  var flowElement = {
    id: "e1-" + index,
    source: index,
    target: dataLabels.length + (index + 1),
    animated: true,
  };
  return flowElement;
});

var finalInputOutputArray = flowInputElementsArray.concat(
  flowOutputElementsArray
);
var finalArray = finalInputOutputArray.concat(mindmapArray);
console.log("finalArray: ", finalArray);
console.log("flowOutputElementsArray: ", typeof flowOutputElementsArray);
console.log("flowInputElementsArray: ", typeof flowInputElementsArray);

export const flowElements = finalArray;

// for (var i = 1; i <= dataLabels.length; i++) {
//   var data1 = { label: dataLabels[i - 1].sourceExpression };
//   flowElementsArray.push({
//     id: i,
//     data: data1,
//     type: typeInput,
//     sourcePosition: sourcePosRight,
//     position: { x: 250, y: (i - 1) * 60 },
//     style: {
//       overflowWrap: "break-word",
//     },
//   });
// }

// finalArray = [
//   ...flowInputElementsArray2.flowOutputElementsArray2,
//   flowOutputElementsArray2,
// ];

// for (var j = dataLabels.length + 1; j <= dataLabels.length * 2; j++) {
//   var data2 = { label: dataLabels[j - dataLabels.length - 1].targetField };
//   flowElementsArray.push({
//     id: j,
//     data: data2,
//     type: typeOutput,
//     targetPosition: sourcePosLeft,
//     position: { x: 750, y: (j - dataLabels.length - 1) * 60 },
//     style: {
//       overflowWrap: "break-word",
//     },
//   });
// }

// for (var k = 1; k <= dataLabels.length; k++) {
//   flowElementsArray2.push({
//     id: "e1-" + k,
//     source: k,
//     target: dataLabels.length + k,
//     animated: true,
//   });
// }
