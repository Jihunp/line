import styled from "styled-components";
import {Action, actionForKey} from "../componentFunctions/Input";
import { playerController } from ""

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
  const onKeyUp = ({code}) => {
    const action = actionForKey(code);
    if (action === Action.Quit) {
      setGameOver(true);
    }
  };
  const onKeyDown = ({code}) => {
    const action = actionForKey(code);
    console.log(`onKeyDown ${code}`);
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
