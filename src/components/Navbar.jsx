import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="logo">CrikQuiz</div>
      <nav>
        <ul>
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/quiz">Quiz</NavLink>
          </li>
          <li>
            <NavLink to="/result">Result</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
