import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Button } from "@mui/material";
import Navbar from "../../components/Navbar/Navbar";
import Error from "../../components/Error/Error";
import Categories from "../../adapters/category";
import { useData } from "../../context/data-context";

import classes from "./Home.module.css";

const Home = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");

  const navigate = useNavigate();

  const { fetchQuestions, setScore, error, setError } = useData();

  const handleSubmit = () => {
    if (!category || !difficulty) {
      setError(true);
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
      setScore(0);
    }
  };

  return (
    <>
      <Navbar />
      <div className={classes.content}>
        <div className={classes.settings}>
          <h1>Welcome to QuizIt</h1>
          {error && <Error>Please fill all the fields!</Error>}
          <div className={classes.settings__select}>
            <TextField
              select
              label="Select Category"
              value={category}
              varient="outlined"
              style={{ marginBottom: 30 }}
              onChange={(e) => setCategory(e.target.value)}
            >
              {Categories.map((option) => (
                <MenuItem key={option.category} value={option.value}>
                  {option.category}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              select
              label="Select Difficulty"
              value={difficulty}
              varient="outlined"
              style={{ marginBottom: 30 }}
              onChange={(e) => setDifficulty(e.target.value)}
            >
              <MenuItem key="easy" value="easy">
                Easy
              </MenuItem>
              <MenuItem key="medium" value="medium">
                Medium
              </MenuItem>
              <MenuItem key="hard" value="hard">
                Hard
              </MenuItem>
            </TextField>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Start Quiz
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
