import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { useAuth } from "../../context/auth-context";
import { useData } from "../../context/data-context";
import Error from "../../components/Error/Error";

import classes from "./Auth.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { login, error, setError } = useAuth();
  const { name } = useData();

  const loginHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(email, password);
      if (name) {
        navigate("/quiz");
      } else {
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className={classes.content}>
      <form className={classes.form} onSubmit={loginHandler}>
        <h1>Login</h1>
        {error && <Error>{error}</Error>}
        <div className={classes.textFields}>
          <TextField
            label="Enter your email"
            variant="outlined"
            value={email}
            style={{ marginBottom: 25 }}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Enter your password"
            variant="outlined"
            value={password}
            style={{ marginBottom: 25 }}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit">
            Login
          </Button>
          <p>
            New user? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
