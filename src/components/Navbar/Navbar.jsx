import { Link } from "react-router-dom";
import { Leaderboard, Person, Home } from "@mui/icons-material";
import { Tooltip, styled, tooltipClasses } from "@mui/material";
import { useData } from "../../context/data-context";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const { showProfile } = useData();

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
          {!showProfile && (
            <>
              <li>
                <Link to="/" className={classes["nav-button"]}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/" className={classes["nav-button"]}>
                  SignUp
                </Link>
              </li>
            </>
          )}
          {showProfile && (
            <>
              <li>
                <LightTooltip title="Home">
                  <Link to="/">
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
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
