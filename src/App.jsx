import { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "./CardContainer";
import Sidebar from "./Sidebar";

const GHIBLI_API = "https://ghibliapi.vercel.app/films";

function App() {
  // const [score, setScore] = useState(0);
  // const [highScore, setHighScore] = useState(0);
  // const [selectedCards, setSelectedCards] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [allCards, setAllCards] = useState(null);

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
        setAllCards(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  return (
    <>
      {/* <Sidebar score={score} highScore={highScore} /> */}
      <CardContainer cards={allCards} />
    </>
  );
}

export default App;
