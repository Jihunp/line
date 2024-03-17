import styled from "styled-components";
import Board from "./Board";
import {useBoard} from "../hooks/useBoard";

const TetrisContainer = styled.div`
  position: relative;
`;

const Tetris = ({rows, columns, setGameOVer}) => {
  const [board, setBoard] = useBoard({rows, columns});

  return (
    <TetrisContainer className="Tetris">
      <Board board={board} />
      {/* <GameStats gameStats={gameStats} */}
    </TetrisContainer>
  );
};

export default Tetris;
