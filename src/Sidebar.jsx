import PropTypes from "prop-types";

function Sidebar({ score, highScore }) {
  return (
    <div id="sidebar">
      <h1>Ghibli Memory Card</h1>
      <div className="score-container">
        <b>Score</b>
        <p className="score-number">{score}</p>
      </div>
      <div className="score-container">
        <b>High Score</b>
        <p className="score-number">{highScore}</p>
      </div>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number,
};
