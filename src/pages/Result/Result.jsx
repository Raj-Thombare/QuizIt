import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useData } from "../../context/data-context";
import { addUser } from "../../services";

import classes from "./Result.module.css";

const Result = () => {
  const {
    score,
    name,
    setName,
    category,
    difficulty,
    setCategory,
    setDifficulty,
  } = useData();

  useEffect(() => {
    if (name !== "" && score !== "" && category !== "" && difficulty !== "") {
      (async () => {
        await addUser({
          name: name,
          score: score,
          category: category,
          difficulty: difficulty,
        });
      })();
    }

    setName("");
    setDifficulty("");
    setCategory("");
  }, [name, score, category, difficulty]);

  let content;

  switch (score) {
    case score === 10:
      content = `You are definately a 10`;
      break;
    case score === 9:
      content = `You scored ${score}, just short 1 of 10. maybe try again!`;
      break;
    case score > 5:
      content = `You scored ${score}, don't be an average. try again!`;
      break;
    case score === 0:
      content = `you scored ${score}. can you score that again?`;
      break;

    default:
      content = `Well, you scored something ${score}. maybe try once again!`;
      break;
  }

  return (
    <div className={classes.result}>
      <h2 className={classes.title}>{content}</h2>
      <Button variant="contained" color="primary">
        <Link to="/">Play Again</Link>
      </Button>
    </div>
  );
};

export default Result;
