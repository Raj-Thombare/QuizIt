import React from "react";
import { Link } from "react-router-dom";
import ModeNight from "@mui/icons-material/ModeNight";
import WbSunny from "@mui/icons-material/WbSunny";
import Leaderboard from "@mui/icons-material/Leaderboard";
import Person from "@mui/icons-material/Person";
import Home from "@mui/icons-material/Home";
import { Tooltip, styled, tooltipClasses } from "@mui/material";

import "./Navbar.css";

const Navbar = () => {
  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: "rgba(0, 0, 0, 0.87)",
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));
  return (
    <header>
      <Link className="logo" to="/">
        CrikQuiz
      </Link>
      <nav>
        <ul>
          <li>
            <LightTooltip title="Home">
              <Link to="/home">
                <Home fontSize="large" />
              </Link>
            </LightTooltip>
          </li>
          <li>
            <LightTooltip title="Leaderboard">
              <Link to="/leaderboard">
                <Leaderboard fontSize="large" />
              </Link>
            </LightTooltip>
          </li>
          <li>
            <LightTooltip title="Profile">
              <Link to="/profile">
                <Person fontSize="large" />
              </Link>
            </LightTooltip>
          </li>
          <li>
            <LightTooltip title="Dark Mode">
              <Link>
                <ModeNight fontSize="large" />
                {/* <WbSunny fontSize="large" /> */}
              </Link>
            </LightTooltip>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
