import Favorite from "@mui/icons-material/Favorite";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      Made with <Favorite fontSize="small" color="primary" className="heart" />{" "}
      by
      <a href="https://therajthombare.netlify.app">Rakaa</a>
    </div>
  );
};

export default Footer;
