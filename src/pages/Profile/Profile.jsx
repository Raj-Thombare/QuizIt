import { useData } from "../../context/data-context";

const Profile = () => {
  const { username } = useData();
  return <div style={{ fontSize: "18px" }}>Hi, {username}</div>;
};

export default Profile;
