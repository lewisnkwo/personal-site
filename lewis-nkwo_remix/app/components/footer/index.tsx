import "./index.scss";
import react from "../../images/react.svg";
import ts from "../../images/ts.svg";
import sass from "../../images/sass.svg";

const Footer = () => (
  <footer>
    <span>This website has been built with:</span>
    <div className="footer__logo-row">
      <img src={react} alt="React Logo" />
      <img src={ts} alt="Typescript Logo" />
      <img src={sass} alt="Sass Logo" />
    </div>
  </footer>
);

export default Footer;
