import { useEffect } from "react";
import Square from "./sqaures";

const Board = (props) => {
  const {
    setBoard,
    board,
    player,
    setPlayer,
    disableBoard,
    setDisableBoard,
    setTieScore,
    setPlayer1Score,
    setPlayer2Score,
    player2Score,
    player1Score,
    tieScore,
  } = props;

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //algorithm to check for a tie
  function checkTie() {
    return [...board].every(sqaure => sqaure === "X" || sqaure === "O");
  }

  //algorithm to know who is the winner
  function checkWinner() {
    for (let i = 0; i < 8; i++) {
      let winCondition = winConditions[i];
      let squareOne = board[winCondition[0]];
      let squareTwo = board[winCondition[1]];
      let squareThree = board[winCondition[2]];
      if (squareOne === "" || squareTwo === "" || squareThree === "") {
        continue;
      } else if (squareOne === squareTwo && squareTwo === squareThree) {
        if (player) {
          setPlayer2Score(player2Score + 1);
          setDisableBoard(true);
          return true
        } else {
          setPlayer1Score(player1Score + 1);
          setDisableBoard(true);
          return true
        }
      }
    }
  }

  useEffect(() => {
    checkWinner()
    if(!checkWinner()){
        if(checkTie())setTieScore(tieScore + 1)
    }
  }, [board]); //eslint-disable-line

  return (
    <>
      {board.map((square, idx) => (
        <Square
          key={idx}
          idx={idx}
          setPlayer={setPlayer}
          player={player}
          square={square}
          setBoard={setBoard}
          board={board}
          disableBoard={disableBoard}
        />
      ))}
    </>
  );
};

export default Board;
