import React from "react";
import { TextField, MenuItem } from "@mui/material";
import Categories from "../Data/Catergories";

import "./Home.css";

const Home = () => {
  return (
    <div className="content">
      <div className="settings">
        <h1 style={{ marginBottom: "1rem", color: "black" }}>
          Welcome to Cricket Quiz!
        </h1>
        <div className="settings__select">
          <TextField
            id="outlined-basic"
            label="Enter your name"
            variant="outlined"
            style={{ marginBottom: 25 }}
          />
          <TextField
            id="outlined-basic"
            select
            label="Select Category"
            varient="outlined"
            style={{ marginBottom: 30 }}
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
        </div>
      </div>
    </div>
  );
};

export default Home;
