import PropTypes from "prop-types";

function Card({ imgUrl }) {
  return <img src={imgUrl} className="card" />;
}

export default Card;

Card.propTypes = {
  imgUrl: PropTypes.string,
};
