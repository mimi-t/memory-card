import PropTypes from "prop-types";

function Sidebar({ score, highScore }) {
  return (
    <div id="sidebar">
      <h1>Ghibli Memory Card</h1>
      <p>Score: {score}</p>
      <p>High Score: {highScore}</p>
    </div>
  );
}

export default Sidebar;

Sidebar.propTypes = {
  score: PropTypes.number,
  highScore: PropTypes.number,
};
