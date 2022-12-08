import { useState, useEffect } from "react";
import "./reset.css";
import "./styles.css";
import Board from "./board";

function App() {
  const theBoard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(theBoard);
  const [player, setPlayer] = useState(true);
  const [winner, setWinner] = useState("");
  const [disableBoard, setDisableBoard] = useState(true);

  function resetBoard() {
    setBoard(theBoard);
    setWinner("");
    setDisableBoard(false);
  }

  useEffect(() => {
    resetBoard()
  }, [])//eslint-disable-line

  return (
    <div className="App">
      <div className="board">
        <Board
            setPlayer={setPlayer}
            player={player}
            setBoard={setBoard}
            board={board}
            setWinner={setWinner}
            disableBoard={disableBoard}
            setDisableBoard={setDisableBoard}
          />
      </div>
        {player === true ? "Player 1s Turn" : "Player 2s Turn"}
        <button onClick={resetBoard}>Reset Board</button>
        <p>{winner}</p>
    </div>
  );
}

export default App;
