//varaible to reset board when necessary
export const theBoard = ["", "", "", "", "", "", "", "", ""];

//resets the game board
export function resetBoard(
  setBoard,
  setDisableBoard,
  setPlayer2Score,
  setPlayer1Score,
  setTieScore,
  theBoard
) {
  setBoard(theBoard);
  setDisableBoard(false);
  setPlayer2Score(0);
  setPlayer1Score(0);
  setTieScore(0);
}

//win conditions for game
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

//checks for a winner
export function checkWinner(board, player, setWinner, setPlayer2Score, setDisableBoard, setPlayer1Score, player1Score, player2Score) {
  for (let i = 0; i < 8; i++) {
    let winCondition = winConditions[i];
    let squareOne = board[winCondition[0]];
    let squareTwo = board[winCondition[1]];
    let squareThree = board[winCondition[2]];
    if (squareOne === "" || squareTwo === "" || squareThree === "") {
      continue;
    } else if (squareOne === squareTwo && squareTwo === squareThree) {
      if (player) {
        setWinner('Player 2 (O) Wins!')
        setPlayer2Score(player2Score + 1);
        setDisableBoard(true);
        return true
      } else {
        setWinner('Player 1 (X) Wins!')
        setPlayer1Score(player1Score + 1);
        setDisableBoard(true);
        return true
      }
    }
  }
}

//checks for tie
export function checkTie(board) {
  return [...board].every(square => square === "X" || square === "O");
}

//updates value in a sqaure with X or O if square is empty
export function updateSquare(disableBoard, board, idx, player, setBoard, setPlayer, audio) {
  if (disableBoard) return;
  const newBoard = [...board];
  if (newBoard[idx] !== "") {
    return;
  } else {
    player ? (newBoard[idx] = "X") : (newBoard[idx] = "O");
    setBoard(newBoard);
    setPlayer(!player);
  }
  new Audio(audio).play();
}
