import { CircularProgress } from "@mui/material";
import { useState, useEffect } from "react";
import Question from "../components/Question";
import "./Quiz.css";

const Quiz = ({ name, questions, score, setScore, setQuestions }) => {
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

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
    <div className="quiz">
      <span className="subtitle">Welcome, {name}</span>

      {questions ? (
        <>
          <div className="quizInfo">
            <span>{questions[currQues].category}</span>
            <span>Score: {score}</span>
          </div>
          <Question
            question={questions}
            setQuestions={setQuestions}
            options={options}
            setOptions={setOptions}
            currQues={currQues}
            setCurrQues={setCurrQues}
            score={score}
            setScore={setScore}
            correct={questions[currQues]?.correctAnswer}
          />
        </>
      ) : (
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
  );
};

export default Quiz;
