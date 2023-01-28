import { useContext } from "react";
import { Link } from "react-router-dom";
import {
  ModeNight,
  Leaderboard,
  Person,
  Home,
  WbSunny,
} from "@mui/icons-material";
import { Tooltip, styled, tooltipClasses } from "@mui/material";
import DataContext from "../../context/data-context";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const { showProfile } = useContext(DataContext);

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
      <Link className={classes.logo} to="/">
        QuizIt.
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
          {showProfile && (
            <li>
              <LightTooltip title="Profile">
                <Link to="/profile">
                  <Person fontSize="large" />
                </Link>
              </LightTooltip>
            </li>
          )}
          <li>
            <LightTooltip title="Dark Mode">
              <ModeNight fontSize="large" />
              {/* <WbSunny fontSize="large" /> */}
            </LightTooltip>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
