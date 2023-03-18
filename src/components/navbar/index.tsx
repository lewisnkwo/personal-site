import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => (
  <nav className="Navbar" role="navigation" aria-label="Top Navigation">
    <input
      type="search"
      placeholder="Search"
      role="search"
      aria-label="Search"
    />
    <button id="Navbar__settings-icon-button" aria-label="Settings">
      <FontAwesomeIcon icon="cog" />
    </button>
  </nav>
);

export default Navbar;
