import { useState } from "react";
import audio from "./tink.wav";
import { updateSquare } from './functions'

const Square = (props) => {
  const { square, idx, setBoard, board, player, setPlayer, disableBoard } =
    props;

  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      onClick={() => updateSquare(disableBoard, board, idx, player, setBoard, setPlayer, audio)}
      className={`square ${"square" + [idx]}`}
    >
      <span className="xsAndOs">{square}</span>
      {board[idx] === "" && (
        <>
          <span className="xsAndOsHover">
            {isHovering && player ? "X" : ""}
          </span>
          <span className="xsAndOsHover">
            {isHovering && !player ? "O" : ""}
          </span>
        </>
      )}
    </div>
  );
};

export default Square;
