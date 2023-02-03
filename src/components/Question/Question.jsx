import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import Error from "../Error/Error";
import { useData } from "../../context/data-context";

import classes from "./Question.module.css";

const Question = ({ options, currQues, setCurrQues, correct }) => {
  const [selected, setSelected] = useState();
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const { score, setScore, questions } = useData();

  const checkAnswerHandler = (option) => {
    setSelected(option);
    if (option === correct) {
      setScore(score + 1);
    }
    setError(false);
  };

  const selectHandler = (option) => {
    if (selected === option) return `${classes.select}`;
  };

  const nextQuestionHandler = () => {
    if (currQues > 8) {
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
    <div className={classes.question}>
      <div className={classes.singleQuestion}>
        <h1 style={{ fontSize: "24px" }}>
          {`Q${currQues + 1}.
          ${questions[currQues]?.question}`}
        </h1>
        <div className={classes.options}>
          {error && <Error>{error}</Error>}
          {options &&
            options.map((option) => {
              return (
                <button
                  className={`${classes.singleOption} ${
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
      <div className={classes.controls}>
        <Button
          variant="contained"
          color="error"
          size="large"
          style={{ width: 185 }}
          onClick={quitHandler}
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
          Next
        </Button>
      </div>
    </div>
  );
};

export default Question;
