import React, { useState } from "react";
import PlacementQuestions from "./components/PlacementQuestions";
import "./App.css";


function App() {
  const [code, setCode] = useState("");

  return (
    <div className="App">
      <div className="left-panel">
        <PlacementQuestions onCodeInsert={setCode} />
      </div>
      <div className="right-panel">
        <h2>🧠 Show Solution </h2>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          placeholder="Code will appear here..."
        ></textarea>
      </div>
    </div>
  );
}

export default App;
