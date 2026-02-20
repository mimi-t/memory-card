import PropTypes from "prop-types";
import Card from "./Card";

function CardContainer({ cards }) {
  return (
    <div id="card-container">
      {cards.map((card) => (
        <Card key={card.id} imgUrl={card.image} />
      ))}
    </div>
  );
}

export default CardContainer;

CardContainer.propTypes = {
  imgUrl: PropTypes.string,
  cards: PropTypes.arrayOf(PropTypes.object),
};
