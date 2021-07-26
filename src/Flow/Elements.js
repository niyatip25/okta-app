/* eslint-disable import/no-anonymous-default-export */

export default [
  {
    id: "1",
    data: {
      label: "Okta",
    },
    type: "input",
    sourcePosition: "right",
    position: { x: 250, y: 30 },
  },

  {
    id: "2",
    data: {
      label: "App1",
    },
    type: "output",
    position: { x: 750, y: 0 },
    targetPosition: "left",
  },
  {
    id: "3",
    data: {
      label: "App2",
    },
    type: "output",
    position: { x: 750, y: 60 },
    targetPosition: "left",
  },

  {
    id: "e1-1",
    source: "1",
    target: "2",
    animated: true,
  },
  { id: "e1-2", source: "1", target: "3", animated: true },
];
