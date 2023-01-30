import { Link } from "react-router-dom";
import { Leaderboard, Person, Home } from "@mui/icons-material";
import { Tooltip, styled, tooltipClasses } from "@mui/material";
import { useAuth } from "../../context/auth-context";

import classes from "./Navbar.module.css";

const Navbar = () => {
  const { user } = useAuth();

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
          {user && (
            <li>
              <LightTooltip title="Profile">
                <Link to="/profile">
                  <Person fontSize="large" />
                </Link>
              </LightTooltip>
            </li>
          )}

          {!user && (
            <li>
              <LightTooltip title="Login">
                <Link to="/login" className={classes["nav-button"]}>
                  Login
                </Link>
              </LightTooltip>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
