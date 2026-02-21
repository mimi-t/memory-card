import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Card from "./Card";

const GHIBLI_API = "https://ghibliapi.vercel.app/films";

function CardContainer({ updateScores, resetScore }) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allCards, setAllCards] = useState(null);
  const [selectedCards, setSelectedCards] = useState([]);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const params = new URLSearchParams();
        params.append("fields", "id,title,image");
        params.append("limit", 12);
        const response = await fetch(`${GHIBLI_API}?${params}`);

        if (!response.ok) {
          throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        setAllCards(shuffleCards(result));
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const shuffleCards = (cards) => {
    for (let i = cards.length - 1; i > 0; i--) {
      let randomIndex = Math.floor(Math.random() * (i + 1));
      [cards[randomIndex], cards[i]] = [cards[i], cards[randomIndex]];
    }
    return cards;
  };

  const resetGame = () => {
    setSelectedCards([]);
    resetScore();
    setAllCards(shuffleCards([...allCards]));
    setGameOver(false);
  };

  const playRound = (cardId) => {
    console.log(allCards.find((card) => card.id === cardId).title);
    if (selectedCards.includes(cardId)) {
      resetGame();
    } else {
      setSelectedCards([...selectedCards, cardId]);
      updateScores();
      setAllCards(shuffleCards([...allCards]));
      if (allCards.length === selectedCards.length + 1) {
        setGameOver(true);
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {gameOver && (
        <>
          <div className="modal">
            <dialog open>
              <p>Congrats! You selected all the cards!</p>
              <button onClick={resetGame}>Replay</button>
            </dialog>
          </div>
          <div className="overlay"></div>
        </>
      )}
      <div id="card-container" className={gameOver ? "disabled" : ""}>
        {allCards.map((card) => (
          <Card
            key={card.id}
            imgUrl={card.image}
            onClick={() => playRound(card.id)}
          />
        ))}
      </div>
    </>
  );
}

export default CardContainer;

CardContainer.propTypes = {
  imgUrl: PropTypes.string,
  updateScores: PropTypes.func,
  resetScore: PropTypes.func,
};
