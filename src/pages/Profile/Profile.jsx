import { useData } from "../../context/data-context";

const Profile = () => {
  const { name } = useData();
  return <div style={{ fontSize: "18px" }}>Hi, {name}</div>;
};

export default Profile;
