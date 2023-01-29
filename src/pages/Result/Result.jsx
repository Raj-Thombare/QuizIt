import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/data-context";
import Navbar from "../../components/Navbar/Navbar";

import classes from "./Result.module.css";

const Result = () => {
  const navigate = useNavigate();

  const { name, score } = useContext(DataContext);

  useEffect(() => {
    if (!name) {
      navigate("/");
    }
  }, [name, navigate]);

  return (
    <>
      <Navbar />
      <div className={classes.result}>
        <h2 className={classes.title}>Your Score: {score}</h2>
      </div>
    </>
  );
};

export default Result;
