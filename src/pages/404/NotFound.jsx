import { Link } from "react-router-dom";

import classes from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={classes.notFound}>
      <h1
        style={{ fontSize: "3rem", marginBottom: "20px", fontWeight: "bolder" }}
      >
        404 - Page Not Found
      </h1>
      <Link to="/">
        <button className={classes.btn}>Return to Home</button>
      </Link>
    </div>
  );
};

export default NotFound;
