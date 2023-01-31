import React from "react";
import { useData } from "../../context/data-context";

import classes from "./Result.module.css";

const Result = () => {
  const { score } = useData();

  return (
    <div className={classes.result}>
      <h2 className={classes.title}>Your score is {score}</h2>
    </div>
  );
};

export default Result;
