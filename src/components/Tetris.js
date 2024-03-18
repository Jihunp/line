import styled from "styled-components";
import Board from "./Board";
import GameStats from "./GameStats"
import Previews from "./Previews"

import {useBoard} from "../hooks/useBoard";
import {useGameStats} from "../hooks/useGameStats"

const TetrisContainer = styled.div`
  position: relative;
`;

const Tetris = ({rows, columns, setGameOVer}) => {
  const [board, setBoard] = useBoard({rows, columns});
  const [gameStats, addLinesCleared] = useGameStats();
  const player = { tetrominoes: []}

  return (
    <TetrisContainer className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats}/>
      <Previews tetrominoes={player.tetrominoes}/>
    </TetrisContainer>
  );
};

export default Tetris;
