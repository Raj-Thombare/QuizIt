import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Button } from "@mui/material";
import MainWrapper from "../../components/UI/MainWrapper";
import Navbar from "../../components/Navbar/Navbar";
import Error from "../../components/Error/Error";
import Categories from "../../adapters/category";
import DataContext from "../../context/data-context";

import classes from "./Home.module.css";

const Home = () => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const { fetchQuestions, name, setName, setShowProfile, resetScore } =
    useContext(DataContext);

  const handleSubmit = () => {
    if (!name || !category || !difficulty) {
      setError(true);
    } else {
      setError(false);
      fetchQuestions(category, difficulty);
      navigate("/quiz");
      setShowProfile(true);
      resetScore();
    }
  };

  return (
    <MainWrapper>
      <Navbar />
      <div className={classes.content}>
        <div className={classes.settings}>
          <h1 style={{ padding: "5px 20px", color: "white" }}>
            Welcome to QuizIt
          </h1>
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
    </MainWrapper>
  );
};

export default Home;
