import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Button } from "@mui/material";
import Error from "../../components/Error/Error";
import Categories from "../../adapters/category";
import { useData } from "../../context/data-context";

import classes from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  const {
    fetchQuestions,
    setScore,
    error,
    setError,
    name,
    setName,
    difficulty,
    setDifficulty,
    category,
    setCategory,
  } = useData();

  const handleSubmit = () => {
    if (!name || !category || !difficulty) {
      setError(true);
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
      setScore(0);
    }
    setName("");
    setError(false);
  };

  useEffect(() => {
    localStorage.setItem("name", JSON.stringify(name));
    localStorage.setItem("category", JSON.stringify(category));
    localStorage.setItem("difficulty", JSON.stringify(difficulty));
  }, [name, category, difficulty]);

  return (
    <div className={classes.content}>
      <div className={classes.settings}>
        <h1>Welcome to QuizIt</h1>
        {error && <Error>Please fill all the fields!</Error>}
        <div className={classes.settings__select}>
          <TextField
            label="Enter your name"
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            select
            value={category}
            label="Select Category"
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
            value={difficulty}
            label="Select Difficulty"
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
  );
};

export default Home;
