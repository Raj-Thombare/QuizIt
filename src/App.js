import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/Leaderboard";
import Quiz from "./pages/Quiz";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import "./App.css";

function App() {
  const [name, setName] = useState();
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions = async (category = "", difficulty = "") => {
    // const { data } = await axios.get(
    //   `https://the-trivia-api.com/api/questions?${
    //     category && `categories=${category}`
    //   }&limit=5&region=IN&${difficulty && `difficulty=${difficulty}`}`
    // );

    const res = await fetch(
      `https://the-trivia-api.com/api/questions?${
        category && `categories=${category}`
      }&limit=5&region=IN&${difficulty && `difficulty=${difficulty}`}`
    );
    const data = await res.json();
    setQuestions(data);
  };

  return (
    <>
      <div className="bgImage"></div>
      <div className="App">
        <div className="container">
          <Navbar />
          <Routes>
            <Route path="/" element={<Navigate replace to="/home" />} />
            <Route
              path="/home"
              element={
                <Home
                  name={name}
                  setName={setName}
                  fetchQuestions={fetchQuestions}
                />
              }
            />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/profile" element={<Profile name={name} />} />
            <Route
              path="/quiz"
              element={
                <Quiz
                  name={name}
                  questions={questions}
                  setQuestions={setQuestions}
                  score={score}
                  setScore={setScore}
                />
              }
            />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
