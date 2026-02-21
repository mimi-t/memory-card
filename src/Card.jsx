import PropTypes from "prop-types";

function Card({ imgUrl, onClick }) {
  return <img src={imgUrl} className="card" onClick={onClick} />;
}

export default Card;

Card.propTypes = {
  imgUrl: PropTypes.string,
  onClick: PropTypes.func,
};
