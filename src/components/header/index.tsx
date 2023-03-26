import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isMobile } from "../../utils";

interface Props {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: Props) => (
  <header>
    {isMobile && (
      <button aria-label="Menu" onClick={onMenuClick}>
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
