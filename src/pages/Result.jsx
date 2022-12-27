import React from "react";
import { Button } from "@mui/material";

import "./Result.css";

const Result = ({ score }) => {
  return (
    <div className="result">
      <h2>Your Score: {score}</h2>
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
