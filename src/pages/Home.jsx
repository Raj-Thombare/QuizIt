import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, MenuItem, Button } from "@mui/material";
import Categories from "../Data/Catergories";
import Error from "../components/Error";

import "./Home.css";

const Home = ({ name, setName }) => {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!name || !category || !difficulty) {
      setError(true);
    } else {
      setError(false);
      navigate("/profile");
    }
  };

  return (
    <div className="content">
      <div className="settings">
        <h1 style={{ marginBottom: "1rem", color: "white" }}>
          Welcome to CrikQuizZ
        </h1>
        {error && <Error>Please fill all the fields!</Error>}

        <div className="settings__select">
          <TextField
            id="outlined-basic"
            label="Enter your name"
            variant="outlined"
            style={{ marginBottom: 25 }}
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            select
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