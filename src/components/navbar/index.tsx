import settings from "../../images/settings.svg";
import "./index.scss";

const Navbar = () => (
  <nav className="Navbar" role="navigation" aria-label="Top Navigation">
    <input
      type="search"
      placeholder="Search"
      role="search"
      aria-label="Search"
    />
    <button id="Navbar__settings-icon-button" aria-label="Settings">
      <img id="Navbar__settings-icon" src={settings} alt="settings-icon" />
    </button>
  </nav>
);

export default Navbar;
