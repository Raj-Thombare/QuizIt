import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
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
    if (currQues > 3) {
      navigate("/result");
    } else if (selected) {
      setSelected();
      setCurrQues(currQues + 1);
    } else {
      setError("Please select an option!");
    }
  };

  const quitHandler = () => {
    navigate("/");
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
        <Button
          variant="contained"
          color="error"
          size="large"
          style={{ width: 185 }}
          onClick={quitHandler}
          href="/"
        >
          Quit
        </Button>
        <Button
          variant="contained"
          color="primary"
          size="large"
          style={{ width: 185 }}
          onClick={nextQuestionHandler}
        >
          Next Question
        </Button>
      </div>
    </div>
  );
};

export default Question;
