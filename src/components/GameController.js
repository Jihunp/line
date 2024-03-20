import styled from "styled-components";
import {Action, actionForKey, actionIsDrop} from "../componentFunctions/Input";
import { playerController } from "../componentFunctions/PlayerController"

import { useInterval } from "../hooks/useInterval"
import { useDropTime } from "../hooks/useDropTime"



/*
.GameController {
  position: absolute;
  top: -100em;
}

*/

const GameInput = styled.input`
  position: absolute;
  top: 20px; /* Adjust as needed */
  right: 20px;
  background-color: red;
`;

const GameController = ({board, gameStats, player, setGameOver, setPlayer}) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({ gameStats });
  
  useInterval(() => {
    handleInput({ action: Action.SlowDrop });
  }, dropTime);
  
  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (actionIsDrop(action)) pauseDropTime();
  };
  const onKeyDown = ({code}) => {
    const action = actionForKey(code);

    if (action === Action.Pause) {
      if (dropTime) {
        pauseDropTime();
      } else {
        resumeDropTime();
      }
    } else if (action === Action.Quit) {
      setGameOver(true);
    } else {
      if (actionIsDrop(action)) pauseDropTime();
      handleInput({ action });
    }
  };

  const handleInput = ({ action }) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver
    })
  }

  return (
    <GameInput
      className="GameController"
      type="text"
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      autoFocus
    />
  );
};

export default GameController;
