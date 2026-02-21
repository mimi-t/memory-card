import { useState } from "react";
import "./App.css";
import CardContainer from "./CardContainer";
import Sidebar from "./Sidebar";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  const updateScores = () => {
    setScore(score + 1);
    if (score + 1 > highScore) {
      setHighScore(score + 1);
    }
  };

  const resetScore = () => {
    setScore(0);
  };

  return (
    <>
      <Sidebar score={score} highScore={highScore} />
      <CardContainer updateScores={updateScores} resetScore={resetScore} />
    </>
  );
}

export default App;
