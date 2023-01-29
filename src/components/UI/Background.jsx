import classes from "./Background.module.css";

const Background = ({ children }) => {
  return <div className={classes.background}>{children}</div>;
};

export default Background;
