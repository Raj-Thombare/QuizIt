import classes from "./MainWrapper.module.css";

const MainWrapper = ({ children }) => {
  return <div className={classes.wrapper}>{children}</div>;
};

export default MainWrapper;
