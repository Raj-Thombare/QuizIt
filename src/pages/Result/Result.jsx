import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import DataContext from "../../context/data-context";

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
    <div className={classes.result}>
      <h2 className={classes.title}>Your Score: {score}</h2>
      <Button
        variant="contained"
        color="primary"
        size="large"
        style={{ alignSelf: "center", marginTop: 20 }}
        href="/"
      >
        Go to homepage
      </Button>
    </div>
  );
};

export default Result;
