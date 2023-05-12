import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@remix-run/react";

interface Props {
  onMenuClick: () => void;
}

const Header = ({ onMenuClick }: Props) => (
  <header>
    <button id="menu-button" aria-label="Menu" onClick={onMenuClick}>
      <FontAwesomeIcon icon="bars" />
    </button>
    <div className="Header__right">
      <span>Let's get in contact:</span>
      <Link aria-label="Settings" to="mailto:nkwolewis@gmail.com">
        <FontAwesomeIcon icon="message" />
      </Link>
    </div>
  </header>
);

export default Header;
