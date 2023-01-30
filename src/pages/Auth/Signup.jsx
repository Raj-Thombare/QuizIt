import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { useAuth } from "../../context/auth-context";
import Navbar from "../../components/Navbar/Navbar";
import Error from "../../components/Error/Error";

import classes from "./Auth.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { username, setUsername, signup, error, setError } = useAuth();

  const signupHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(email, password);
      navigate("/profile");
    } catch (error) {
      setError(error.message);
    }
    setUsername("");
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Navbar />
      <div className={classes.content}>
        <form className={classes.form} onSubmit={signupHandler}>
          <h1>Create Account</h1>
          {error && <Error>{error}</Error>}
          <div className={classes.textFields}>
            <TextField
              label="Username"
              variant="outlined"
              value={username}
              style={{ marginBottom: 25 }}
              onChange={(e) => setUsername(e.target.value)}
            />
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
              Sign Up
            </Button>
            <p>
              Already a user? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
