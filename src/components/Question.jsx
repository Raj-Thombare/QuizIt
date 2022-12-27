import React from "react";

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
  return (
    <div className="question">
      <h1>Question {currQues + 1} :</h1>
      <div className="singleQuestion">
        <h2>{questions[currQues].question}</h2>
        <div className="options"></div>
      </div>
    </div>
  );
};

export default Question;
