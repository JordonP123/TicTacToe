import { resetBoard, theBoard } from "./functions";

const Modal = (props) => {
  const {
    darkMode,
    winner,
    disabledBoard,
    setBoard,
    setDisableBoard,
    setPlayer2Score,
    setPlayer1Score,
    setTieScore,
  } = props;

  return (
    disabledBoard && (
      <div
        className={darkMode ? "modal modalDarkMode" : "modal modalLightMode"}
      >
        <span className="modalWinner">{winner}</span>
        <div className="modalButtonsContainer">
          <button
            className={
              darkMode ? "modalButtons modalButtonsDarkMode" : "modalButtons"
            }
            onClick={() => {
              setBoard(theBoard);
              setDisableBoard(false);
            }}
          >
            Play Again
          </button>
          <button
            className={
              darkMode ? "modalButtons modalButtonsDarkMode" : "modalButtons"
            }
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
          >
            Reset Score
          </button>
        </div>
      </div>
    )
  );
};

export default Modal;
