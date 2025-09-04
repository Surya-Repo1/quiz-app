import React from "react";

function Question({ data, selected, setSelected }) {
  return (
    <div className="question-card">
      <h2>{data.question}</h2>
      <div className="options">
        {data.options.map((option, idx) => (
          <button
            key={idx}
            className={`option-btn ${selected === option ? "selected" : ""}`}
            onClick={() => setSelected(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
