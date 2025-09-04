import React from "react";

function ProgressBar({ current, total }) {
  const percent = (current / total) * 100;
  return (
    <div className="progress-bar">
      <div className="progress" style={{ width: `${percent}%` }}></div>
      <p>Question {current} of {total}</p>
    </div>
  );
}

export default ProgressBar;
