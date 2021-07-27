/* eslint-disable import/no-anonymous-default-export */

export default [
  {
    id: "O1",
    data: {
      label: "Okta",
    },
    type: "input",
    sourcePosition: "right",
    position: { x: 150, y: 30 },
  },

  {
    id: "A1",
    data: {
      label: "App1",
    },
    type: "output",
    position: { x: 750, y: 0 },
    targetPosition: "left",
  },
  {
    id: "A2",
    data: {
      label: "App2",
    },
    type: "output",
    position: { x: 750, y: 60 },
    targetPosition: "left",
  },

  {
    id: "e11",
    source: "O1",
    target: "A1",
    animated: true,
  },
  { id: "e12", source: "O1", target: "A2", animated: true },
];
