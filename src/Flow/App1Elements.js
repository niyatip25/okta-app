/* eslint-disable import/no-anonymous-default-export */
import { jsonAPI } from "./jsonAPI";

const dataLabels = jsonAPI[0].propertyMappings;
console.log("dataLabels: ", dataLabels);

// const getLabel = (index, fieldType) => {
//   if (fieldType === "targetField") {
//     return dataLabels[index].targetField;
//   } else if (fieldType === "sourceExpression") {
//     return dataLabels[index].sourceExpression;
//   }
// };

var flowElementsArray = [];
const typeInput = "input";
const typeOutput = "output";
const sourcePosLeft = "left";
const sourcePosRight = "right";

for (var i = 1; i <= dataLabels.length; i++) {
  var data1 = { label: dataLabels[i - 1].sourceExpression };
  flowElementsArray.push({
    id: i,
    data: data1,
    type: typeInput,
    sourcePosition: sourcePosRight,
    position: { x: 250, y: (i - 1) * 60 },
    style: {
      overflowWrap: "break-word",
    },
  });
}

for (var j = dataLabels.length + 1; j <= dataLabels.length * 2; j++) {
  var data2 = { label: dataLabels[j - dataLabels.length - 1].targetField };
  flowElementsArray.push({
    id: j,
    data: data2,
    type: typeOutput,
    targetPosition: sourcePosLeft,
    position: { x: 750, y: (j - dataLabels.length - 1) * 60 },
    style: {
      overflowWrap: "break-word",
    },
  });
}

for (var k = 1; k <= dataLabels.length; k++) {
  flowElementsArray.push({
    id: "e1-" + k,
    source: k,
    target: dataLabels.length + k,
    animated: true,
  });
}

export const flowElements = flowElementsArray;
