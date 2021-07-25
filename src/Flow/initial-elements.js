/* eslint-disable import/no-anonymous-default-export */
import React from "react";

export default [
  {
    id: "O1",
    data: {
      label: "First Name",
    },
    type: "input",
    sourcePosition: "right",
    position: { x: 250, y: 0 },
  },
  {
    id: "O2",
    data: {
      label: "Middle Name",
    },
    type: "input",
    position: { x: 250, y: 60 },
    sourcePosition: "right",
    style: {
      border: "1px solid #0041d0",
    },
  },
  {
    id: "O3",
    data: {
      label: "Last Name",
    },
    type: "input",
    position: { x: 250, y: 120 },
    sourcePosition: "right",
    style: {
      border: "1px solid #0041d0",
    },
  },
  {
    id: "O4",
    position: { x: 250, y: 180 },
    type: "input",
    data: {
      label: "Mail",
    },
    sourcePosition: "right",
    style: {
      border: "1px solid #0041d0",
    },
  },
  {
    id: "O5",
    data: {
      label: "Phone Number",
    },
    type: "input",
    position: { x: 250, y: 240 },
    sourcePosition: "right",
    style: {
      border: "1px solid #0041d0",
    },
  },
  {
    id: "O6",
    type: "input",
    data: {
      label: "Honorific Prefix",
    },
    position: { x: 250, y: 300 },
    sourcePosition: "right",
    style: {
      border: "1px solid #0041d0",
    },
  },
  {
    id: "O7",
    type: "input",
    data: { label: "Honorific Suffix" },
    position: { x: 250, y: 360 },
    sourcePosition: "right",
    style: {
      border: "1px solid #0041d0",
    },
  },
  {
    id: "O8",
    type: "input",
    data: { label: "Title" },
    position: { x: 250, y: 420 },
    sourcePosition: "right",
    style: {
      border: "1px solid #0041d0",
    },
  },
  {
    id: "O9",
    type: "input",
    data: { label: "Display Name" },
    position: { x: 250, y: 480 },
    sourcePosition: "right",
    style: {
      border: "1px solid #0041d0",
    },
  },
  {
    id: "O10",
    type: "input",
    data: { label: "Nick Name" },
    position: { x: 250, y: 540 },
    sourcePosition: "right",
    style: {
      border: "1px solid #0041d0",
    },
  },
  {
    id: "O11",
    type: "input",
    data: { label: "Profile URL" },
    position: { x: 250, y: 600 },
    sourcePosition: "right",
    style: {
      border: "1px solid #0041d0",
    },
  },
  {
    id: "O12",
    type: "input",
    data: { label: "Second Email" },
    position: { x: 250, y: 660 },
    sourcePosition: "right",
    style: {
      border: "1px solid #0041d0",
    },
  },
  {
    id: "Of1",
    data: {
      label: "Name",
    },
    type: "output",
    position: { x: 750, y: 30 },
    targetPosition: "left",
  },
  {
    id: "Of2",
    data: {
      label: "Surname",
    },
    type: "output",
    position: { x: 750, y: 120 },
    targetPosition: "left",
  },
  {
    id: "Of3",
    data: {
      label: "Primary Mail",
    },
    type: "output",
    position: { x: 750, y: 180 },
    targetPosition: "left",
  },
  {
    id: "Of4",
    position: { x: 750, y: 240 },
    type: "output",
    data: {
      label: "Contact Number",
    },
    targetPosition: "left",
  },
  {
    id: "Of5",
    data: {
      label: "Heading",
    },
    type: "output",
    position: { x: 750, y: 420 },
    targetPosition: "left",
  },
  {
    id: "Of6",
    type: "output",
    data: {
      label: "Descriptive Name",
    },
    position: { x: 750, y: 480 },
    targetPosition: "left",
  },
  {
    id: "Of7",
    type: "output",
    data: { label: "Url" },
    position: { x: 750, y: 600 },
    targetPosition: "left",
  },
  {
    id: "Of8",
    type: "output",
    data: { label: "Secondary Email" },
    position: { x: 750, y: 660 },
    targetPosition: "left",
  },
  {
    id: "e1-1",
    source: "O1",
    target: "Of1",
    animated: true,
    // type: "smoothstep",
  },
  { id: "e1-2", source: "O2", target: "Of1", animated: true },
  { id: "e1-3", source: "O3", target: "Of2" },
  { id: "e1-4", source: "O4", target: "Of3" },
  { id: "e1-5", source: "O5", target: "Of4" },
  { id: "e1-6", source: "O8", target: "Of5" },
  { id: "e1-7", source: "O9", target: "Of6" },
  { id: "e1-8", source: "O11", target: "Of7" },
  { id: "e1-9", source: "O12", target: "Of8" },
];
