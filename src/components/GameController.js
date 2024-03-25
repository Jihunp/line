import styled from "styled-components";
import {Action, actionForKey, actionIsDrop} from "../componentFunctions/Input";
import {playerController} from "../componentFunctions/PlayerController";

import {useInterval} from "../hooks/useInterval";
import {useDropTime} from "../hooks/useDropTime";

const GameInput = styled.input`
  position: absolute;
  left: 30px;
  top: 30px;
  padding: 10px;
  font-size: 12px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  outline: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #555;
  }

  &:focus {
    background-color: #666;
  }
`;

const GameController = ({board, gameStats, player, setGameOver, setPlayer}) => {
  const [dropTime, pauseDropTime, resumeDropTime] = useDropTime({gameStats});

  useInterval(() => {
    handleInput({action: Action.SlowDrop});
  }, dropTime);

  const onKeyUp = ({code}) => {
    const action = actionForKey(code);
    if (actionIsDrop(action)) resumeDropTime();
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
      if (!dropTime) {
        return;
      }
      handleInput({action});
    }
  };

  const handleInput = ({action}) => {
    playerController({
      action,
      board,
      player,
      setPlayer,
      setGameOver,
    });
  };

  return (
    <div>
      <GameInput
        className="GameController"
        type="text"
        onKeyDown={onKeyDown}
        onKeyUp={onKeyUp}
        autoFocus
        onFocus={(e) => e.target.select()}
      />
    </div>
  );
};

export default GameController;
