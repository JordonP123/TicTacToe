import { useState, useEffect } from "react";
import "./reset.css";
import "./styles.css";
import Board from "./board";
import Scoreboard from "./scoreboard";
import Header from "./header";
import Modal from "./modal";
import { resetBoard, theBoard } from "./functions";

function App() {
  const [board, setBoard] = useState(theBoard);
  const [player, setPlayer] = useState(true);
  const [disableBoard, setDisableBoard] = useState(true);
  const [tieScore, setTieScore] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [winner, setWinner] = useState("");

  useEffect(() => {
    resetBoard(
      setBoard,
      setDisableBoard,
      setPlayer2Score,
      setPlayer1Score,
      setTieScore,
      theBoard
    );
  }, []); //eslint-disable-line

  return (
    <>
      <div className={darkMode ? "AppDarkMode" : "AppLightMode"}>
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Modal
          winner={winner}
          disabledBoard={disableBoard}
          darkMode={darkMode}
          setBoard={setBoard}
          setDisableBoard={setDisableBoard}
          setPlayer2Score={setPlayer2Score}
          setPlayer1Score={setPlayer1Score}
          setTieScore={setTieScore}
        />
        <div className="gameContainer">
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
              setWinner={setWinner}
              tieScore={tieScore}
              player1Score={player1Score}
              player2Score={player2Score}
            />
          </div>
          <Scoreboard
            tieScore={tieScore}
            player1Score={player1Score}
            player2Score={player2Score}
            setBoard={setBoard}
            setDisableBoard={setDisableBoard}
            setPlayer2Score={setPlayer2Score}
            setPlayer1Score={setPlayer1Score}
            setTieScore={setTieScore}
          />
        </div>
      </div>
    </>
  );
}

export default App;
