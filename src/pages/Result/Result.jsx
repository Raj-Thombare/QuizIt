import React from "react";
import { useData } from "../../context/data-context";
import Navbar from "../../components/Navbar/Navbar";

import classes from "./Result.module.css";

const Result = () => {
  const { name, score } = useData();

  return (
    <>
      <Navbar />
      <div className={classes.result}>
        <h2 className={classes.title}>
          {name} Scored {score}
        </h2>
      </div>
    </>
  );
};

export default Result;
