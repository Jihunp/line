// GameBoard.js
import React from 'react';
import styled from 'styled-components';

// Define styled components
const BoardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 30px); /* 10 columns */
  grid-template-rows: repeat(20, 30px); /* 20 rows */
  gap: 1px; /* Gap between cells */
  `;
  // border: 1px solid #333; /* Border around the game board */

const Cell = styled.div`
  width: 30px; /* Cell width */
  height: 30px; /* Cell height */
  border: 1px solid #ddd; /* Border around each cell */
  background-color: ${props => (props.filled ? '#333' : '#f2f2f2')}; /* Filled or empty cell color */
`;

const Board = () => {
  // Function to generate cells for the game board
  const renderCells = () => {
    const cells = [];
    // Loop through rows and columns to create cells
    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 10; col++) {
        cells.push(<Cell key={`${row}-${col}`} />);
      }
    }
    return cells;
  };

  return (
    <BoardContainer>
      {renderCells()} {/* Render cells */}
    </BoardContainer>
  );
};

export default Board;