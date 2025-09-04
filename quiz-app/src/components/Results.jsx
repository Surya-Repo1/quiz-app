import React from "react";

function Results({ score, answers, onRestart }) {
  return (
    <div className="results-container">
      <h2>You scored {score}/{answers.length}</h2>
      <ul>
        {answers.map((a, idx) => (
          <li key={idx}>
            <strong>{a.question}</strong> <br />
            Your answer: {a.selected} <br />
            Correct answer: {a.correct}
          </li>
        ))}
      </ul>
      <button className="btn" onClick={onRestart}>Restart Quiz</button>
    </div>
  );
}

export default Results;
