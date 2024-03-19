import { cells } from "./Cell"
import { transferToBoard } from "./Tetrominoes";

export const buildBoard = ({ rows, columns }) => {
  const builtBoard = Array.from({ length: rows }, () =>
    Array.from ({ length: columns}, () => ({...cells}))
  );

  return {
    rows: builtBoard,
    size: {rows, columns}
  };
};

export const nextBoard = ({ board, player, resetPlayer, addLinesCleared }) => {
  const { tetromino, position } = player;
  // copy and clear space that is used by pieces
  // not collided and occupied spaces permanently
  let rows = board.rows.map((row) =>
    row.map((cell) => (cell.occupied ? cell : { ...cells }))
  );

  rows = transferToBoard({
    className: tetromino.className,
    isOccupied: player.collided,
    position,
    rows,
    shape: tetromino.shape
  });

  if(player.collided || player.isFastDrop) {
    resetPlayer();
  }

  return {
    rows,
    size: {...board.size}
  }
}

export const hasCollision = ({ board, position, shape }) => {
  for(let y = 0; y < shape.length; y++) {
    const row = y + position.row;

    for(let x = 0; x < shape[y].length; x++) {
      if(shape[y][x]) {
        const column = x + position.column;

        if(
          board.rows[row] &&
          board.rows[row][column] &&
          board.rows[row][column].occupied
        ) {
          return true;
        }
      }
    }
  }
}


export const isWithinBoard = ({ board, position, shape }) => {
  for (let y = 0; y <shape.length; y++) {
    const row = y + position.row;

    for(let x = 0; x < shape[y].length; x++) {
      if (shape[y][x]) {
        const column = x + position.column;
        const isValidPosition = board.rows[row] && board.rows[row][column]
        
        if (!isValidPosition) return false;
      }
    }
  }

  return true;
}