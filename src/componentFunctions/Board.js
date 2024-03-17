import { cells } from "./Cell"

export const buildBoard = ({ rows, columns }) => {
  const builtBoard = Array.from({ length: rows }, () =>
    Array.from ({ length: columns}, () => ({...cells}))
  );

  return {
    rows: builtBoard,
    size: {rows, columns}
  }
}