import React from "react";
import Preview from "./Preview"



const Previews = ({ tetrominoes }) => {
  const previewTetrominoes = tetrominoes
    .slice(1- tetrominoes.length)
    .reverse();

  return (
    <div>
      {previewTetrominoes.map((tetromino, index) => (
        <Preview tetromino={tetromino} index={index} key={index} />
      ))}
    </div>
  )
}

export default Previews