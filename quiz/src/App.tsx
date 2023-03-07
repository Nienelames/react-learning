import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Quiz from "./Components/Quiz";
import Select from "./Components/Select";
import Start from "./Components/Start";

function App() {
  const [quizApiUrl, setQuizApiUrl] = useState<string>("");

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route
          path="/select"
          element={<Select setQuizApiUrl={setQuizApiUrl} />}
        />
        <Route path="/quiz" element={<Quiz quizApiUrl={quizApiUrl} />} />
      </Routes>
    </div>
  );
}

export default App;
