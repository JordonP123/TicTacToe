const Scoreboard = (props) => {

    const {
        player2Score,
        player1Score,
        tieScore
    } = props

  return (
    <>
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
    </>
  );
};

export default Scoreboard;
