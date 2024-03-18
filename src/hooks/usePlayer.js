import { useState, useCallback } from "react"

import { randomTetromino } from "../componentFunctions/Tetrominoes"

const buildPlayer = (previous) => {
  let tetrominoes;

  return {
    collided: false;
    isFastDrop: 
  }

}

export const usePlayer = () => {
  const [player, setPlayer] = useState(buildPlayer());

  const resetPlayer = useCallback(() => {
    setPlayer((prev) => buildPlayer(prev));
  }, []);
  return [player, setPlayer, resetPlayer]
}