import { useContext } from "react";
import DataContext from "../context/data-context";

const Profile = () => {
  const { name } = useContext(DataContext);
  return <div>Hi, {name}</div>;
};

export default Profile;
