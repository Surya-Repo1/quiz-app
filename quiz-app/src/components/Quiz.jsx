import React, { useState, useEffect } from "react";
import Question from "./Question";
import ProgressBar from "./ProgressBar";
import questionsData from "../data/questions.json"; // Local JSON fallback

function Quiz({ onQuizEnd }) {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    setQuestions(questionsData); // Or fetch from API
  }, []);

  const handleNext = () => {
    if (selected === null) return; // Prevent skip without answer

    const currentQ = questions[currentIndex];
    const isCorrect = selected === currentQ.correct_answer;

    if (isCorrect) setScore(score + 1);

    setAnswers([
      ...answers,
      { question: currentQ.question, selected, correct: currentQ.correct_answer }
    ]);

    setSelected(null);

    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onQuizEnd(score + (isCorrect ? 1 : 0), [
        ...answers,
        { question: currentQ.question, selected, correct: currentQ.correct_answer }
      ]);
    }
  };

  return (
    <div>
      <ProgressBar current={currentIndex + 1} total={questions.length} />
      {questions.length > 0 && (
        <Question
          data={questions[currentIndex]}
          selected={selected}
          setSelected={setSelected}
        />
      )}
      <button className="btn" onClick={handleNext}>
        {currentIndex === questions.length - 1 ? "Finish" : "Next"}
      </button>
    </div>
  );
}

export default Quiz;
