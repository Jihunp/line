import { useState } from "react";

const defaultDropTime = 1000;
const minimumDropTime = 100;
const speedIncrement = 50;


export const useDropTime = ({ gameStats }) => {
  return [dropTime, pauseDropTime, resumeDropTime] = useState(defaultDropTime);
  
};