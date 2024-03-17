
import "./App.css";
import Board from "./components/Board";
import Game from "./components/Game"
import Menu from "./components/Menu"
import React, {useState} from 'react';

function App() {

  return (
    <div className="App">
      {/* <Game/> */}
      {/* <Board /> */}
      <Game rows={20} columns={10}/>

    </div>
  );
}

export default App;
