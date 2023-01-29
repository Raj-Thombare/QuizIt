import { useState, useEffect, useContext } from "react";
import { CircularProgress } from "@mui/material";
import Question from "../../components/Question/Question";
import DataContext from "../../context/data-context";
import classes from "./Quiz.module.css";

const Quiz = () => {
  const [options, setOptions] = useState([]);
  const [currQues, setCurrQues] = useState(0);

  const { name, questions, score } = useContext(DataContext);

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correctAnswer,
          ...questions[currQues]?.incorrectAnswers,
        ])
    );
  }, [questions, currQues]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };

  return (
    <div className={classes.quiz}>
      <span className={classes.subtitle}>Welcome, {name}</span>

      {questions ? (
        <>
          <div className={classes.quizInfo}>
            <span className={classes.highlight}>
              {questions[currQues]?.category}
            </span>
            <span className={classes.highlight}>Score: {score}</span>
          </div>
          <Question
            options={options}
            currQues={currQues}
            setCurrQues={setCurrQues}
            correct={questions[currQues]?.correctAnswer}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={50}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
