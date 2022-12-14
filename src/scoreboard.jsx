import { resetBoard, theBoard } from "./functions";

const Scoreboard = (props) => {

  const {
    player2Score,
    player1Score,
    tieScore,
    setBoard,
    setDisableBoard,
    setPlayer2Score,
    setPlayer1Score,
    setTieScore,
  } = props;

  return (
    <div className="scoreBoardContainer">
      <div className="scoreBoard">
        <div className="scoreboardNames">
          <span className="names">{"Player 1 (X)"}</span>
          <span className="names">{"Tie"}</span>
          <span className="names">{"Player 2 (O)"}</span>
        </div>
        <div className="scoreboardCounts">
          <span className="counts">{player1Score}</span>
          <span className="counts">{tieScore}</span>
          <span className="counts">{player2Score}</span>
        </div>
      </div>
      <i
        className="fa-regular fa-trash-can trashCan"
        onClick={() =>
          resetBoard(
            setBoard,
            setDisableBoard,
            setPlayer2Score,
            setPlayer1Score,
            setTieScore,
            theBoard
          )
        }
      ></i>
    </div>
  );
};

export default Scoreboard;
