import { useContext } from "react";
import DataContext from "../context/data-context";

const Profile = () => {
  const { name } = useContext(DataContext);
  return <div style={{ fontSize: "18px" }}>Hi, {name}</div>;
};

export default Profile;
