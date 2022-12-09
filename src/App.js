import { useState, useEffect } from "react";
import "./reset.css";
import "./styles.css";
import Board from "./board";
import Scoreboard from './scoreboard'

function App() {
  const theBoard = ["", "", "", "", "", "", "", "", ""];
  const [board, setBoard] = useState(theBoard);
  const [player, setPlayer] = useState(true);
  const [disableBoard, setDisableBoard] = useState(true);
  const [tieScore, setTieScore] = useState(0)
  const [player1Score, setPlayer1Score] = useState(0)
  const [player2Score, setPlayer2Score] = useState(0)


  function resetBoard() {
    setBoard(theBoard);
    setDisableBoard(false);
    setPlayer2Score(0)
    setPlayer1Score(0)
    setTieScore(0)
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
            disableBoard={disableBoard}
            setDisableBoard={setDisableBoard}
            setTieScore={setTieScore}
            setPlayer1Score={setPlayer1Score}
            setPlayer2Score={setPlayer2Score}
            tieScore={tieScore}
            player1Score={player1Score}
            player2Score={player2Score}
          />
      </div>
      <Scoreboard
      tieScore={tieScore}
      player1Score={player1Score}
      player2Score={player2Score}
      />
        <button onClick={resetBoard}>Reset Board</button>
    </div>
  );
}

export default App;
