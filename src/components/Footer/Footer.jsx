import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      by
      <a
        href="https://therajthombare.netlify.app"
        target="_blank"
        rel="noreferrer"
      >
        Raj Thombare
      </a>
    </div>
  );
};

export default Footer;
