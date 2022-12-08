const Square = (props) => {
  const {
    square,
    idx,
    setBoard,
    board,
    player,
    setPlayer,
    disableBoard,
  } = props;

  //logic to update a square if square does not have a value
  function updateSquare() {
    if(disableBoard)return
    const newBoard = [...board];
    if (newBoard[idx] !== "") {
      return;
    } else {
      player ? (newBoard[idx] = "X") : (newBoard[idx] = "O");
      setBoard(newBoard);
      setPlayer(!player);
    }
  }

  return (
    <div onClick={updateSquare} className="square">
      <span className="xsAndOs">{square}</span>
    </div>
  );
};

export default Square;
