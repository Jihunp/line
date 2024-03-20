import styled from "styled-components";
import Board from "./Board";
import GameStats from "./GameStats"
import Previews from "./Previews"
import GameController from "./GameController";


import {useBoard} from "../hooks/useBoard";
import {useGameStats} from "../hooks/useGameStats"
import {usePlayer} from "../hooks/usePlayer"

const TetrisContainer = styled.div`
  position: relative;
`;




const Tetris = ({rows, columns, setGameOver}) => {
  const [gameStats, addLinesCleared] = useGameStats();
  const [player, setPlayer, resetPlayer] = usePlayer();
  const [board, setBoard] = useBoard({
    rows,
    columns,
    player,
    resetPlayer,
    addLinesCleared,
  });

  return (
    <TetrisContainer className="Tetris">
      <Board board={board} />
      <GameStats gameStats={gameStats}/>
      <Previews tetrominoes={player.tetrominoes}/>
      <GameController 
        board={board}
        gameStats={gameStats}
        player={player}
        setGameOver={setGameOver}
        setPlayer={setPlayer}
        />
    </TetrisContainer>
  );
};

export default Tetris;
