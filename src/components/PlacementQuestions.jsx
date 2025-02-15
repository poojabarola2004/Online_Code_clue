import React from "react";
import questions from "../data/questions"; // Make sure this path is correct
import './PlacementQuestions.css';

const PlacementQuestions = ({ onCodeInsert }) => {
  const handleSolveInCompiler = (code) => {
    // Save code to localStorage
    localStorage.setItem("codeToSolve", code);
    // Open the compiler running at localhost:3000
    window.open("http://localhost:3000", "_blank");
  };

  return (
    <div className="container">
      <h2>📘 75 Most Important Placement Questions</h2>
      {questions.map((q) => (
        <div key={q.id} className="question-box">
          <h3>{q.title}</h3>
          <div className="actions">
            <a
              href={q.videoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="watch-btn"
            >
              📺 Watch Solution
            </a>
            <button
              onClick={() => handleSolveInCompiler(q.code)}
              className="solve-btn"
            >
              🧪 Solve in Compiler
            </button>
            <button
              onClick={() => onCodeInsert(q.code)}
              className="editor-btn"
            >
              💻 Show Solution
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PlacementQuestions;
