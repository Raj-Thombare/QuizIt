import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Error from "./Error";

import "./Question.css";

const Question = ({
  question,
  setQuestions,
  options,
  setOptions,
  currQues,
  setCurrQues,
  score,
  setScore,
  correct,
}) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const checkAnswerHandler = (option) => {
    setSelected(option);
    if (selected === correct) setScore(score + 1);
    setError(false);
  };

  const selectHandler = (option) => {
    if (selected === option && selected === correct) return "correct";
    else if (selected === option && selected !== correct) return "wrong";
    else if (option === correct) return "correct";
  };

  const nextQuestionHandler = () => {
    if (!selected) {
      setError("Please select an option!");
    }
    setCurrQues(currQues + 1);
  };

  const quitHandler = () => {
    navigate("/result");
  };

  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>
      <div className="singleQuestion">
        <h2>{question[currQues].question}</h2>
        <div className="options">
          {error && <Error>{error}</Error>}
          {options &&
            options.map((option) => {
              return (
                <button
                  className={`singleOption ${
                    selected && selectHandler(option)
                  }`}
                  onClick={() => checkAnswerHandler(option)}
                  key={option}
                  disabled={selected}
                >
                  {option}
                </button>
              );
            })}
        </div>
      </div>
      <div className="controls">
        <button onClick={quitHandler}>Quit</button>
        <button onClick={nextQuestionHandler}>Next Question</button>
      </div>
    </div>
  );
};

export default Question;
