import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button } from "@mui/material";
import { useAuth } from "../../context/auth-context";
import Navbar from "../../components/Navbar/Navbar";
import Error from "../../components/Error/Error";

import classes from "./Auth.module.css";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const { signupUserHandler } = useAuth();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signupUserHandler(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Navbar />
      <div className={classes.content}>
        <form className={classes.form} onSubmit={submitHandler}>
          <h1>Sign Up</h1>
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
              Sign Up
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
