import { useEffect } from "react";
import Square from "./sqaures";
import { checkWinner, checkTie } from './functions'

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
    setWinner
  } = props;

  useEffect(() => {
    checkWinner(board, player, setWinner, setPlayer2Score, setDisableBoard, setPlayer1Score, player1Score, player2Score)
    if(!checkWinner(board, player, setWinner, setPlayer2Score, setDisableBoard, setPlayer1Score, player1Score, player2Score)){
        if(checkTie(board)){
          setWinner('You both suck! lol')
          setTieScore(tieScore + 1)
          setDisableBoard(true);
        }
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
