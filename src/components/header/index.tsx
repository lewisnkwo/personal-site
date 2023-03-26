import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "../../utils";

const Header = () => (
  <header>
    {isMobile && (
      <button aria-label="Menu">
        <FontAwesomeIcon icon="bars" />
      </button>
    )}
    <>
      <input
        type="search"
        placeholder="Search"
        role="search"
        aria-label="Search"
      />
      <button aria-label="Settings">
        <FontAwesomeIcon icon="cog" />
      </button>
    </>
  </header>
);

export default Header;
