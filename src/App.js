import React, { useState, useEffect } from "react";
import Tetris from "./components/tetris";
import "./App.css";

export class App extends React.Component {
  state = {
    block: [{ y: 0, x: 4 }, { y: 1, x: 4 }, { y: 2, x: 4 }, { y: 2, x: 3 }],
    tetris: [
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  };

  componentDidMount() {
    setInterval(() => {}, 1000);
  }

  render() {
    const { tetris, block } = this.state;

    return (
      <div className="App">
        <header className="App-header">
          <center>
            <Tetris tetris={tetris} block={block} />
          </center>
        </header>
      </div>
    );
  }
}

export default App;
