import React from "react";
import { Button } from "@mui/material";

const Result = ({ score }) => {
  return (
    <div>
      <h2>Your Score: {score}</h2>
      <Button
        variant="contained"
        color="secondary"
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
