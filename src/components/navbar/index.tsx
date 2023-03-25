import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => (
  <nav className="Navbar" role="navigation" aria-label="Top Navigation">
    <button aria-label="Menu">
      <FontAwesomeIcon icon="bars" />
    </button>
    <div>
      <input
        type="search"
        placeholder="Search"
        role="search"
        aria-label="Search"
      />
      <button aria-label="Settings">
        <FontAwesomeIcon icon="cog" />
      </button>
    </div>
  </nav>
);

export default Navbar;
