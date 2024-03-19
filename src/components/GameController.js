import styled from "styled-components";
import { Action, actionForKey } from ""


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

const GameController = ({board, gameStats, player, setGameOVer, setPlayer}) => {

  const onKeyUp = ({ code }) => {
    const action = actionForKey(code);
    if (action == action.Quit) {
      setGameOVer(true);
    }
  };
  const

  return (
    <GameInput
      className="GameController"
      type="text"
      onKeyDown={onkeydown}
      onKeyUp={onkeyup}
      autoFocus
    />
  );
};

export default GameController;
