import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuth } from "../../context/auth-context";
import Navbar from "../../components/Navbar/Navbar";

import classes from "./Profile.module.css";

const Profile = () => {
  const navigate = useNavigate();

  const { user, logout } = useAuth();

  const logoutHandler = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <div>
        <h1>Account</h1>
        <p>User Email: {user && user.email}</p>
        <Button variant="contained" color="primary" onClick={logoutHandler}>
          Logout
        </Button>
      </div>
    </>
  );
};

export default Profile;
