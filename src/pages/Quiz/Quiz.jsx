import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Question from "../../components/Question/Question";
import { useData } from "../../context/data-context";
import classes from "./Quiz.module.css";

const Quiz = () => {
  const [currQues, setCurrQues] = useState(0);

  const { name, questions, error } = useData();

  let content;

  if (error) {
    content = <p>{error}</p>;
  } else {
    content = (
      <>
        <span className={classes.subtitle}>Welcome, {name}</span>
        {questions ? (
          <Question
            options={questions[currQues]?.options}
            currQues={currQues}
            setCurrQues={setCurrQues}
            correct={questions[currQues]?.answer}
          />
        ) : (
          <CircularProgress
            style={{ margin: 100 }}
            color="inherit"
            size={50}
            thickness={1}
          />
        )}
      </>
    );
  }

  return <div className={classes.quiz}>{content}</div>;
};

export default Quiz;
