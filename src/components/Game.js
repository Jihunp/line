// import react from "react"
// import styled from "styled-components"
import Menu from "./Menu"
import useGameOver from "../hooks/useGameOver"
import Tetris from "./Tetris"


// const GameContainer = styled.div`

// `


const Game = ({ rows, columns }) =>  {
  const [gameOver, setGameOver, resetGameOver] = useGameOver();

  const start = () => {
    resetGameOver();
    console.log(`start, GameOver: ${gameOver}`)
  }

  return (
    <div>
      { gameOver ? (
        <Menu onClick={start}/>
      ) : (
        <Tetris rows={rows} columns={columns} setGameOver={setGameOver} />
      )}
    </div>
  )

}
export default Game