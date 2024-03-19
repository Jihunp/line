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

  return {
    rows,
    size: {...board.size}
  }
}
