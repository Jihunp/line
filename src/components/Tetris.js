// import styled from "styled-components"
import Board from "./Board"
import { useBoard } from "../hooks/useBoard"

// const TetrisContainer = styled.div`
//   position: relative;
// `;


const Tetris = ({ rows, columns, setGameOVer}) => {

  return (
    <Board />
  )
  
}

export default Tetris;