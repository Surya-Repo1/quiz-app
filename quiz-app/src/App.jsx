import React, { useState } from "react";
import Quiz from "./components/Quiz";
import Results from "./components/Results";
import "./assets/styles.css";

function App() {
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const handleQuizEnd = (finalScore, answerSummary) => {
    setScore(finalScore);
    setAnswers(answerSummary);
    setIsFinished(true);
  };

  const restartQuiz = () => {
    setScore(0);
    setAnswers([]);
    setIsFinished(false);
  };

  return (
    <div className="app-container">
      <h1>Quiz App</h1>
      {!isFinished ? (
        <Quiz onQuizEnd={handleQuizEnd} />
      ) : (
        <Results score={score} answers={answers} onRestart={restartQuiz} />
      )}
    </div>
  );
}

export default App;
